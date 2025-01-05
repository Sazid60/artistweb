'use client'

import { Menu } from 'lucide-react'
import { useState, useEffect } from "react"
import AnimatedButton from '../buttons/AnimatedButton'
import { NavigationModal } from '../modals/NavigationModal'



export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
        setHydrated(true)

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setIsVisible(false)
            } else {
                // Scrolling up
                setIsVisible(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    if (!hydrated) {
        return null
    }

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isVisible
                    ? 'translate-y-0'
                    : '-translate-y-full'
                    }`}
            >
                <div className="backdrop-blur-md bg-white/70 shadow-sm">
                    <div className="flex items-center justify-between px-6 py-4">
                        {/* Logo */}
                        <div className="font-bold text-xl">
                            <a className="aw_logo" href="/" aria-label="Home">
                                <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.06 32" className="w-[64px] h-[32px]">
                                    <rect id="line1" x="12.31" width="6.78" height="32" />
                                    <polygon id="angle1" points="0 32 6.78 32 12.31 0 5.53 0 0 32" />
                                    <rect id="line2" x="25.88" width="6.78" height="32" />
                                    <polygon id="angle2" points="32.66 32 39.44 32 44.97 0 38.19 0 32.66 32" />
                                    <rect id="line3" x="44.97" width="6.78" height="32" />
                                    <polygon id="angle3" points="57.28 0 51.75 32 58.53 32 64.06 0 57.28 0" />
                                </svg>
                            </a>
                        </div>

                        {/* Right side items */}
                        <div className="flex items-center gap-4">
                            <AnimatedButton className='border1 border-[#545CFF]' text="Contact Us" />

                            {/* Menu Icon */}
                            <button
                                className="p-2 hover:bg-black/5 rounded-full transition-colors"
                                onClick={() => setIsModalOpen(true)}
                                aria-label="Open navigation menu"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <NavigationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}

