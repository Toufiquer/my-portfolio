import React from "react";

const Footer = ({ img }) => {
    const date = new Date().getFullYear();
    return (
        <div style={{ background: `url(${img})` }}>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright &copy; - {date} All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
