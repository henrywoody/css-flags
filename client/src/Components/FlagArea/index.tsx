import React from "react";
import { titleToKebabCase } from "../../Modules/string-utils";
import "./style.css";


type FlagAreaProps = {
    title: string;
    flagName?: string;
}


const FlagArea: React.FC<FlagAreaProps> = ({ title, flagName, children }) => {
    return (
        <div className={ `flag-area flag-area-${titleToKebabCase(title)} viewport` }>
            <div className="heading">
                <h2 className="title">{ title }</h2>

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

export default FlagArea;
