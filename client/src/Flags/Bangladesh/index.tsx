import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";

export function Bangladesh() {
    return (
        <FlagArea title="Bangladesh" flagName="লাল সবুজ (Lal Shobuz—The Red &amp; Green)">
            <DescriptionSection title="Description">
                <p>
                    The national flag of Bangladesh (Bengali: বাংলাদেশের জাতীয় পতাকা, romanized:{" "}
                    <em>Bānlādēśēra jātīẏa patākā</em>, pronounced [baŋlad̪eʃer dʒat̪io̪ pɔt̪aka]) was adopted officially on
                    17 January 1972. It consists of a red disc on top (similar to that on Japan's flag) of a green
                    field. The red disc is offset slightly toward the hoist so that it appears centred when the flag is
                    flying. The disc represents the sun rising over Bengal, and also the blood of those who died for the
                    independence of Bangladesh. The green field stands for the lushness of the land of Bangladesh.
                    (Source:{" "}
                    <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Bangladesh">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created using the <code>background-color</code> for the green field and a{" "}
                    <code>radial-gradient</code> for the red disc.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Wikipedia:{" "}
                        <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Bangladesh">
                            "Flag of Bangladesh"
                        </ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    );
}
