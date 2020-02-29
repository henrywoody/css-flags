import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Palestine: React.FC = () => {
    return (
        <FlagArea title="Palestine">
            <DescriptionSection title="Description">
                <p>
                    The Palestinian flag (Arabic: علم فلسطين‎) is a tricolor of three equal horizontal stripes (black, white, and green from top to bottom) overlaid by a red triangle issuing from the hoist. This flag is derived from the Pan-Arab colors and is used to represent the State of Palestine and the Palestinian people. It was first adopted on 28 May 1964 by the Palestinian Liberation Organization. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Palestine">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a <code>linear-gradient</code> for the background and a <code>conic-gradient</code> for the red triangle.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Palestine">"Flag of Palestine"</ExternalLink>
                    </li>
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/palestine_flag.html">"Palestine"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default Palestine;
