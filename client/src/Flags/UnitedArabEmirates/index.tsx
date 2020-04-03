import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const UnitedArabEmirates: React.FC = () => {
    return (
        <FlagArea title="United Arab Emirates">
            <DescriptionSection title="Description">
                <p>
                    The flag of the United Arab Emirates (Arabic: علم دولة الإمارات العربية المتحدة‎) contains the Pan-Arab colors red, green, white, and black. It was designed in 1971 by Abdullah Mohammed Al Maainah, who was 19 years old at that time, and was adopted on December 2, 1971. The main theme of the flag's four colors is the unity of Arab nations. In 2008, there was a minor change to the Emblem. (Source: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_the_United_Arab_Emirates">Wikipedia</ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    Created with a <code>linear-gradient</code> for the vertical stripes an another for the horizontal stripe.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Flag_of_the_United_Arab_Emirates">"Flag of the United Arab Emirates"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default UnitedArabEmirates;
