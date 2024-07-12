import React from "react";
import "../css/contact.css";

const Contact = () => {
  return (
    <div className="main_contact">
      <div className="cont_contact">
        <div className="item_contact">
          <div>
            <h3>Asean Tower Lantai 1</h3>
            <p>Jl. KH Samanhudi no 10, RT.01 RW.02</p>
            <p>Kel. Pasar Baru, Kec. Sawah Besar</p>
            <p>Jakarta Pusat 10710</p>
          </div>
          <div>
            <h3>Telephone</h3>
            <p>021-3840786</p>
            <p>021-3840881</p>
          </div>
          <div>
            <h3>Whatsapp Center</h3>
            <img src="/assets/wa_center.png" alt="Whatsapp_center" />
          </div>
          <div>
            <h3>Jam Buka</h3>
            <p>08.00 - 17.00</p>
          </div>
        </div>
        <div className="Map_contact">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7604439824418!2d106.82655527589817!3d-6.162828760401159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5db31cfffff%3A0xc40a2546a3af0783!2sAsean%20Tower!5e0!3m2!1sid!2sid!4v1715691507816!5m2!1sid!2sid"
            width="900"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
