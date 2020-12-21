import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const AntiguaAndBarbuda: React.FC = () => {
    return (
        <FlagArea title="Antigua and Barbuda">
            <DescriptionSection title="Description">
                <p>
                    The national flag of Antigua and Barbuda was adopted on 27 February 1967 to mark the achievement of self-government. A competition to design the flag was held in which more than 600 local people entered. The winning design was put forth by nationally well-known artist and sculptor Sir Reginald Samuel.
                </p>

                <p>
                    The design is a red field with an inverted isosceles triangle based on the top edge of the field pointed toward the bottom edge of the field bearing the horizontal tricolour of black, light blue (half width) and white with the rising sun centred on top of the black band. The rising sun symbolises the dawning of a new era. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Antigua_and_Barbuda">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    The red field was created with a <code>conic-gradient</code>, the tricolor with a <code>linear-gradient</code>, and the sun with 9 <code>conic-gradient</code>s.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Scheme Color: <ExternalLink href="https://www.schemecolor.com/antigua-flag-colors.php">"Antigua Flag Colors"</ExternalLink>
                    </li>
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/antigua_and_barbuda_flag.html">"Antigua and Barbuda"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Antigua_and_Barbuda">"Flag of Antigua and Barbuda"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default AntiguaAndBarbuda;
