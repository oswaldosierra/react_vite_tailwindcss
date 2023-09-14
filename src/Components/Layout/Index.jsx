import NavBar from "../../Components/NavBar";
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center">
        {children}
      </div>
    </>
  );
};

export default Layout;
