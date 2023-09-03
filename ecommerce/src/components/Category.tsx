const dataProducts = [
    {
        id:1,
        name: "Pizza Primavera",
        count: "10 products",
        img: "/primavera.jpeg"
    },
    {
        id:2,
        name: "Pizza Vegetariana",
        count: "10 products",
        img: "/vegetariana.jpg"
    },
    {
        id:3,
        name: "Pizza Moderna",
        count: "10 products",
        img: "/moderna.jpeg"
    },
    {
        id:4,
        name: "Pizza Anana",
        count: "10 products",
        img: "/anana.jpg"
    },
    {
        id:5,
        name: "Pizza Atun",
        count: "10 products",
        img: "/atun.jpeg"
    },
    {
        id:6,
        name: "Pizza Cuatro Quesos",
        count: "10 products",
        img: "/cuatroquesos.jpeg"
    },
    {
        id:7,
        name: "Pizza Fugazzeta",
        count: "10 products",
        img: "/fugazzeta.jpeg"
    },
    {
        id:8,
        name: "Pizza Napolitana",
        count: "10 products",
        img: "/napolitana.jpeg"
    },
    {
        id:9,
        name: "Pizza Peperoni",
        count: "10 products",
        img: "/peperoni.jpeg"
    },
];

import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div className="container pt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dataProducts.map(product =>(
                <CategoryCard
                key={product.id}
                img={product.img}
                name={product.name}
                count={product.count}
                />
            ))}
        </div>
    </div>
  )
}

export default Category;
