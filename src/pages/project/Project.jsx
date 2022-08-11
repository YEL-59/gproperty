import React from 'react'
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import building1 from '../../assets/service/Artboard 1.png'
import building2 from '../../assets/service/Artboard 2.png'
import Logo from '../../assets/logo/logo.png';
import phone from '../../assets/icon/phone-cell.jpg'
import PoolIcon from '@mui/icons-material/Pool';
import building from '../../assets/background/building.png'
import YardIcon from '@mui/icons-material/Yard';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MosqueIcon from '@mui/icons-material/Mosque';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubSharpIcon from '@mui/icons-material/BathtubSharp';
import HouseSharpIcon from '@mui/icons-material/HouseSharp';
import CarRepairSharpIcon from '@mui/icons-material/CarRepairSharp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';

const Project = () => {
    return (
        <div>

            <div className='mt-14 flex flex-col lg:flex-row justify-center gap-14 p-2'>

                <div className='p-2 lg:p-0'>
                    <div className='flex justify-center'>
                        <a href='http://localhost:3000/projectdetails'>  <img src={building} className='rounded' alt="" /></a>
                      
                    </div>
                    <div class="flex  gap-2 w-full  mt-5 ">
                        <button
                            type="button"
                            class="block w-full p-2  bg-blue-800 bg-opacity-80 text-white rounded  font-medium text-sm leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            <HouseSharpIcon />	5 shares left
                        </button>

                    </div>
                    <div className='flex justify-between mt-3'>
                        <div className='flex flex-col justify-center '>
                            <h1 className='font-bold '>BDT <span className='text-2xl'>4500/sqft</span> </h1>
                            <p className='text-xl font-bold'>Genex Passioin Homes</p>
                            <p className='font-medium'>Block M, Bashundhara R/A</p>

                        </div>
                        <div>
                            <button
                                type="button"
                                class="block px-6 mb-1   text-black rounded  lg:w-auto font-medium text-sm leading-tight  hover:text-white  hover:bg-blue-900 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                <HotelIcon /> 4 Beds
                            </button>
                            <button
                                type="button"
                                class="block px-6 mb-1   text-black rounded  lg:w-auto font-medium text-sm leading-tight hover:text-white hover:bg-blue-900 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                            >
                                <BathtubSharpIcon /> 4 Baths
                            </button>
                            <button
                                type="button"
                                class="block px-6 mb-1   text-black rounded  lg:w-auto font-medium text-sm leading-tight hover:text-white  hover:bg-blue-900 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                            >
                                <HouseSharpIcon /> 2550 sqft
                            </button>
                            <button
                                type="button"
                                class="block px-6    text-black rounded  lg:w-auto font-medium text-sm leading-tight hover:text-white  hover:bg-blue-900 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                            >
                                <CarRepairSharpIcon /> 1 Parking
                            </button>
                        </div>

                    </div>

                    <div class="flex justify-between    space-x-2 mt-5 ">
                        <button
                            type="button"
                            class="inline-block  py-2.5 w-full bg-blue-800 bg-opacity-80 text-white font-medium   rounded shadow-md uppercase   hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            <LocalPhoneSharpIcon />	<a href="tel:+88001748885444p123">call Now</a>
                        </button>
                        <button
                            type="button"
                            class="inline-block  py-2.5 w-full bg-blue-800 bg-opacity-80 text-white font-medium   rounded shadow-md uppercase   hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            <MailOutlineIcon />	<a href="mailto:genexpropertiesltd@gmail.com"> send mail</a>
                        </button>
                        <button
                            type="button"
                            class="inline-block  py-2.5 w-full bg-blue-800 bg-opacity-80 text-white font-medium   rounded shadow-md uppercase   hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            <WhatsappOutlinedIcon />
                            <a href="https://web.whatsapp.com/">whatsapp</a>
                        </button>
                    </div>


                </div>
                <div className='p-2 lg:p-0'>
                    <div className='flex justify-center'>
                        <a href='http://localhost:3000/projectdetails'>  <img src={building} className='rounded' alt="" /></a>

                    </div>
                    <div class="flex  gap-2 w-full  mt-5 ">
                        <button
                            type="button"
                            class="block w-full p-2  bg-blue-800 bg-opacity-80 text-white rounded  font-medium text-sm leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            <HouseSharpIcon />	5 shares left
                        </button>

                    </div>
                    <div className='flex justify-between mt-3'>
                        <div className='flex flex-col justify-center '>
                            <h1 className='font-bold '>BDT <span className='text-2xl'>4500/sqft</span> </h1>
                            <p className='text-xl font-bold'>Genex Passioin Homes</p>
                            <p className='font-medium'>Block M, Bashundhara R/A</p>

                        </div>
                        <div>
                            <button
                                type="button"
                                class="block px-6 mb-1   text-black rounded  lg:w-auto font-medium text-sm leading-tight  hover:text-white  hover:bg-blue-900 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                <HotelIcon /> 4 Beds
                            </button>
                            <button
                                type="button"
                                class="block px-6 mb-1   text-black rounded  lg:w-auto font-medium text-sm leading-tight hover:text-white hover:bg-blue-900 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                            >
                                <BathtubSharpIcon /> 4 Baths
                            </button>
                            <button
                                type="button"
                                class="block px-6 mb-1   text-black rounded  lg:w-auto font-medium text-sm leading-tight hover:text-white  hover:bg-blue-900 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                            >
                                <HouseSharpIcon /> 2550 sqft
                            </button>
                            <button
                                type="button"
                                class="block px-6    text-black rounded  lg:w-auto font-medium text-sm leading-tight hover:text-white  hover:bg-blue-900 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                            >
                                <CarRepairSharpIcon /> 1 Parking
                            </button>
                        </div>

                    </div>

                    <div class="flex justify-between    space-x-2 mt-5 ">
                        <button
                            type="button"
                            class="inline-block  py-2.5 w-full bg-blue-800 bg-opacity-80 text-white font-medium   rounded shadow-md uppercase   hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            <LocalPhoneSharpIcon />	<a href="tel:+88001748885444p123">call Now</a>
                        </button>
                        <button
                            type="button"
                            class="inline-block  py-2.5 w-full bg-blue-800 bg-opacity-80 text-white font-medium   rounded shadow-md uppercase   hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            <MailOutlineIcon />	<a href="mailto:genexpropertiesltd@gmail.com"> send mail</a>
                        </button>
                        <button
                            type="button"
                            class="inline-block  py-2.5 w-full bg-blue-800 bg-opacity-80 text-white font-medium   rounded shadow-md uppercase   hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            <WhatsappOutlinedIcon />
                            <a href="https://web.whatsapp.com/">whatsapp</a>
                        </button>
                    </div>


                </div>
                <div className='p-2 lg:p-0'>
                    <div className='flex justify-center'>
                        <a href='http://localhost:3000/projectdetails'>  <img src={building} className='rounded' alt="" /></a>

                    </div>
                    <div class="flex  gap-2 w-full  mt-5 ">
                        <button
                            type="button"
                            class="block w-full p-2  bg-blue-800 bg-opacity-80 text-white rounded  font-medium text-sm leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            <HouseSharpIcon />	5 shares left
                        </button>

                    </div>
                    <div className='flex justify-between mt-3'>
                        <div className='flex flex-col justify-center '>
                            <h1 className='font-bold '>BDT <span className='text-2xl'>4500/sqft</span> </h1>
                            <p className='text-xl font-bold'>Genex Passioin Homes</p>
                            <p className='font-medium'>Block M, Bashundhara R/A</p>

                        </div>
                        <div>
                            <button
                                type="button"
                                class="block px-6 mb-1   text-black rounded  lg:w-auto font-medium text-sm leading-tight  hover:text-white  hover:bg-blue-900 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                <HotelIcon /> 4 Beds
                            </button>
                            <button
                                type="button"
                                class="block px-6 mb-1   text-black rounded  lg:w-auto font-medium text-sm leading-tight hover:text-white hover:bg-blue-900 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                            >
                                <BathtubSharpIcon /> 4 Baths
                            </button>
                            <button
                                type="button"
                                class="block px-6 mb-1   text-black rounded  lg:w-auto font-medium text-sm leading-tight hover:text-white  hover:bg-blue-900 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                            >
                                <HouseSharpIcon /> 2550 sqft
                            </button>
                            <button
                                type="button"
                                class="block px-6    text-black rounded  lg:w-auto font-medium text-sm leading-tight hover:text-white  hover:bg-blue-900 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                            >
                                <CarRepairSharpIcon /> 1 Parking
                            </button>
                        </div>

                    </div>

                    <div class="flex justify-between    space-x-2 mt-5 ">
                        <button
                            type="button"
                            class="inline-block  py-2.5 w-full bg-blue-800 bg-opacity-80 text-white font-medium   rounded shadow-md uppercase   hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            <LocalPhoneSharpIcon />	<a href="tel:+88001748885444p123">call Now</a>
                        </button>
                        <button
                            type="button"
                            class="inline-block  py-2.5 w-full bg-blue-800 bg-opacity-80 text-white font-medium   rounded shadow-md uppercase   hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            <MailOutlineIcon />	<a href="mailto:genexpropertiesltd@gmail.com"> send mail</a>
                        </button>
                        <button
                            type="button"
                            class="inline-block  py-2.5 w-full bg-blue-800 bg-opacity-80 text-white font-medium   rounded shadow-md uppercase   hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            <WhatsappOutlinedIcon />
                            <a href="https://web.whatsapp.com/">whatsapp</a>
                        </button>
                    </div>


                </div>

            </div>

           
        </div>

        
    )
}

export default Project