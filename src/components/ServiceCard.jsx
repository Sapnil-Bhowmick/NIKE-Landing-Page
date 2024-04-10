

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 shadow-3xl px-10 py-16 rounded-[20px] sm:w-[350px] sm:min-w-[350px] w-full">
      <div className="flex justify-center items-center bg-coral-red w-10 h-10 rounded-full">
        <img src={imgURL}
          width={24}
          height={24}
        />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  )
}

export default ServiceCard
