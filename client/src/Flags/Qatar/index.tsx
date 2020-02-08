import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Qatar: React.FC = () => {
    return (
        <FlagArea title="Qatar" flagName="Al-Adaam">
            <DescriptionSection title="Description">
                <p>
                    The national flag of Qatar (Arabic: علم قطر) is in the ratio of 11:28. It is maroon with a broad white serrated band (nine white points) on the hoist side. It was adopted shortly before the country's declaration of independence from Britain on 3 September 1971. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Qatar">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    The solid white and maroon colors were created with a <code>linear-gradient</code>.
                    The points along the serrated band were created each with two <code>linear-gradient</code>s (one for each side of the point) and repeating vertically.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Qatar">"Flag of Qatar"</ExternalLink>
                    </li>
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/qatar_flag.html">"Qatar"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default Qatar;
