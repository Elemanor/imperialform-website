import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  className?: string
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ title, children, className }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
      <div ref={ref} className={cn("border-b border-brand-line", className)}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between py-4 text-left hover:bg-brand-muted/50 px-1 transition-colors"
          aria-expanded={isOpen}
        >
          <span className="text-base font-medium">{title}</span>
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </button>
        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="px-1 text-gray-600">{children}</div>
        </div>
      </div>
    )
  }
)
AccordionItem.displayName = "AccordionItem"

interface AccordionProps {
  children: React.ReactNode
  className?: string
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={cn("divide-y divide-brand-line", className)}>
        {children}
      </div>
    )
  }
)
Accordion.displayName = "Accordion"

export { Accordion, AccordionItem }