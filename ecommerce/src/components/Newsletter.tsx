import { LuMailOpen } from "react-icons/lu";

const Newsletter = () => {
    return (
        <div className="bg-accentDark mt-16">
            <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
                <div className="flex flex-shrink-0 items-center gap-4">
                    <LuMailOpen className="text-[60px]" />
                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold">
                            Suscribite para recibir nuestras promos
                        </h3>
                        <p>...y recibi 20% de descuento en tu primera compra</p>
                    </div>
                </div>
                <div className="w-full max-w-[500px] relative">
                    <input
                        className="py-4 px-6 w-full rounded-full"
                        type="text"
                        placeholder="Ingresa tu correo electrònico"
                    />
                    <button className="bg-accentDark absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4 rounded-full hover:bg-accent">
                        Suscribite
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;