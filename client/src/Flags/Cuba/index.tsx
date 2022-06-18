import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";

export function Cuba() {
    return (
        <FlagArea title="Cuba">
            <DescriptionSection title="Description">
                <p>
                    The national flag of Cuba (Spanish: Bandera de Cuba) consists of five alternating stripes (three
                    blue and two white) and a red equilateral triangle at the hoist, within which is a white
                    five-pointed star. It was designed in 1849 and officially adopted May 20, 1902. (Source:{" "}
                    <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Cuba">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a <code>repeating-linear-gradient</code> for the background stripes, a{" "}
                    <code>conic-gradient</code> for the red triangle, and four <code>conic-gradient</code>s for the
                    star.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi:{" "}
                        <ExternalLink href="http://www.vexilla-mundi.com/cuba_flag.html">"Cuba"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia:{" "}
                        <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Cuba">"Flag of Cuba"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    );
}
