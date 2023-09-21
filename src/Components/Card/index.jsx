import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
const Card = (item) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
    context.closeCheckoutSideMenu();
  };

  const addProductsToCart = (event, productsData) => {
    event.stopPropagation();
    context.closeProductDetail();
    context.openCheckoutSideMenu();
    context.setCartProducts([...context.cartProducts, productsData]);
    context.setCount(context.count + 1);
  };

  const renderIcon = (id) => {
    const isInCard =
      context.cartProducts.filter((product) => product.id == id).length > 0;

    if (isInCard) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-black text-white w-6 h-6 rounded-full m-2 p-1">
          <CheckIcon className="h-6 w-6" />
        </div>
      );
    } else {
      return (
        <div
          onClick={(event) => addProductsToCart(event, item.data)}
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
        >
          <PlusIcon className="h-6 w-6" />
        </div>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(item.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="m-2 absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs px-3 py-0.5">
          {item.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={item.data.images[0]}
          alt={item.data.title}
        />
        {renderIcon(item.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{item.data.title}</span>
        <span className="text-lg font-medium">${item.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
