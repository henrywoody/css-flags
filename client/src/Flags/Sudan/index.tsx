import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Sudan: React.FC = () => {
	return (
		<FlagArea title="Sudan">
			<DescriptionSection title="Description">
				<p>
					The current flag of Sudan (Arabic: علم السودان‎) was adopted on 20 May 1970 and consists of a horizontal red-white-black tricolour with a green triangle at the hoist. The flag is based on the Arab Liberation Flag shared by Egypt, Iraq, Syria and Yemen that uses a subset of the Pan-Arab colours in which green is less significant. Prior to the 1969 military coup of Gaafar Nimeiry, a blue-yellow-green tricolour design was used. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Sudan">Wikipedia</ExternalLink>)
				</p>
			</DescriptionSection>

			<DescriptionSection title="Construction">
				<p>
					Created with a <code>linear-gradient</code> for the tricolor stripes and a <code>conic-gradient</code> for the triangle on the hoist.
				</p>
			</DescriptionSection>

			<DescriptionSection title="Sources">
				<ul className="citation-list">
					<li>
						Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Sudan">"Flag of Sudan"</ExternalLink>
					</li>
					<li>
						Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/sudan_flag.html">"Sudan"</ExternalLink>
					</li>
				</ul>
			</DescriptionSection>
		</FlagArea>
	)
}

export default Sudan;
