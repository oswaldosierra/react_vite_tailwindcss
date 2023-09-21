import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } product-detail fixed flex-col right-0 border border-black rounded-lg bg-white top-[68px] w-[360px] h-[calc(100vh-80px)] z-20 shadow-lg`}
    >
      <div className="flex justify-between items-center px-3 py-3">
        <h2>My Order</h2>
        <XMarkIcon
          onClick={context.closeCheckoutSideMenu}
          className="h-6 w-6 text-black cursor-pointer"
        />
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
