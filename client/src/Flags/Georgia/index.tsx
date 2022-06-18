import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";

export function Georgia() {
    return (
        <FlagArea title="Georgia" flagName="ხუთჯვრიანი დროშა (khutjvriani drosha—Five Cross Flag)">
            <DescriptionSection title="Description">
                <p>
                    The flag of Georgia (Georgian: საქართველოს სახელმწიფო დროშა;{" "}
                    <em>Sakartvelos sakhelmts'ipo drosha</em>), also known as the Five Cross Flag (Georgian: ხუთჯვრიანი
                    დროშა, romanized: <em>khutjvriani drosha</em>), is one of the national symbols of Georgia.
                    Originally a banner of the medieval Kingdom of Georgia, it was repopularized in the late 20th and
                    early 21st centuries during the Georgian national revival. (Source:{" "}
                    <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Georgia_(country)">
                        Wikipedia
                    </ExternalLink>
                    )
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    The center cross was formed with two <code>linear-gradient</code>s. Each of the smaller crosses was
                    formed with 8 <code>radial-gradient</code>s: one for each half of each bar and one for each of the
                    ends of the cross.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi:{" "}
                        <ExternalLink href="http://www.vexilla-mundi.com/georgia_flag.html">"Georgia"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia:{" "}
                        <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Georgia_(country)">
                            "Flag of Georgia (country)"
                        </ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    );
}
