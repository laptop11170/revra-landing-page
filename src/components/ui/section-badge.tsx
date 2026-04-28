import React from 'react';

interface Props {
    title: string;
}

const SectionBadge = ({ title }: Props) => {
    return (
        <div className="px-2.5 py-1 rounded-full bg-neutral-800 flex items-center justify-center gap-2">
            <div className="relative flex items-center justify-center">
                <div className="absolute w-3 h-3 rounded-full bg-primary/30 animate-ping"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            </div>
            <span className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
                {title}
            </span>
        </div>
    )
};

export default SectionBadge
