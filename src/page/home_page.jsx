import React, { useEffect } from "react";

import "../css/home_page.css";
import CartLelang from "../component/cart";
import NewCart from "../component/newCart";

import { production_data_lelang } from "../data/data_lelang";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";

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

  const HandleKategori = (kategori) => {
    if (kategori === "Jual") {
      const jual = production_data_lelang.filter((item) => {
        return item.status.includes("jual");
      });
      setDataLelang(jual);
    } else if (kategori === "Lelang") {
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
        <Carousel>
          <Carousel.Item>
            <img
              src="assets/home_page/hero_1.jpg"
              alt=""
              style={{ width: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="assets/home_page/hero_2.jpg"
              alt=""
              style={{ width: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="assets/home_page/hero_3.jpg"
              alt=""
              style={{ width: "100%" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <section>
        <div className="poin_lelang">
          <div className="cart_poin_lelang">
            <img src="assets/home_page/keunggulan_1.png" alt="" />
            <div>
              <h2>Siap Huni</h2>
              <p>
                Aset siap huni, setelah melalui proses jual atau lelang yang
                cepat dan mudah.
              </p>
            </div>
          </div>
          <div className="cart_poin_lelang">
            <img src="assets/home_page/keunggulan_2.png" alt="" />
            <div>
              <h2>Dokumen Lengkap</h2>
              <p>
                Kemudahan transaksi kepemilikan Aset dengan dokumen yang sudah
                lengkap.
              </p>
            </div>
          </div>
          <div className="cart_poin_lelang">
            <img src="assets/home_page/keunggulan_3.png" alt="" />
            <div>
              <h2>Bisa Langsung Balik Nama</h2>
              <p>
                Seluruh aset bisa langsung balik nama tanpa perlu ribet dan
                lama.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="cont_steps">
          <h3>Gimana Caranya Beli Aset Lelang?</h3>
          <div className="steps-container">
            <div className="step">
              <img src="assets/home_page/steps_lelang/1.png" alt="" />
              <div className="content">
                <h3>Cari Aset</h3>
                <p>
                  Cari aset dengan harga dan lokasi yang sesuai dengan
                  keinginanmu
                </p>
              </div>
            </div>
            <div className="step">
              <img src="assets/home_page/steps_lelang/2.png" alt="" />
              <div className="content">
                <h3>Pilih Aset</h3>
                <p>
                  Pilih aset yang ingin kamu beli, sesuai dengan kualitas dan
                  kebutuhan Anda
                </p>
              </div>
            </div>
            <div className="step">
              <img src="assets/home_page/steps_lelang/3.png" alt="" />
              <div className="content">
                <h3>Hubungi Kami</h3>
                <p>
                  Langsung kontak kami untuk proses selanjutnya, dan petugas
                  kami akan melayani Anda.
                </p>
              </div>
            </div>
            <div className="step">
              <img src="assets/home_page/steps_lelang/4.png" alt="" />
              <div className="content">
                <h3>Lelang/Non-lelang</h3>
                <p>
                  Pembelian dapat melalui proses lelang maupun beli secara
                  langsung
                </p>
              </div>
            </div>
            <div className="step">
              <img src="assets/home_page/steps_lelang/5.png" alt="" />
              <div className="content">
                <h3>Pelunasan</h3>
                <p>Lakukan pelunasan dan lengkapi berkas sesuai ketentuan</p>
              </div>
            </div>
          </div>
          <img
            src="assets/home_page/steps_lelang1.png"
            className="steps_ilustrasi"
            alt=""
          />
        </div>
      </section>
      <section style={{ paddingBottom: "5rem" }}>
        <div className="cont_cart_lelang">
          <h3>List Properti Bank Sembada</h3>
          <div className="cont_button_lelang">
            <button onClick={() => HandleKategori("All")}>All Kategori</button>
            <button onClick={() => HandleKategori("Jual")}>Jual Jaminan</button>
            <button onClick={() => HandleKategori("Lelang")}>
              Lelang Jaminan
            </button>
          </div>
        </div>
        <div className="main_new_detail">
          {dataLelang.map((item, index) => (
            <NewCart data={item} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
