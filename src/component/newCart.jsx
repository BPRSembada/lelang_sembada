import React from "react";
import "./css/cart.css";
import { Link } from "react-router-dom";
import { IoPricetagsOutline } from "react-icons/io5";
import { LuNewspaper } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { MdRemoveRedEye } from "react-icons/md";
const NewCart = ({ data }) => {
  return (
    <div className="property-item">
      <div className="position-relative">
        <a href="#">
          <img src={data.cover} alt="Property" />
        </a>
        <div className="label position-absolute top-left">{data.status}</div>
        <div className="label position-absolute bottom-left">
          {data.jenis_agunan}
        </div>
      </div>
      <div className="content_card">
        <div className="head_cardDes">
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
      <div className="details">
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
        <Link to={`/DetailPage?${data.id}`} className="Link_detail">
          <MdRemoveRedEye className="icon_card" />
        </Link>
      </div>
    </div>
  );
};

export default NewCart;
