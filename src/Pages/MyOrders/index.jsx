import { useContext } from "react";
import Layout from "../../Components/Layout/Index";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
function MyOrders() {
  const context = useContext(ShoppingCartContext);
  console.log(context.order);
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 ">
        <h1>My Orders</h1>
      </div>
      {context.order.map((order) => (
        <Link to={`/my-orders/${order.id}`}>
          <OrdersCard
            key={order.id}
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
