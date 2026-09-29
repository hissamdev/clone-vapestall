export default function SmallLabel({ label }: { label: string }) {
    return (
        <div className="inline-flex items-center gap-4">
            <span className="inline-block w-8 h-px bg-amber-300"></span>
            <span className="text-xs text-black">{label}</span>
            <span className="inline-block w-8 h-px bg-amber-300"></span>
        </div>
    );
}
