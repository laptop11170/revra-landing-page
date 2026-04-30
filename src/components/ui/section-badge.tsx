"use client";

import { useTheme } from "@/context/theme-provider";
import { cn } from "@/lib";

interface Props {
    title: string;
}

const SectionBadge = ({ title }: Props) => {
    const { theme } = useTheme();

    return (
        <div className={cn(
            "px-2.5 py-1 rounded-full flex items-center justify-center gap-2",
            theme === "dark"
                ? "bg-neutral-800"
                : "bg-neutral-200"
        )}>
            <div className="relative flex items-center justify-center">
                <div className="absolute w-3 h-3 rounded-full bg-primary/30 animate-ping"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            </div>
            <span className={cn(
                "text-xs font-medium text-transparent bg-clip-text",
                theme === "dark"
                    ? "bg-gradient-to-r from-primary to-orange-300"
                    : "bg-gradient-to-r from-primary to-secondary"
            )}>
                {title}
            </span>
        </div>
    )
}

export default SectionBadge
