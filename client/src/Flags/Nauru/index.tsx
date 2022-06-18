import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";


export function Nauru() {
    return (
        <FlagArea title="Nauru">
            <DescriptionSection title="Description">
                <p>
                    Following the independence of Nauru, the flag of Nauru (Nauruan: <em>anidenin Naoero</em>) was raised for the first time. The flag, chosen in a local design competition, was adopted on independence day, 31 January 1968. It depicts Nauru's geographical position, one degree south of the Equator. A gold horizontal stripe representing the Equator runs across a blue field for the Pacific Ocean. Nauru itself is symbolized by a white 12-pointed star. Each point represents one of the 12 indigenous tribes on the island. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Nauru">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    The background was created with a <code>linear-gradient</code> and 12 <code>conic-gradient</code>s to form the star.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Scheme Color: <ExternalLink href="https://www.schemecolor.com/nauru-flag-colors.php">"Nauru Flag Colors"</ExternalLink>
                    </li>
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/nauru_flag.html">"Nauru"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Nauru">"Flag of Nauru"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

