import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Maldives: React.FC = () => {
    return (
        <FlagArea title="Maldives">
            <DescriptionSection title="Description">
                <p>
                    The flag of the Republic of Maldives (Dhivehi: ދިވެހިރާއްޖެގެ ދިދަ) is green with a red border. The centre bears a vertical white crescent; the closed side of the crescent is on the hoist side of the flag. It was adopted on 25 July 1965.
                </p>

                <p>
                    The red rectangle represents the boldness of the nation's heroes, and their willingness to sacrifice their every drop of blood in defence of their country. The green rectangle in the centre symbolises peace and prosperity. The white crescent moon symbolises the Islamic faith. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_the_Maldives">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a red <code>background-color</code>, a green <code>linear-gradient</code>, and two <code>radial-gradient</code>s to form the crescent.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/maldives_flag.html">"Maldives"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_the_Maldives">"Flag of the Maldives"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default Maldives;
