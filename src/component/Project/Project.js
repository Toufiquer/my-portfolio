import React from "react";
import Portfolio from "./Portfolio";

const Project = () => {
    return (
        <div><div className="text-center text-2xl py-4">Project</div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Portfolio />
                <Portfolio />
                <Portfolio />
            </div>
        </div>
    );
};

export default Project;
