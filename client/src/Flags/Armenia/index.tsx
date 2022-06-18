import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";

export function Armenia() {
    return (
        <FlagArea title="Armenia" flagName="Եռագույն (Tricolor)">
            <DescriptionSection title="Description">
                <p>
                    The national flag of Armenia, the Armenian Tricolour, consists of three horizontal bands of equal
                    width, red on the top, blue in the middle, and apricot on the bottom. The Armenian Supreme Soviet
                    adopted the current flag on 24 August 1990. On 15 June 2006, the Law on the National Flag of
                    Armenia, governing its usage, was passed by the National Assembly of Armenia. (Source:{" "}
                    <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Armenia">Wikipedia</ExternalLink>)
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
                        <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Armenia">
                            "Flag of Armenia"
                        </ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    );
}
