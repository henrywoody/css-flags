import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Thailand: React.FC = () => {
    return (
        <FlagArea title="Thailand" flagName="ธงไตรรงค์ (Trairanga—Tricolour Flag)">
            <DescriptionSection title="Description">
                <p>
                    The flag of the Kingdom of Thailand (Thai: ธงไตรรงค์; RTGS: <em>thong trai rong</em>, meaning 'tricolour flag') shows five horizontal stripes in the colours red, white, blue, white and red, with the central blue stripe being twice as wide as each of the other four. The design was adopted on 28 September 1917, according to the royal decree issued by Rama VI. Since 2016, that day is a national day of importance in Thailand celebrating the flag. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Thailand">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a <code>linear-gradient</code>.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Thailand">"Flag of Thailand"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default Thailand;
