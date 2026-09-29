
import { useState } from "react";
import menu_data from "@/data/menu-data";
import { Link } from "react-router-dom";

export default function MobileMenu() {

  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };


  return (
    <nav className="it-menu-content">
      <ul>
        {menu_data.map((menu, i) => (
          <li
            key={i}
            className={`${
              menu.has_dropdown || menu.mega_menu || menu.img_dropdown
                ? "has-dropdown"
                : ""
            } ${menu.mega_menu || menu.img_dropdown ? "p-static" : ""} ${navTitle === menu.title ? "dropdown-opened" : ""}`}
          >
            <Link to={menu.link || "#"} className={`${navTitle === menu.title ? 'expanded' : ''}`}>
              {menu.title}
              {(menu.has_dropdown || menu.mega_menu || menu.img_dropdown) && (
                <button className={`dropdown-toggle-btn ${navTitle === menu.title ? "dropdown-opened" : ""}`}  onClick={() => openMobileMenu(menu.title)}>
                  <i className="fal fa-angle-right"></i>
                </button>
              )}
            </Link>

            {/* ================= HOME (IMAGE DROPDOWN) ================= */}
            {menu.img_dropdown && menu.sub_menus && (
              <div className="it-submenu submenu has-home-img" style={{ display: navTitle === menu.title ? "block" : "none", }}>
                <div className="it-homemenu-wrapper">
                  <div className="row gx-6 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-5">
                    {menu.sub_menus.map((sub, i) => (
                      <div key={i} className="col home-img mb-20">
                        <div className="home-img-thumb home-img-overly mb-15">
                          <Link to={sub.link}>
                            {sub.demo_img && (
                              <img
                                src={sub.demo_img}
                                alt={sub.title}
                              />
                            )}
                          </Link>
                        </div>
                        <div className="home-img-content text-center">
                          <h4 className="home-img-title">
                            <Link to={sub.link}>{sub.title}</Link>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ================= MEGA MENU ================= */}
            {menu.mega_menu && menu.mega_menus && (
              <div className="it-submenu submenu it-megamenu-wrap" style={{ display: navTitle === menu.title ? "block" : "none", }}>
                <div className="row gx-50">
                  {menu.mega_menus.map((mega, i) => (
                    <div key={i} className="col-xl-3">
                      <div className="it-megamenu-item">
                        <h4 className="it-megamenu-title">{mega.title}</h4>
                        <ul>
                          {mega.menus.map((item, j) => (
                            <li key={j}>
                              <Link to={item.link}>{item.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ================= NORMAL DROPDOWN ================= */}
            {menu.has_dropdown && menu.sub_menus && (
              <ul className="it-submenu submenu" style={{ display: navTitle === menu.title ? "block" : "none", }}>
                {menu.sub_menus.map((sub, i) => (
                  <li key={i}>
                    <Link to={sub.link}>{sub.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}