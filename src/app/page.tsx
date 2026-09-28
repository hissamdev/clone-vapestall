import Image from "next/image";
import Header from "../components/ui/Header";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

export default function Home() {
    return (
        <section className="py-8 h-[calc(100vh-202px)] bg-white">
            <div className="h-full">
                <div className="px-25 py-15 h-full flex justify-between items-center bg-orange-800 rounded-xl">
                    <div className="max-w-125">
                        <span className="block w-fit mb-4 px-5 py-2 text-xs font-bold text-[#1a2f52] bg-[#f78804] rounded-full">
                            Exclusive offer up to 10% OFF
                        </span>
                        <h1 className="font-bold text-[36px] leading-tight">
                            Buy Authentic Vape in Dubai — Fast Delivery,Best
                            Prices
                        </h1>
                        <p className="mt-6 text-[14px] text-[#f0d0c2] font-bold">
                            Shop premium disposable vapes, pod systems, and
                            starter kits from top brands. Delivered anywhere in
                            Dubai, UAE.
                        </p>
                        <Link
                            href="/"
                            className="mt-6 px-4 py-3 w-fit flex items-center gap-2 bg-[#b48648] font-bold rounded-full"
                        >
                            Explore
                            <span className="flex items-center justify-center bg-black/20 rounded-full w-7 aspect-square">
                                <MoveUpRight size={18} strokeWidth={2} />
                            </span>
                        </Link>
                    </div>
                    <div className="relative w-100 aspect-square">
                        <Image
                            alt="alt text"
                            src="/files/EW9000_Cherry_Strazz_full_kit_result.webp"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
