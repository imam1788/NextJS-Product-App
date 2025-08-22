"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/20 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide text-blue-600">
          MyStore
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700 transition">
            Home
          </Link>
          <Link href="/products" className="px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700 transition">
            Products
          </Link>

          {session && (
            <Link href="/dashboard/add-product" className="px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700 transition">
              Add Product
            </Link>
          )}

          {session ? (
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full hover:from-blue-500 hover:to-purple-500 transition"
            >
              Logout
            </button>
          ) : (
            <Link href="/login" className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full hover:from-blue-500 hover:to-purple-500 transition">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl px-2 py-1" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "≡"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white/90 backdrop-blur-md">
          <Link href="/" className="block px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700 transition">
            Home
          </Link>
          <Link href="/products" className="block px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700 transition">
            Products
          </Link>

          {session && (
            <Link href="/dashboard/add-product" className="block px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700 transition">
              Add Product
            </Link>
          )}

          {session ? (
            <button
              onClick={() => signOut()}
              className="block w-full text-left px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700 transition"
            >
              Logout
            </button>
          ) : (
            <Link href="/login" className="block px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700 transition">
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
