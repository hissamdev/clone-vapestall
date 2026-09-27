import {
    Heart,
    PersonStandingIcon,
    Phone,
    ShoppingBag,
    User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <div>
            <TopRibbon />
            <header className="px-12 bg-[#1D3359]">
                <div className="mx-auto pt-8 max-w-375 flex justify-between items-center border-b border-white/20">
                    <Link
                        href="/"
                        className="block relative w-20 aspect-square"
                    >
                        <Image
                            alt="Best authentic disposable vape store in UAE"
                            src="/files/Vape-stall-logo-Black.webp"
                            fill
                        />
                    </Link>

                    <div>
                        <input
                            placeholder="Search"
                            className="w-[516px] bg-white rounded-full"
                        />
                    </div>

                    <div className="flex">
                        <div className="px-2 group">
                            <Heart
                                strokeWidth={1}
                                className="group-hover:text-white/60 cursor-pointer"
                            />
                        </div>
                        <div className="px-2 group">
                            <User
                                strokeWidth={1}
                                className="group-hover:text-white/60 cursor-pointer"
                            />
                        </div>
                        <div className="px-2 group">
                            <ShoppingBag
                                strokeWidth={1}
                                className="group-hover:text-white/60 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

const TopRibbon = () => {
    const marqueList = [
        "📦 Free Delivery on Orders Above AED 350",
        "✅ 100% Authentic Products – Original Brands Guaranteed",
        "⭐ 20,00000+ Happy Customers Across UAE",
        "🔒 Secure Payment | COD Available",
        "📦 Free Delivery on Orders Above AED 350",
        "📦 Free Delivery on Orders Above AED 350",
    ];

    return (
        <div className="header-ribbon w-full flex bg-yellow-800">
            <div className="flex-1 flex items-center bg-[#253F6D] gap-12 text-xs whitespace-nowrap overflow-hidden">
                {marqueList.map((marqueItem, idx) => (
                    <div key={idx}>
                        <span className="pr-2 text-[#f88a07]">✦</span>
                        {marqueItem}
                    </div>
                ))}
            </div>
            <div className="px-14 flex divide-x divide-white/30">
                <RibbonLinks url="/">
                    <Phone size={12} /> +123 4567890
                </RibbonLinks>
                <RibbonLinks url="/">About Us</RibbonLinks>
                <RibbonLinks url="/">Contact Us</RibbonLinks>
            </div>
        </div>
    );
};

const RibbonLinks = ({
    children,
    url,
}: {
    children: React.ReactNode;
    url: string;
}) => {
    return (
        <Link
            href={url}
            className="px-4 py-3 flex items-center gap-2 text-[11.5px] font-bold"
        >
            {children}
        </Link>
    );
};
