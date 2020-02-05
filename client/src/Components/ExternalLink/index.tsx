import React from "react";


type ExternalLinkProps = {
    href: string;
    className?: string;
}


const ExternalLink: React.FC<ExternalLinkProps> = ({ href, className, children }) => {
    return (
        <a href={ href } target="_blank" rel="noopener noreferrer">
            { children }
        </a>
    )
}

export default ExternalLink;
