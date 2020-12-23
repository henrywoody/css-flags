import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Azerbaijan: React.FC = () => {
    return (
        <FlagArea title="Azerbaijan" flagName="Üçrəngli bayraq (The Tricolor Flag)">
            <DescriptionSection title="Description">
                <p>
                    The national flag of the Republic of Azerbaijan (Azerbaijani: <em>Azərbaycan bayrağı</em>) is a horizontal tricolour featuring three equally sized fesses of bright blue, red, and green, with a white crescent and an eight-pointed star in the center. The tricolour replaced an earlier design used by the Azerbaijan SSR. The bright blue symbolizes Azerbaijan's Turkic heritage, the red stands for progress, and the green represents Islam, the religion of majority of Azerbaijanis. The official colors and size were adopted on 5 February 1991. This flag was used from 9 November 1918 to 1920, when Azerbaijan was independent, and it was revived with slight variations on 5 February 1991. The nickname for the flag is The Tricolour Flag (Azerbaijani: <em>Üçrəngli bayraq</em>). (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Azerbaijan">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    The tricolor was created with a <code>linear-gradient</code>, the crescent with two <code>radial-gradient</code>s, and the star with 8 <code>conic-gradient</code>s.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Scheme Color: <ExternalLink href="https://www.schemecolor.com/azerbaijan-flag-colors.php">"Azerbaijan Flag Colors"</ExternalLink>
                    </li>
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/azerbaijan_flag.html">"Azerbaijan"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Azerbaijan">"Flag of Azerbaijan"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default Azerbaijan;
