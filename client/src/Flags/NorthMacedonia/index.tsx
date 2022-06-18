import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";

export function NorthMacedonia() {
    return (
        <FlagArea title="North Macedonia">
            <DescriptionSection title="Description">
                <p>
                    The flag of North Macedonia is the national flag of the Republic of North Macedonia and depicts a
                    stylized yellow sun on a red field, with eight broadening rays extending from the center to the edge
                    of the field. It was created by Miroslav Grčev and was adopted on 5 October 1995. The first flag of
                    the country, known as the Vergina Flag, featured the Vergina Sun, a symbol that had been discovered
                    at Aigai, the first capital and burial ground of the ancient kings of Macedon. Greece considers the
                    Vergina Sun to be a Greek symbol and imposed a year-long economic embargo in order to force the then
                    Republic of Macedonia to remove it from its flag, resulting in the current design. The new
                    eight-rayed sun represents the "new sun of Liberty" referred to in "Denes nad Makedonija", the
                    national anthem of North Macedonia. (Source:{" "}
                    <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_North_Macedonia">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a red <code>background-color</code>, a <code>conic-gradient</code> for each of the
                    rays, and a <code>radial-gradient</code> for the sun in the center.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Wikipedia:{" "}
                        <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_North_Macedonia">
                            "Flag of North Macedonia"
                        </ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    );
}
