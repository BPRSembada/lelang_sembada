import React from "react";
import "../css/home_page.css";
import CartLelang from "../component/cart";
import { production_data_lelang } from "../data/data_lelang";

const HomePage = () => {
  return (
    <div>
      <div className="hero_home">
        <div className="cont-search-header">
          <h1>Sembada Lelang Agunan</h1>
          <div>
            <input type="text" name="" id="" />
            <button>Search</button>
          </div>
        </div>
      </div>
      <div className="lelang-section">
        <h1>Lelang Jaminan</h1>
        <div className="cont-lelang">
          {production_data_lelang.map((item) => {
            return <CartLelang key={item.id} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
