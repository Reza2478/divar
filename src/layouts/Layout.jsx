import Header from "layouts/Header";
import Footer from "layouts/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="h-full min-h-[800px] py-8">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
