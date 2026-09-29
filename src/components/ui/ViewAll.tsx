import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ViewAll() {
    return (
        <Link
            href=""
            className="mt-12 inline-flex items-center gap-1.5 py-3 px-6 bg-[#25406F] rounded-full font-bold"
        >
            View All <ArrowRight size={14} />
        </Link>
    );
}
