import ProductCard from "../ui/ProductCard";
import SectionTopPattern from "../ui/SectionTopPattern";
import { bestSellers } from "./BestSeller";

export default function NewArrivals() {
    return (
        <section className="pb-18 text-center bg-white">
            <SectionTopPattern
                label="Top Picks"
                heading="New Arrivals"
                desc="Our most loved products, chosen by you"
            />
            <div className="mt-12 mx-auto max-w-375 grid grid-cols-4 gap-4">
                {bestSellers.map((product, idx) => (
                    <ProductCard key={idx} {...product} />
                ))}
            </div>
        </section>
    );
}
