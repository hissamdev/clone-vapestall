import SmallLabel from "./SmallLabel";

export default function SectionTopPattern({
    label,
    heading,
    desc,
}: {
    label: string;
    heading: string;
    desc: string;
}) {
    return (
        <>
            <div className="gradient__label mb-6" />
            <SmallLabel label={label} />
            <h2 className="pt-4 text-[40px] text-[#25406f] font-semibold font-outfit">
                {heading}
            </h2>
            <div className="mt-4 flex justify-center items-center gap-1">
                <span className="w-1.5 aspect-square bg-gray-400 rounded-full" />
                <span className="w-3 aspect-square bg-amber-300 rounded-full" />
                <span className="w-1.5 aspect-square bg-gray-400 rounded-full" />
            </div>
            <p className="mt-4 text-[#6b7280]">{desc}</p>
        </>
    );
}
