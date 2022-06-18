import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";


export function UnitedKingdom() {
    return (
        <FlagArea title="United Kingdom" flagName="Union Jack">
            <DescriptionSection title="Description">
                <p>
                    The national flag of the United Kingdom is the Union Jack, also known as the Union Flag.
                </p>

                <p>
                    The current design of the Union Jack dates from the Act of Union 1801 which united the Kingdom of Great Britain and the Kingdom of Ireland (previously in personal union) to create the United Kingdom of Great Britain and Ireland. The flag consists of the red cross of Saint George (patron saint of England), edged in white, superimposed on the Cross of St Patrick (patron saint of Ireland), which are superimposed on the Saltire of Saint Andrew (patron saint of Scotland). Wales is not represented in the Union Flag by Wales's patron saint, Saint David, as at the time the flag was designed Wales was part of the Kingdom of England. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_the_United_Kingdom">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a series of <code>linear-gradient</code>s.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/united_kingdom_flag.html">"United Kingdom of Great Britain and Northern Ireland"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_the_United_Kingdom">"Flag of the United Kingdom"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

