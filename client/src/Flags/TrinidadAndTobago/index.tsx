import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const TrinidadAndTobago: React.FC = () => {
	return (
		<FlagArea title="Trinidad and Tobago">
			<DescriptionSection title="Description">
				<p>
					The flag of Trinidad and Tobago was adopted upon independence from the United Kingdom on 31 August 1962. Designed by Carlisle Chang (1921–2001), the flag of Trinidad and Tobago was chosen by the independence committee of 1962. Red, black and white symbolise fire (the sun, representing courage), earth (representing dedication) and water (representing purity and equality). (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Trinidad_and_Tobago">Wikipedia</ExternalLink>)
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
						Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/trinidad_and_tobago_flag.html">"Trinidad and Tobago"</ExternalLink>
					</li>
					<li>
						Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Trinidad_and_Tobago">"Flag of Trinidad and Tobago"</ExternalLink>
					</li>
				</ul>
			</DescriptionSection>
		</FlagArea>
	)
}

export default TrinidadAndTobago;
