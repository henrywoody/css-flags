import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const SouthAfrica: React.FC = () => {
    return (
        <FlagArea title="South Africa">
            <DescriptionSection title="Description">
                <p>
                    The flag of South Africa was designed in March 1994 and adopted on 27 April 1994, at the beginning of South Africa's 1994 general election, to replace the flag that had been used since 1928. The new national flag, designed by the then State Herald of South Africa Frederick Brownell, was chosen to represent the country's new democracy after the end of apartheid. (Source <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_South_Africa">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    The horizontal red, white, and blue stripes were created with a <code>linear-gradient</code>, then overlayed with the white triangle (using a <code>conic-gradient</code>), followed by the green triangle, then overlayed with a <code>linear-gradient</code> for the green stripe, and finally two <code>conic-gradient</code>s for the gold and black triangles.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/south_africa_flag.html">"South Africa"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_South_Africa">"Flag of South Africa"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default SouthAfrica;
