import styles from "styles/navbar.module.css";
import navLinks from "Data/navbarData.json";
import Link from "next/link";
import NotificationBar from "./NotificationBar";
import Logo from "./Logo";
import MenuItems from "components/MenuItems";
// import Logo from "./Logo";

export const Header = (props) => (
  /**
   * renders navbar with dynamic classes according to
   * link type. To change the navigations, look into Data/navData.json.
   */
  <div className={`${styles.navbar}`}>
    {props.notification && <NotificationBar />}
    <div className="nav-area">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav className={`text-right`}>
        <ul className="menus">
          {navLinks.map((menu, idx) => {
            // let className = styles.normalLink;
            // if (link.standout) className = styles.standoutLink;
            // if (props.currentRoute === link.path) className = styles.activeLink;
            const depthLevel = 0;
            return <MenuItems items={menu} key={idx} depthLevel={depthLevel} />;
          })}
        </ul>
      </nav>
    </div>
  </div>
);
