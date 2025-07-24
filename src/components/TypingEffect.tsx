import React, { useState, useEffect, useCallback, useMemo } from "react";

interface TypingEffectProps {
    texts: string[];
    typeSpeed?: number;
    eraseSpeed?: number;
    delay?: number;
    pauseTime?: number;
    className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = React.memo(
    ({
        texts,
        typeSpeed = 1000,
        eraseSpeed = 800,
        delay = 800,
        pauseTime = 2000,
        className = "",
    }) => {
        const [displayText, setDisplayText] = useState("");
        const [currentTextIndex, setCurrentTextIndex] = useState(0);
        const [isTyping, setIsTyping] = useState(false);
        const [isErasing, setIsErasing] = useState(false);
        const [showCursor, setShowCursor] = useState(true);

        const memoizedTexts = useMemo(() => texts, [texts]);

        const startErasingCycle = useCallback(() => {
            const currentText = memoizedTexts[currentTextIndex];
            let charIndex = currentText.length;

            setIsErasing(true);
            setIsTyping(false);

            const eraseChar = () => {
                if (charIndex >= 0) {
                    setDisplayText(currentText.slice(0, charIndex));
                    charIndex--;

                    if (charIndex >= 0) {
                        setTimeout(eraseChar, eraseSpeed);
                    } else {
                        setIsErasing(false);
                        setCurrentTextIndex(
                            (prevIndex) =>
                                (prevIndex + 1) % memoizedTexts.length
                        );
                    }
                }
            };

            eraseChar();
        }, [currentTextIndex, memoizedTexts, eraseSpeed]);

        const startTypingCycle = useCallback(() => {
            const currentText = memoizedTexts[currentTextIndex];
            let charIndex = 0;

            setIsTyping(true);
            setIsErasing(false);

            const typeChar = () => {
                if (charIndex <= currentText.length) {
                    setDisplayText(currentText.slice(0, charIndex));
                    charIndex++;

                    if (charIndex <= currentText.length) {
                        setTimeout(typeChar, typeSpeed);
                    } else {
                        setIsTyping(false);
                        setTimeout(startErasingCycle, pauseTime);
                    }
                }
            };

            typeChar();
        }, [
            currentTextIndex,
            memoizedTexts,
            typeSpeed,
            pauseTime,
            startErasingCycle,
        ]);

        useEffect(() => {
            if (!isTyping && !isErasing) {
                const startTimer = setTimeout(startTypingCycle, delay);
                return () => clearTimeout(startTimer);
            }
        }, [currentTextIndex, isTyping, isErasing, startTypingCycle, delay]);

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
