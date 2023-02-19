import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <a href="#a" className="link link-hover">Branding</a>
          <a href="#a" className="link link-hover">Design</a>
          <a href="#a" className="link link-hover">Marketing</a>
          <a href="#a" className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="#a" className="link link-hover">About us</a>
          <a href="#a" className="link link-hover">Contact</a>
          <a href="#a" className="link link-hover">Jobs</a>
          <a href="#a" className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href="#a" className="link link-hover">Terms of use</a>
          <a href="#a" className="link link-hover">Privacy policy</a>
          <a href="#a" className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer px-10 py-12 border-t bg-base-200 text-base-content border-base-300 justify-between">
        <div>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
        <div className="">
          <a className="btn btn-square btn-error" href="#top">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
              />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
