import React from "react";
import "./css/cart.css";

// icon
import { IoPricetagsOutline } from "react-icons/io5";
import { LuNewspaper } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const CartLelang = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="cont-cart-lelang">
        <img src={data.cover} alt="" />
        <div className="cont-des-lelang">
          <p>
            <FaRegClock /> {data.waktu_publish}
          </p>
          <h2>{data.jenis_agunan}</h2>
          <p>{data.alamat[1]}</p>
          <p>
            <LuMapPin /> {data.alamat[0]}
          </p>
          <div className="des-cart-lelang">
            <p>
              <LuNewspaper /> {data.fiturs[0].Sertif}
            </p>
            <p>
              <IoPricetagsOutline /> {data.fiturs[0].Harga}
            </p>
            <Button variant="danger" as={Link} to={`/DetailPage?${data.id}`}>
              View
            </Button>
            {/* <a href="/DetailPage">View</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartLelang;
