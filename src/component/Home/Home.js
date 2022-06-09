import React from "react";
import Project from "../Project/Project";
import Hero from "./Hero";

const Home = () => {
    return (
        <div className="container mx-auto">
            {" "}
            <Hero />
            <Project />
            <div className="text-3xl">Home Working</div>
        </div>
    );
};

export default Home;
