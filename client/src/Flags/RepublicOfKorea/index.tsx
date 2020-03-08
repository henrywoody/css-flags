import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const RepublicOfKorea: React.FC = () => {
	return (
		<FlagArea title="Republic of Korea" flagName="태극기 (Taegukgi / Taegeukgi)">
			<DescriptionSection title="Description">
				<p>
					The flag of South Korea, also known as the Taegukgi (also spelled as <em>Taegeukgi</em>, lit. "<em>Taegeuk flag</em>"), has three parts: a white rectangular background, a red and blue Taegeuk in its center, and four black trigrams one toward each corner. The first pattern of Taegukgi was made by Kojong. Flags similar to the current Taegeukgi were used as the national flags of Korea by the Joseon dynasty, the Korean Empire, and by the Korean exile government during Japanese rule. It has continued to be used as a national flag even after the establishment of the South Korean state on August 15, 1948. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_South_Korea">Wikipedia</ExternalLink>)
				</p>
			</DescriptionSection>

			<DescriptionSection title="Construction">
				<p>
					The Taegeuk in the center was created with a <code>linear-gradient</code> to create the red and blue background halves, overlayed with a <code>radial-gradient</code> to crop the shape to a circle.
					Then overlayed with smaller <code>radial-gradient</code>s to form the overlaping red and blue sections.
				</p>

				<p>
					The bars around the Taegeuk were created with <code>linear-gradient</code>s on the <code>::before</code> and <code>::after</code> pseudo elements, which were each rotated.
				</p>
			</DescriptionSection>

			<DescriptionSection title="Sources">
				<ul className="citation-list">
					<li>
						Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_South_Korea">"Flag of South Korea"</ExternalLink>
					</li>
				</ul>
			</DescriptionSection>
		</FlagArea>
	)
}

export default RepublicOfKorea;
