import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <img alt="logo" src="divar.svg" />
        </Link>
        <span>
          <img alt="location" src="location.svg" />
        <p>تهران</p>
        </span>
      </div>
      <div>
        <Link to="/auth">
          <span>
            <img src="profile.svg" alt="profile" />
            <p>دیوار من</p>
          </span>
        </Link>
        <Link to="/dashboard">ثبت آگهی</Link>
      </div>
    </header>
  );
}

export default Header;
