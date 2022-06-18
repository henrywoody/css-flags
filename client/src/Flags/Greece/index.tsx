import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";


export function Greece() {
    return (
        <FlagArea
            title="Greece"
            flagName="Η Γαλανόλευκη (The Blue and White)"
        >
            <DescriptionSection title="Description">
                <p>
                    The national flag of Greece, popularly referred to as the "blue and white" (Greek: Γαλανόλευκη, Galanólefki) or the "sky blue and white" (Κυανόλευκη, Kyanólefki), is officially recognised by Greece as one of its national symbols and has nine equal horizontal stripes of blue alternating with white. There is a blue canton in the upper hoist-side corner bearing a white cross; the cross symbolises Eastern Orthodox Christianity, the established religion of the Greek people of Greece and Cyprus. The blazon of the flag is Azure, four bars Argent; on a canton of the field a Greek cross throughout of the second. The official flag ratio is 2:3. The shade of blue used in the flag has varied throughout its history, from light blue to dark blue, the latter being increasingly used since the late 1960s. It was officially adopted by the First National Assembly at Epidaurus on 13 January 1822. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Greece">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    The field was created by using a <code>repeating-linear-gradient</code>.
                </p>

                <p>
                    The cross in the canton was created by using the <code>::before</code> pseudo-selector on the flag and using two <code>linear-gradient</code>s—one for the vertical line, one for the horizontal.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Greece">"Flag of Greece"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

