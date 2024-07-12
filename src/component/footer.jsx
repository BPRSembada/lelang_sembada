import React from "react";
import "../component/css/footer.css";

const Footer = () => {
  return (
    <div>
      <div className="main_footer">
        <div className="Cont_footer">
          <div className="F1">
            <h3>Asean Tower Lantai 1</h3>
            <p>Jl. KH Samanhudi no 10, RT.01 RW.02</p>
            <p>Kel. Pasar Baru, Kec. Sawah Besar</p>
            <p>Jakarta Pusat 10710</p>
          </div>
          <div className="F1">
            <h3>Telephone</h3>
            <p>021-3840786</p>
            <p>021-3840881</p>
          </div>
          <div className="F1">
            <h3>Whatsapp Center</h3>
            <img src="/assets/wa_center.png" alt="Whatsapp_center" />
          </div>
          <div className="F2">
            <h3>Berizin dan diawasi OJK</h3>
            <h3>Peserta Penjaminan LPS</h3>
            <div>
              <img src="/assets/BPR.png" alt="logo_BPR" />
              <img src="/assets/LPS.png" alt="logo_LPS" />
            </div>
          </div>
        </div>
        <div className="copyright">
          <h3>
            Copyright © 2024 PT. BPR Multi Sembada Dana. All Rights Reserved
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
