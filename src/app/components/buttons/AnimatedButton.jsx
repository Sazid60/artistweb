'use client'

import React, { useState } from 'react'

const AnimatedButton = ({ text, className = '', speed = 700 }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative overflow-hidden border border-black rounded-full px-6 py-2 group ${className}`}
        >
            <div className="relative h-5 w-20">
                <span
                    style={{ transitionDuration: `${speed}ms` }}
                    className={`absolute left-0 w-full transition-transform ${isHovered ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
                >
                    {text}
                </span>
                <span
                    style={{ transitionDuration: `${speed}ms` }}
                    className={`absolute left-0 w-full transition-transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                >
                    {text}
                </span>
            </div>
        </button>
    )
}

export default AnimatedButton
