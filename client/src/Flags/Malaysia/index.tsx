import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Malaysia: React.FC = () => {
    return (
        <FlagArea title="Malaysia" flagName="Jalur Gemilang (Stripes of Glory)">
            <DescriptionSection title="Description">
                <p>
                    The flag of Malaysia, also known as Malay: <em>Jalur Gemilang</em> (Stripes of Glory), is composed of a field of 14 alternating red and white stripes along the fly and a blue canton bearing a crescent and a 14-point star known as the <em>Bintang Persekutuan</em> (Federal Star). The 14 stripes, of equal width, represent the equal status in the federation of the 13 member states and the federal territories, while the 14 points of the star represent the unity between these entities. The crescent represents Islam, the country's state religion; the blue canton symbolises the unity of the Malaysian people; the yellow of the star and crescent is the royal colour of the Malay rulers. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Malaysia">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    The stripes in the field were created with a <code>repeating-linear-gradient</code>. The canton was created with a simple <code>linear-gradient</code>. The crescent with two <code>radial-gradient</code>s. And the star was formed with 14 <code>conic-gradient</code>s.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Scheme Color: <ExternalLink href="https://www.schemecolor.com/malaysia-flag-colors.php">"Malaysia Flag Colors"</ExternalLink>
                    </li>
                    <li>
                        Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/malaysia_flag.html">"Malaysia"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Malaysia">"Flag of Malaysia"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default Malaysia;
