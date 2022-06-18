import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";


export function Finland() {
    return (
        <FlagArea title="Finland">
            <DescriptionSection title="Description">
                <p>
                    The flag of Finland (Finnish: <em>Suomen lippu</em>), also called <em>siniristilippu</em> ("Blue Cross Flag"), dates from the beginning of the 20th century. On a white background, it features a blue Nordic cross, which represents Christianity.
                </p>

                <p>
                    The state flag has a coat of arms in the centre, but is otherwise identical to the civil flag. The swallow-tailed state flag is used by the military. The presidential standard is identical to the swallow-tailed state flag but also has in its upper left corner the Cross of Liberty after the Order of the Cross of Liberty, which has the President of Finland as its Grand Master. Like Sweden's, Finland's national flag is based on the Scandinavian cross. It was adopted after independence from Russia, when many patriotic Finns wanted a special flag for their country, but its design dates back to the 19th century. The blue colouring is said to represent the country's thousands of lakes and the sky, with white for the snow that covers the land in winter. This colour combination has also been used over the centuries in various Finnish provincial, military, and town flags. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Finland">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a white <code>background-color</code> and a <code>linear-gradient</code> for each of the lines in the cross.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Finland">"Flag of Finland"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

