import NavBar from "./components/NavBar";

import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "노트북", price: 1200000 },
  { id: 2, name: "스마트폰", price: 800000 },
  { id: 3, name: "헤드폰", price: 150000 },
];

function Shopping() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <NavBar /> 
      <h1>🛒 E-Commerce Mock UI</h1>

      {/* 상품 목록 */}
      <h2>상품 목록</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - {p.price.toLocaleString()}원
            <button onClick={() => addToCart(p)}>장바구니 담기</button>
          </li>
        ))}
      </ul>

      {/* 장바구니 */}
      <h2>장바구니</h2>
      {cart.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - {item.price.toLocaleString()}원
              <button onClick={() => removeFromCart(item.id)}>삭제</button>
            </li>
          ))}
        </ul>
      )}

      {/* 총합 */}
      <h3>총합: {totalPrice.toLocaleString()}원</h3>
    </div>
  );
}

export default Shopping;
