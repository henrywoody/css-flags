import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Kuwait: React.FC = () => {
	return (
		<FlagArea title="Kuwait" flagName="Alam Baladii | Derti">
			<DescriptionSection title="Description">
				<p>
					The flag of Kuwait (Arabic: علم الكويت‎) was adopted on September 7, 1961, and officially hoisted November 24, 1961. Before 1961, the flag of Kuwait was red and white, like those of other Persian Gulf states at the time, with the field being red and words or charges being written in white. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Kuwait">Wikipedia</ExternalLink>)
				</p>
			</DescriptionSection>

			<DescriptionSection title="Construction">
				<p>
					Created with a <code>linear-gradient</code> for the green and red stripes, a <code>conic-gradient</code> for the black triangle, and a <code>linear-gradient</code> offset to the right for the white stripe.
				</p>
			</DescriptionSection>

			<DescriptionSection title="Sources">
				<ul className="citation-list">
					<li>
						Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Kuwait">"Flag of Kuwait"</ExternalLink>
					</li>
					<li>
						Scheme Color: <ExternalLink href="https://www.schemecolor.com/kuwait-flag-colors.php">"Kuwait Flag Colors"</ExternalLink>
					</li>
					<li>
						Vexilla Mundi: <ExternalLink href="http://www.vexilla-mundi.com/kuwait_flag.html">"Kuwait"</ExternalLink>
					</li>
				</ul>
			</DescriptionSection>
		</FlagArea>
	)
}

export default Kuwait;
