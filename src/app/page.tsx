import React from "react";
import Header from "./components/Header";
import Ads from "./components/Ads";
import Booking from "./components/Booking";
import { Footer } from "./components/footer";
import PopularCard from "./components/PopularCard";
import RecommendedCar from "./components/RecommendedCar";
// import Catalogue from "./components/Catalogue";

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
