"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const allSuggestions = [
        "Nike Air Max",
        "Running Shoes",
        "Basketball Shoes",
        "Sports Apparel",
        "Sneakers",
        "Training Gear",
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.trim()) {
            const filteredSuggestions = allSuggestions.filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        setSearchTerm(suggestion);
        setSuggestions([]);
    };

    const handleCancelClick = () => {
        setSearchTerm("");
        setSuggestions([]);
    };

    return (
        <div>
            {/* Top Bar */}
            <div className="w-full h-[36px] bg-[#F5F5F5] flex justify-between items-center px-4 sm:px-6">
                <img src="/HeaderLogo.svg" alt="Header Logo" className="w-5 h-5" />
                <div className="hidden sm:flex space-x-4 text-sm">
                    <Link href="/">Find a Store</Link>
                    <Link href="/Help">Help</Link>
                    <Link href="/JoinUs">Join Us</Link>
                    <Link href="/SignIn">Sign In</Link>
                </div>
            </div>

            {/* Main Header */}
            <div className="w-full h-[60px] flex justify-between items-center px-4 sm:px-6 relative">
                <img src="/NikeLogo.svg" alt="Nike Logo" className="w-14 h-6" />

                {/* Hamburger Menu for Mobile */}
                <button
                    className="sm:hidden flex items-center"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <img src="/Hamburger.svg" alt="Menu Icon" className="w-6 h-6" />
                </button>

                {/* Navigation Links */}
                <ul
                    className={`${
                        isMenuOpen ? "flex flex-col" : "hidden"
                    } absolute sm:static top-16 left-0 sm:flex sm:flex-row bg-white sm:bg-transparent w-full sm:w-auto sm:space-x-6 space-y-2 sm:space-y-0 text-base font-medium sm:items-center shadow-md sm:shadow-none z-50`}
                >
                    <li className="px-4 py-2 sm:p-0">New & Featured</li>
                    <li className="px-4 py-2 sm:p-0">Men</li>
                    <li className="px-4 py-2 sm:p-0">Women</li>
                    <li className="px-4 py-2 sm:p-0">Kids</li>
                    <li className="px-4 py-2 sm:p-0">Sale</li>
                    <li className="px-4 py-2 sm:p-0">SNKRS</li>
                </ul>

                {/* Search Bar */}
                <div className="relative w-[150px] sm:w-[300px]">
                    <div className="flex items-center bg-[#F5F5F5] rounded-full px-3 py-2">
                        <img src="/Search.svg" alt="Search Icon" className="w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleInputChange}
                            className="w-full bg-transparent outline-none text-sm text-gray-700 ml-2"
                        />
                        {searchTerm && (
                            <button
                                onClick={handleCancelClick}
                                className="text-sm text-gray-500 ml-2 hover:text-gray-700"
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                    {/* Suggestions Dropdown */}
                    {suggestions.length > 0 && (
                        <ul className="absolute w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-40 overflow-y-auto shadow-md">
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSuggestionClick(suggestion)}
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Icons */}
                <div className="flex space-x-4">
                    <Link href="/Wish">
                        <img src="/Wish.svg" alt="Wish Icon" className="w-6 h-6" />
                    </Link>
                    <Link href="/Cart">
                        <img src="/Cart.svg" alt="Cart Icon" className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;


