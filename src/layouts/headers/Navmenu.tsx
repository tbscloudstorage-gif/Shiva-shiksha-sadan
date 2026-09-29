
import { Link } from "react-router-dom";
import menu_data from "@/data/menu-data";


export default function Navmenu() {
  return (
      <ul>
      {menu_data.map((item) => (
        <li
          key={item.id}
          className={`${item.has_dropdown || item.img_dropdown || item.mega_menu ? "has-dropdown" : ""} ${
            item.img_dropdown || item.mega_menu ? "p-static" : ""
          }`}
        >
          <Link to={item.link}>{item.title}</Link>

          {/* Image Dropdown */}
          {item.img_dropdown && item.sub_menus && (
            <div className="it-submenu submenu has-home-img">
              <div className="it-homemenu-wrapper">
                <div className="row gx-6 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-5">
                  {item.sub_menus.map((sub, i, arr) => (
                    <div key={i} className="col home-img mb-20">
                      <div className={`home-img-thumb home-img-overly mb-15 ${i === arr.length - 1 ? "coming-soon" : ""}`}>
                        <Link to={sub.link}>
                          <img src={sub.demo_img ? sub.demo_img : "" } alt={sub.title}   />
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

          {/* Mega Menu */}
          {item.mega_menu && item.mega_menus && (
            <div className="it-submenu submenu it-megamenu-wrap">
              <div className="row gx-50">
                {item.mega_menus.map((mega, i) => (
                  <div key={i} className="col-xl-3">
                    <div className="it-megamenu-item">
                      <h4 className="it-megamenu-title">{mega.title}</h4>
                      <ul>
                        {mega.menus.map((menu, j) => (
                          <li key={j}>
                            <Link to={menu.link}>{menu.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Normal Dropdown */}
          {item.has_dropdown && item.sub_menus && (
            <ul className="it-submenu submenu">
              {item.sub_menus.map((sub, i) => (
                <li key={i}>
                  <Link to={sub.link}>{sub.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}

