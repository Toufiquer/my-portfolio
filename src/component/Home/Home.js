import React from "react";
import Footer from "../Footer/Footer";
import Project from "../Project/Project";
import Hero from "./Hero";

const Home = () => {
    return (
        <div className="container mx-auto">
            {" "}
            <Hero />
            <Project />
            <Footer />
        </div>
    );
};

export default Home;
