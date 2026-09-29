import Image from "next/image";
import Header from "../components/nav/Header";
import Link from "next/link";
import { Diamond, MoveUpRight } from "lucide-react";
import Hero from "../components/home-page/Hero";
import ShopByCategory from "../components/home-page/ShopByCategory";
import BestSeller from "../components/home-page/BestSeller";
import NewArrivals from "../components/home-page/NewArrivals";
import Brands from "../components/home-page/Brands";
import MostPopular from "../components/home-page/MostPopular";

export default function Home() {
    return (
        <>
            <Hero />
            <ShopByCategory />
            <BestSeller />
            <NewArrivals />
            <Brands />
            <MostPopular />
        </>
    );
}
