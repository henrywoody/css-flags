import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Syria: React.FC = () => {
	return (
		<FlagArea title="Syria">
			<DescriptionSection title="Description">
				<p>
					The current flag was first adopted in 1958 to represent Syria as part of the United Arab Republic, and was used until 1961. It was readopted in 1980. Since its first adoption, variations of the red-white-black flag have been used in various Arab Unions of Syria with Egypt, Libya, Sudan, Yemen, and Iraq. Although Syria is not part of any Arab state union, the flag of the United Arab Republic was readopted to show Syria's commitment to Arab unity. The usage of the flag has become disputed because it is often associated with the Ba'ath Party and has come to represent parties loyal to Bashar al-Assad's government in the Syrian civil war. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Syria">Wikipedia</ExternalLink>)
				</p>
			</DescriptionSection>

			<DescriptionSection title="Construction">
				<p>
					Created with a <code>linear-gradient</code> for the stripes and six <code>conic-gradients</code> for each of the stars.
				</p>
			</DescriptionSection>

			<DescriptionSection title="Sources">
				<ul className="citation-list">
					<li>
						Wikimedia: <ExternalLink href="https://commons.wikimedia.org/wiki/File:Approximate_Construction_of_the_Flag_of_Syria.svg">"Approximate Construction of the Flag of Syria"</ExternalLink>
					</li>
					<li>
						Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Syria">"Flag of Syria"</ExternalLink>
					</li>
				</ul>
			</DescriptionSection>
		</FlagArea>
	)
}

export default Syria;
