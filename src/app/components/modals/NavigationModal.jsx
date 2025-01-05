'use client'

import { X } from 'lucide-react'
import Link from 'next/link'
import AnimatedButton from '../buttons/AnimatedButton'




export function NavigationModal({ isOpen, onClose }) {
    return (
        <div
            className={`fixed inset-0 z-50 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            <div className="bg-black/95 rounded-xl w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto">
                <div className="px-6 py-8">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-white text-2xl">Navigation</h2>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1">
                        <ul className="space-y-6">
                            <li>
                                <Link
                                    href="/case-studies"
                                    className="flex items-center text-white text-5xl hover:text-gray-300 transition-colors"
                                >
                                    Case Studies
                                    <span className="ml-4 text-2xl opacity-50">13</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/agency"
                                    className="text-white text-5xl hover:text-gray-300 transition-colors"
                                >
                                    Our Agency
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-white text-5xl hover:text-gray-300 transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/news"
                                    className="text-white text-5xl hover:text-gray-300 transition-colors"
                                >
                                    News
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Footer */}
                    <div className="mt-auto">
                        <div className="mb-8">
                            <p className="text-white/60 mb-4">Follow us</p>
                            <div className="flex gap-6">
                                <Link href="#" className="text-white hover:text-gray-300 transition-colors">Instagram</Link>
                                <Link href="#" className="text-white hover:text-gray-300 transition-colors">Facebook</Link>
                                <Link href="#" className="text-white hover:text-gray-300 transition-colors">Twitter</Link>
                                <Link href="#" className="text-white hover:text-gray-300 transition-colors">Awwwards</Link>
                            </div>
                        </div>
                        <AnimatedButton
                            text="Get in touch"
                            className="bg-[#4F46E5] hover:bg-[#4338CA] text-white border-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

