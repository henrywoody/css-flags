import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";


export function Algeria() {
    return (
        <FlagArea title="Algeria">
            <DescriptionSection title="Description">
                <p>
                    The national flag of Algeria ( Arabic: علم الجزائر, romanized: <em>ʿalam al-jazāʾir</em>, Berber languages: ⴰⵛⴻⵏⵢⴰⵍ ⵏ ⴷⵣⴰⵢⴻⵔ, romanized: <em>Acenyal n Dzayer</em>) consists of two equal vertical bars, green and white, charged in the center with a red star and crescent, a symbol of Islam as the nation's prominent faith. The flag was adopted on 3 July 1962. A similar version was used by the Algerian government in exile from 1958–1962. The Western blazon is <em>per pale vert and argent; a crescent and star gules</em>. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Algeria">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    The background was created with a <code>linear-gradient</code>, the crescent with three <code>radial-gradient</code>s (one red, one green, one white), and the star was formed with six <code>conic-gradient</code>s.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/algeria_flag.html">"Algeria"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Algeria">"Flag of Algeria"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

