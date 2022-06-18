import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";

export function Cameroon() {
    return (
        <FlagArea title="Cameroon">
            <DescriptionSection title="Description">
                <p>
                    The national flag of Cameroon (French: <em>drapeau du Cameroun</em>) was adopted in its present form
                    on 20 May 1975 after Cameroon became a unitary state. It is a vertical tricolour of green, red and
                    yellow, with a five-pointed star in its center. There is a wide variation in the size of the central
                    star, although it is always contained within the inside stripe.
                </p>

                <p>
                    The colour scheme uses the traditional Pan-African colours (Cameroon was the second state to adopt
                    them). The centre stripe is thought to stand for unity: red is the colour of unity, and the star is
                    referred to as "the star of unity". The yellow stands for the sun, and also the savannas in the
                    northern part of the country, while the green is for the forests in the southern part of Cameroon.
                    (Source:{" "}
                    <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Cameroon">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a <code>linear-gradient</code> for the tricolor and using the standard single
                    five-pointed star.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Scheme Color:{" "}
                        <ExternalLink href="https://www.schemecolor.com/cameroon-flag-colors.php">
                            "Cameroon Flag Colors"
                        </ExternalLink>
                    </li>
                    <li>
                        Vexilla Mundi:{" "}
                        <ExternalLink href="http://www.vexilla-mundi.com/cameroon_flag.html">"Cameroon"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia:{" "}
                        <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Cameroon">
                            "Flag of Cameroon"
                        </ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    );
}
