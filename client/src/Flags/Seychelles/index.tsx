import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";


export function Seychelles() {
    return (
        <FlagArea title="Seychelles">
            <DescriptionSection title="Description">
                <p>
                    The flag of Seychelles was adopted on January 8, 1996. The current flag is the third used by the country since its independence from Britain on June 29, 1976. The colours used in the current flag are the official colours of two of the nation's major political parties–Seychelles People's United Party and the Seychelles Democratic Party. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Seychelles">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a <code>conic-gradient</code>.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Department of Foreign Affairs, The Republic of Seychelles: <ExternalLink href="http://www.mfa.gov.sc/uploads/files/filepath_39.pdf">"New National Symbols of the Republic of Seychelles"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Seychelles">"Flag of Seychelles"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

