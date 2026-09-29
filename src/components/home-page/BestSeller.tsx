import SectionTopPattern from "../ui/SectionTopPattern";
import SmallLabel from "../ui/SmallLabel";

export default function BestSeller() {
    return (
        <section className="py-24 h-screen bg-white text-center">
            <SectionTopPattern
                label="Top Picks"
                heading="Best Selling"
                desc="Our most loved products, chosen by you"
            />
        </section>
    );
}
