import React from "react";
import Heading, { HeadingLevelType } from "../Heading";
import { titleToKebabCase } from "../../Modules/string-utils";
import "./style.css";


type FlagAreaProps = {
    title: string;
    flagName?: string;
    headingLevel?: HeadingLevelType;
}


const FlagArea: React.FC<FlagAreaProps> = ({ title, flagName, headingLevel, children }) => {
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

FlagArea.defaultProps = {
    headingLevel: 2 as HeadingLevelType,
}

export default FlagArea;
