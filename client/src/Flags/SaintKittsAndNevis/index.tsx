import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const SaintKittsAndNevis: React.FC = () => {
	return (
		<FlagArea title="Saint Kitts and Nevis">
			<DescriptionSection title="Description">
				<p>
					The flag of Saint Kitts and Nevis consists of a yellow-edged black band containing two white stars that divides diagonally from the lower hoist-side corner, with a green upper triangle and red lower triangle. Adopted in 1983 to replace the flag of Saint Christopher-Nevis-Anguilla, it has been the flag of the Federation of Saint Kitts and Nevis since the country gained independence that year. Although the flag utilises the colours of the Pan-Africanist movement, the symbolism behind them is interpreted differently. The three islands later became part of the West Indies Federation in 1958; after this dissolved four years later, they were granted the status of associate state as Saint Christopher-Nevis-Anguilla. However, Anguilla decided to secede from the federation in 1969, owing to fears that their population, which was already small, would be further marginalised in parliament. This was eventually formalised in 1980, and a new flag for the remaining parts of the federation was needed, since the symbolism of the previous flag centred on the concept of a union of three. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Saint_Kitts_and_Nevis">Wikipedia</ExternalLink>)
				</p>
			</DescriptionSection>

			<DescriptionSection title="Construction">
				<p>
					Created with a <code>linear-gradient</code> for the stripes and six <code>conic-gradient</code>s for each of the stars.
				</p>
			</DescriptionSection>

			<DescriptionSection title="Sources">
				<ul className="citation-list">
					<li>
						Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Saint_Kitts_and_Nevis">"Flag of Saint Kitts and Nevis"</ExternalLink>
					</li>
					<li>
						Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/saint_kitts_flag.html">"Saint Kitts and Nevis"</ExternalLink>
					</li>
					<li>
						Scheme Color: <ExternalLink href="https://www.schemecolor.com/saint-kitts-and-nevis-flag-colors.php">"Saint Kitts and Nevis Flag Colors"</ExternalLink>
					</li>
				</ul>
			</DescriptionSection>
		</FlagArea>
	)
}

export default SaintKittsAndNevis;
