import { arrowRight } from "../assets/icons/SingleIconsExport"
import { offer } from "../assets/images/SingleImagesExport"
import Button from "../components/Button"


const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">

      <div className="flex-1">
        <img src={offer}
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h1 className="font-palanquin text-4xl font-bold capitalize  lg:max-w-lg">
          <span className="text-coral-red "> Special </span>
          Offer
          <p className="mt-4 lg:max-w-lg info-text">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>

          <p className="mt-6 lg:max-w-lg info-text">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us is
            nothing short of exceptional.
          </p>

        </h1>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button
            label='Shop now'
            iconUrl={arrowRight}
          />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-300'
            textColor='text-slate-700'
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
