import React, { useEffect } from "react";

import "../css/home_page.css";
import CartLelang from "../component/cart";
import { production_data_lelang } from "../data/data_lelang";
import { useState } from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [dataLelang, setDataLelang] = useState(production_data_lelang);
  const data = useSelector((state) => state.pagin.data);
  console.log(data);

  const kategori = () => {
    if (data === "jual") {
      const jual = production_data_lelang.filter((item) => {
        return item.status.includes("jual");
      });
      setDataLelang(jual);
    } else if (data === "lelang") {
      const lelang = production_data_lelang.filter((item) => {
        return item.status.includes("lelang");
      });
      setDataLelang(lelang);
    } else {
      setDataLelang(production_data_lelang);
    }
  };

  useEffect(() => {
    kategori();
  }, [data]);
  return (
    <div>
      <div className="hero_home">
        <div className="cont-search-header">
          <h1>Properti Agunan Sembada</h1>
          {/* <div>
            <input type="text" name="" id="" />
            <button>Pencarian</button>
          </div> */}
        </div>
      </div>
      <div className="lelang-section">
        <h1>Lelang dan Jual Jaminan</h1>
        <div className="cont-lelang">
          {dataLelang.map((item) => {
            return <CartLelang key={item.id} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
