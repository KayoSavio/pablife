'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

interface SquaresProps {
    color?: string
    opacity?: number
    speed?: number
    squareSize?: number
}

export function Squares({
    color = '#ff0055',
    opacity = 0.1,
    speed = 1,
    squareSize = 50
}: SquaresProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const container = containerRef.current
        const width = container.offsetWidth
        const height = container.offsetHeight

        // Calculate columns and rows
        const cols = Math.ceil(width / squareSize)
        const rows = Math.ceil(height / squareSize)
        const numSquares = cols * rows

        // Clear previous
        container.innerHTML = ''

        // Create squares
        for (let i = 0; i < numSquares; i++) {
            const sizeVariation = Math.random() * 0.8 + 0.2; // 20% to 100% size
            const actualSize = squareSize * sizeVariation;

            const square = document.createElement('div')
            square.style.width = `${actualSize}px`
            square.style.height = `${actualSize}px`
            square.style.position = 'absolute'
            square.style.backgroundColor = color
            square.style.opacity = '0'
            // Center the smaller squares within the grid cell
            square.style.left = `${(i % cols) * squareSize + (squareSize - actualSize) / 2}px`
            square.style.top = `${Math.floor(i / cols) * squareSize + (squareSize - actualSize) / 2}px`

            container.appendChild(square)

            // Animate randomly
            gsap.to(square, {
                opacity: Math.random() * opacity,
                scale: Math.random() > 0.8 ? 1.5 : 1, // Occasional pulse size
                duration: 0.5 + Math.random() * speed,
                repeat: -1,
                yoyo: true,
                delay: Math.random() * 5,
                ease: 'power1.inOut'
            })
        }

        return () => {
            gsap.killTweensOf(container.children)
        }
    }, [color, opacity, speed, squareSize])

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
            style={{ maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)' }}
        />
    )
}
