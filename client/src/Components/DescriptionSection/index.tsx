import React from "react";
import "./style.css";


type DescriptionSectionProps = {
    title: string;
}


const DescriptionSection: React.FC<DescriptionSectionProps> = ({ title, children }) => {
    return (
        <section className="description-section">
            <h3>{ title }</h3>

            <div className="section-content">
                { children }
            </div>
        </section>
    )
}

export default DescriptionSection;
