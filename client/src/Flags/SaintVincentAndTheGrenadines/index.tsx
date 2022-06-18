import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";

export function SaintVincentAndTheGrenadines() {
    return (
        <FlagArea title="Saint Vincent and the Grenadines">
            <DescriptionSection title="Description">
                <p>
                    The flag of Saint Vincent and the Grenadines was adopted on 21 October 1985. It is composed of a
                    vertical tricolour of blue, gold (double width) and green with three green diamonds arranged in the
                    V pattern centred on the gold band, standing for 'Vincent'. These diamonds recall Saint Vincent as
                    the "gems of the Antilles". Blue represents the tropical sky and the crystal waters, yellow stands
                    for the golden Grenadine sands, and green stands for the islands' lush vegetation. (Source:{" "}
                    <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Saint_Vincent_and_the_Grenadines">
                        Wikipedia
                    </ExternalLink>
                    )
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Creating the vertical bands on the sides of the flag was done simply with a{" "}
                    <code>linear-gradient</code>, and the yellow in the middle is set via the{" "}
                    <code>background-color</code> property.
                </p>

                <p>
                    To create the diamond pattern in the middle, two <code>conic-gradient</code>s were used to create a
                    "V" of green. Then two <code>linear-gradient</code>s were overlayed to create separations between
                    the individual diamonds.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi:{" "}
                        <ExternalLink href="http://www.vexilla-mundi.com/saint_vincent_and_the_grenadines_flag.html">
                            "Saint Vincent and the Grenadines"
                        </ExternalLink>
                    </li>
                    <li>
                        Wikipedia:{" "}
                        <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Saint_Vincent_and_the_Grenadines">
                            "Flag of Saint Vincent and the Grenadines"
                        </ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    );
}
