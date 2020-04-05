import React from "react";
import FlagArea from "../FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const Home: React.FC = () => {
    return (
        <FlagArea title="CSS Flags" headingLevel={ 1 }>
            <DescriptionSection title="Description">
                <p>
                    These are flags recreated using CSS.
                    Each flag is a single <code>div</code> whose design is created using only CSS (no sub elements and no JS).
                    Most of these are national flags from various countries, but this might be expanded to include other groups'/organizations' flags.
                </p>

                <p>
                    The flag above is the flag for this project.
                    Its design combines the letter flags for CSS from the <ExternalLink href="https://en.wikipedia.org/wiki/International_Code_of_Signals">International Code of Signals</ExternalLink>, with the two S flags overlayed on top of the C flag.
                </p>

                <p>
                    Check out the code on <ExternalLink href="https://github.com/henrywoody/css-flags">GitHub</ExternalLink>.
                </p>
            </DescriptionSection>

            <DescriptionSection title="Related Items">
                <p>
                    If you like this page you might also like:
                </p>

                <ul>
                    <li>
                        <ExternalLink href="https://a.singlediv.com/">A Single Div</ExternalLink> by Lynn Fisher
                    </li>
                    <li>
                        <ExternalLink href="http://mathcs.pugetsound.edu/~aasmith/flags">Flag Redesigns</ExternalLink> by Adam Smith
                    </li>
                    <li>
                        <ExternalLink href="https://twitter.com/FlagsMashupBot">Flags Mashup Bot</ExternalLink>
                    </li>
                    <li>
                        <ExternalLink href="https://www.amazon.com/Good-Flag-Bad-Ted-Kaye/dp/097477281X/ref=sr_1_1?dchild=1&keywords=good+flag+bad+flag&qid=1586056071&s=books&sr=1-1">Good Flag, Bad Flag</ExternalLink> by Ted Kaye
                    </li>
                    <li>
                        <ExternalLink href="https://www.ted.com/talks/roman_mars_why_city_flags_may_be_the_worst_designed_thing_you_ve_never_noticed">Why city flags may be the worst-designed thing you've never noticed</ExternalLink> by Roman Mars
                    </li>
                </ul>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                The flag above was constructed using a <code>linear-gradient</code> for the stripes of the C flag, and the boxes (for the S flags) were created with <code>linear-gradient</code>s with positioning attributes.
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags">"Gallery of sovereign state flags"</ExternalLink>
                    </li>
                    <li>
                        Wikipedia: <ExternalLink href="https://en.wikipedia.org/wiki/International_Code_of_Signals">"International Code of Signals"</ExternalLink>
                    </li>
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default Home;
