import { PROJECT_STATUS } from "@/data/projectStatus"
import { cn } from "@/lib/utils"

export default function ProjectStatusBadge({ status }) {
  const config = PROJECT_STATUS[status]
  if (!config) return null

  return (
    <span
      className={cn(
        "relative status",
        config.className
      )}
    >
      {config.label}
    </span>
  )
}
