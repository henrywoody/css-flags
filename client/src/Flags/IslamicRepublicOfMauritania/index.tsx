import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";


export function IslamicRepublicOfMauritania() {
    return (
        <FlagArea title="Islamic Republic of Mauritania">
            <DescriptionSection title="Description">
                <p>
                    The flag of Mauritania (Arabic: علم موريتانيا) is a green field containing a gold star and crescent, with a red stripe at the top and bottom of the field. The original national flag was introduced under the instructions of President Moktar Ould Daddah and the constitution of 22 March 1959 and was adopted on 1 April 1959.
                </p>

                <p>
                    On 5 August 2017, a referendum was held by President Mohamed Ould Abdel Aziz to change the national flag, abolish the senate, and other constitutional amendments. The referendum was successful, and the new flag, including two red stripes, which represent "the efforts and sacrifices that the people of Mauritania will keep consenting, to the price of their blood, to defend their territory", was adopted in for its first raising on 28 November 2017, the 57th anniversary of Mauritania's independence. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Mauritania">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a green <code>background-color</code>, a <code>linear-gradient</code> to form the red bands, two <code>radial-gradient</code>s to form the crescent, and four <code>conic-gradient</code>s to form the star.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Scheme Color: <ExternalLink href="https://www.schemecolor.com/mauritania-flag-colors.php">"Mauritania Flag Colors"</ExternalLink>
                    </li>
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/mauritania_flag.html">"Mauritania"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Mauritania">"Flag of Mauritania"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

