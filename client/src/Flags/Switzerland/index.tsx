import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";

export function Switzerland() {
    return (
        <FlagArea title="Switzerland">
            <DescriptionSection title="Description">
                <p>
                    The flag of Switzerland (German: <em>Schweizerfahne</em>; French: <em>drapeau de la Suisse</em>;
                    Italian: <em>bandiera svizzera</em>; Romansh: <em>bandiera de la Svizra</em>) displays a white cross
                    in the centre of a square red field. The white cross is known as the Swiss cross. Its arms are
                    equilateral, and their ratio of length to width is 7:6. The size of the cross in relation to the
                    field was set in 2017 as 5:8.
                </p>

                <p>
                    The white cross has been used as the field sign (attached to the clothing of combatants and to the
                    cantonal war flags in the form of strips of linen) of the Old Swiss Confederacy since its formation
                    in the late 13th or early 14th century. Its symbolism was described by the Swiss Federal Council in
                    1889 as representing "at the same the Christian cross symbol and the field sign of the Old
                    Confederacy". As a national ensign, it was first used in 1800 during the Hundred Days by general
                    Niklaus Franz von Bachmann, and as regimental flag of all cantonal troops from 1841. The federal
                    coat of arms (<em>eidgenössisches Wappen</em>) was defined in 1815 for the Restored Confederacy as
                    the white-on-red Swiss cross in a heraldic shield. The current design was used together with a cross
                    composed of five squares until 1889, when its dimensions were officially set. (Source:{" "}
                    <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Switzerland">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a red <code>background-color</code> and a series of <code>linear-gradient</code>s to
                    form the cross.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Wikipedia:{" "}
                        <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Switzerland">
                            "Flag of Switzerland"
                        </ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    );
}
