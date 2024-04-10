import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants/Data"



const PopularProducts = () => {
  return (
    <section
      id="products"
      className="max-container max-sm:mt-12">

      <div className="flex flex-col justify-start gap-5">

        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red"> Popular </span>
          Products
        </h2>

        <p className="mt-2 font-montserrat text-slate-gray lg:max-w-lg">
          Lorem ipsum is a Latin text commonly used as a placeholder in graphic design and printing. It consists of a series of random sentences and words that resemble the structure of Latin text, but do not have any specific meaning.
        </p>

      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  sm:gap-4 gap-14"> 
        {products.map((item , index) => (
          <PopularProductCard key={index} {...item}/>
        ))}
      </div>


    </section>
  )
}

export default PopularProducts
