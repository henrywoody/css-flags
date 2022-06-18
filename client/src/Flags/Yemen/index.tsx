import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";


export function Yemen() {
    return (
        <FlagArea title="Yemen">
            <DescriptionSection title="Description">
                <p>
                    The Flag of Yemen (Arabic: علم اليمن‎) was adopted on May 22, 1990, the day that North Yemen and South Yemen were unified. The flag is essentially the Arab Liberation Flag of 1952, introduced after the Egyptian Revolution of 1952 in which Arab nationalism was a dominant theme. The Arab Liberation Flag served as the inspiration for the flags of both North and South Yemen prior to unification, as well as for the current flags of Egypt, Iraq, Sudan, and Syria. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Yemen">Wikipedia</ExternalLink>)
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
                        Scheme Color: <ExternalLink href="https://www.schemecolor.com/yemen-arab-republic-flag-colors.php">"Yemen Arab Republic Flag Colors"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Yemen">"Flag of Yemen"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

