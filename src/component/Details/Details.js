import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

const Details = () => {
    const [portfolio, SetPortfolio] = useState([]);
    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                SetPortfolio(data);
            });
    }, []);
    console.log(portfolio);
    return (
        <div>
            <div className=" ">
                <div className="p-4">
                    <div className="card w-96 bg-base-100 shadow-xl mx-auto border rounded-none">
                        <figure className="w-68 h-64 overflow-hidden hover:overflow-auto">
                            {/* <img className="" src={img} alt="Shoes" /> */}
                        </figure>
                        <div className="card-body text-center">
                            {/* <div className="text-xl">{id}</div> */}
                            <div className="text-xl">{"projectName"}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Details;
