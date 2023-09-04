import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(item => {
        total += item.price * item.quantity
      })
      const items = cartList.length
      return (
        <div className="cart-summary">
          <h1 className="total-heading">
            Order Total <span className="span-heading">: RS {total}/-</span>
          </h1>
          <p className="para-total">{items} items in cart</p>
          <button type="button" className="checkout-btn">
            checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
