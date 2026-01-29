import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";

export default function IconTooltip({
    href,
    label,
    children,offset = 6,
}) {
    return(<Tooltip>
        <TooltipTrigger asChild>
            <a href={href}
            target="_blank"
             rel="noopener noreferrer"
          className="inline-flex items-center"
            >
                {children}
            </a>
        </TooltipTrigger>

<TooltipContent side = "top" sideOffset={offset}>
    {label}
</TooltipContent>

    </Tooltip>)
}