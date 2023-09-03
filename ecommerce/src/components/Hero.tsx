import { BsArrowRight } from "react-icons/bs"

const Hero = () => {
    return (
        <div className='container'>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 xl:grid-rows-2 lg:grid-rows-2 gap-8">
                <div className='xl:col-span-2 lg:col-span-2 xl:row-start-1 xl:row-end-[-1] lg:row-start-1 lg:row-end-[-1] relative'>
                    <img className='w-full h-full object-cover rounded-lg'
                        src='/presentacion2.png'
                        alt='pizza_image'
                    />

                    <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
                        <p className="text-2xl hidden sm:block text-accentDark">Las mejores pizzas</p>
                        <h2 className="text-[#66A96B] text-2xl sm:text-4xl md:text-6lg font-bold">
                            Recien horneadas
                        </h2>
                        <p className="text-accentDark font-semibold text-xl pt-4 sm:pt-8"> Precios que te convienen
                        </p>
                        <div className="bg-accentDark hover:bg:accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
                            Comprar ahora <BsArrowRight />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img className="h-full w-full object-cover rounded-lg" src="/presentacion.png"
                        alt="segunda_pizza_card"
                    />
                    <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[75%] -translate-y-[50%] sm:space-y-4">
                        <div className="bg-accentDark hover:bg:accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
                            Hacer mi pedido <BsArrowRight />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img className="h-full w-full object-cover rounded-lg" src="/2x1.png"
                        alt="tercer_pizza_card"
                    />

                </div>
            </div>
        </div>
    )
}

export default Hero