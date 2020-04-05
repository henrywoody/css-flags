import React from "react";


export type HeadingLevelType = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = {
    level: HeadingLevelType;
    className?: string;
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";


const Heading: React.FC<HeadingProps> = ({ level, className, children }) => {
    const HComponent = `h${level}` as HeadingTag;

    return (
        <HComponent className={ className }>{ children }</HComponent>
    )
}

export default Heading;
