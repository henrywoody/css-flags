import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const SouthSudan: React.FC = () => {
	return (
		<FlagArea title="South Sudan">
			<DescriptionSection title="Description">
				<p>
					The flag of South Sudan was adopted following the signing of the Comprehensive Peace Agreement that ended the Second Sudanese Civil War. A similar version of the flag was previously used as the flag of the Sudan People's Liberation Movement. The flag of South Sudan is older than the country itself, as the flag was adopted in 2005, while the country became independent in 2011. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_South_Sudan">Wikipedia</ExternalLink>)
				</p>
			</DescriptionSection>

			<DescriptionSection title="Construction">
				<p>
					Created with <code>linear-gradient</code> for the stipes, a <code>conic-gradient</code> for the triangle on the hoist, and six <code>conic-gradient</code>s to form the star.
				</p>
			</DescriptionSection>

			<DescriptionSection title="Sources">
				<ul className="citation-list">
					<li>
						Scheme Color: <ExternalLink href="https://www.schemecolor.com/south-sudan-flag-colors.php">"South Sudan Flag Colors"</ExternalLink>
					</li>
					<li>
						Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/south_sudan_flag.html">"South Sudan"</ExternalLink>
					</li>
					<li>
						Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_South_Sudan">"Flag of South Sudan"</ExternalLink>
					</li>
				</ul>
			</DescriptionSection>
		</FlagArea>
	)
}

export default SouthSudan;
