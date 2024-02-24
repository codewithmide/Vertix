"use client"

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "./hero";

const Homepage = () => {
    return (
        <main className="center flex-col">
            <Navbar />
            <Hero />
            <Footer />
        </main>
    );
}
 
export default Homepage;