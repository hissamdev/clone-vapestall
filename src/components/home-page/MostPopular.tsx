import Image from "next/image";
import GoldenButton from "../ui/GoldenButton";
import ProductCard from "../ui/ProductCard";
import SectionTopPattern from "../ui/SectionTopPattern";
import ViewAll from "../ui/ViewAll";
import { bestSellers } from "./BestSeller";

export default function MostPopular() {
    return (
        <section className="py-12 px-12.5 text-center bg-white">
            <SectionTopPattern
                label="Trending Now"
                heading="Most Popular"
                desc="What everyone is reaching for right now"
            />
            <div className="py-12 max-w-375 w-full mx-auto  grid grid-cols-4 gap-4">
                {bestSellers.map((product, idx) => (
                    <ProductCard key={idx} {...product} />
                ))}
            </div>

            <ViewAll />

            <div className="mt-8 max-w-375 w-full mx-auto flex gap-8 text-left">
                <DisplayBoxes
                    title="Vape Kits & Pod Systems"
                    desc="Shop high-performance vape kits and pod systems designed for
                    smooth flavor, long battery life, and everyday use."
                    buttonLabel="Shop Kits"
                    imageAlt=""
                    imageUrl="https://vapstall.ae/cdn/shop/files/generate-square-transparent-background-vap-product-image.png?v=1773533465&width=750"
                    bgColor="#6EBDB8"
                />
                <DisplayBoxes
                    title="Vape Kits & Pod Systems"
                    desc="Shop high-performance vape kits and pod systems designed for
                    smooth flavor, long battery life, and everyday use."
                    buttonLabel="Shop Kits"
                    imageAlt=""
                    imageUrl="https://vapstall.ae/cdn/shop/files/generate-square-transparent-background-vap-product-image.png?v=1773533465&width=750"
                    bgColor="#E0BEA5"
                />
            </div>
        </section>
    );
}

const DisplayBoxes = ({
    title,
    desc,
    buttonLabel,
    imageAlt,
    imageUrl,
    bgColor,
}: {
    title: string;
    desc: string;
    buttonLabel: string;
    imageAlt: string;
    imageUrl: string;
    bgColor: string;
}) => {
    return (
        <div
            className={`p-10 flex items-center justify-between rounded-4xl`}
            style={{ backgroundColor: bgColor }}
        >
            <div className="max-w-184 h-fit">
                <h3 className="text-black font-bold text-4xl">{title}</h3>
                <p className="pt-4 text-black">{desc}</p>
                <GoldenButton text={buttonLabel} />
            </div>
            <div className="relative w-full aspect-square">
                <Image
                    alt={imageAlt}
                    src={imageUrl}
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    );
};
