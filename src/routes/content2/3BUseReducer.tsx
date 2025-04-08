import { useReducer } from 'react'
import { spliceReturn } from './splice-return'

export interface Product {
  id: number
  name: string
  price: number
  image: string
}

export interface ProductInCart extends Product {
  count: number
}

export interface CartState {
  items: ProductInCart[]
  totalPrice: number
  itemCount: number
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  itemCount: 0,
}

export type CartAction =
  | { type: 'ADD_ITEM'; product: Product }
  | { type: 'REMOVE_ITEM'; productId: number }
  | { type: 'CLEAR_CART' }
  | { type: 'APPLY_DISCOUNT'; discountPercent: number }

const cartReducer = (state: CartState, action: CartAction): CartState => {
  // strict 모드에서 두번 실행 된다 하지만 state 가 같은 값이 두번오기 때문에 만약 퓨어하게 값을 리턴하면 두번 실행되는 것 처럼 되지 않는다
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex((item) => item.id === action.product.id)
      if (existingItemIndex === -1) {
        return {
          items: [...state.items, { ...action.product, count: 1 }],
          totalPrice: state.totalPrice + action.product.price,
          itemCount: state.itemCount + 1,
        }
      }

      return {
        items: spliceReturn(state.items, existingItemIndex, 1, {
          ...state.items[existingItemIndex],
          count: state.items[existingItemIndex].count + 1,
        }),
        totalPrice: state.totalPrice + action.product.price,
        itemCount: state.itemCount + 1,
      }
    }
    case 'REMOVE_ITEM': {
      const findIndex = state.items.findIndex((item) => item.id === action.productId)
      const find = state.items[findIndex]

      if (find && find.count === 1) {
        return {
          items: spliceReturn(state.items, findIndex, 1),
          totalPrice: state.totalPrice - find.price,
          itemCount: state.itemCount - 1,
        }
      }

      if (find) {
        return {
          items: spliceReturn(state.items, findIndex, 1, { ...find, count: find.count - 1 }),
          totalPrice: state.totalPrice - find.price,
          itemCount: state.itemCount - 1,
        }
      }

      return {
        ...state,
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
  const products = [
    { id: 1, name: '상품1', price: 10000, image: 'https://picsum.photos/150' },
    { id: 2, name: '상품2', price: 20000, image: 'https://picsum.photos/150' },
  ]
  const [state, dispatch] = useReducer(cartReducer, { ...initialState })
  const { items, totalPrice, itemCount } = state

  const addItem = (product) => {
    console.log(product, 'product')
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
