import React from "react";
import { titleToKebabCase } from "../../Modules/string-utils";
import "./style.css";


type FlagAreaProps = {
    title: string;
    flagComponents?: React.ReactElement[],
}

const FlagArea: React.FC<FlagAreaProps> = ({ title, flagComponents }) => {
    return (
        <div className={ `flag-area flag-area-${titleToKebabCase(title)} viewport` }>
            <h2>{ title }</h2>

            <div className="flag-container">
                <div className="flag">
                    { flagComponents }
                </div>
            </div>
        </div>
    )
}

export default FlagArea;
