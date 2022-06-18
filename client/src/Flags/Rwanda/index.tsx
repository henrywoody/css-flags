import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";

export function Rwanda() {
    return (
        <FlagArea title="Rwanda">
            <DescriptionSection title="Description">
                <p>
                    The flag of Rwanda (Kinyarwanda: <em>ibendera ry'Urwanda</em>) was adopted on October 25, 2001.
                </p>

                <p>
                    The flag has three colours: blue, green and yellow. The blue band represents happiness and peace,
                    the yellow band symbolizes economic development, and the green band symbolizes the hope of
                    prosperity. The yellow sun represents enlightenment. (Source:{" "}
                    <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Rwanda">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    The tricolor was created with a <code>linear-gradient</code> and the sun was created with two{" "}
                    <code>radial-gradient</code>s for the center and 24 <code>conic-gradient</code>s for the rays.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Scheme Color:{" "}
                        <ExternalLink href="https://www.schemecolor.com/rwanda-flag-colors.php">
                            "Rwanda Flag Colors"
                        </ExternalLink>
                    </li>
                    <li>
                        Vexilla Mundi:{" "}
                        <ExternalLink href="http://www.vexilla-mundi.com/rwanda_flag.html">"Rwanda"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia:{" "}
                        <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Rwanda">
                            "Flag of Rwanda"
                        </ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    );
}
