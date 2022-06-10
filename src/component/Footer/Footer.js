import React from "react";

const Footer = ({ img }) => {
    const date = new Date().getFullYear();
    const github = (
        <a className="" target="_blanck" href={"https://github.com/Toufiquer/"}>
            /Toufiquer
        </a>
    );
    const linkedIn = (
        <a
            className=""
            target="_blanck"
            href={"https://www.linkedin.com/in/Toufiquer/"}
        >
            /Toufiquer
        </a>
    );
    return (
        <div style={{ background: `url(${img})` }}>
            <footer className="footer p-10 text-neutral-content">
                <div>
                    <span className="footer-title text-xl font-bold">
                        Services
                    </span>
                    <span className="link link-hover">Branding</span>
                    <span className="link link-hover">Design</span>
                    <span className="link link-hover">Marketing</span>
                    <span className="link link-hover">Advertisement</span>
                </div>
                <div>
                    <span className="footer-title text-xl font-bold">
                        Company
                    </span>
                    <span className="link link-hover">Branding</span>
                    <span className="link link-hover">Design</span>
                    <span className="link link-hover">Marketing</span>
                    <span className="link link-hover">Advertisement</span>
                </div>
                <div>
                    <span className="footer-title text-xl font-bold">
                        Legal
                    </span>
                    <span className="link link-hover">Branding</span>
                    <span className="link link-hover">Design</span>
                    <span className="link link-hover">Marketing</span>
                    <span className="link link-hover">Advertisement</span>
                </div>
                <div>
                    <span className="footer-title text-xl font-bold">
                        Address
                    </span>
                    <span className="link link-hover">
                        Mobile: +880 1991075127
                    </span>
                    <span className="link link-hover">
                        Email: toufiquer.rahman.0@gmail.com
                    </span>
                    <span className="link link-hover">
                        LinkedIn: {linkedIn}
                    </span>
                    <span className="link link-hover">Github: {github}</span>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright &copy; - {date} All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
