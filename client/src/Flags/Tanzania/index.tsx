import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Tanzania: React.FC = () => {
	return (
		<FlagArea title="Tanzania">
			<DescriptionSection title="Description">
				<p>
					The flag of Tanzania (Swahili: <em>bendera ya Tanzania</em>) consists of a yellow-edged black diagonal band, divided diagonally from the lower hoist-side corner, with a green upper triangle and blue lower triangle. Adopted in 1964 to replace the individual flags of Tanganyika and Zanzibar, it has been the flag of the United Republic of Tanzania since the two states merged that year. The design of the present flag incorporates the elements from the two former flags. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Tanzania">Wikipedia</ExternalLink>)
				</p>
			</DescriptionSection>

			<DescriptionSection title="Construction">
				<p>
					Created with a <code>linear-gradient</code>.
				</p>
			</DescriptionSection>

			<DescriptionSection title="Sources">
				<ul className="citation-list">
					<li>
						Scheme Color: <ExternalLink href="https://www.schemecolor.com/tanzania-flag-colors.php">"Tanzania Flag Colors"</ExternalLink>
					</li>
					<li>
						Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/tanzania_flag.html">"Tanzania"</ExternalLink>
					</li>
					<li>
						Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Tanzania">"Flag of Tanzania"</ExternalLink>
					</li>
				</ul>
			</DescriptionSection>
		</FlagArea>
	)
}

export default Tanzania;
