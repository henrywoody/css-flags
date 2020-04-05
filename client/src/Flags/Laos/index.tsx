import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Laos: React.FC = () => {
    return (
        <FlagArea title="Laos">
            <DescriptionSection title="Description">
                <p>
                    The flag of Laos (Lao: ທຸງຊາດລາວ; <em>thungsad Lāo</em>) consists of three horizontal stripes, with the middle stripe in blue being twice the height of the top and bottom red stripes. In the middle is a white disc, the diameter of the disc is ​4⁄5 the height of the blue stripe. The flag ratio is 2:3. The national flag of Laos was first adopted in 1945 under the short-lived Lao Issara government of 1945–46, then by the Pathet Lao. It is one of the two flags of a currently communist country (the other being Cuba) that does not use any communist symbolism and the only current communist country that does not use a five-pointed star in its flag as an emblem. The current flag was adopted on December 2, 1975 when it became a socialist state. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Laos">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a <code>linear-gradient</code> for the background and a <code>radial-gradient</code> for the disc in the center.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/laos_flag.html">"Laos"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Laos">"Flag of Laos"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default Laos;
