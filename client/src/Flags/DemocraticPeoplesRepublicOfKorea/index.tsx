import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";


export function DemocraticPeoplesRepublicOfKorea() {
    return (
        <FlagArea title="Democratic People's Republic of Korea" flagName="람홍색공화국기 (Ramhongsaek Konghwagukgi)">
            <DescriptionSection title="Description">
                <p>
                    The flag of North Korea, also known as the Ramhongsaek Konghwagukgi (Korean: 람홍색공화국기; literally "blue and red-colored flag of the republic"), consists of a central red panel, bordered both above and below by a narrow white stripe and a broad blue stripe. The central red panel bears a five-pointed red star within a white circle near the hoist. This flag is banned from public use in South Korea due to its association with the ruling regime, although some exceptions for the usage of the flag exist. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_North_Korea">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a <code>linear-gradient</code> for the background, a <code>radial-gradient</code> for the circle around the star, and four <code>conic-gradient</code>s for the star.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_North_Korea">"Flag of North Korea"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

