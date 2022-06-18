import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";

export function Colombia() {
    return (
        <FlagArea title="Colombia" flagName="Tricolor Nacional (National Tricolor)">
            <DescriptionSection title="Description">
                <p>
                    The national flag of Colombia symbolizes Colombian independence from Spain, gained on July 20,
                    1810.[1] It is a horizontal tricolor of yellow, blue and red. The yellow stripe takes up a half of
                    the flag and the blue and red take up a quarter of the space each. (Source:{" "}
                    <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Colombia">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a <code>linear-gradient</code>.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Wikipedia:{" "}
                        <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Colombia">
                            "Flag of Colombia"
                        </ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    );
}
