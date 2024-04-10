import { star } from "../assets/icons/SingleIconsExport"


const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div className="flex flex-col flex-1 w-full max-sm:w-full">

            <img
                src={imgURL}
                className='w-[280px] h-[280px]'
            />

            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} height={24} width={24} />
                <span className="font-montserrat text-slate-gray text-xl"> (4.2) </span>
            </div>

            <h3 className="mt-2 text-2xl font-semibold font-palanquin leading-normal">
                {name}
            </h3>

            <p className="mt-2 text-2xl font-semibold font-palanquin leading-normal text-coral-red">
                {price}
            </p>

        </div>
    )
}

export default PopularProductCard
