import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";

export function Japan() {
    return (
        <FlagArea title="Japan" flagName="日章旗 (Nisshōki—Flag of Sun) | 日の丸 (Hinomaru—Circle of the Sun)">
            <DescriptionSection title="Description">
                <p>
                    The national flag of Japan is a rectangular white banner bearing a crimson-red disc at its center.
                    This flag is officially called Nisshōki (日章旗, the "flag of sun"), but is more commonly known in
                    Japan as Hinomaru (日の丸, the "circle of the sun"). It embodies the country's sobriquet: Land of
                    the Rising Sun.
                </p>

                <p>
                    The Nisshōki flag is designated as the national flag in the Act on National Flag and Anthem, which
                    was promulgated and became effective on August 13, 1999. Although no earlier legislation had
                    specified a national flag, the sun-disc flag had already become the de facto national flag of Japan.
                    Two proclamations issued in 1870 by the Daijō-kan, the governmental body of the early Meiji period,
                    each had a provision for a design of the national flag. A sun-disc flag was adopted as the national
                    flag for merchant ships under Proclamation No. 57 of Meiji 3 (issued on February 27, 1870), and as
                    the national flag used by the Navy under Proclamation No. 651 of Meiji 3 (issued on October 27,
                    1870). Use of the Hinomaru was severely restricted during the early years of the Allied occupation
                    of Japan after World War II; these restrictions were later relaxed.
                </p>

                <p>
                    The sun plays an important role in Japanese mythology and religion as the Emperor is said to be the
                    direct descendant of the sun goddess Amaterasu and the legitimacy of the ruling house rested on this
                    divine appointment and descent from the chief deity of the predominant Shinto religion. The name of
                    the country as well as the design of the flag reflect this central importance of the sun. The
                    ancient history Shoku Nihongi says that Emperor Monmu used a flag representing the sun in his court
                    in 701, and this is the first recorded use of a sun-motif flag in Japan. The oldest existing flag is
                    preserved in Unpō-ji temple, Kōshū, Yamanashi, which is older than the 16th century, and an ancient
                    legend says that the flag was given to the temple by Emperor Go-Reizei in the 11th century. During
                    the Meiji Restoration, both the sun disc and the Rising Sun Ensign of the Imperial Japanese Navy
                    became major symbols in the emerging Japanese Empire. Propaganda posters, textbooks, and films
                    depicted the flag as a source of pride and patriotism. In Japanese homes, citizens were required to
                    display the flag during national holidays, celebrations and other occasions as decreed by the
                    government. Different tokens of devotion to Japan and its Emperor featuring the Hinomaru motif
                    became popular among the public during the Second Sino-Japanese War and other conflicts. These
                    tokens ranged from slogans written on the flag to clothing items and dishes that resembled the flag.
                    (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Japan">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a <code>radial-gradient</code>.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Scheme Color:{" "}
                        <ExternalLink href="https://www.schemecolor.com/japan-flag-colors.php">
                            "Japan Flag Colors"
                        </ExternalLink>
                    </li>
                    <li>
                        Wikipedia:{" "}
                        <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Japan">"Flag of Japan"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    );
}
