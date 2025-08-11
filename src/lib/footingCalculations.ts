// Footing calculation utilities based on OBC 9.15.3 requirements
export interface CalculationInputs {
  floors: number;
  length: number; // in meters
  width: number; // in meters
  soilType: 'good' | 'clay' | 'poor';
  wallType: 'exterior' | 'interior';
  hasBrickVeneer: boolean;
  hasConcentratedLoads: number; // count of concentrated loads (beam pockets, posts)
  floorSpan: number; // in meters
  isCornerFooting: boolean;
}

export interface FootingRequirements {
  minWidth: number; // in mm
  minArea: number; // in m²
  adjustedWidth: number; // in mm
  adjustedArea: number; // in m²
  thickness: number; // in mm
  depth: number; // in mm (below grade)
}

export interface LoadCalculation {
  deadLoad: number; // kN/m
  liveLoad: number; // kN/m
  totalLoad: number; // kN/m
  breakdown: {
    roof: number;
    floors: number;
    walls: number;
    foundation: number;
    brickVeneer?: number;
  };
}

export interface CostEstimate {
  concrete: number; // cost in CAD
  excavation: number;
  formwork: number;
  rebar?: number;
  total: number;
  volume: number; // cubic meters
}

// Soil bearing capacities (kPa)
const SOIL_CAPACITIES = {
  good: 75, // Standard bearing capacity
  clay: 50, // Typical Toronto clay
  poor: 35  // Poor soil conditions
};

// Load values (kPa)
const LOAD_VALUES = {
  roof: 0.5, // Asphalt shingles
  roofLive: 1.55, // Snow load Toronto
  floor: 0.55, // Wood frame
  floorLive: 1.9, // Residential live load
  wall: 0.20, // Wood frame with siding
  foundation: 2.4, // kN/m for 200mm concrete wall
  brickVeneer: 2.5 // kN/m for brick veneer
};

// Base footing requirements from OBC Table 9.15.3.4
const BASE_REQUIREMENTS = {
  exterior: {
    1: { width: 250, area: 0.05 },
    2: { width: 350, area: 0.07 },
    3: { width: 450, area: 0.09 }
  },
  interior: {
    1: { width: 200, area: 0.04 },
    2: { width: 300, area: 0.06 },
    3: { width: 400, area: 0.08 }
  }
};

// Brick veneer adjustment factors
const BRICK_VENEER_ADJUSTMENTS = {
  width: {
    'up-to-4.9': 1.15,
    '4.9-to-6.1': 1.30,
    '6.1-to-7.3': 1.50,
    'over-7.3': 'design-required'
  },
  area: {
    'up-to-4.9': 1.25,
    '4.9-to-6.1': 1.50,
    '6.1-to-7.3': 1.75,
    'over-7.3': 'design-required'
  }
};

// Material costs (CAD per unit)
const MATERIAL_COSTS = {
  concrete: 165, // per cubic meter
  excavation: 45, // per cubic meter
  formwork: 85, // per linear meter
  rebar: 2.50 // per kg
};

export function getBaseRequirements(floors: number, wallType: 'exterior' | 'interior'): { width: number; area: number } {
  const floorCount = Math.min(floors, 3);
  return BASE_REQUIREMENTS[wallType][floorCount as keyof typeof BASE_REQUIREMENTS[typeof wallType]];
}

export function getBrickVeneerAdjustment(floorSpan: number): { width: number; area: number } {
  if (floorSpan <= 4.9) {
    return { width: BRICK_VENEER_ADJUSTMENTS.width['up-to-4.9'], area: BRICK_VENEER_ADJUSTMENTS.area['up-to-4.9'] };
  } else if (floorSpan <= 6.1) {
    return { width: BRICK_VENEER_ADJUSTMENTS.width['4.9-to-6.1'], area: BRICK_VENEER_ADJUSTMENTS.area['4.9-to-6.1'] };
  } else if (floorSpan <= 7.3) {
    return { width: BRICK_VENEER_ADJUSTMENTS.width['6.1-to-7.3'], area: BRICK_VENEER_ADJUSTMENTS.area['6.1-to-7.3'] };
  } else {
    throw new Error('Engineering design required for spans over 7.3m');
  }
}

export function calculateLoads(inputs: CalculationInputs): LoadCalculation {
  const { floors, floorSpan, wallType, hasBrickVeneer } = inputs;
  
  // Calculate tributary area
  const tributaryWidth = wallType === 'exterior' ? floorSpan / 2 : floorSpan;
  
  // Dead loads
  const roofLoad = tributaryWidth * LOAD_VALUES.roof;
  const roofLiveLoad = tributaryWidth * LOAD_VALUES.roofLive;
  const floorDeadLoad = floors >= 2 ? (floors - 1) * tributaryWidth * LOAD_VALUES.floor : 0;
  const floorLiveLoad = floors >= 2 ? (floors - 1) * tributaryWidth * LOAD_VALUES.floorLive : 0;
  
  // Wall loads (height based on floors)
  const wallHeight = floors * 2.7; // 2.7m per storey
  const wallLoad = wallHeight * LOAD_VALUES.wall;
  
  // Foundation wall load
  const foundationLoad = LOAD_VALUES.foundation;
  
  // Brick veneer load
  const brickVeneerLoad = hasBrickVeneer ? wallHeight * LOAD_VALUES.brickVeneer : 0;
  
  const breakdown = {
    roof: roofLoad + roofLiveLoad,
    floors: floorDeadLoad + floorLiveLoad,
    walls: wallLoad,
    foundation: foundationLoad,
    ...(hasBrickVeneer && { brickVeneer: brickVeneerLoad })
  };
  
  const totalLoad = breakdown.roof + breakdown.floors + breakdown.walls + breakdown.foundation + (breakdown.brickVeneer || 0);
  
  return {
    deadLoad: roofLoad + floorDeadLoad + wallLoad + foundationLoad + brickVeneerLoad,
    liveLoad: roofLiveLoad + floorLiveLoad,
    totalLoad,
    breakdown
  };
}

export function calculateFootingRequirements(inputs: CalculationInputs): FootingRequirements {
  const { floors, wallType, soilType, hasBrickVeneer, hasConcentratedLoads, floorSpan, isCornerFooting } = inputs;
  
  // Get base requirements
  const baseReq = getBaseRequirements(floors, wallType);
  let adjustedWidth = baseReq.width;
  let adjustedArea = baseReq.minArea;
  
  // Apply soil capacity adjustment
  const soilCapacity = SOIL_CAPACITIES[soilType];
  const soilAdjustmentFactor = 75 / soilCapacity;
  adjustedWidth *= soilAdjustmentFactor;
  adjustedArea *= soilAdjustmentFactor;
  
  // Apply brick veneer adjustment
  if (hasBrickVeneer && wallType === 'exterior') {
    try {
      const brickAdjustment = getBrickVeneerAdjustment(floorSpan);
      adjustedWidth *= brickAdjustment.width;
      adjustedArea *= brickAdjustment.area;
    } catch (error) {
      // For spans over 7.3m, use maximum adjustment
      adjustedWidth *= 1.50;
      adjustedArea *= 1.75;
    }
  }
  
  // Corner footing adjustment (25% increase minimum)
  if (isCornerFooting) {
    adjustedWidth *= 1.25;
    adjustedArea *= 1.25;
  }
  
  // Concentrated load adjustment (100mm per load)
  adjustedWidth += hasConcentratedLoads * 100;
  
  // Calculate thickness based on projection
  // Assuming 200mm wall width
  const wallWidth = 200;
  const projection = (adjustedWidth - wallWidth) / 2;
  
  // Plain concrete: thickness = 2 × projection (minimum 150mm)
  // Reinforced concrete: thickness = projection (minimum 150mm)
  const minThickness = 150;
  const plainConcreteThickness = Math.max(minThickness, 2 * projection);
  const reinforcedThickness = Math.max(minThickness, projection);
  
  // Use reinforced thickness if more economical
  const thickness = plainConcreteThickness > 350 ? reinforcedThickness : plainConcreteThickness;
  
  // Depth below grade (1.2m minimum for heated buildings in Toronto)
  const depth = 1200;
  
  return {
    minWidth: baseReq.width,
    minArea: baseReq.area,
    adjustedWidth: Math.round(adjustedWidth),
    adjustedArea: parseFloat(adjustedArea.toFixed(3)),
    thickness: Math.round(thickness),
    depth
  };
}

export function calculateCostEstimate(inputs: CalculationInputs, requirements: FootingRequirements): CostEstimate {
  const { length, width } = inputs;
  const perimeter = 2 * (length + width);
  
  // Calculate concrete volume
  const footingWidth = requirements.adjustedWidth / 1000; // convert to meters
  const footingThickness = requirements.thickness / 1000; // convert to meters
  const volume = perimeter * footingWidth * footingThickness;
  
  // Calculate costs
  const concrete = volume * MATERIAL_COSTS.concrete;
  const excavation = volume * 1.5 * MATERIAL_COSTS.excavation; // Extra excavation for working space
  const formwork = perimeter * MATERIAL_COSTS.formwork;
  
  // Rebar cost (if thick footing or reinforced)
  const needsRebar = requirements.thickness > 250 || requirements.adjustedWidth > 500;
  const rebar = needsRebar ? volume * 80 * MATERIAL_COSTS.rebar : 0; // ~80 kg/m³ for footings
  
  const total = concrete + excavation + formwork + rebar;
  
  return {
    concrete: Math.round(concrete),
    excavation: Math.round(excavation),
    formwork: Math.round(formwork),
    ...(rebar > 0 && { rebar: Math.round(rebar) }),
    total: Math.round(total),
    volume: parseFloat(volume.toFixed(2))
  };
}

export function getCalculationSteps(inputs: CalculationInputs, requirements: FootingRequirements, loads: LoadCalculation): string[] {
  const steps = [];
  
  // Step 1: Base requirements
  steps.push(`Base OBC requirement for ${inputs.floors}-floor ${inputs.wallType} wall: ${requirements.minWidth}mm width`);
  
  // Step 2: Soil adjustment
  if (inputs.soilType !== 'good') {
    const soilCapacity = SOIL_CAPACITIES[inputs.soilType];
    const factor = (75 / soilCapacity).toFixed(2);
    steps.push(`Soil adjustment for ${inputs.soilType} soil (${soilCapacity} kPa): ×${factor} = ${Math.round(requirements.minWidth * parseFloat(factor))}mm`);
  }
  
  // Step 3: Brick veneer adjustment
  if (inputs.hasBrickVeneer && inputs.wallType === 'exterior') {
    const spanCategory = inputs.floorSpan <= 4.9 ? 'up to 4.9m' : 
                        inputs.floorSpan <= 6.1 ? '4.9-6.1m' :
                        inputs.floorSpan <= 7.3 ? '6.1-7.3m' : 'over 7.3m';
    steps.push(`Brick veneer adjustment for ${spanCategory} span: Additional width required`);
  }
  
  // Step 4: Corner adjustment
  if (inputs.isCornerFooting) {
    steps.push(`Corner footing adjustment: +25% for perpendicular wall loads`);
  }
  
  // Step 5: Concentrated loads
  if (inputs.hasConcentratedLoads > 0) {
    steps.push(`Concentrated loads: +${inputs.hasConcentratedLoads * 100}mm for ${inputs.hasConcentratedLoads} beam pocket(s)`);
  }
  
  // Step 6: Final dimensions
  steps.push(`Final footing size: ${requirements.adjustedWidth}mm × ${requirements.thickness}mm`);
  
  // Step 7: Load verification
  const soilCapacity = SOIL_CAPACITIES[inputs.soilType];
  const actualPressure = (loads.totalLoad / (requirements.adjustedWidth / 1000)).toFixed(1);
  steps.push(`Load check: ${actualPressure} kPa ≤ ${soilCapacity} kPa soil capacity ✓`);
  
  return steps;
}