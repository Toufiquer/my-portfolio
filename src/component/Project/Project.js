import React, { useEffect, useState } from "react";
import Portfolio from "./Portfolio";

const Project = () => {
    const [portfolio, SetPortfolio] = useState([]);
    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                SetPortfolio(data);
            });
    }, []);
    return (
        <div>
            <div className="text-center text-2xl py-4">Project</div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {portfolio.map(item => (
                    <Portfolio key={item._id} portfolio={item} />
                ))}
            </div>
        </div>
    );
};

export default Project;
