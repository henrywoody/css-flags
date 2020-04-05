import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Guyana: React.FC = () => {
    return (
        <FlagArea title="Guyana" flagName="The Golden Arrowhead">
            <DescriptionSection title="Description">
                <p>
                    The flag of Guyana, known as The Golden Arrowhead, has been the national flag of Guyana since May 1966 when the country became independent from the United Kingdom. It was designed by Whitney Smith, an American vexillologist (though originally without the black and white fimbriations, which were later additions suggested by the College of Arms in the United Kingdom). The proportions of the national flag are 3:5. The colours are symbolic, with red for zeal and dynamism, gold for mineral wealth, green for agriculture and forests, black for endurance, and white for rivers and water. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Guyana">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a green <code>background-color</code> and a <code>conic-gradient</code> for each of the four triangles.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Scheme Color: <ExternalLink href="https://www.schemecolor.com/guyana-flag-colors.php">"Guyana Flag Colors"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Guyana">"Flag of Guyana"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default Guyana;
