import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Israel: React.FC = () => {
    return (
        <FlagArea title="Israel" flagName="Flag of Zion">
            <DescriptionSection title="Description">
                <p>
                    The flag of Israel (Hebrew: דגל ישראל‎ Degel Yisra'el; Arabic: علم إسرائيل‎ ʿAlam Israʼīl) was adopted on 28 October 1948, five months after the establishment of the State of Israel. It depicts a blue Star of David on a white background, between two horizontal blue stripes. The Israeli flag legislation states that the official measurements are 160 × 220 cm. Therefore, the official proportions are 8:11. Variants can be found at a wide range of proportions, with 2:3 being common. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Israel">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    The background pattern of blue and white stripes was created with a <code>linear-gradient</code>.
                    The Star of David was created with many <code>linear-gradient</code>s (one to form each line) and a few more <code>linear-gradient</code>s and <code>conic-gradient</code>s to over up the overflow.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/israel_flag.html">"Israel"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Israel">"Flag of Israel"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default Israel;
