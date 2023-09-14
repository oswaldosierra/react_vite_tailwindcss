import NavBar from "../../Components/NavBar";
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col mt-20">{children}</div>
    </>
  );
};

export default Layout;
