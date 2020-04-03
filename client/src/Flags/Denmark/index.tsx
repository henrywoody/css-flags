import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Denmark: React.FC = () => {
    return (
        <FlagArea title="Denmark" flagName="Dannebrog">
            <DescriptionSection title="Description">
                <p>
                    The flag of Denmark (Danish: Dannebrog, pronounced [ˈtænəˌpʁoˀ]) is red with a white Scandinavian cross that extends to the edges of the flag; the vertical part of the cross is shifted to the hoist side.
                </p>

                <p>
                    A banner with a white-on-red cross is attested as having been used by the kings of Denmark since the 14th century. An origin legend with considerable impact on Danish national historiography connects the introduction of the flag to the Battle of Lindanise of 1219. The elongated Nordic cross reflects the use as a maritime flag in the 18th century. The flag became popular as a national flag in the early 19th century. Its private use was outlawed in 1834, and again permitted in a regulation of 1854. The flag holds the world record of being the oldest continuously used national flag. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Denmark">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a red <code>background-color</code> and a linear gradient for each line in the cross.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/denmark_flag.html">"Denmark"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Denmark">"Flag of Denmark"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default Denmark;
