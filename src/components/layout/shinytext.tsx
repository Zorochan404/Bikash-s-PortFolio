import React from 'react';

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;

    // Generate a unique ID for this instance to avoid conflicts
    const animationName = `shine-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes ${animationName} {
                        0% {
                            background-position: 200% 0;
                        }
                        100% {
                            background-position: -200% 0;
                        }
                    }
                `
            }} />
            <div
                className={`text-[#b5b5b5a4] bg-clip-text inline-block ${className}`}
                style={{
                    backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    animation: disabled ? 'none' : `${animationName} ${animationDuration} ease-in-out infinite`,
                }}
            >
                {text}
            </div>
        </>
    );
};

export default ShinyText;