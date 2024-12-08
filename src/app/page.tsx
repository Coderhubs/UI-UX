import React from "react";
import Header from "./components/Header";
import Ads from "./components/Ads";
import Booking from "./components/Booking";
import PopularCard from "./components/PopularCard";
import RecommendedCar from "./components/RecommendedCar";
import { Footer } from "./components/Footer";


export default function Home() {
  return (
   <div>
    <Header />
    <Ads />
    <Booking />
    <PopularCard />
    <RecommendedCar />
    <Footer />

   </div>
  );
}
