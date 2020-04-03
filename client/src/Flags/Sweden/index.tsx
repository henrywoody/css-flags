import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Sweden: React.FC = () => {
	return (
		<FlagArea title="Sweden">
			<DescriptionSection title="Description">
				<p>
					The flag of Sweden (Swedish: <em>Sveriges flagga</em>) consists of a yellow or gold Nordic cross (i.e. an asymmetrical horizontal cross, with the crossbar closer to the hoist than the fly, with the cross extending to the edge of the flag) on a field of blue. The Nordic cross design traditionally represents Christianity. The design and colours of the Swedish flag are believed to have been inspired by the present coat of arms of Sweden of 1442, which is blue divided quarterly by a cross pattée of gold, and modelled on the Danish flag. Blue and yellow have been used as Swedish colours at least since Magnus III's royal coat of arms of 1275. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Sweden">Wikipedia</ExternalLink>)
				</p>
			</DescriptionSection>

			<DescriptionSection title="Construction">
				<p>
					Created with a blue <code>background-color</code> and a <code>linear-gradient</code> for each of the lines in the cross.
				</p>
			</DescriptionSection>

			<DescriptionSection title="Sources">
				<ul className="citation-list">
					<li>
						Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/sweden_flag.html">"Sweden"</ExternalLink>
					</li>
					<li>
						Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Sweden">"Flag of Sweden"</ExternalLink>
					</li>
				</ul>
			</DescriptionSection>
		</FlagArea>
	)
}

export default Sweden;
