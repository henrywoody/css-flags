import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";


export function EastTimor() {
    return (
        <FlagArea title="East Timor">
            <DescriptionSection title="Description">
                <p>
                    The national flag of East Timor (Portuguese: <em>Bandeira de Timor-Leste</em>) is one of the official symbols of East Timor. It consists of a red field with the black isosceles triangle based on the hoist-side bearing a white five-pointed star in the center superimposed on the larger yellow triangle, also based on the hoist-side, that extends to the center of the flag. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_East_Timor">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a red <code>background-color</code>, a <code>conic-gradient</code> for each of the triangles on the hoist, and six <code>conic-gradient</code>s to form the star.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/timor_leste_flag.html">"Timor Leste"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_East_Timor">"Flag of East Timor"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

