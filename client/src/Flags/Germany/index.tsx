import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";


export function Germany() {
    return (
        <FlagArea title="Germany">
            <DescriptionSection title="Description">
                <p>
                    The flag of Germany or German flag (German: <em>Flagge Deutschlands</em>) is a tricolour consisting of three equal horizontal bands displaying the national colours of Germany: black, red, and gold (German: <em>Schwarz-Rot-Gold</em>). The flag was first adopted as the national flag of modern Germany in 1919, during the Weimar Republic, until 1933. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Germany">Wikipedia</ExternalLink>)
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
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Germany">"Flag of Germany"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

