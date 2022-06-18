import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";

export function Russia() {
    return (
        <FlagArea title="Russia" flagName="Триколор (Tricolor)">
            <DescriptionSection title="Description">
                <p>
                    The flag of Russia (Russian Federation) (Russian: Флаг России) is a tricolour flag consisting of
                    three equal horizontal fields: white on the top, blue in the middle, and red on the bottom. The flag
                    was first used as an ensign for Russian merchant ships and became official as the flag of the
                    Tsardom of Russia in 1696. It remained in use until the Russian Socialist Federative Soviet Republic
                    (RSFSR) fully occupied all Russian territories in 1922, as the flag was used by the White guard
                    during the Russian Civil War which had started in 1917. (Source:{" "}
                    <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Russia">Wikipedia</ExternalLink>)
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
                        Wikipedia:{" "}
                        <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Russia">
                            "Flag of Russia"
                        </ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    );
}
