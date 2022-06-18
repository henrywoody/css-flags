import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";

export function Latvia() {
    return (
        <FlagArea title="Latvia">
            <DescriptionSection title="Description">
                <p>
                    The national flag of Latvia (Latvian: <em>Latvijas karogs</em>) was used by independent Latvia from
                    1918 until the country was occupied by the Soviet Union in 1940. Its use was suppressed during
                    Soviet rule. On 27 February 1990, shortly before the country regained its independence, the Latvian
                    government re-adopted the traditional red-white-red flag. (Source:{" "}
                    <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Latvia">Wikipedia</ExternalLink>)
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
                        <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Latvia">
                            "Flag of Latvia"
                        </ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    );
}
