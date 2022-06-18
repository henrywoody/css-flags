import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";

export function RepublicOfArtsakh() {
    return (
        <FlagArea title="Republic Of Artsakh">
            <DescriptionSection title="Description">
                <p>
                    On June 2, 1992, the self-proclaimed Republic of Artsakh, a de facto independent republic
                    internationally recognized as part of Armenia, in the South Caucasus region, adopted a flag derived
                    from the flag of Armenia, with only a white pattern added. A white, five-toothed, stepped pattern
                    was added to the flag, beginning at the two verges of the flag's right side and meeting at a point
                    equal to one-third of the distance from that side. The white pattern symbolizes the current
                    separation of Artsakh from Armenia proper and its aspiration for eventual union with "the
                    Motherland." This symbolizes the Armenian heritage, culture and population of the area, and
                    represents Artsakh as a separated region of Armenia by the triangular shape and the zigzag cutting
                    through the flag. The white pattern on the flag is also similar to the designs used on rugs, a
                    symbol of national identity. The ratio of the flag's breadth to its length is 1:2, same as the
                    Armenian Tricolor. (Source:{" "}
                    <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_Artsakh">
                        Wikipedia
                    </ExternalLink>
                    )
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with nine horizontal <code>linear-gradient</code>s, each a single color with a block of
                    white.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Wikipedia:{" "}
                        <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_Artsakh">
                            "Flag of the Republic of Artsakh"
                        </ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    );
}
