import Image from "next/image";
import Header from "../components/ui/Header";
import Link from "next/link";
import { Diamond, MoveUpRight } from "lucide-react";
import Hero from "../components/home-page/Hero";
import ShopByCategory from "../components/home-page/ShopByCategory";

export default function Home() {
    return (
        <>
            <Hero />
            <ShopByCategory />
        </>
    );
}
