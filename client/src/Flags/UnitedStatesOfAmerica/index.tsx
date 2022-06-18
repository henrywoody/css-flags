import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";


export function UnitedStatesOfAmerica() {
    return (
        <FlagArea title="United States of America" flagName="The Stars and Stripes | Old Glory | The Star-Spangled Banner">
            <DescriptionSection title="Description">
                <p>
                    The flag of the United States of America, often referred to as the American flag or U.S. flag, is the national flag of the United States. It consists of thirteen equal horizontal stripes of red (top and bottom) alternating with white, with a blue rectangle in the canton (referred to specifically as the "union") bearing fifty small, white, five-pointed stars arranged in nine offset horizontal rows, where rows of six stars (top and bottom) alternate with rows of five stars. The 50 stars on the flag represent the 50 states of the United States of America, and the 13 stripes represent the thirteen British colonies that declared independence from the Kingdom of Great Britain, and became the first states in the U.S. Nicknames for the flag include the Stars and Stripes, Old Glory, and the Star-Spangled Banner. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_the_United_States">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    The red and white stripes were created with a <code>repeating-linear-gradient</code>.
                    The canton was created using the <code>::after</code> and <code>::before</code> pseudo elements to create two over lapping patterns of stars (one for the outer thirty and one for the inner twenty).
                    Each star was created with two <code>conic-gradient</code>s for the center of the star and two <code>linear-gradient</code>s for the side points.
                </p>

                <p>
                    Also the official names of the red and blue colors for the flag are Old Glory Red and Old Glory Blue, respectively.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/united_states_of_america_flag.html">"United States of America"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_the_United_States">"Flag of the United States"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

