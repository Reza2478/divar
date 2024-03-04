import Header from "layouts/Header";
import Footer from "layouts/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="h-full">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
