

const Button = ({ label, iconUrl, backgroundColor, borderColor, textColor , fullWidth}) => {
  return (
    <button className={`flex justify-center align-center rounded-full  text-white

    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` :
        ` bg-coral-red text-lg  border-coral-red`
      }
    ${fullWidth && 'w-full'}
    gap-2
    border px-7 py-4 font-montserrat hover:bg-red-500 hover:border-coral-red hover:font-semibold` }>
      {label}
      {iconUrl &&
        <img
          src={iconUrl}
          className='ml-2 rounded-full w-5 h-5'
        />}
    </button>
  )
}

export default Button
