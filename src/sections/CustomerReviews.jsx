import { reviews } from "../constants/Data"
import ReviewCard from '../components/ReviewCard'

const CustomerfReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin  text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>

      <p className='info-text text-center mt-4 max-w-lg m-auto'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className='mt-24 flex flex-1 items-center justify-evenly max-lg:flex-col gap-14'>
        {reviews.map((item, index) => (
          <ReviewCard
            key={index} {...item}
          />
        ))}
      </div>

    </section>
  )
}

export default CustomerfReviews
