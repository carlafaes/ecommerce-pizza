import { BsArrowRight } from "react-icons/bs"

const Hero = () => {
    return (
        <div className='container'>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 xl:grid-rows-2 lg:grid-rows-2 gap-8">
                <div className='xl:col-span-2 lg:col-span-2 xl:row-start-1 xl:row-end-[-1] lg:row-start-1 lg:row-end-[-1] relative'>
                    <img className='w-full h-full object-cover rounded-lg'
                        src='/peperoni.jpeg'
                        alt='pizza_image' 
                    />

                    <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
                        <p className="text-2xl hidden sm:block">Las mejores pizzas</p>
                        <h2 className="text-2xl sm:text-4xl md:text-6lg font-bold">
                            Recien horneadas
                        </h2>
                        <p className="text-gray-500 text-xl pt-4 sm:pt-8"> Precios que te convienen
                        </p>
                        <div className="bg-accentDark hover:bg:accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
                            Comprar ahora <BsArrowRight />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img className="h-full w-full object-cover rounded-lg" src="/cuatroquesos.jpeg"
                        alt="segunda_pizza_card" 
                    />
                     <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
                        <p className="text-1xl hidden sm:block">Cuatro quesos</p>
                        <p className="text-gray-700 text-xl pt-4 sm:pt-8">Date un gusto
                        </p>
                        <div className="bg-accentDark hover:bg:accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
                            Comprar ahora <BsArrowRight />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img className="h-full w-full object-cover rounded-lg" src="/fugazzeta.jpeg"
                        alt="tercer_pizza_card" 
                        />
                         <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
                        <p className="text-1xl hidden sm:block">Fugazzeta</p>
                        <p className="text-gray-700 text-xl pt-4 sm:pt-8">Te la vas a perder?
                        </p>
                        <div className="bg-accentDark hover:bg:accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
                            Comprar ahora <BsArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero