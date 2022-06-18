import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";

export function Jamaica() {
    return (
        <FlagArea title="Jamaica" flagName="The Cross">
            <DescriptionSection title="Description">
                <p>
                    The flag of Jamaica was adopted on 6 August 1962 (Jamaican Independence Day), the country having
                    gained independence from the British-protected Federation of the West Indies. The flag consists of a
                    gold saltire, which divides the flag into four sections: two of them green (top and bottom) and two
                    black (hoist and fly). The Jamaican flag is the only national flag in the world not to feature the
                    colours red, white, or blue. (Source:{" "}
                    <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Jamaica">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    The background colors (black and green) were set with a <code>repeating-conic-gradient</code>. The
                    gold saltire was created by overlaying two <code>linear-gradient</code>s.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi:{" "}
                        <ExternalLink href="http://www.vexilla-mundi.com/jamaica_flag.html">"Jamaica"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia:{" "}
                        <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Jamaica">
                            "Flag of Jamaica"
                        </ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    );
}
