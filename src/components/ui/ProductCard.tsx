import { Star } from "lucide-react";
import Image from "next/image";
import type { ProductCardType } from "../home-page/BestSeller";

export default function ProductCard({
    staticImage,
    title,
    totalReviews,
}: ProductCardType) {
    return (
        <div className="px-4 py-8 border">
            <div className="relative w-84.5 aspect-square">
                <Image
                    src={staticImage}
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>

            <h3 className="mt-6 text-black font-semibold">{title}</h3>
            <div className="mt-4 flex items-center gap-4">
                <div className="flex gap-0.5">
                    <Star size={14} color="black" />
                    <Star size={14} color="black" />
                    <Star size={14} color="black" />
                    <Star size={14} color="black" />
                    <Star size={14} color="black" />
                </div>
                <span className="pt-px text-black">{totalReviews} Reviews</span>
            </div>
        </div>
    );
}
