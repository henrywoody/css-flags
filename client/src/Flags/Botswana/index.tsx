import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Greece: React.FC = () => {
    return (
        <FlagArea title="Botswana">
            <DescriptionSection title="Description">
                <p>
                    The national flag of Botswana (Setswana: <em>folaga ya Botswana</em>) consists of a light blue field cut horizontally in the centre by a black stripe with a thin white frame. Adopted in 1966 to replace the Union Jack, it has been the flag of the Republic of Botswana since the country gained independence that year. It is one of the few African flags that utilises neither the colours of the Pan-Africanist movement nor the colours of the country's leading political party. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Botswana">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a single <code>linear-gradient</code>.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/botswana_flag.html">"Botswana"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Botswana">"Flag of Botswana"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default Greece;
