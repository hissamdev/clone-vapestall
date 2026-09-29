import Image from "next/image";
import Link from "next/link";

export default function Brands() {
    const brands = [
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/Elfbar_logo.png?v=1774729672&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/Al_Fakher_logo.png?v=1774729809&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/Tugboat_logo.png?v=1777818724&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/Xtra_logo.png?v=1774729958&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/Vapes_Bars_logo.png?v=1777823688&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/WAKA_logo.png?v=1777824385&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/Flonq_logo.png?v=1777824981&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/Nasty_logo.png?v=1777836063&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/IGNITE_logo.webp?v=1774730780&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/Air_Bar_vape_logo.png?v=1777835578&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/Pod_Salt.png?v=1777817218&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/VOZOL_logo.png?v=1774730117&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/UWELL_Caliburn_logo.png?v=1774716100&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/OXVA_LOGO_baeb0f69-f059-4189-9207-ec34d58e9483.png?v=1774713630&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/SMOK_logo.png?v=1774716425&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/GEEK_VAPE_logo.png?v=1774718045&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/VAPORESSO_logo.png?v=1774729185&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/VOOPOO_logo.png?v=1774729327&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/Lost_Vape_logo.png?v=1774729458&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/Silvaper_logo.png?v=1774730347&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/HQD_logo.png?v=1774730529&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/Fummo_logo.png?v=1774730635&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/VGOD_logo.png?v=1779544649&width=150",
        },
        {
            url: "/",
            image: "https://vapstall.ae/cdn/shop/files/dr_vapes_logo.png?v=1779546999&width=150",
        },
    ];

    return (
        <section className="py-12 bg-[#F1F4F9]">
            <h2 className="text-center text-3xl text-black font-bold">
                Brands
            </h2>

            <div className="mt-4 mx-auto grid grid-cols-8 grid-rows-3 w-full max-w-375 bg-[#F4F8FF]">
                {brands.map((brand, idx) => (
                    <Link
                        key={idx}
                        href={brand.url}
                        className="relative border overflow-clip w-full aspect-square"
                    >
                        <Image
                            alt=""
                            src={brand.image}
                            fill
                            className="object-contain p-2.5"
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}
