import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className="container" style={{ display: "flex" }}>
        <div className={style.left}>
          <div className={style.logo}>Logo</div>
        </div>
        <div className={style.right}>
          <ul className={style.menu}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/service">Service</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
