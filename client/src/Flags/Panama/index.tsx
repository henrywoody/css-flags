import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";


export function Panama() {
    return (
        <FlagArea title="Panama">
            <DescriptionSection title="Description">
                <p>
                    The flag of Panama was made by María de la Ossa de Amador and was officially adopted by the "ley 48 de 1925".[1] The Panamanian flag day is celebrated on November 4, one day after Panamanian separation from Colombia, and is one of a series of holidays celebrated in November known as the Fiestas Patrias. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Panama">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a white <code>background-color</code>, a <code>linear-gradient</code> for each the blue rectangle and the red rectangle, and six conic gradients for each of the stars.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Scheme Color: <ExternalLink href="https://www.schemecolor.com/panama-flag-colors.php">"Panama Flag Colors"</ExternalLink>
                    </li>
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/panama_flag.html">"Panama"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Panama">"Flag of Panama"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

