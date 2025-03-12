import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../css/new_detail_page.css";
import NewCartRecom from "../component/newCart_recomendasi";
import { production_data_lelang } from "../data/data_lelang";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Link } from "react-router-dom";

const PageDetail = () => {
  const [thumsSwiper, setThumbsSwiper] = useState(null);
  const [randomCart, setRandomCart] = useState([]);
  let idLelang = +document.location.search.substring(1);
  let DetailLelang = production_data_lelang.filter(
    (item) => item.id === idLelang
  );

  useEffect(() => {
    const shuffled = [...production_data_lelang]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
    setRandomCart(shuffled);
  }, []);

  return (
    <div>
      <section className="cont_nd_lelang">
        <div className="cont_swiper">
          <Swiper
            style={{
              "--swiper-navigation-color": "red",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumsSwiper || null }} // Fix: Hindari null error
            modules={[FreeMode, Navigation, Thumbs]} // Fix: Gunakan array []
            className="mySwiper2"
          >
            {DetailLelang[0].img.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item} alt={`gambar ${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]} // Fix: Gunakan array []
            className="mySwiper"
          >
            {DetailLelang[0].img.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item} alt={`gambar ${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="des_img_lelang">
          <div className="item_title">
            <h1>Dijual Tanah dan Bangunan</h1>
            <h2>{DetailLelang[0].alamat[0]}</h2>
          </div>
          <div className="item_harga">
            <div className="i_1">
              <h1>Harga Spesial</h1>
            </div>
            <div className="i_2">
              <h1>:</h1>
            </div>
            <div className="i_3">
              <h1>
                Rp. {DetailLelang[0].fiturs[0].HargaAkhir.toLocaleString()},-
              </h1>
            </div>
          </div>
          {/* <div className="item_lelang">
            <div className="i_1">
              <p>Jaminan</p>
            </div>
            <div className="i_2">
              <p>:</p>
            </div>
            <div className="i_3">
              <p>Rp. 115.000.000,-</p>
            </div>
          </div> */}
          <div className="item_lelang">
            <div className="i_1">
              <p>Jenis Agunan</p>
            </div>
            <div className="i_2">
              <p>:</p>
            </div>
            <div className="i_3">
              <p>{DetailLelang[0].jenis_agunan}</p>
            </div>
          </div>
          <div className="item_lelang">
            <div className="i_1">
              <p>Alamat</p>
            </div>
            <div className="i_2">
              <p>:</p>
            </div>
            <div className="i_3">
              <p>{DetailLelang[0].alamat[1]}</p>
            </div>
          </div>
          <div className="item_lelang">
            <div className="i_1">
              <p>Lokasi Jaminan</p>
            </div>
            <div className="i_2">
              <p>:</p>
            </div>
            <div className="i_3">
              <p>
                <a href={DetailLelang[0].map[1]} target="_blank">
                  Map Lokasi
                </a>
              </p>
            </div>
          </div>
          <div className="item_lelang">
            <div className="i_1">
              <p>Status Jaminan</p>
            </div>
            <div className="i_2">
              <p>:</p>
            </div>
            <div className="i_3">
              <p>{DetailLelang[0].status}</p>
            </div>
          </div>
          <div className="item_lelang">
            <div className="i_1">
              <p>Batas Akhir Jaminan</p>
            </div>
            <div className="i_2">
              <p>:</p>
            </div>
            <div className="i_3">
              <p>-</p>
            </div>
          </div>
          <div className="item_lelang">
            <div className="i_1">
              <p>Pelaksana Lelang</p>
            </div>
            <div className="i_2">
              <p>:</p>
            </div>
            <div className="i_3">
              <p>-</p>
            </div>
          </div>
          <div className="item_lelang">
            <div className="i_1">
              <p>Penyelenggara</p>
            </div>
            <div className="i_2">
              <p>:</p>
            </div>
            <div className="i_3">
              <p>-</p>
            </div>
          </div>
          <div className="item_lelang">
            <div className="i_1">
              <p>Kode Lot Lelang</p>
            </div>
            <div className="i_2">
              <p>:</p>
            </div>
            <div className="i_3">
              <p>-</p>
            </div>
          </div>
          <div className="item_lelang">
            <div className="i_1">
              <p>Link Lelang</p>
            </div>
            <div className="i_2">
              <p>:</p>
            </div>
            <div className="i_3">
              <p>
                <a href="#" target="_blank">
                  Link Lelang
                </a>
              </p>
            </div>
          </div>
          <div className="cont_pic">
            <Link
              className="contact_pic"
              to={"https://wa.me/6281213626442"}
              target="_blank"
            >
              <img src="assets/marketing/wa_icon.png" alt="" />
              <div className="pic">
                <h2>Ferdy</h2>
                <p>0812-1362-6442</p>
              </div>
            </Link>
            <Link
              className="contact_pic"
              to={"https://wa.me/6285921511077"}
              target="_blank"
            >
              <img src="assets/marketing/wa_icon.png" alt="" />
              <div className="pic">
                <h2>Suwandi</h2>
                <p>0859-2151-1077</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="cont_spesifikasi">
        <div className="detail_lelang">
          <h2>Spesifikasi</h2>
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
                  <p> {DetailLelang[0].fiturs[0].LnT}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="list_detail_lelang">
                <div className="p1">
                  <p>Kamar tidur</p>
                </div>
                <div className="p2">:</div>
                <div className="p3"> {DetailLelang[0].fiturs[0].KT} KT</div>
              </div>
              <div className="list_detail_lelang">
                <div className="p1">
                  <p>Kamar mandi</p>
                </div>
                <div className="p2">:</div>
                <div className="p3"> {DetailLelang[0].fiturs[0].KM} KM</div>
              </div>
              <div className="list_detail_lelang">
                <div className="p1">
                  <p>Ruang tamu</p>
                </div>
                <div className="p2">:</div>
                <div className="p3"> {DetailLelang[0].fiturs[0].RT} RT</div>
              </div>
            </div>
            <div>
              <div className="list_detail_lelang">
                <div className="p1">
                  <p>Status Bangunan</p>
                </div>
                <div className="p2">:</div>
                <div className="p3"> {DetailLelang[0].fiturs[0].Sertif}</div>
              </div>
              <div className="list_detail_lelang">
                <div className="p1">
                  <p>Garasi</p>
                </div>
                <div className="p2">:</div>
                <div className="p3">
                  {" "}
                  {DetailLelang[0].fiturs[0].Garasi} Mobil
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="rekomendasi">
        <div className="img_rekomendasi">
          <img src="assets/marketing/rekomendasi2.png" alt="" />
        </div>
        <div className="cart_rekomendasi">
          <h2>Rekomendasi Propery :</h2>
          <div className="cont_cart_rekomendasi">
            {randomCart.map((item, index) => (
              <NewCartRecom data={item} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageDetail;
