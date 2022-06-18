import React from "react";

export type HeadingLevelType = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = {
    level: HeadingLevelType;
    className?: string;
    children?: React.ReactNode;
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export function Heading({ level, className, children }: HeadingProps) {
    const HComponent = `h${level}` as HeadingTag;

    return (
        <HComponent className={ className }>{ children }</HComponent>
    )
}
