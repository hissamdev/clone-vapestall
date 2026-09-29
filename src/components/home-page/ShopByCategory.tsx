import { ArrowRight, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const categories = [
    {
        enabled: true,
        url: "/",
        goldenTag: "Best Sellers",
        title: "Vape Kits",
    },
    {
        enabled: true,
        url: "/",
        goldenTag: "Best Sellers",
        title: "Vape Kits",
    },
    {
        enabled: true,
        url: "/",
        goldenTag: "Best Sellers",
        title: "Vape Kits",
    },
];

const features = [
    {
        icon: <ShoppingBag color="black" className="inline" />,
        title: "Free Shipping",
        desc: "Terms & Conditions applied for free shipping and delivery",
    },
    {
        icon: <ShoppingBag color="black" className="inline" />,
        title: "Free Shipping",
        desc: "Terms & Conditions applied for free shipping and delivery",
    },
    {
        icon: <ShoppingBag color="black" className="inline" />,
        title: "Free Shipping",
        desc: "Terms & Conditions applied for free shipping and delivery",
    },
    {
        icon: <ShoppingBag color="black" className="inline" />,
        title: "Free Shipping",
        desc: "Terms & Conditions applied for free shipping and delivery",
    },
];

export default function ShopByCategory() {
    return (
        <section className="shop-by-category py-14 bg-white text-center">
            <p className="shop-by-category__label inline-flex items-center uppercase text-orange-400 text-sm font-semibold tracking-widest">
                Find your favorites
            </p>
            <h2 className="pt-2 text-[#25406f] text-5xl font-semibold font-outfit">
                Shop by Category
            </h2>
            <div className="pt-8 inline-flex gap-3 items-center">
                <span className="w-7 h-px bg-orange-400 shadow"></span>
                <div className="w-3 aspect-square rotate-45 bg-orange-400"></div>
                <span className="w-7 h-px bg-orange-400 shadow"></span>
            </div>

            <div className="category-boxes max-w-375 w-full mt-12 mx-auto px-12 flex flex-wrap justify-between gap-6 text-left">
                {categories.map((category, idx) => (
                    <CategoryBox
                        key={idx}
                        enabled={category.enabled}
                        goldenTag={category.goldenTag}
                        title={category.title}
                        url={category.url}
                    />
                ))}
            </div>

            <div className="mt-24 mx-auto px-12 flex gap-17 max-w-375">
                {features.map((feature, idx) => (
                    <FeatureBox
                        key={idx}
                        icon={feature.icon}
                        title={feature.title}
                        desc={feature.desc}
                    />
                ))}
            </div>
        </section>
    );
}

const CategoryBox = ({
    enabled,
    url,
    goldenTag,
    title,
}: {
    enabled: boolean;
    url: string;
    goldenTag: string;
    title: string;
}) => {
    return (
        <Link
            href={url}
            className="relative min-w-78.75 max-w-118.25 flex-1 h-125 rounded-3xl overflow-hidden group"
        >
            <Image
                alt=""
                src="/files/Collection_of_various_vaping_devices_and_accessories_on_a_dark_background.webp"
                fill
                className="object-cover transition-all duration-1000 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-between bg-black/20">
                <div className="px-6 py-6">
                    <span className="px-3 py-2 uppercase text-white/80 text-xs font-semibold tracking-wider border border-white/20 bg-[#1e1e1ed1]/40 rounded-full">
                        Coming soon
                    </span>
                </div>
                <div className="px-6 py-10">
                    <span className="px-4 py-2 uppercase text-xs font-bold border border-[#c9a84c] bg-[#c9a84c]/40 rounded-full">
                        {goldenTag}
                    </span>
                    <h3 className="pt-4 text-3xl font-bold">{title}</h3>
                    <span className="mt-10 w-fit px-4 py-2.5 flex items-center gap-3 text-sm font-bold bg-[#c9973d] rounded-full">
                        Shop Now <ArrowRight size={15} />
                    </span>
                </div>
            </div>
        </Link>
    );
};

const FeatureBox = ({
    icon,
    title,
    desc,
}: {
    icon: React.ReactNode;
    title: string;
    desc: string;
}) => {
    return (
        <div className="py-8 text-center border border-white/40 bg-[#E5EAF1] rounded-lg">
            {icon}
            <p className="text-[#25406F]">{title}</p>
            <p className="text-[#777777]">{desc}</p>
        </div>
    );
};
