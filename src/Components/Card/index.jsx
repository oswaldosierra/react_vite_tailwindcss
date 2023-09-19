import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from "@heroicons/react/24/solid";
const Card = (item) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
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
        <div
          onClick={() => {
            context.setCount(context.count + 1);
          }}
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
        >
          <PlusIcon className="h-6 w-6" />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{item.data.title}</span>
        <span className="text-lg font-medium">${item.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
