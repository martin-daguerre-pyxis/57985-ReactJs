import React from 'react'
import publicUrl from "../../utils";
import NavBar from '../navigation/NavBar';

const Footer = ({ children }) =>  {
  return (
    <>
      <footer className="w-full pt-5 m-0 text-yellow-100 bg-purple-200 lg:sticky body-font">
        <div className="container flex flex-col items-center p-0 mx-auto text-left lg:flex-row">
          <a className="relative block lg:mr-8" href="/" title="Ecommerce MDD">
            <img src={publicUrl + "/logoFooter.svg"} className="w-72" alt="logo" />
          </a>
          <NavBar location="footer">{children}</NavBar>
        </div>
      </footer>
    </>
  )
}

export default Footer;
