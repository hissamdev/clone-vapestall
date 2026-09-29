import { MoveUpRight } from "lucide-react";
import Link from "next/link";

export default function GoldenButton({ text }: { text: string }) {
    return (
        <Link
            href="/"
            className="mt-6 px-4 py-3 w-fit flex items-center gap-2 bg-[#b48648] font-bold rounded-full"
        >
            {text}
            <span className="flex items-center justify-center bg-black/20 rounded-full w-7 aspect-square">
                <MoveUpRight size={18} strokeWidth={2} />
            </span>
        </Link>
    );
}
