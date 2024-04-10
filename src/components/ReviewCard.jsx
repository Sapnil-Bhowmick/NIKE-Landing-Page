import { star } from "../assets/icons/SingleIconsExport"

const ReviewCard = ({ imgURL , customerName, rating, feedback }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img
                src={imgURL}
                alt='Customer'
                className='rounded-full object-cover h-[120px] w-[120px]'
            />
            <p className="mt-6 max-width-sm text-center info-text text-wrap">
                {feedback}
            </p>
            <div className="flex gap-2.5 mt-3 justify-center items-center">
                <img
                    src={star}
                    alt='rating star'
                    width={24}
                    height={24}
                    className='object-contain m-0'
                />
                <p className="text-xl font-montserrat text-slate-gray">
                    ({rating})
                </p>
            </div>
            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
                {customerName}
            </h3>
        </div>
    )
}

export default ReviewCard
