import React from "react";

const Portfolio = ({
    portfolio: {
        projectName,
        imgUrl,
        projectDescription,
        liveUrl,
        server,
        client,
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
    return (
        <div className=" ">
            <div className="p-4">
                <div className="card w-96 bg-base-100 shadow-xl mx-auto border rounded-none">
                    <figure className="w-68 h-64 overflow-hidden hover:overflow-auto">
                        <img className="" src={img} alt="Shoes" />
                    </figure>
                    <div className="card-body text-center">
                        <div className="text-xl">{projectName}</div>
                        <div className="text-justify">{projectDescription}</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="link border w-full p-3 py-2">
                            {btnLiveUrl}
                        </div>
                        <div className="link border w-full p-3 py-2">
                            {btnServer}
                        </div>
                        <div className="link border w-full p-3 py-2">
                            {btnClient}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
