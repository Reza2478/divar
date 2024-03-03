import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex w-full justify-between items-center border-b-2 pb-3">
      <div className="flex gap-5">
        <Link to="/">
          <img width="50px" alt="logo" src="divar.svg" />
        </Link>
        <span className="flex items-center">
          <img alt="location" src="location.svg" />
          <p>تهران</p>
        </span>
      </div>
      <div className="flex items-center gap-5">
        <Link to="/auth">
          <span className="flex gap-2">
            <img src="profile.svg" alt="profile" />
            <p>دیوار من</p>
          </span>
        </Link>
        <Link to="/dashboard" className="bg-red-700 text-white p-2 rounded-md">
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
