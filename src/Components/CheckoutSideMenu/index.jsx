import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    let filterProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filterProducts);
  };

  const handleCheckOut = () => {
    const orderToAdd = {
      date: "10.02.23",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPricie: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } product-detail fixed flex-col right-0 border border-black rounded-lg bg-white top-[68px] w-[360px] h-[calc(100vh-80px)] z-20 shadow-lg`}
    >
      <div className="flex justify-between items-center p-6">
        <h2>My Order</h2>
        <XMarkIcon
          onClick={context.closeCheckoutSideMenu}
          className="h-6 w-6 text-black cursor-pointer"
        />
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total</span>
          <span className="font-medium text-2xl">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <button
          className="w-full bg-black py-3 text-white rounded-lg"
          onClick={() => handleCheckOut()}
        >
          CheckOut
        </button>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
