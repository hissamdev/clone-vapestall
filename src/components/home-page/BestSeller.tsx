import SectionTopPattern from "../ui/SectionTopPattern";
import ProductCard from "../ui/ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ViewAll from "../ui/ViewAll";

export type ProductCardType = {
    staticImage: string;
    hoverImage: string;
    url: string;
    title: string;
    price: number;
    discount: number;
    sale: string;
    totalReviews: number;
    starsDisplay: number;
};

export const bestSellers = [
    {
        staticImage:
            "https://vapstall.ae/cdn/shop/files/Buy_Elf_bar_Ice_King_30000_Puffs_Disposable_Vape_50mg_in_UAE.png",
        hoverImage:
            "https://vapstall.ae/cdn/shop/files/ElfBarIceKing30000PuffsBlueberryice.png",
        url: "https://vapstall.ae/products/buy-nasty-bolt-50000-puff-50mg-disposable-vape-in-uae",
        title: "Nasty Bolt 50000 puff 50mg Disposable Vape in UAE",
        price: 9.99,
        discount: 0,
        sale: "",
        totalReviews: 50,
        starsDisplay: 4,
    },
    {
        staticImage:
            "https://vapstall.ae/cdn/shop/files/Buy_Elf_bar_Ice_King_30000_Puffs_Disposable_Vape_50mg_in_UAE.png",
        hoverImage:
            "https://vapstall.ae/cdn/shop/files/ElfBarIceKing30000PuffsBlueberryice.png",
        url: "https://vapstall.ae/products/buy-nasty-bolt-50000-puff-50mg-disposable-vape-in-uae",
        title: "Nasty Bolt 50000 puff 50mg Disposable Vape in UAE",
        price: 9.99,
        discount: 0,
        sale: "",
        totalReviews: 50,
        starsDisplay: 4,
    },
    {
        staticImage:
            "https://vapstall.ae/cdn/shop/files/Buy_Elf_bar_Ice_King_30000_Puffs_Disposable_Vape_50mg_in_UAE.png",
        hoverImage:
            "https://vapstall.ae/cdn/shop/files/ElfBarIceKing30000PuffsBlueberryice.png",
        url: "https://vapstall.ae/products/buy-nasty-bolt-50000-puff-50mg-disposable-vape-in-uae",
        title: "Nasty Bolt 50000 puff 50mg Disposable Vape in UAE",
        price: 9.99,
        discount: 0,
        sale: "",
        totalReviews: 50,
        starsDisplay: 4,
    },
    {
        staticImage:
            "https://vapstall.ae/cdn/shop/files/Buy_Elf_bar_Ice_King_30000_Puffs_Disposable_Vape_50mg_in_UAE.png",
        hoverImage:
            "https://vapstall.ae/cdn/shop/files/ElfBarIceKing30000PuffsBlueberryice.png",
        url: "https://vapstall.ae/products/buy-nasty-bolt-50000-puff-50mg-disposable-vape-in-uae",
        title: "Nasty Bolt 50000 puff 50mg Disposable Vape in UAE",
        price: 9.99,
        discount: 0,
        sale: "",
        totalReviews: 50,
        starsDisplay: 4,
    },
];

export default function BestSeller() {
    return (
        <section className="py-24 px-12.5 bg-white text-center">
            <SectionTopPattern
                label="Top Picks"
                heading="Best Selling"
                desc="Our most loved products, chosen by you"
            />

            <div className="mt-16 mx-auto max-w-375 grid grid-cols-4 gap-6 text-left">
                {bestSellers.map((product, idx) => (
                    <ProductCard key={idx} {...product} />
                ))}
            </div>

            <ViewAll />
        </section>
    );
}
