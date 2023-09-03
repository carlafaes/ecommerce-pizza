const data=[
    {id:0, img:"/vegetariana.jpg", name:"Dried Mango", price:"$1000"},
    {id:1, img:"/vegetariana.jpg", name:"Dried Mango", price:"$1000"},
    {id:2, img:"/vegetariana.jpg", name:"Dried Mango", price:"$1000"},
    {id:3, img:"/vegetariana.jpg", name:"Dried Mango", price:"$1000"},
    {id:4, img:"/vegetariana.jpg", name:"Dried Mango", price:"$1000"},
]

import  ProductCard  from "./ProductCard"

const FeatureSectionsPizza = () => {
  return (
    <div className="container pt-16">
        <div className="lg:flex justify-between items-center">
            <div >
                <h3 className="font-medium text-2xl">Pizzas</h3>
                <p className="text-gray-600 mt-2">
                    Compra pizzas online y con los mejores precios
                </p>
            </div>
            <div className="space-x-4 mt-8 lg:mt-0">
                <button className="feature_btn">Vegetarianas</button>
                <button className="text-gray-600 hover:text-accent">Sin TACC</button>
                <button className="text-gray-600 hover:text-accent">Otras</button>
            </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
            {/* <div>
                <img className="w-full h-full object-cover" src="/envio_gratis.png" alt="baner"/>
            </div> */}
            {data.map((elemento)=>(
                <ProductCard
                name={elemento.name}
                key={elemento.id}
                img={elemento.img}
                price={elemento.price}/>
            ))}
        </div>
    </div>
  )
}

export default FeatureSectionsPizza