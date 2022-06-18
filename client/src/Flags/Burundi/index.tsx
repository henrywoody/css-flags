import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";


export function Burundi() {
    return (
        <FlagArea title="Burundi">
            <DescriptionSection title="Description">
                <p>
                    The original national flag of Burundi (Kirundi: <em>ibendera ry'Uburundi</em>) was adopted after the country's independence from Belgium on 1 July 1962. It went through several revisions and now consists of a white saltire which divides the field into alternating red and green areas. The center of the saltire merges into a white disk, on which there are three red solid six-pointed stars outlined in green. The current ratio is 3:5, which was changed from 2:3 on 27 September 1982. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Burundi">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    The background was created with a <code>repeating-conic-gradient</code> with two overlapping <code>linear-gradient</code>s for the saltire, and the disc in the center was created with a <code>radial-gradient</code>. The stars were created with four <code>conic-gradient</code>s (two green and two red) each.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Scheme Color: <ExternalLink href="https://www.schemecolor.com/burundi-flag-colors.php">"Burundi Flag Colors"</ExternalLink>
                    </li>
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/burundi_flag.html">"Burundi"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Burundi">"Flag of Burundi"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

