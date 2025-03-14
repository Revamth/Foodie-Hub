import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  clearCart,
  removeItem,
  decreaseItemQuantity,
} from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseItemQuantity(itemId));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return (
        total +
        ((item.card.info.price || item.card.info.defaultPrice) / 100) *
          item.quantity
      );
    }, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
              Your Cart
            </h1>
            <p className="text-lg text-gray-500 mb-8">Your cart is empty</p>
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Browse Restaurants
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-extrabold text-gray-900">
                Your Cart
              </h1>
              <button
                onClick={handleClearCart}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 cursor-pointer"
              >
                Clear Cart
              </button>
            </div>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.card.info.id}
                  className="flex border-b border-gray-200 pb-6"
                >
                  <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-md border border-gray-200">
                    {item.card.info.imageId && (
                      <img
                        src={`https://media-assets.swiggy.com/${item.card.info.imageId}`}
                        alt={item.card.info.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="ml-6 flex-1 flex flex-col">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {item.card.info.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.card.info.category}
                        </p>
                      </div>
                      <p className="text-lg font-medium text-gray-900">
                        ₹
                        {((item.card.info.price ||
                          item.card.info.defaultPrice) /
                          100) *
                          item.quantity}
                      </p>
                    </div>
                    <div className="flex-1 flex items-end">
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-2">Qty:</span>
                        <div className="flex border border-gray-300 rounded-md">
                          <button
                            onClick={() =>
                              handleDecreaseQuantity(item.card.info.id)
                            }
                            className="px-2 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer"
                          >
                            -
                          </button>
                          <span className="px-2 py-1 border-l border-r border-gray-300">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => dispatch(addItem(item))}
                            className="px-2 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 px-8 py-6">
            <div className="flex justify-between text-base font-medium text-gray-900 mb-2">
              <p>Subtotal</p>
              <p>₹{getTotalPrice()}</p>
            </div>
            <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
              <p>Delivery Fee</p>
              <p>₹40</p>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-900 mb-6">
              <p>Total</p>
              <p>₹{getTotalPrice() + 40}</p>
            </div>
            <button className="w-full bg-green-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer">
              Proceed to Checkout
            </button>
            <div className="mt-4 flex justify-center text-sm text-gray-500">
              <p>
                or{" "}
                <a
                  href="/"
                  className="text-green-600 font-medium hover:text-green-500 cursor-pointer"
                >
                  Continue Shopping
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
