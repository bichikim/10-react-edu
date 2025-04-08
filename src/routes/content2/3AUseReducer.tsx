import { useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

const ShoppingCart = () => {
  const [items, setItems] = useState<Product[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [itemCount, setItemCount] = useState(0)

  const addItem = (product: Product) => {
    setItems((prevItems) => [...prevItems, product])
    setTotalPrice((prevPrice) => prevPrice + product.price)
    setItemCount((prevCount) => prevCount + 1)
  }

  const removeItem = (productId) => {
    const removedItem = items.find((item) => item.id === productId)
    if (!removedItem) return
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId))
    setTotalPrice((prevPrice) => prevPrice - removedItem.price)
    setItemCount((prevCount) => prevCount - 1)
  }

  const clearCart = () => {
    setItems([])
    setTotalPrice(0)
    setItemCount(0)
  }

  const applyDiscount = (discountPercent) => {
    setTotalPrice((prevPrice) => prevPrice * (1 - discountPercent / 100))
  }

  return (
    <div className="shopping-cart">
      <h2>장바구니 ({itemCount}개)</h2>
      <div className="flex flex-col gap-2">
        <button onClick={() => addItem({ id: 1, name: '상품1', price: 10000, image: 'https://picsum.photos/150' })}>
          상품 1 추가 가격: 10000
        </button>

        <button onClick={() => addItem({ id: 2, name: '상품2', price: 20000, image: 'https://picsum.photos/150' })}>
          상품 2 추가 가격: 20000
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div key={item.id} className="flex gap-2">
            <img src={item.image} alt={item.name} />
            <div className="flex flex-col gap-2">
              <h3>{item.name}</h3>
              <p>{item.price.toLocaleString()}원</p>
            </div>
            <button onClick={() => removeItem(item.id)}>삭제</button>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <p>총 금액: {totalPrice.toLocaleString()}원</p>
        <button onClick={() => applyDiscount(10)}>10% 할인 적용</button>
        <button onClick={clearCart}>장바구니 비우기</button>
      </div>
    </div>
  )
}

export default function ShoppingCartPage() {
  return <ShoppingCart />
}
