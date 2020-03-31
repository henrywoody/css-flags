import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Lithuania: React.FC = () => {
	return (
		<FlagArea title="Lithuania">
			<DescriptionSection title="Description">
				<p>
					The flag of Lithuania (Lithuanian: <em>Lietuvos vėliava</em>) consists of a horizontal tricolor of yellow, green, and red. It was adopted on 25 April 1918 during Lithuania's first period of independence (in the 20th century) from 1918 to 1940, which ceased with the occupation first by Soviet Russia and Lithuania's annexation into the Soviet Union, and then by Germany (1941–1944). During the post-World War II Soviet occupation, from 1945 until 1989, the Soviet Lithuanian flag consisted first of a generic red Soviet flag with the name of the republic, then changed to the red flag with white and green bands at the bottom. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Lithuania">Wikipedia</ExternalLink>)
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
						Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_Lithuania">"Flag of Lithuania"</ExternalLink>
					</li>
				</ul>
			</DescriptionSection>
		</FlagArea>
	)
}

export default Lithuania;
