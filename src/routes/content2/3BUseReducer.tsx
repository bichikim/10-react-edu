import { useReducer } from 'react'

const initialState = {
  items: [],
  totalPrice: 0,
  itemCount: 0,
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        items: [...state.items, action.product],
        totalPrice: state.totalPrice + action.product.price,
        itemCount: state.itemCount + 1,
      }

    case 'REMOVE_ITEM': {
      const removedItem = state.items.find((item) => item.id === action.productId)
      return {
        items: state.items.filter((item) => item.id !== action.productId),
        totalPrice: state.totalPrice - removedItem.price,
        itemCount: state.itemCount - 1,
      }
    }

    case 'CLEAR_CART':
      return initialState

    case 'APPLY_DISCOUNT':
      return {
        ...state,
        totalPrice: state.totalPrice * (1 - action.discountPercent / 100),
      }

    default:
      return state
  }
}

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const { items, totalPrice, itemCount } = state

  const addItem = (product) => {
    dispatch({ type: 'ADD_ITEM', product })
  }

  const removeItem = (productId) => {
    dispatch({ type: 'REMOVE_ITEM', productId })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const applyDiscount = (discountPercent) => {
    dispatch({ type: 'APPLY_DISCOUNT', discountPercent })
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
