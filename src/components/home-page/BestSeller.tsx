import SectionTopPattern from "../ui/SectionTopPattern";

const bestSellers = [
    {
        staticImage: "",
        hoverImage: "",
        url: "",
        title: "",
        price: 9.99,
        discount: 0,
        sale: "",
        totalReviews: 50,
        starsDisplay: 4,
    },
];

export default function BestSeller() {
    return (
        <section className="py-24 h-screen bg-white text-center">
            <SectionTopPattern
                label="Top Picks"
                heading="Best Selling"
                desc="Our most loved products, chosen by you"
            />

            <div className="grid grid-cols-4"></div>
        </section>
    );
}
