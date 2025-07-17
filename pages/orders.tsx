import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data.orders || []));
  }, []);

  return (
    <div>
      <h1>Trendyol Siparişleri</h1>
      {orders.length === 0 ? (
        <p>Gösterilecek sipariş bulunamadı.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>{order.id}</li>
          ))}
        </ul>
      )}
    </div>
  );
}