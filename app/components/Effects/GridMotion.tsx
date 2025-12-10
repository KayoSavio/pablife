'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface GridMotionProps {
    color?: string
    colorBack?: string
}

function MovingPlane({ color = '#ff0055', colorBack = '#000000' }: GridMotionProps) {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (meshRef.current) {
            // Simple forward motion effect
            meshRef.current.position.z = (state.clock.elapsedTime * 2) % 2
        }
    })

    // Create a grid texture procedurally or use basic wireframe
    // For a retro-vaporwave look, a plane with wireframe is standard

    return (
        <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <planeGeometry args={[100, 100, 40, 40]} />
            <meshBasicMaterial
                color={color}
                wireframe
                transparent
                opacity={0.3}
                side={THREE.DoubleSide}
            />
        </mesh>
    )
}

function TopGrid({ color = '#00ffff' }) {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.z = (state.clock.elapsedTime * 2) % 2
        }
    })

    return (
        <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 5, 0]}>
            <planeGeometry args={[100, 100, 40, 40]} />
            <meshBasicMaterial
                color={color}
                wireframe
                transparent
                opacity={0.15}
            />
        </mesh>
    )
}

export function GridMotion({ color = '#ff0055' }: GridMotionProps) {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ antialias: false }}>
                <fog attach="fog" args={['#000000', 2, 10]} />
                <MovingPlane color={color} />
                <TopGrid color="#00ffff" />
            </Canvas>
            {/* Gradient overlay to fade edges */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05000a] via-transparent to-[#05000a]" />
        </div>
    )
}
