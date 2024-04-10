import React from "react"
import { cross, headerLogo } from "../assets/images/SingleImagesExport"
import { hamburger } from "../assets/icons/SingleIconsExport"
import { navLinks } from "../constants/Data"



const Nav = () => {

    const [showsidebar, setShowSidebar] = React.useState(false)

    return (
        <header className="padding-x py-8 absolute z-20 w-full">
            <nav className="flex justify-between  max-container">
                <a href='/'>
                    <img
                        src={headerLogo}
                        alt='LOGO'
                        width={130}
                        height={29}
                    />
                </a>

                <ul className="flex flex-1 gap-16  justify-center items-center max-lg:hidden ">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}
                                className='font-montserrat leading-normal text-lg text-slate-gray'
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>



                {!showsidebar &&
                    <div
                        onClick={() => setShowSidebar(!showsidebar)}
                        className="hidden max-lg:flex max-lg:justify-center max-lg:items-center max-lg:block rounded-full w-10 h-10 hover:marker:bg-slate-200">
                        <img src={hamburger}
                            alt="Humburger"
                            width={25}
                            height={25}
                        />
                    </div>}

                {showsidebar &&
                    <div className=" bg-zinc-100 w-40 h-full flex flex-col p-3 lg:hidden">
                        <div className=" flex justify-end items-center w-full">
                            <div
                                onClick={() => setShowSidebar(!showsidebar)}
                                className="hover:bg-slate-200 rounded-full w-10 h-10 flex items-center justify-center">
                                <img src={cross} width={20} height={20} />
                            </div>
                        </div>

                        <div className="mt-5 ml-5 ">
                            <ul className="flex flex-1 flex-col gap-5 justify-start">
                                {navLinks.map((item) => (
                                    <li key={item.label}>
                                        <a href={item.href}
                                            className='font-montserrat leading-normal text-lg text-slate-gray text-blue-500 font-bold cursor-pointer'
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                }

            </nav>
        </header>
    )
}

export default Nav
