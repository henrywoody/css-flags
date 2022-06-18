import React from "react";
import "./style.css";

export type DescriptionSectionProps = {
    title: string;
    children?: React.ReactNode;
}

export function DescriptionSection({ title, children }: DescriptionSectionProps) {
    return (
        <section className="description-section">
            <h3>{ title }</h3>

            <div className="section-content">
                { children }
            </div>
        </section>
    )
}
