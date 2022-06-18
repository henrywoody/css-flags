import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";

export function SaintLucia() {
    return (
        <FlagArea title="Saint Lucia">
            <DescriptionSection title="Description">
                <p>
                    The flag of Saint Lucia consists of a cerulean blue field charged with a yellow triangle in front of
                    a white-edged black isosceles triangle. Adopted in 1967 to replace the British Blue Ensign defaced
                    with the arms of the colony, it has been the flag of Saint Lucia since the country became an
                    associated state of the United Kingdom that year. Although the overall design of the flag has
                    remained unchanged, specific aspects of it have been altered over the years. (Source:{" "}
                    <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Saint_Lucia">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a blue <code>background-color</code> and a <code>conic-gradient</code> for each of the
                    three triangles.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Scheme Color:{" "}
                        <ExternalLink href="https://www.schemecolor.com/saint-lucia-flag-colors.php">
                            "Saint Lucia Flag Colors"
                        </ExternalLink>
                    </li>
                    <li>
                        Vexilla Mundi:{" "}
                        <ExternalLink href="http://www.vexilla-mundi.com/saint_lucia_flag.html">
                            "Saint Lucia"
                        </ExternalLink>
                    </li>
                    <li>
                        Wikipedia:{" "}
                        <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Saint_Lucia">
                            "Flag of Saint Lucia"
                        </ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    );
}
