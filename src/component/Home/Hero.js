import React, { useEffect, useState } from "react";
const Hero = ({ img }) => {
    const [state, setState] = useState(false);
    let url =
        "https://drive.google.com/file/d/1-0JlsWRz53CM1CH7cyneY3FpLr9zcULg/view?usp=sharing";
    let element = (
        <a className="btn btn-outline" target="_blanck" href={url}>
            Resume
        </a>
    );
    useEffect(() => {
        setState(true);
    }, []);
    return (
        <div style={{ backgroundImage: { img } }}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/286412449_2946068442350922_922993806591849630_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGdtVALKxmVSaG9PKZ62fnZ6Oz91wvKjEfo7P3XC8qMR8vbXjKINufMx3m78j3GSdMEpUiq_xYFU8DFtyXGBY3q&_nc_ohc=DCTyN9CTbKAAX_1DP2Y&_nc_ht=scontent.fdac27-2.fna&oh=00_AT91QYc-sHMFF1QaAaiBf5svq4E52hWFgBXcKlzYhswhMg&oe=62A7E445"
                        className="max-w-lg rounded-lg shadow-2xl"
                        alt="Hero"
                    />
                    <div className="text-left">
                        <h1 className="text-5xl font-bold">Toufiquer Rahman</h1>
                        <p className="py-6 text-2xl">
                            MERN Stack Developer | Full Stack Developer |
                            Frontend Developer
                        </p>
                        {state && element}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
