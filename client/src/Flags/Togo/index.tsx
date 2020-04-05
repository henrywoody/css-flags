import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Togo: React.FC = () => {
    return (
        <FlagArea title="Togo">
            <DescriptionSection title="Description">
                <p>
                    The flag of Togo (French: <em>drapeau du Togo</em>) is the national flag, ensign, and naval jack of Togo. It has five equal horizontal bands of green (top and bottom) alternating with yellow. There is a white five-pointed star on a red square in the upper hoist-side corner. It uses the popular pan-African colors of Ethiopia, but the design resembles the flag of Liberia which itself echoes the flag of the United States. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Togo">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a <code>repeating-linear-gradient</code> for the stripes in the field and the red canton.
                    Created the star using four <code>conic-gradient</code>s.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Scheme Color: <ExternalLink href="https://www.schemecolor.com/togo-flag-colors.php">"Togo Flag Colors"</ExternalLink>
                    </li>
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/togo_flag.html">"Togo"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Togo">"Flag of Togo"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default Togo;
