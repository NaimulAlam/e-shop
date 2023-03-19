import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <a href="#a" className="link link-hover">
            Branding
          </a>
          <a href="#a" className="link link-hover">
            Design
          </a>
          <a href="#a" className="link link-hover">
            Marketing
          </a>
          <a href="#a" className="link link-hover">
            Advertisement
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="#a" className="link link-hover">
            About us
          </a>
          <a href="#a" className="link link-hover">
            Contact
          </a>
          <a href="#a" className="link link-hover">
            Jobs
          </a>
          <a href="#a" className="link link-hover">
            Press kit
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href="#a" className="link link-hover">
            Terms of use
          </a>
          <a href="#a" className="link link-hover">
            Privacy policy
          </a>
          <a href="#a" className="link link-hover">
            Cookie policy
          </a>
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
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by E-Shop developed by Naim @ wsb
          </p>
        </div>
        <div>
          <a href="#top">
            <ArrowUpCircleIcon className="h-16 w-16" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
