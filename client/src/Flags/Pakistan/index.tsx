import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Pakistan: React.FC = () => {
    return (
        <FlagArea title="Pakistan" flagName="Parc̱am-e Sitārah o-Hilāl (Flag of the Crescent and Star)">
            <DescriptionSection title="Description">
                <p>
                    The national flag of Pakistan (Urdu: إسلامى باكستان, lslami Paki̱stan) was adopted in its present form during a meeting of the Constituent Assembly on August 11, 1947, just three days before the country's independence, when it became the official flag of the Dominion of Pakistan. It was afterwards retained by the current-day Islamic Republic of Pakistan. The flag is a green field with a white crescent moon and five-rayed star at its centre, and a vertical white stripe at the hoist side. Though the green colour is mandated only as 'dark green', its official and most consistent representation is Pakistan green, which is shaded distinctively darker. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Pakistan">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a <code>linear-gradient</code> for the white stripe and green field.
                    Two <code>radial-gradient</code>s form the crescent.
                    The star was made in the six <code>conic-gradient</code> style, using three white <code>conic-gradient</code>s to create triangles to form the star body and three green <code>conic-gradient</code>s to indent the bottoms of the white triangles.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/pakistan_flag.html">"Pakistan"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Pakistan">"Flag of Pakistan"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default Pakistan;
