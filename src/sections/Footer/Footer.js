import React from "react";

import NavBar from "../../components/NavBar/NavBar";

export default function Footer() {
  return (
    <footer className="nk-footer bg-theme-dark">
      <hr className="hr hr-white-5 my-0" />
      <section className="section section-m bg-transparent tc-light ov-v">
        <div className="container">
          <div className="nk-block block-footer">
            <div className="row justify-content-between gutter-vr-30px">
              <div className="col-lg-12">
                <NavBar backgroundTransparent={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="nk-ovm shape-t h-75" />
    </footer>
  );
}
