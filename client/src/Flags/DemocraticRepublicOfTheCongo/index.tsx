import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";


export function DemocraticRepublicOfTheCongo() {
    return (
        <FlagArea title="Democratic Republic of the Congo">
            <DescriptionSection title="Description">
                <p>
                    The national flag of the Democratic Republic of the Congo (French: <em>drapeau de la république démocratique du Congo</em>) is a sky blue flag, adorned with a yellow star in the upper left canton and cut diagonally by a red stripe with a yellow fimbriation. It was adopted on 20 February 2006. A new constitution, ratified in December 2005 and which came into effect in February 2006, promoted a return to a flag similar to that flown between 1963 and 1971, with a change from a royal blue to sky blue background. Blue represents peace. Red stands for "the blood of the country's martyrs", yellow the country's wealth; and the star a radiant future for the country. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_the_Democratic_Republic_of_the_Congo">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a <code>linear-gradient</code> for the field and four <code>conic-gradient</code>s for the star.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_the_Democratic_Republic_of_the_Congo">"Flag of the Democratic Republic of the Congo"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

