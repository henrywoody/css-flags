import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Iceland: React.FC = () => {
    return (
        <FlagArea title="Iceland">
            <DescriptionSection title="Description">
                <p>
                    The flag of Iceland (Icelandic: <em>íslenski fáninn</em>) was officially described in Law No. 34, set out on 17 June 1944, the day Iceland became a republic. The law is entitled "The Law of the National Flag of Icelanders and the State Arms" and describes the Icelandic flag as follows:
                </p>

                <blockquote>
                    The civil national flag of Icelanders is blue as the sky with a snow-white cross, and a fiery-red cross inside the white cross. The arms of the cross extend to the edge of the flag, and their combined width is ​2⁄9, but the red cross ​1⁄9 of the combined width of the flag. The blue areas are right angled rectangles, the rectilinear surfaces are parallel and the outer rectilinear surfaces as wide as them, but twice the length. The dimensions between the width and length are 18:25.
                </blockquote>

                <p>
                    Iceland's first national flag was a white cross on a deep blue background. It was first shown in parade in 1897. The modern flag dates from 1915, when a red cross was inserted into the white cross of the original flag. This cross represents Christianity. It was adopted and became the national flag when Iceland gained independence from Denmark in 1918. For the Icelandic people the flag's colouring represents a vision of their country's landscape. The colours stand for 3 of the elements that make up the island. Red is the fire produced by the island's volcanoes, white recalls the ice and snow that covers Iceland, and blue is for the mountains of the island. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Iceland">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a blue <code>background-color</code> and a <code>linear-gradient</code> for each color and line in the cross (four in total).
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Government of Iceland: <ExternalLink href="https://www.government.is/topics/governance-and-national-symbols/icelandic-national-flag">"Icelandic National Flag"</ExternalLink>
                    </li>

                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Iceland">"Flag of Iceland"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default Iceland;
