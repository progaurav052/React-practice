import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home 🏠</li>
          <li>About ℹ</li>
          <li>Contact-us 📞</li>
          <li>Cart 🛒</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
