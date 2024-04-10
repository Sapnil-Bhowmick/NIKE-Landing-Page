import { copyrightSign } from "../assets/icons/SingleIconsExport"
import { footerLogo } from "../assets/images/SingleImagesExport"
import { footerLinks, socialMedia } from "../constants/Data"


const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">

        <div className="flex flex-col items-start">
          <a href='/'>
            <img src={footerLogo}
              width={150}
              height={46}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((item, index) => (
              <div
                key={index}
                className='flex justify-center items-center rounded-full w-12 h-12 bg-white cursor-pointer hover:bg-slate-200'
              >
                <img src={item.src} alt={item.src} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-wrap justify-between lg:gap-10 gap-20">
          {footerLinks.map((item) => (
            <div className="text-white" key={item.title}>
              <h4 className="font-montserrat text-2xl text-white leading-normal font-medium mb-6"> {item.title} </h4>
              <ul>
                {item.links.map((item) => (
                  <li key={item.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                    <a href={item.link}> {item.name} </a>
                  </li>
                ))}

              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center w-full">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img
              src={copyrightSign}
              alt='Copyright Sign'
              width={20}
              height={20}
              className='rounded-full m-0'
            />
            <p> Copyright. All Rights Reserved. </p>
          </div>
          <p className="font-montserrat cursor-pointer hover:text-blue-400"> Terms & Conditions </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
