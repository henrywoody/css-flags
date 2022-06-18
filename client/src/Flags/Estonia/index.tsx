import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";

export function Estonia() {
    return (
        <FlagArea title="Estonia" flagName="Sinimustvalge (Blue-Black-White)">
            <DescriptionSection title="Description">
                <p>
                    The national flag of Estonia (Estonian: Eesti lipp) is a tricolour featuring three equal horizontal
                    bands of blue (top), black, and white. The normal size is 105 by 165 centimetres (41 in × 65 in).[1]
                    In Estonian it is colloquially called the "sinimustvalge" (lit. "blue-black-white"), after the
                    colours of the bands. (Source:{" "}
                    <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Estonia">Wikipedia</ExternalLink>)
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
                        Vexilla Mundi:{" "}
                        <ExternalLink href="http://www.vexilla-mundi.com/estonia_flag.html">"Estonia"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia:{" "}
                        <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Estonia">
                            "Flag of Estonia"
                        </ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    );
}
