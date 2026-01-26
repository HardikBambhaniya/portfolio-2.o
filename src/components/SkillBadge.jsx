import { cn } from "@/lib/utils"

function SkillBadge({
  as: Comp = "div",
  href,
  children,
  className,
  ...props
}) {
  return (
    <Comp
      href={Comp === "a" ? href : undefined}
      className={cn(
        "inline-flex items-center text-sm bg-white/10 border border-dashed border-white/20 py-1 px-2 rounded-md skill-inner-shadow text-white",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export default SkillBadge
