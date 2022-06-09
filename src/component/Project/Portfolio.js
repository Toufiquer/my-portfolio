import React, { useEffect, useState } from "react";

const Portfolio = () => {
    const [state, setState] = useState(false);
    let url =
        "https://drive.google.com/file/d/1-0JlsWRz53CM1CH7cyneY3FpLr9zcULg/view?usp=sharing";
    let element = (
        <a className="link" target="_blanck" href={url}>
            Resume
        </a>
    );
    const img =
        "https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/286412449_2946068442350922_922993806591849630_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGdtVALKxmVSaG9PKZ62fnZ6Oz91wvKjEfo7P3XC8qMR8vbXjKINufMx3m78j3GSdMEpUiq_xYFU8DFtyXGBY3q&_nc_ohc=DCTyN9CTbKAAX_1DP2Y&_nc_ht=scontent.fdac27-2.fna&oh=00_AT91QYc-sHMFF1QaAaiBf5svq4E52hWFgBXcKlzYhswhMg&oe=62A7E445";
    useEffect(() => {
        setState(true);
    }, []);
    return (
        <div className=" ">
            <div className="p-4">
                <div className="card w-96 bg-base-100 shadow-xl mx-auto border rounded-none">
                    <figure>
                        <img className="w-68 h-84" src={img} alt="Shoes" />
                    </figure>
                    <div className="card-body text-center">
                        Based on warehouse management. Suppliers can add and
                        manage products. Clients can order or cancel. All
                        suppliers and Clients are controlled by the Admin.
                    </div>
                    <div className="flex justify-between">
                        <div className="link border w-full p-3 py-2">
                            {state && element}
                        </div>
                        <div className="link border w-full p-3 py-2">
                            {state && element}
                        </div>
                        <div className="link border w-full p-3 py-2">
                            {state && element}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
