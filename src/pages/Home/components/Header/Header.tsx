import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Header.scss";

import { Button, Menu, Nav } from "../../../../components";
import { banners } from "../../../../config";

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = (menuVisible: boolean) => {
    setMenuVisible(!menuVisible);
  };

  if (menuVisible === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <header className="header">
      <Nav menuVisible={menuVisible} toggleMenu={toggleMenu} />
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img
              src={banner.image}
              alt={banner.name}
              className="header__banner"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="header__title">
        <p className="header__title--description">
          Design and order your new kitchen online today
        </p>
        <h1 className="header__title--name">
          Bespoke & made to measure handmade kitchen design
        </h1>

        <Button title="Order Now" />
      </div>
      {menuVisible && <Menu setMenuVisible={setMenuVisible} />}
    </header>
  );
};
