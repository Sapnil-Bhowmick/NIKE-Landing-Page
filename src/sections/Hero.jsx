import React from "react"
import { arrowRight } from "../assets/icons/SingleIconsExport"
import { bigShoe1 } from "../assets/images/SingleImagesExport"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants/Data"



const Hero = () => {


  const [currentShoe , setCurrentShoe] = React.useState(bigShoe1)

  return (
    <section
      id="home"
      className=" w-full flex xl:flex-row flex-col justify-center gap-10 max-container min-h-screen">

      <div className="relative w-full flex flex-col xl:w-2/5 justify-center items-start max-xl:padding-x  pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span> <br/>
          <span className="text-coral-red inline-block lg:mt-3">Nike </span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-m md:max-w-xl">
          Discover our wide range of products to suit your everyday needs. 
          Great attractive discounts arriving soon.
        </p>
        <Button
          label='Shop Now'
          iconUrl={arrowRight}
        />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 ">
          {statistics.map((item, index) => (
            <div key={index}>
              <p className="text-3xl max-sm:text-xl font-bold font-palanquin">{item.label}</p>
              <p className="font-montserrat text-slate-gray leading-7">{item.value}</p>
            </div>
          ))}
        </div>

      </div>

      <div className="relative flex flex-1 items-center justify-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center bg-hero">
        <img 
        src={currentShoe}
        width={610}
        height={500}
        alt="Shoe Collection"
        className="relative object-contain z-10"
         />


         <div className="flex gap-4 sm:gap-6 sm:left-[10%] max-sm:px-6 absolute -bottom-[5%]">
            {shoes.map((item , index) => (
              <div key={index}>
                <ShoeCard
                  imgURL={item}
                  ChangeBigShoeImage={(shoe) => setCurrentShoe(shoe)}
                  bigShoeImage={currentShoe}
                 />
              </div>
            ))}
         </div>
      </div>

    </section>
  )
}

export default Hero
