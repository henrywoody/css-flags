import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";


export function Luxembourg() {
    return (
        <FlagArea title="Luxembourg">
            <DescriptionSection title="Description">
                <p>
                    The flag of Luxembourg (Luxembourgish: <em>Lëtzebuerger Fändel</em>, German: <em>Flagge Luxemburgs</em>, French: <em>Drapeau du Luxembourg</em>) consists of three horizontal stripes, red, white and blue, and can be in 1:2 or 3:5 ratio. It was first used between 1845 and 1848 and officially adopted in 1993. It is informally called in the country, «rout, wäiß, blo,» (lit. red, white, sky blue).
                </p>

                <p>
                    Luxembourg had no flag until 1830, when patriots were urged to display the national colours. The flag was defined as a horizontal tricolour of red, white, and blue in 1848, but it was not officially adopted until 1993. The tricolour flag is almost identical to Flag of the Netherlands, except that it is longer and its blue stripe and red stripe are a lighter shade. The red, white, and blue colours were derived from the coat of arms of the House of Luxembourg. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Luxembourg">Wikipedia</ExternalLink>)
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
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Luxembourg">"Flag of Luxembourg"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

