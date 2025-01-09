import React from "react";
import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "../css/detail_page.css";
// data lelang
import { DataLelang, production_data_lelang } from "../data/data_lelang";

// icon {
import { LuEye } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DetailPage = () => {
  let idLelang = +document.location.search.substring(1);
  let DetailLelang = production_data_lelang.filter(
    (item) => item.id === idLelang
  );

  return (
    <div className="main-detail-page">
      <div className="cont-detail-pict">
        <Carousel fade>
          {DetailLelang[0].img.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="img_detai_lelang"
                src={item}
                alt={`Slide ${index}`}
              />
              <Carousel.Caption>
                <h3>{DetailLelang[0].title_img[index]}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="body-detail-lelang">
        <div className="detail-kiri">
          <div className="deskripsi_lelang">
            <h2>Deskripsi</h2>
            <p>{DetailLelang[0].deskripsi}</p>
            <div className="harga_jaminan">
              <h2>Harga Jaminan :</h2>
              <p
                style={{
                  color: "red",
                  textDecoration: "line-through",
                  fontSize: "1rem",
                }}
              >
                Rp. {DetailLelang[0].fiturs[0].HargaAwal.toLocaleString()}
              </p>
              <p>Rp. {DetailLelang[0].fiturs[0].HargaAkhir.toLocaleString()}</p>
            </div>
          </div>
          <div className="detail_lelang">
            <h2>Detail Properti</h2>
            <div className="isi_detail_lelang">
              <div>
                <div className="list_detail_lelang">
                  <div className="p1">
                    <p>Luas tanah</p>
                  </div>
                  <div className="p2">
                    <p>:</p>
                  </div>
                  <div className="p3">
                    <p>
                      {DetailLelang[0].fiturs[0].LT} m<sup>2</sup>
                    </p>
                  </div>
                </div>
                <div className="list_detail_lelang">
                  <div className="p1">
                    <p>Luas bangunan</p>
                  </div>
                  <div className="p2">
                    <p>:</p>
                  </div>
                  <div className="p3">
                    <p>
                      {DetailLelang[0].fiturs[0].LB} m<sup>2</sup>
                    </p>
                  </div>
                </div>
                <div className="list_detail_lelang">
                  <div className="p1">
                    <p>jumlah lantai</p>
                  </div>
                  <div className="p2">
                    <p>:</p>
                  </div>
                  <div className="p3">
                    <p>{DetailLelang[0].fiturs[0].LnT} LT</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="list_detail_lelang">
                  <div className="p1">
                    <p>Kamar tidur</p>
                  </div>
                  <div className="p2">:</div>
                  <div className="p3">{DetailLelang[0].fiturs[0].KT} KT</div>
                </div>
                <div className="list_detail_lelang">
                  <div className="p1">
                    <p>Kamar mandi</p>
                  </div>
                  <div className="p2">:</div>
                  <div className="p3">{DetailLelang[0].fiturs[0].KM} KM</div>
                </div>
                <div className="list_detail_lelang">
                  <div className="p1">
                    <p>Ruang tamu</p>
                  </div>
                  <div className="p2">:</div>
                  <div className="p3">{DetailLelang[0].fiturs[0].RT} RT</div>
                </div>
              </div>
              <div>
                <div className="list_detail_lelang">
                  <div className="p1">
                    <p>Status Bangunan</p>
                  </div>
                  <div className="p2">:</div>
                  <div className="p3">{DetailLelang[0].fiturs[0].Sertif}</div>
                </div>
                <div className="list_detail_lelang">
                  <div className="p1">
                    <p>Garasi</p>
                  </div>
                  <div className="p2">:</div>
                  <div className="p3">
                    {DetailLelang[0].fiturs[0].Garasi} Mobil
                  </div>
                </div>
                {/* <div className="list_detail_lelang">
                  <div className="p1">
                    <p>Harga</p>
                  </div>
                  <div className="p2">:</div>
                  <div className="p3">
                    Rp. {DetailLelang[0].fiturs[0].HargaAkhir.toLocaleString()}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="map_lelang">
            <h2>Map</h2>
            <div className="cont-map">
              <iframe
                src={DetailLelang[0].map}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="back">
            <a href="/">Back to Home</a>
          </div>
        </div>
        <div className="detail-kanan">
          <div className="lelang_baru">
            <h2>Daftar lelang</h2>
            <div className="cart_lelang_baru">
              <img src="assets/lelang/hari_am_tanjung/cover.jpg" alt="" />
              <div>
                <h4>Pulogadung - Jakarta Timur</h4>
                <a href="">
                  <LuEye as={Link} to={`/DetailPage?1`} /> View more
                </a>
              </div>
            </div>
            <div className="cart_lelang_baru">
              <img src="assets/lelang/oscar/cover.jpg" alt="" />
              <div>
                <h4>Kota Bekasi</h4>
                <a href="">
                  <LuEye as={Link} to={`/DetailPage?5`} /> View more
                </a>
              </div>
            </div>
            <div className="cart_lelang_baru">
              <img src="assets/lelang/depok/depokCover.jpg" alt="" />
              <div>
                <h4>Depok</h4>
                <a href="">
                  <LuEye as={Link} to={`/DetailPage?2`} /> View more
                </a>
              </div>
            </div>
          </div>
          <div className="kategori_lelang">
            <h2>kategori</h2>
            <h5>
              {DetailLelang[0].status} {DetailLelang[0].jenis_agunan}
            </h5>
          </div>
          <div className="lelang_baru">
            <h2>Info Lebih Lanjut</h2>
            <div className="cart_lelang_baru">
              <img src="/assets/marketing/Suwandi.jpg" alt="" />
              <div>
                <h4>Suwandi</h4>
                <a href="https://wa.me/6285921511077" target="blank">
                  <FaWhatsapp /> Whatsapp
                </a>
              </div>
            </div>
            <div className="cart_lelang_baru">
              <img src="/assets/marketing/ferdy.jpg" alt="" />
              <div>
                <h4>Ferdy</h4>
                <a href="https://wa.me/6281213626442" target="blank">
                  <FaWhatsapp /> Whatsapp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
