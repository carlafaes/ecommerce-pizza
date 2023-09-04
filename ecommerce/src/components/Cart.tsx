import { RxCross1 } from "react-icons/rx"
import CartProduct from "./CartProduct"
import { useCartContext } from "../context/CartContext"

const Cart = ({ setShowCart }: any) => {
    const { product } = useCartContext();

    return (
        <div className="bg-[#0000007d] w-full h-screen fixed left-0 top-0 z-20" onClick={() => setShowCart(false)}>
            <div className="max-w-[400px] w-full h-full bg-white absolute right-0 top-0 p-6" onClick={(e) => e.stopPropagation()}>
                <RxCross1 className="absolute right-0 top-0 m-6 text-gray-600 uppercase"
                    onClick={() => setShowCart(false)} />
                <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
                    Tu Carrito
                </h3>

                <div className="mt-6">
                    {product?.map((el: any) => (
                        <CartProduct
                            key={el.name}
                            img={el.img}
                            name={el.name}
                            price={el.price}
                        />
                    ))}
                </div>
                <button className="bg-gray-600 text-white text-center w-full rounded-3x1 py-2 hover:bg-accentDark mb-4 mt-4 rounded-md">
                    Ver Carrito
                </button>
                <button className="bg-gray-600 text-white text-center w-full rounded-3x1 py-2 hover:bg-accentDark mb-4 mt-4 rounded-md">
                    Realizar compra
                </button>
            </div>
        </div>
    );
};

export default Cart