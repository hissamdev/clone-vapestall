import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GoldenButton from "../ui/GoldenButton";

export default function Hero() {
    return (
        <section className="relative py-8 h-[calc(100vh-202px)] bg-white">
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
                        <GoldenButton text="Explore" />
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
            <div className="absolute -bottom-4 w-full flex justify-center">
                <div className="relative w-[60%] flex justify-center">
                    <svg
                        width="100%"
                        height="100"
                        viewBox="0 0 160 32"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M19.9969 18H0.5V31H79.5H80H159V18H139.503C132.284 18 125.51 14.5137 121.314 8.63953C117.665 3.53153 111.775 0.5 105.497 0.5H80H79.5H54.0027C47.7255 0.5 41.8346 3.53153 38.186 8.63953C33.9902 14.5137 27.2157 18 19.9969 18Z"
                            fill="white"
                            stroke="white"
                        />
                    </svg>
                    <div className="absolute top-1/2 bottom 1/2 -translate-y-full w-fit z-20 text-orange-400">
                        Buttons
                    </div>
                </div>
            </div>
        </section>
    );
}
