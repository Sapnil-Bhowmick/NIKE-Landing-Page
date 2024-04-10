import { arrowRight } from "../assets/icons/SingleIconsExport"
import { shoe8 } from "../assets/images/SingleImagesExport"
import Button from "../components/Button"



const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className="flex justify-between item-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h1 className="font-palanquin text-4xl font-bold capitalize  lg:max-w-lg">
          We Provide You
          <span className="text-coral-red "> Super </span>
          <span className="text-coral-red ">Quality </span>
          Shoes

          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticulously crafted footwear
            is designed to elevate your experience, providing you with unmatched
            quality, innovation, and a touch of elegance.
          </p>

          <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to detail and excellence ensures your satisfaction
          </p>

        </h1>

        <div className="mt-11 cursor-pointer">
          <Button
            label='View details'
          />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt='SHOE 8'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>

    </section>
  )
}

export default SuperQuality
