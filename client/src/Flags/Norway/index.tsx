import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Norway: React.FC = () => {
    return (
        <FlagArea title="Norway">
            <DescriptionSection title="Description">
                <p>
                    The flag of Norway (Norwegian: Norges flagg) is red with an indigo blue Scandinavian cross fimbriated in white that extends to the edges of the flag; the vertical part of the cross is shifted to the hoist side in the style of the Dannebrog, the flag of Denmark. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Norway">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a red <code>background-color</code> and a <code>linear-gradient</code> for each the vertical andd horizontal parts of the cross in each color (for a total of four <code>linear-gradient</code>s).
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/norway_flag.html">"Norway"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Norway">"Flag of Norway"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default Norway;
