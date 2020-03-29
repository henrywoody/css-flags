import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const France: React.FC = () => {
	return (
		<FlagArea title="France" flagName="Tricolore (Tricolor)">
			<DescriptionSection title="Description">
				<p>
					The flag of France (French: <em>drapeau français</em>) is a tricolour flag featuring three vertical bands coloured blue (hoist side), white, and red. It is known to English speakers as the French Tricolour or simply the Tricolour (French: Tricolore). The Tricolour has become one of the most influential flags in history, with its three-colour scheme being copied by many other nations, both in Europe and the rest of the world. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_France">Wikipedia</ExternalLink>)
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
						Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_France">"Flag of France"</ExternalLink>
					</li>
				</ul>
			</DescriptionSection>
		</FlagArea>
	)
}

export default France;
