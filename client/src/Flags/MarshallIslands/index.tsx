import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";


export function MarshallIslands() {
    return (
        <FlagArea title="Marshall Islands">
            <DescriptionSection title="Description">
                <p>
                    The flag of the Marshall Islands, an island nation in the Pacific, was adopted upon the start of self-government, May 1, 1979. The flag was designed by Emlain Kabua, who served as the first First Lady of the republic. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_the_Marshall_Islands">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a <code>conic-gradient</code> to form orange and white the stripes. The star was created with 24 <code>conic-gradient</code>s to form the rays and a <code>radial-gradient</code> in the center
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/marshall_islands_flag.html">"Marshall Islands"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_the_Marshall_Islands">"Flag of the Marshall Islands"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

