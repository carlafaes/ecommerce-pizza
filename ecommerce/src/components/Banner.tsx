
const Banner = () => {
    return (
        <div className="container pt-16 mb-6">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 h-62">
                <div className="overflow-hidden rounded-lg">
                    <img 
                    className="hover:scale-105 transition-transform" 
                    src="/gluten-free.png" 
                    alt="tres_pizzas" 
                    />
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img 
                    className="hover:scale-105 transition-transform" 
                    src="/delivery.png" 
                    alt="pizzas" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner