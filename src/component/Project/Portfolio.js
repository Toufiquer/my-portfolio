import React from "react";

import { useNavigate } from "react-router-dom";
const Portfolio = ({
    portfolio: {
        projectName,
        imgUrl,
        projectDescription,
        liveUrl,
        server,
        client,
        _id,
    },
}) => {
    const img = imgUrl;
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
    const navigate = useNavigate();
    const handleDetails = id => {
        navigate(`/details/${id}`);
    };
    return (
        <div className=" ">
            <div className="p-4">
                <div className="card w-96 bg-base-100 shadow-xl mx-auto border rounded-none">
                    <figure className="w-68 h-64 overflow-hidden hover:overflow-auto">
                        <img className="" src={img} alt="Toufiquer" />
                    </figure>
                    <div className="card-body text-center">
                        <div className="text-xl">{projectName}</div>
                        <div className="text-justify">
                            {projectDescription}
                            <div
                                onClick={() => handleDetails(_id)}
                                className="btn btn-sm"
                            >
                                Details
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between w-48 mr-auto gap-4 mx-6 my-2">
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
    );
};

export default Portfolio;
