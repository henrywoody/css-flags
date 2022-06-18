import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";

export function CentralAfricanRepublic() {
    return (
        <FlagArea title="Central African Republic">
            <DescriptionSection title="Description">
                <p>
                    The national flag of the Central African Republic (Sango: bendêre tî Bêafrîka) was officially
                    adopted in 1958. It has been retained since that time with the same design, four horizontal stripes
                    of blue, white, green and yellow, and a single vertical band of red, with a yellow five-pointed star
                    in the upper left corner. (Source:{" "}
                    <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_the_Central_African_Republic">
                        Wikipedia
                    </ExternalLink>
                    )
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with <code>linear-gradient</code>s for the horizontal and vertical stripes, and four{" "}
                    <code>conic-gradient</code>s for the star.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi:{" "}
                        <ExternalLink href="http://www.vexilla-mundi.com/central_african_republic_flag.html">
                            "Central African Republic"
                        </ExternalLink>
                    </li>
                    <li>
                        Wikipedia:{" "}
                        <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_the_Central_African_Republic">
                            "Flag of the Central African Republic"
                        </ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    );
}
