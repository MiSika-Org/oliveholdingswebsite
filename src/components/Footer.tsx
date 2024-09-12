import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="footer flex items-center justify-center">
      <div className="footer-text">Copyright Olive Holdings 2024</div>
    </div>
  );
};

export default Footer;
