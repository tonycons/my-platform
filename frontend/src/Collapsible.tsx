import React, { useState, useRef, useEffect } from "react";
import "./Collapsible.css";

interface CollapsibleProps {
    title: string;
    children: React.ReactNode;
    initialOpen?: boolean;
}

const Collapsible: React.FC<CollapsibleProps> = ({
    title,
    children,
    initialOpen = false
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(initialOpen);
    const [contentHeight, setContentHeight] = useState<string>("0px");

    const contentRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const toggleSection = (): void => setIsOpen((prev) => !prev);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
        }
    }, [isOpen]);

    const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>): void => {
        if (event.target !== event.currentTarget || event.propertyName !== "max-height" || !isOpen) {
            return;
        }

        sectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
    };

    return (
        <div className={`collapsible-section ${isOpen ? "is-open" : ""}`} ref={sectionRef}>
            {/* Header / Trigger Button */}
            <button
                className="collapsible-header"
                onClick={toggleSection}
                aria-expanded={isOpen}
                type="button"
            >
                <span className="collapsible-title">{title}</span>
                <span className="collapsible-icon">▼</span>
            </button>

            {/* Expandable Wrapper */}
            <div
                className="collapsible-wrapper"
                style={{ maxHeight: contentHeight }}
                onTransitionEnd={handleTransitionEnd}
            >
                <div className="collapsible-content" ref={contentRef}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Collapsible;
