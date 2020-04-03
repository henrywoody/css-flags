import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Palau: React.FC = () => {
	return (
		<FlagArea title="Palau">
			<DescriptionSection title="Description">
				<p>
					The flag of Palau was adopted on 1 January 1981, when the island group separated from the United Nations Trust Territory. As with the flags of several other Pacific island groups, blue is the colour used to represent the ocean and the nation's place within it. While this puts Palau in common with the Federated States of Micronesia and other neighboring island groups, the disc on the flag (similar to that on Japan's flag) is off-centre like that of the flag of Bangladesh, but in this case represents the moon instead of the sun. The current flag was introduced in 1981 when Palau became a republic. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Palau">Wikipedia</ExternalLink>)
				</p>
			</DescriptionSection>

			<DescriptionSection title="Construction">
				<p>
					Created using the <code>background-color</code> for the blue field and a <code>radial-gradient</code> for the yellow disc.
				</p>
			</DescriptionSection>

			<DescriptionSection title="Sources">
				<ul className="citation-list">
					<li>
						Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/palau_flag.html">"Palau"</ExternalLink>
					</li>
					<li>
						Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Palau">"Flag of Palau"</ExternalLink>
					</li>
				</ul>
			</DescriptionSection>
		</FlagArea>
	)
}

export default Palau;
