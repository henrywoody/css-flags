import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Tonga: React.FC = () => {
    return (
        <FlagArea title="Tonga">
            <DescriptionSection title="Description">
                <p>
                    The flag of Tonga consists of a red field with a white canton charged with a red couped cross. Adopted in 1875 after being officially enshrined into the nation's constitution, it has been the flag of the Kingdom of Tonga since that year. The constitution stipulates that the national flag can never be changed. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Tonga">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created using a red <code>background-color</code> and a <code>linear-gradient</code> for each: the canton and each bar of the cross.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Scheme Color: <ExternalLink href="https://www.schemecolor.com/tonga-flag-colors.php">"Tonga Flag Colors"</ExternalLink>
                    </li>
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/tonga_flag.html">"Tonga"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Tonga">"Flag of Tonga"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default Tonga;
