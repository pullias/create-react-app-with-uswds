import React from "react";
import logoImgPng from "../node_modules/uswds/src/img/logo-img.png";

function Footer() {
  return (
    <footer class="usa-footer usa-footer--slim">
      <div class="grid-container usa-footer__return-to-top">
        <a href="#1">Return to top</a>
      </div>
      <div class="usa-footer__primary-section">
        <div class="usa-footer__primary-container grid-row">
          <div class="mobile-lg:grid-col-8">
            <nav class="usa-footer__nav" aria-label="Footer navigation">
              <ul class="grid-row grid-gap">
                <li class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                  <a class="usa-footer__primary-link" href="#1">
                    Primary link
                  </a>
                </li>
                <li class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                  <a class="usa-footer__primary-link" href="#1">
                    Primary link
                  </a>
                </li>
                <li class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                  <a class="usa-footer__primary-link" href="#1">
                    Primary link
                  </a>
                </li>
                <li class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                  <a class="usa-footer__primary-link" href="#1">
                    Primary link
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="mobile-lg:grid-col-4">
            <address class="usa-footer__address">
              <div class="grid-row grid-gap">
                <div class="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
                  <div class="usa-footer__contact-info">
                    <a href="tel:1-800-555-5555">(800) CALL-GOVT</a>
                  </div>
                </div>
                <div class="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
                  <div class="usa-footer__contact-info">
                    <a href="mailto:info@agency.gov">info@agency.gov</a>
                  </div>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>
      <div class="usa-footer__secondary-section">
        <div class="grid-container">
          <div class="usa-footer__logo grid-row grid-gap-2">
            <div class="grid-col-auto">
              <img class="usa-footer__logo-img" src={logoImgPng} alt="" />
            </div>
            <div class="grid-col-auto">
              <h3 class="usa-footer__logo-heading">Name of Agency</h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
