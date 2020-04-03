import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Bahamas: React.FC = () => {
    return (
        <FlagArea title="The Bahamas">
            <DescriptionSection title="Description">
                <p>
                    The national flag of the Bahamas consists of a black triangle situated at the hoist with three horizontal bands: aquamarine, gold and aquamarine. Adopted in 1973 to replace the British Blue Ensign defaced with the emblem of the Crown Colony of the Bahama Islands, it has been the flag of the Commonwealth of the Bahamas since the country gained independence that year. The design of the present flag incorporated the elements of various submissions made in a national contest for a new flag prior to independence. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_the_Bahamas">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Made with a <code>linear-gradient</code> for the aquamarine and gold background and a <code>conic-gradient</code> for the black triangle.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/bahamas_flag.html">"The Bahamas"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_the_Bahamas">"Flag of the Bahamas"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default Bahamas;
