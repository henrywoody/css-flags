import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";


export function Vietnam() {
    return (
        <FlagArea title="Vietnam" flagName="Cờ Đỏ Sao Vàng (Red Flag With Yellow Star)">
            <DescriptionSection title="Description">
                <p>
                    The flag of Vietnam, or "cờ đỏ sao vàng" (red flag with yellow star), was designed in 1955 and used during an uprising against French rule in southern Vietnam that year. Red symbolizes the bloodshed and revolutionary struggle. The star represents the five main classes in Vietnamese society—intellectuals, farmers, workers, businesspeople and military personnel.
                </p>

                <p>
                    The flag was used by the Viet Minh, a communist-led organization created in 1941 to oppose Japanese occupation. At the end of World War II, Viet Minh leader Ho Chi Minh proclaimed Vietnam independent and signed a decree on 5 September 1945 adopting the flag as the flag of the North Vietnam. The DRV became the government of North Vietnam in 1954 following the Geneva Accords. The flag was modified on 30 November 1955 to make the edges of the star sharper. Until the end of the Vietnam War in 1975, South Vietnam used a yellow flag with three red stripes. The red flag of North Vietnam was later adopted as the flag of the unified Vietnam in 1976. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Vietnam">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a red <code>background-color</code> and four <code>conic-gradient</code>s to form the star.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Vietnam">"Flag of Vietnam"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

