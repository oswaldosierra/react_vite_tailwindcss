import { XMarkIcon } from "@heroicons/react/24/solid";

const ProductDetail = () => {
  return (
    <aside className="product-detail flex fixed flex-col right-0 border border-black rounded-lg bg-white top-[68px] w-[360px] h-[calc(100vh-80px)] z-20 shadow-lg">
      <div className="flex justify-between items-center px-3 py-3">
        <h2>Detail</h2>
        <XMarkIcon className="h-6 w-6 text-black" />
      </div>
    </aside>
  );
};

export default ProductDetail;
