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
const Project = () => {
    return (
        <div>

            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row gap-6'>
                    <div>
                        <img src={building1} className=' mt-4 rounded block mx-auto' alt="" />
                    </div>
                    <div className='lg:w-[50%]' >
                        <div className='  rounded-lg shadow-2xl p-5 '>
                            <div className=" ">
                                <form>
                                    <img src={Logo} className='block mx-auto' alt="" />
                                    <h1 className=' text-lg font-bold text-black mt-2'>Build Your Dream Home With Us</h1>



                                    {/*-- Email input-- */}
                                    <div className="mb-3 mt-3 text-white">
                                        <label htmlFor="">FullName*</label>
                                        <input
                                            type="text"
                                            className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
                                            id="exampleFormControlInput2"
                                            placeholder="Fullname"
                                        />
                                    </div>
                                    <div className="mb-3 text-white">
                                        <label htmlFor="">Phone</label>
                                        <input
                                            type="text"
                                            className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
                                            id="exampleFormControlInput2"
                                            placeholder="Phone"
                                        />
                                    </div>
                                    <div className="mb-6 text-white">
                                        <label htmlFor="">Email*</label>
                                        <input
                                            type="text"
                                            className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
                                            id="exampleFormControlInput2"
                                            placeholder="Email"
                                        />
                                    </div>


                                    <div className='mb-6'>
                                        <textarea
                                            class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-lg
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                            placeholder="Your message"
                                        ></textarea>
                                    </div>






                                    {/* Submit button */}
                                    <div className="flex flex-col lg:flex-row  justify-center gap-2 mb-4">
                                        <button
                                            type="button"
                                            className="inline-block  py-2.5  w-full bg-blue-900 bg-opacity-80 text-white font-medium   rounded shadow-md "
                                        >
                                            SUBMIT
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-block  py-2.5 w-full bg-blue-900 bg-opacity-80 text-white font-medium   rounded shadow-md "
                                        >
                                            <LocalPhoneSharpIcon />		Call Now
                                        </button>
                                    </div>

                                    {/* 2 column grid layout for inline styling */}

                                </form>
                            </div>
                        </div>
                    </div>


                </div>

                <div className='p-2 lg:p-0'>
                    <div className='flex flex-col justify-center items-center lg:flex-row mt-2 lg:mt-10 p-2 lg:p-0'>
                        <div>
                            <img src={phone} className='h-28' alt="" />
                        </div>
                        <div className='text-center'>

                            <h1 className='text-xl font-medium'>Call now to know how you can save <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-900 bg-opacity-80 text-white rounded">40%</span></h1>
                            <h1 className='text-2xl lg:text-6xl font-medium'>01748885444</h1>




                        </div>

                    </div>
                </div>


                <div>
                    <hr className=' bg-black mt-[20px] lg:mt-[55px]' />

                    <h1 className='font-bold lg:text-2xl text-center mt-[20px]'> Buy Flat In Bashundhara Block</h1>
                    <hr className=' bg-black mt-[20px] lg:mt-[55px]' />
                    <div className="  flex flex-col lg:flex-row mt-14">
                        <div>
                            <img src={building2} className='h-[80%] rounded ' alt="" />
                        </div>
                        <div className='mt-14 font-bold text-2xl'>
                            <span><h1 className='lg:text-4xl'>Location: Bashundhara M Block</h1></span>
                            <span><h1 className='lg:text-4xl'>Land Size: 10 Khata</h1></span>
                            <span><h1 className='lg:text-4xl'>Building Type: B + G + 9</h1></span>
                            <span><h1 className='lg:text-4xl'>Flat Size: 2550 sqft</h1></span>
                            <span><h1 className='lg:text-4xl'>Block Unite: M</h1></span>
                            <span><h1 className='lg:text-4xl'>Parking: 1</h1></span>
                            <span><h1 className='lg:text-4xl'>Face: South</h1></span>
                            <span><h1 className='lg:text-4xl'>Face: South</h1></span>
                            <span><h1 className='lg:text-4xl'>Face: South</h1></span>
                        </div>
                    </div>

                </div>
                <hr className=' bg-black ' />

                <h1 className='font-bold lg:text-2xl text-center mt-[20px]'> Features and Amenities</h1>
                <hr className=' bg-black mt-[20px] ' />

                <div className='flex flex-col lg:flex-row gap-5 lg:gap-0 justify-evenly mt-14 '>
                    <div className="block p-6 border-b-2 hover:rounded hover:border hover:border-b-4 border-blue-900 bg-opacity-80 bg-white w-80">
                        <div className='flex justify-center mb-11 mt-4'>
                            <PoolIcon sx={{ fontSize: 80 }} />
                        </div>

                        <p className=" text-blue-900 text-opacity-70 text-2xl text-center font-bold  ">
                            swimmingpool
                        </p>



                    </div>



                    <div className="block p-6 border-b-2 hover:rounded hover:border hover:border-b-4 border-blue-900 bg-opacity-80 bg-white w-80">
                        <div className='flex justify-center mb-11 mt-4'>
                            <YardIcon sx={{ fontSize: 80 }} />
                        </div>

                        <p className=" text-blue-900 text-opacity-70 text-2xl text-center font-bold  ">
                            Gardening
                        </p>



                    </div>

                    <div className="block p-6 border-b-2 hover:rounded hover:border hover:border-b-4 border-blue-900 bg-opacity-80 bg-white w-80">
                        <div className='flex justify-center mb-11 mt-4'>
                            <OutdoorGrillIcon sx={{ fontSize: 80 }} />
                        </div>
                        <p className=" text-blue-900 text-opacity-70 text-2xl text-center font-bold  ">
                            BBQ Zone
                        </p>



                    </div>


                </div>

                <div className='flex flex-col lg:flex-row gap-5 lg:gap-0 justify-evenly mt-24 '>
                    <div className="block p-6 border-b-2 hover:rounded hover:border hover:border-b-4 border-blue-900 bg-opacity-80 bg-white w-80">
                        <div className='flex justify-center mb-11 mt-4'>
                            <MeetingRoomIcon sx={{ fontSize: 80 }} />
                        </div>

                        <p className=" text-blue-900 text-opacity-70 text-2xl text-center font-bold  ">
                            Conference Room
                        </p>



                    </div>

                    <div className="block p-6 border-b-2 hover:rounded hover:border hover:border-b-4 border-blue-900 bg-opacity-80 bg-white w-80">
                        <div className='flex justify-center mb-11 mt-4'>
                            <FitnessCenterIcon sx={{ fontSize: 80 }} />
                        </div>

                        <p className=" text-blue-900 text-opacity-70 text-2xl text-center font-bold  ">
                            GYM
                        </p>



                    </div>

                    <div className="block p-6 border-b-2 hover:rounded hover:border hover:border-b-4 border-blue-900 bg-opacity-80 bg-white w-80">
                        <div className='flex justify-center mb-11 mt-4'>
                            <MosqueIcon sx={{ fontSize: 80 }} />
                        </div>

                        <p className=" text-blue-900 text-opacity-70 text-2xl text-center font-bold  ">
                            Prayer Zone
                        </p>



                    </div>


                </div>
            </div>
            <hr className=' bg-black mt-14' />

            <h1 className='font-bold lg:text-2xl text-center mt-[20px]'> Features and Amenities</h1>
            <hr className=' bg-black mt-[20px] ' />

            <div className='flex justify-center mt-3'>

                <div className='flex flex-col justify-center '>
                    <button
                        type="button"
                        class=" px-6 mb-1 flex flex-row items-center  text-black rounded  lg:w-auto font-medium text-sm leading-tight  hover:text-white  hover:bg-blue-900 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        <HotelIcon sx={{fontSize:40}}  /> <span className='text-4xl '> 4 Beds</span>
                    </button>
                    <button
                        type="button"
                        class="flex flex-row items-center px-6 mb-1   text-black rounded  lg:w-auto font-medium text-sm leading-tight hover:text-white hover:bg-blue-900 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                    >
                        <BathtubSharpIcon sx={{ fontSize: 40 }} /> <span className='text-4xl '> 4 Bath</span>
                    </button>
                    <button
                        type="button"
                        class="flex flex-row items-center px-6 mb-1   text-black rounded  lg:w-auto font-medium text-sm leading-tight hover:text-white  hover:bg-blue-900 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                    >
                        <HouseSharpIcon sx={{ fontSize: 40 }} /> <span className='text-4xl '> 2550 sqft</span>
                    </button>
                    <button
                        type="button"
                        class="flex flex-row items-center px-6    text-black rounded  lg:w-auto font-medium text-sm leading-tight hover:text-white  hover:bg-blue-900 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                    >
                        <CarRepairSharpIcon sx={{ fontSize: 40 }} /> <span className='text-4xl '> 1 parking</span>
                    </button>
                </div>
                <div >
                    <img src={building} alt="" />

                </div>

            </div>
        </div>
    )
}

export default Project