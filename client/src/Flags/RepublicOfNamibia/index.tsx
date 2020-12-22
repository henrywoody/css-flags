import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const RepublicOfNamibia: React.FC = () => {
    return (
        <FlagArea title="Republic of Namibia">
            <DescriptionSection title="Description">
                <p>
                    The flag of Namibia was adopted on 21 March 1990 upon independence from South Africa.
                </p>

                <p>
                    The symbolism of the flag's colors as follows:
                </p>

                <ul>
                    <li>Red – represents Namibia's most important resource, its people. It refers to their heroism and their determination to build a future of equal opportunity for all.</li>
                    <li>White – represents peace and unity.</li>
                    <li>Green – symbolises vegetation and agricultural resources.</li>
                    <li>Blue – represents the clear Namibian sky and the Atlantic Ocean, the country's precious water resources and rain.</li>
                    <li>Golden-yellow sun – life and energy</li>
                </ul>

                <p>
                    (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Namibia">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    The stripes were created with a <code>linear-gradient</code> and the sun was created with two <code>radial-gradient</code>s in the center and 12 <code>conic-gradient</code>s surrounding.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/namibia_flag.html">"Namibia"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Namibia">"Flag of Namibia"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default RepublicOfNamibia;
