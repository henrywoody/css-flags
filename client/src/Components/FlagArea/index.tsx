import React from "react";
import { Heading, HeadingLevelType } from "../Heading";
import { titleToKebabCase } from "../../Utilities";
import "./style.css";

export type FlagAreaProps = {
    title: string;
    flagName?: string;
    headingLevel?: HeadingLevelType;
    children?: React.ReactNode;
}

export function FlagArea({ title, flagName, headingLevel = 2, children }: FlagAreaProps) {
    return (
        <div className={ `flag-area flag-area-${titleToKebabCase(title)} viewport` }>
            <div className="heading">
                <Heading level={ headingLevel! } className="title">{ title }</Heading>

                { !!flagName && (
                    <h3 className="flag-name">{ flagName }</h3>
                )}
            </div>

            <div className="flag-container">
                <div className={ `flag flag-${titleToKebabCase(title)}` }/>
            </div>

            { !!children && (
                <div className="flag-description">
                    { children }
                </div>
            )}
        </div>
    )
}
