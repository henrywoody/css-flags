import React from "react";
import { FlagArea, DescriptionSection, ExternalLink } from "../../Components";
import "./style.css";


export function RepublicOfChina() {
    return (
        <FlagArea title="Republic of China" flagName="青天白日滿地紅 (Blue Sky, White Sun, and a Wholly Red Earth)">
            <DescriptionSection title="Description">
                <p>
                    The flag of the Republic of China (also known as the Blue Sky, White Sun, and a Wholly Red Earth and the flag of Taiwan) consists of a red field with a blue canton bearing a white disc with twelve triangles surrounding it. The disc and triangles symbolize the sun and rays of light emanating from it respectively. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    The field was created with the <code>background-color</code> property.
                    The canton was created with a <code>linear-gradient</code> with a <code>background-size</code>.
                    The sun was created with two <code>radial-gradient</code>s for the inner circles, and 12 <code>conic-gradient</code>s to form the sun's rays.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/taiwan_flag.html">"Taiwan"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China">"Flag of the Republic of China"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

