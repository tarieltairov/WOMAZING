import { createContext, useContext, useEffect, useState } from 'react'

// контекст
const CartContext = createContext(undefined)

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('allProductsInCart')) || []) //элементы находящиеся в корзине

  const addItem = (product) => {
    setItems((prev) => {
      const existingItem = prev.find((i) => i.id === product.id)
      if (existingItem) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
        )
      }

      return [...prev, product]
    })
  }

  const removeItem = (productId) => {
    setItems((prev) => prev.filter((i) => i.id !== productId))
  }

  const addMoreProduct = (productId, count) => {
    const updatedItems = items.map(item =>
        item.id === productId ? { ...item, quantity: count } : item
    );

    setItems(updatedItems);
  };

  useEffect(() => {
    if (items.length) {
      localStorage.setItem('allProductsInCart', JSON.stringify(items));
    }
  }, [items])

  return (
    <CartContext.Provider value={{ items, removeItem, addItem, addMoreProduct }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error(
      'хук useCart должен использоваться только с рельным контекстом',
    )
  }

  return context
}
