import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GoldenButton from "../ui/GoldenButton";

export default function Hero() {
    return (
        <section
            className={`relative
                h-[calc(100vh-170px)] py-8
                bg-white
                md:h-[calc(100vh-202px)]`}
        >
            <div className="h-full">
                <div
                    className={`flex h-full flex-col-reverse items-start justify-between
                        rounded-xl bg-orange-800 px-7.5 py-15
                        md:flex-row md:gap-12 md:items-center md:px-25`}
                >
                    <div className="md:max-w-125">
                        <span
                            className={`mb-4 block w-fit rounded-full
                                bg-[#f78804] px-5 py-2
                                text-xs font-bold text-[#1a2f52]`}
                        >
                            Exclusive offer up to 10% OFF
                        </span>
                        <h1 className="font-bold leading-tight md:text-[36px]">
                            Buy Authentic Vape in Dubai — Fast Delivery,Best
                            Prices
                        </h1>
                        <p className="mt-6 text-[14px] font-bold text-[#f0d0c2]">
                            Shop premium disposable vapes, pod systems, and
                            starter kits from top brands. Delivered anywhere in
                            Dubai, UAE.
                        </p>
                        <GoldenButton text="Explore" />
                    </div>
                    <div
                        className={`relative aspect-square w-full max-w-45
                            self-center md:max-w-100`}
                    >
                        <Image
                            alt="alt text"
                            src="/files/EW9000_Cherry_Strazz_full_kit_result.webp"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-4 flex w-full justify-center">
                <div className="relative flex w-[60%] justify-center">
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
                    <div
                        className={`absolute top-1/2 bottom 1/2 z-20 w-fit
                            -translate-y-full text-orange-400`}
                    >
                        Buttons
                    </div>
                </div>
            </div>
        </section>
    );
}
