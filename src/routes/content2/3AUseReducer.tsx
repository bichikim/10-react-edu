import { useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface ProductInCart extends Product {
  count: number
}

const ShoppingCart = () => {
  const [items, setItems] = useState<ProductInCart[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [itemCount, setItemCount] = useState(0)

  const products = [
    { id: 1, name: '상품1', price: 10000, image: 'https://picsum.photos/150' },
    { id: 2, name: '상품2', price: 20000, image: 'https://picsum.photos/150' },
  ]

  const addItem = (product: Product) => {
    const existingItemIndex = items.findIndex((item) => item.id === product.id)

    if (existingItemIndex === -1) {
      setItems((prevItems) => [...prevItems, { ...product, count: 1 }])
    } else {
      setItems((prevItems) => {
        const newItems = [...prevItems]
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          count: newItems[existingItemIndex].count + 1,
        }
        return newItems
      })
    }

    setTotalPrice((prevPrice) => prevPrice + product.price)
    setItemCount((prevCount) => prevCount + 1)
  }

  const removeItem = (productId: number) => {
    const existingItemIndex = items.findIndex((item) => item.id === productId)
    const existingItem = items[existingItemIndex]

    if (!existingItem) return

    if (existingItem.count === 1) {
      setItems((prevItems) => prevItems.filter((item) => item.id !== productId))
    } else {
      setItems((prevItems) => {
        const newItems = [...prevItems]
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          count: newItems[existingItemIndex].count - 1,
        }
        return newItems
      })
    }

    setTotalPrice((prevPrice) => prevPrice - existingItem.price)
    setItemCount((prevCount) => prevCount - 1)
  }

  const clearCart = () => {
    setItems([])
    setTotalPrice(0)
    setItemCount(0)
  }

  const applyDiscount = (discountPercent: number) => {
    setTotalPrice((prevPrice) => prevPrice * (1 - discountPercent / 100))
  }

  return (
    <div className="shopping-cart">
      <h2>장바구니 ({itemCount}개)</h2>

      <div className="flex flex-col gap-2">
        {products.map((product) => (
          <button key={product.id} onClick={() => addItem(product)}>
            {product.name} 추가 가격: {product.price.toLocaleString()}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div key={item.id} className="flex gap-2">
            <img src={item.image} alt={item.name} />
            <div className="flex flex-col gap-2">
              <h3>{item.name}</h3>
              <p>{item.price.toLocaleString()}원</p>
              <p>수량: {item.count}</p>
            </div>
            <button onClick={() => removeItem(item.id)}>삭제</button>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <p>총 금액: {totalPrice.toLocaleString()}원</p>
        <p>총 수량: {itemCount}</p>
        <button onClick={() => applyDiscount(10)}>10% 할인 적용</button>
        <button onClick={clearCart}>장바구니 비우기</button>
      </div>
    </div>
  )
}

export default function ShoppingCartPage() {
  return <ShoppingCart />
}
