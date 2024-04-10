import Button from "../components/Button"


const Subscribe = () => {
  return (
    <section id='contact-us' className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl leading-[68px] max-w-md font-palanquin font-bold max-sm:text-center">
        Sign Up for
        <span className="text-coral-red"> Updates </span>
        & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center justify-between
       max-sm:flex-col gap-5 py-2.5 px-5 sm:border sm:border-slate-gray\
       rounded-full">

        <input
          type='text'
          placeholder="subscribe@nike.com"
          className="input"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button
            label='Sign Up'
            fullWidth />
        </div>
      </div>

    </section>
  )
}

export default Subscribe
