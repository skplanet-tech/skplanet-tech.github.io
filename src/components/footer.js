import * as React from "react";

const Footer = ({ onChange }) => (
  <footer className="footer" onClick={onChange}>
    COPYRIGHT © {`${new Date().getFullYear()}`} SK Planet. ALL RIGHT RESERVED.
  </footer>
);

export default Footer;
