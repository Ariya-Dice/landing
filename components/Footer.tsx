'use client';

import Link from 'next/link';
import { FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa'; // Removed FaLinkedin
import { SiTelegram } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white">DayPay</h3>
          <p className="mt-2 max-w-xs text-gray-400">
            Simple and secure crypto payment links, no signup needed.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          <Link href="#features" className="hover:text-white transition">
            Features
          </Link>
          <Link href="#demo" className="hover:text-white transition">
            Live Demo
          </Link>
          <Link href="#pricing" className="hover:text-white transition">
            Pricing
          </Link>
          <Link href="#comparison" className="hover:text-white transition">
            Comparison
          </Link>
          <Link href="#contact" className="hover:text-white transition">
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-5 text-gray-400 text-xl">
          <Link href="https://x.com/AriyaDice" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="hover:text-blue-400" />
          </Link>
          <Link href="https://t.me/lottoariya_xyz" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <SiTelegram className="hover:text-blue-400" />
          </Link>
          <Link href="https://github.com/Ariya-Dice/BardiPay" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="hover:text-gray-100" />
          </Link>
          <Link href="mailto:lottoariya@gmail.com" aria-label="Email">
            <FaEnvelope className="hover:text-red-400" />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} DayPay. All rights reserved.
      </div>
    </footer>
  );
}