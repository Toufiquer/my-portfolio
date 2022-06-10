import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

const Details = () => {
    const [portfolio, SetPortfolio] = useState([]);
    const id = useParams();
    console.log(id.id);
    useEffect(() => {
        fetch(`https://quiet-wave-28723.herokuapp.com/portfolioOne?id=${id.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                SetPortfolio(data);
            });
    }, [id]);
    const { imgUrl, projectName, projectDescription, liveUrl, server, client } =
        portfolio;
    const btnLiveUrl = (
        <a className="link" target="_blanck" href={liveUrl}>
            Live Website
        </a>
    );
    const btnServer = (
        <a className="link" target="_blanck" href={server}>
            Server
        </a>
    );
    const btnClient = (
        <a className="link" target="_blanck" href={client}>
            Client
        </a>
    );
    return (
        <div>
            <div className="p-4">
                <div className="card  bg-base-100 shadow-xl mx-auto border rounded-none">
                    <div className="py-6 container mx-auto">
                        <figure className="w-full lg:w-3/4 mx-auto">
                            <img className="" src={imgUrl} alt="Shoes" />
                        </figure>
                        <div className="card-body text-center">
                            <hr />
                            <div className="text-xl">{projectName}</div>
                            <div className="text-justify">
                                {projectDescription}
                            </div>
                        </div>
                        <div className="flex justify-between w-48 mr-auto gap-4">
                            <div className="btn btn-outline p-3 py-2">
                                {btnLiveUrl}
                            </div>
                            <div className="btn btn-outline p-3 py-2">
                                {btnServer}
                            </div>
                            <div className="btn btn-outline p-3 py-2">
                                {btnClient}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Details;
