import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Suriname: React.FC = () => {
    return (
        <FlagArea title="Suriname">
            <DescriptionSection title="Description">
                <p>
                    The flag of Suriname is formed by five horizontal bands of green (top, double width), white, red (quadruple width), white, and green (double width). There is a large, yellow, five-pointed star centered in the red band. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Suriname">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    The background was formed with a <code>linear-gradient</code>.
                    The star was formed with four <code>conic-gradient</code>s, one for the top and bottom points of the star, one to make the indent at the bottom, and one for each of the side points.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/suriname_flag.html">"Suriname"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Suriname">"Flag of Suriname"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default Suriname;
