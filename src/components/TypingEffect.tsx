import React, { useState, useEffect } from "react";

interface TypingEffectProps {
    text: string;
    typeSpeed?: number;
    delay?: number;
    className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = React.memo(
    ({ text, typeSpeed = 80, delay = 1000, className = "" }) => {
        const [displayText, setDisplayText] = useState("");
        const [showCursor, setShowCursor] = useState(true);

        useEffect(() => {
            let charIndex = 0;

            const startTimer = setTimeout(() => {
                const typeChar = () => {
                    if (charIndex <= text.length) {
                        setDisplayText(text.slice(0, charIndex));
                        charIndex++;

                        if (charIndex <= text.length) {
                            setTimeout(typeChar, typeSpeed);
                        }
                    }
                };

                typeChar();
            }, delay);

            return () => clearTimeout(startTimer);
        }, [text, typeSpeed, delay]);

        useEffect(() => {
            const cursorTimer = setInterval(() => {
                setShowCursor((prev) => !prev);
            }, 530);

            return () => clearInterval(cursorTimer);
        }, []);

        return (
            <span className={`typing-effect ${className}`}>
                {displayText}
                <span
                    className={`typing-cursor ${
                        showCursor ? "visible" : "hidden"
                    }`}
                >
                    |
                </span>
            </span>
        );
    }
);

TypingEffect.displayName = "TypingEffect";

export default TypingEffect;
