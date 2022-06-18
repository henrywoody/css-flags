import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";


export function PeoplesRepublicOfChina() {
    return (
        <FlagArea title="People's Republic of China" flagName="五星红旗 (Wǔxīng Hóngqí—Five-starred Red Flag)">
            <DescriptionSection title="Description">
                <p>
                    The flag of China, officially the National Flag of the People's Republic of China and also known as the Five-starred Red Flag, is a Chinese red field charged in the canton (upper corner nearest the flagpole) with five golden stars. The design features one large star, with four smaller stars in a semicircle set off towards the fly (the side farthest from the flag pole). The red represents the revolution; the five stars and their relationship represent the unity of the Chinese people under the leadership of the Communist Party of China (CPC). The first flag was hoisted by the People's Liberation Army (PLA) on a pole overlooking Beijing's Tiananmen Square on October 1, 1949, at a ceremony announcing the establishment of the People's Republic of China. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_China">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    The large star was created with four <code>conic-gradient</code>s in a pattern used in many other flags here.
                    Each <code>conic-gradient</code> creates a triangle: one for the vertical triangle of the star, one for each of the upper-side triangles, and one to indent the first triangle at the bottom.
                    The four smaller stars were created each with six <code>conic-gradient</code>s, using three yellow triangles and three red triangles to indent the bottom of the yellow ones.
                    The new style style allows for presenting stars at slight rotations.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/china_flag.html">"China"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_China">"Flag of China"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

