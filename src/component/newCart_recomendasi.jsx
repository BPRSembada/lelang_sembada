import React from "react";
import "./css/cart.css";
import { Link } from "react-router-dom";
import { IoPricetagsOutline } from "react-icons/io5";
import { LuNewspaper } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { MdRemoveRedEye } from "react-icons/md";
const NewCartRecom = ({ data }) => {
  return (
    <Link
      to={`/Page_Detail?id=${data.id}`}
      className="property-item-rek"
      style={{ textDecoration: "none" }}
    >
      <div className="position-relative-rek">
        <a href="#">
          <img src={data.img[0]} alt="Property-rek" />
        </a>
        <div className="label-rek position-absolute-rek top-left-rek">
          {data.status}
        </div>
        <div className="label-rek position-absolute-rek bottom-left-rek">
          {data.jenis_agunan}
        </div>
      </div>
      <div className="content_card-rek">
        <div className="head_cardDes-rek">
          <h6>Rp. {data.fiturs[0].HargaAwal.toLocaleString()}</h6>
          <p>
            <FaRegClock /> {data.waktu_publish}
          </p>
        </div>
        <h5>
          <IoPricetagsOutline /> Rp.{" "}
          {data.fiturs[0].HargaAkhir.toLocaleString()}
        </h5>
        {/* <h6 href="#" className="title">
          {data.jenis_agunan}
        </h6> */}
        <p>
          <LuMapPin /> {data.alamat[0]}
        </p>
      </div>
      <div className="details-rek">
        <span>
          <LuNewspaper /> {data.fiturs[0].Sertif}
        </span>
        <span>
          LT : {data.fiturs[0].LT}
          <sup>2</sup>
        </span>
        <span>
          LB : {data.fiturs[0].LB}
          <sup>2</sup>
        </span>
        <Link to={`/Page_Detail?id=${data.id}`} className="Link_detail-rek">
          <MdRemoveRedEye className="icon_card-rek" />
        </Link>
      </div>
    </Link>
  );
};

export default NewCartRecom;
