import React from 'react';
import { useState } from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Img1 from '../../assets/background/Neuropedia-1-e1638035373984.png'
import Final1 from '../../assets/service/building2.png'
import Final from '../../assets/service/Untitled design.png'
import Img3 from '../../assets/background/ftf-e1638035426166.png'
import Img4 from '../../assets/background/fs_logo_300px.png'
import brand1 from '../../assets/service/bsrm.png'
import brand2 from '../../assets/service/brac-bank.png'
import brand3 from '../../assets/service/Prime_Bank_Logo.png'
import brand4 from '../../assets/service/fresh.png';
import brand5 from '../../assets/service/ksrm-logo.png';
import brand6 from '../../assets/service/crown.png';
import brand7 from '../../assets/service/aks.jpg';
import brand8 from '../../assets/service/rak.png';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import Bg2 from '../../assets/background/bg2.png'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import phone from '../../assets/icon/phone-cell.jpg'
import Bg from '../../assets/background/bg.jpg'
import main from '../../CSS/main.css'
import clock from '../../assets/icon/clock.gif'
import virus from '../../assets/icon/virus.gif'
import Zero from '../../assets/icon/zero.gif'
import community from '../../assets/icon/c1.gif'
import custom from '../../assets/icon/custom-unscreen.gif'
import cm1 from '../../assets/icon/cm2.gif'
import building from '../../assets/background/building.png'
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubSharpIcon from '@mui/icons-material/BathtubSharp';
import HouseSharpIcon from '@mui/icons-material/HouseSharp';
import CarRepairSharpIcon from '@mui/icons-material/CarRepairSharp';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import Gallary1 from '../../assets/gallary/gallary1.jpg';
import Gallary2 from '../../assets/gallary/gallery2.jpg';
import Gallary3 from '../../assets/gallary/gallery3.png'
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
function Home() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const onSubmit = (values) => alert(JSON.stringify(values, null, 2));
	const Service = [
		{
			id: 1,
			ServiceImg: require('../../assets/icon/reg__1_-removebg-preview.png'),
			ServiceTitle: 'Book Your ',
			Servicesubtitle: 'Desired Flat',
			ServiceBody: 'No Lottery You can choice your floor and bok only at 2lakh taka',


		},
		{
			id: 1,
			ServiceImg: require('../../assets/icon/reg__3_-removebg-preview.png'),
			ServiceTitle: 'Get Land ',
			Servicesubtitle: 'Registration Paper',
			ServiceBody: 'pay land shar price and get land registration paper',


		},
		{
			id: 1,
			ServiceImg: require('../../assets/icon/pay-removebg-preview.png'),
			ServiceTitle: 'Pay Construction',
			Servicesubtitle: 'Cost In Installment',
			ServiceBody: 'Pay Construction expense in installment and supervise development progress',


		},
		{
			id: 1,
			ServiceImg: require('../../assets/icon/handover-removebg-preview.png'),
			ServiceTitle: 'Get Handover ',
			Servicesubtitle: 'In Just 3 Years',
			ServiceBody: 'No delay in project handover guaranteed project handover in 3 years',


		},








	]

	return <div>

		<div className="bg-img w-full h-full" >
			{/**<video src={video1} autoPlay loop muted></video> */}

			<div class=" flex justify-evenly xl:justify-center   gap-5  flex-col  lg:flex-row   p-2 lg:p-0 ">
				<div className='flex flex-col  lg:mt-[10%] hidden md:block '>
					<div className="  lg:p-0 ">
						<h1 class="text-2xl lg:text-6xl font-bold lg:text-white lg:text-start  mb-5">
							Buy Flat in Bashundhara</h1>


						<h2 className='text-lg  lg:text-4xl  lg:text-start font-semibold  mb-5'>with Genex Properties Ltd</h2>
						<p className='text-sm lg:text-lg  max-w-lg'>Genex Properties offers <span class="inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap shadow-lg align-baseline font-bold bg-blue-900 bg-opacity-80 text-white rounded">40%</span> less cost of current market price with luxurious facilities .</p>
						<div class="flex justify-center lg:justify-start space-x-2 mt-5 ">
							<button
								type="button"
								class="inline-block px-6 py-2.5 bg-blue-900 bg-opacity-80 text-white rounded w-full lg:w-auto font-medium text-sm leading-tight uppercase shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
							>
								<LocalPhoneSharpIcon />	<a href="tel:+88001748885444p123">call Now</a>
							</button>
						</div>
					</div>
				</div>
				<div className='lg:hidden'>
					<span class="inline-block w-full py-5 text-2xl leading-none text-center whitespace-nowrap shadow-lg align-baseline font-bold bg-blue-900 bg-opacity-80 text-white rounded">SAVE 40%</span>
					<h1 class="text-2xl  font-bold lg:text-white lg:text-start mt-5 mb-5">
						Buy Flat in  <span className='text-blue-900 '>Bashundhara</span> </h1>
				</div>
				<div className='  rounded-lg shadow-2xl p-5 xl:w-[32%]  lg:mt-14 lg:mb-10 bg-black bg-opacity-60 '>
					<div className="  ">
						<form action="https://formspree.io/f/xbjbjyqk"
							method="POST" >
							<h1 className=' text-2xl  font-bold text-white mb-2'>Build Your Dream Home With Us</h1>
							<p className='max-w-lg text-white'>share your contact details with us. Our Property Experts will call You soon</p>


							{/*-- Email input-- */}
							<div className="mb-6 mt-5 text-white">
								<label htmlFor="FormControlInput">FullName*</label>
								<input
									type="text"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
									name="FormControlInput"
									id="FormControlInput"
									placeholder="Fullname"
									required
								/>
							</div>
							<div className="mb-6 text-white">
								<label htmlFor="FormControlInput2">Phone</label>
								<input
									type="number"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
									name="FormControlInput2"
									id="FormControlInput2"
									placeholder="Phone"
									required
								/>
							</div>
							<div className="mb-6 text-white">
								<label htmlFor="FormControlInput3">Email*</label>
								<input
									type="text"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
									name="FormControlInput3"
									id="FormControlInput3"
									placeholder="Email"
									required
								/>
							</div>






							{/* Submit button */}
							<div className="flex flex-col lg:flex-row  justify-center gap-2 mb-6">
								<button
									type="submit"
									className="inline-block px-9 py-2 w-full bg-blue-900 bg-opacity-80 text-white font-medium   rounded shadow-md "
								>
									SUBMIT
								</button>
								<button
									type="button"
									className="inline-block px-9 py-2 w-full bg-blue-900 bg-opacity-80 text-white font-medium   rounded shadow-md "
								>
									<LocalPhoneSharpIcon />		<a href="tel:+88001748885444p123">call Now</a>
								</button>
							</div>

							{/* 2 column grid layout for inline styling */}

						</form>
					</div>
				</div>
				<div>

				</div>
			</div>
		</div>
		<div className='container mx-auto '>







			{/**	<div className="flex flex-col lg:flex-row justify-center items-center ">
			<div>
				<img src={Div2img} alt="" />
			</div>
			<div className='p-2 text-justify lg:p-0'>
				<p className='text-lg lg:text-2xl font-bold px-3 border-l-8 border-red-500 mb-5'>Get Started In 15 Minutes</p>
				<p className='mb-2 max-w-lg text-sm'>We are doing everything we can to make the platform easy to use. You will be fully on board and start working closer together with your families in less than 15 minutes.</p>

				<p className='max-w-lg text-sm'>No need for extensive training or courses. Works smoothly with your existing business and applications.</p>
			</div>



		</div> */}
			<div className='p-2 lg:p-0'>
				<div className='flex flex-col justify-center items-center lg:flex-row mt-2 lg:mt-10 p-2 lg:p-0'>
					<div>
						<img src={phone} className='h-32 hidden md:block' alt="" />
					</div>
					<div className='text-center'>

						<h1 className='text-sm lg:text-xl font-medium'>Call now to know how you can save <span class="inline-block py-2 px-2.5 leading-none shadow-lg text-center whitespace-nowrap align-baseline font-bold bg-blue-900 bg-opacity-80 text-white rounded">40%</span></h1>
						
						<a href="tel:+88001748885444p123"><h1 className='text-5xl  lg:text-6xl font-medium'>01748885444</h1></a>



					</div>

				</div>
			</div>




			<hr className='h-[1px]  w-full bg-black mt-3  lg:mt-12 ' />
			{/**text-md lg:text-2xl */}
			<h1 className='text-xsm lg:text-2xl font-bold text-center  text-blue-900 text-opacity-70 mt-2 lg:mt-10'>WHY YOU SHOULD BUY FLAT WITH LAND SHARE?</h1>
			<hr className='h-[1px]  w-full bg-black mt-3  lg:mt-12 ' />



			<div className='grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-5 justify-center   mt-10 p-2 lg:p-0 '>
				<div className="block p-6 border-b-2 hover:rounded hover:border hover:border-b-4 border-blue-900 bg-opacity-80 bg-white shadow-lg lg:shadow-none lg:w-80">
					<div className='   flex justify-center mb-4 mt-4'>
						<img src={community} alt="" />
					</div>

					<p className=" text-blue-900 text-opacity-70 text-sm lg:text-2xl text-center font-bold ">
						COMMUNITY
					</p>
					<p className=" text-blue-900 text-opacity-70 text-sm lg:text-2xl text-center font-bold ">BUILDING</p>


				</div>

				<div className="block p-6 border-b-2 hover:rounded hover:border hover:border-b-4 border-blue-900 bg-opacity-80 bg-white shadow-lg lg:shadow-none  lg:w-80">
					<div className='flex justify-center mb-4 mt-4'>
						<img src={custom} alt="" />
					</div>

					<p className=" text-blue-900 text-opacity-70 text-sm lg:text-2xl  text-center font-bold ">
						LAYOUT
					</p>
					<p className=" text-blue-900 text-opacity-70 text-sm  lg:text-2xl text-center font-bold ">CUSTOMIZATION</p>


				</div>

				<div className="block p-6 border-b-2 hover:rounded hover:border hover:border-b-4 border-blue-900 bg-opacity-80 bg-white shadow-lg lg:shadow-none  lg:w-80">
					<div className='flex justify-center mb-4 mt-4'>
						<img src={cm1} alt="" />
					</div>

					<p className=" text-blue-900 text-opacity-70 text-sm lg:text-2xl text-center font-bold ">
						COMMITTEE
					</p>
					<p className=" text-blue-900 text-opacity-70 text-sm lg:text-2xl text-center font-bold ">SUPERVISION</p>


				</div>

				<div className=" block p-6 border-b-2 hover:rounded hover:border hover:border-b-4 border-blue-900 bg-opacity-80 bg-white shadow-lg lg:shadow-none lg:mt-36  lg:w-80">
					<div className='flex justify-center mb-4 mt-4'>
						<img src={virus} alt="" />

					</div>

					<p className=" text-blue-900 text-opacity-70 text-sm lg:text-2xl  text-center font-bold ">
						100% SECURED
					</p>
					<p className=" text-blue-900 text-opacity-70 text-sm lg:text-2xl text-center font-bold ">TRANSACTION</p>


				</div>

				<div className="block p-6 border-b-2 hover:rounded hover:border hover:border-b-4 border-blue-900 bg-opacity-80 bg-white shadow-lg lg:shadow-none lg:mt-36 lg:w-80">
					<div className='flex justify-center mb-4 mt-4'>

						<img src={clock} alt="" />
					</div>

					<p className=" text-blue-900 text-opacity-70 text-sm lg:text-2xl text-center font-bold ">
						TIMELY
					</p>
					<p className=" text-blue-900 text-opacity-70 text-sm lg:text-2xl text-center font-bold ">HANDOVER</p>


				</div>

				<div className="block p-6 border-b-2 hover:rounded hover:border hover:border-b-4 border-blue-900 bg-opacity-80 bg-white shadow-lg lg:shadow-none lg:mt-40 lg:w-80">
					<div className='flex justify-center mb-11 mt-4'>
						<img src={Zero} className='h-14 lg:h-40' alt="" />
					</div>

					<p className=" text-blue-900 text-opacity-70 text-sm lg:text-2xl text-center font-bold  ">
						ZERO FLAT REG.
					</p>
					<p className=" text-blue-900 text-opacity-70 text-sm lg:text-2xl text-center font-bold ">& PARKING COST</p>


				</div>




			</div>


			{/**<div class=" flex justify-evenly gap-5  flex-col  lg:flex-row mt-14  lg:mt-28 lg:mx-20">
			<div className="flex flex-col gap-2 p-2 lg:p-0">
				<div className='border-4 rounded-t-2xl rounded-b-2xl lg:rounded-full p-4'>
					<div className="flex flex-col lg:flex-row gap-5">
						<div className='h-12 w-12  mx-auto flex justify-center items-center rounded-full bg-orange-600 p-5'>
							<ImageSearchIcon fontSize='large' />

						</div>
						<p className='text-xs lg:text-sm'>Data collection and analysis are crucial components of any ethical, quality, evidence-based practice.</p>

					</div>




				</div>
				<div className='border-4 rounded-t-2xl rounded-b-2xl lg:rounded-full p-4'>
					<div className="flex flex-col lg:flex-row gap-5">
						<div className='h-12 w-12  mx-auto flex justify-center items-center rounded-full bg-orange-600 p-5'>
							<ImageSearchIcon fontSize='large' />

						</div>
						<p className='text-xs lg:text-sm'>Data collection and analysis are crucial components of any ethical, quality, evidence-based practice.</p>

					</div>




				</div>
				<div className='border-4 rounded-t-2xl rounded-b-2xl lg:rounded-full p-4'>
					<div className="flex flex-col lg:flex-row gap-5">
						<div className='h-12 w-12  mx-auto flex justify-center items-center rounded-full bg-orange-600 p-5'>
							<ImageSearchIcon fontSize='large' />

						</div>
						<p className='text-xs lg:text-sm'>Data collection and analysis are crucial components of any ethical, quality, evidence-based practice.</p>

					</div>




				</div>

			</div>

			<div className='relative w-full pb-[56.25%] h-0'>
				<iframe className='absolute top-0 left-0 w-[70%] h-full lg:h-[40%] mr-[15%] ml-[15%]' width="560" height="315" src="https://www.youtube.com/embed/LMMF9Ka_bLQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</div> */}

			<hr className='h-[1px] mx-auto w-full bg-black mt-5 lg:mt-24 ' />
			<h1 className='text-2xl lg:text-2xl font-bold text-center  text-blue-900 text-opacity-70 mt-2 mb-2 lg:mt-10 lg:mb-10'>FEATURED PRODUCT</h1>
			<hr className='h-[1px] mx-auto w-full bg-black  ' />

			<div className='mt-14 flex flex-col lg:flex-row gap-14 '>

				<div className='p-2 lg:p-0'>
					<div>

						<Link to="/projectdetails">
							<img src={building} className='rounded ' alt="" />
						</Link>
					</div>
					<div class="flex  gap-2 w-full  mt-5 ">
						<button
							type="button"
							class="block w-full p-2  bg-blue-800 bg-opacity-80 text-white rounded  font-medium text-sm leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							<HouseSharpIcon />	10 shares left
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
							class="inline-block  py-2.5  w-full bg-blue-800 bg-opacity-80 text-white text-xsm lg:text-[16px] font-medium   rounded shadow-md uppercase   hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							<LocalPhoneSharpIcon />	<a href="tel:+88001748885444p123">call Now</a>
						</button>
						<button
							type="button"
							class="inline-block py-2.5  w-full bg-blue-800 bg-opacity-80 text-white font-medium  text-xsm lg:text-[16px] rounded shadow-md uppercase   hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							<MailOutlineIcon />	<a href="mailto:genexpropertiesltd@gmail.com"> send mail</a>
						</button>
						<button
							type="button"
							class="inline-block  py-2.5 w-full bg-blue-800 bg-opacity-80 text-white font-medium text-xsm lg:text-[16px]  rounded shadow-md uppercase  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							<WhatsappOutlinedIcon /><a href="https://web.whatsapp.com/">whatsapp</a>
						</button>
					</div>


				</div>
				<div className='p-2 lg:p-0'>
					<div>
						<Link to="/projectdetails">
							<img src={Final} className='rounded ' alt="" />
						</Link>
					</div>
					<div class="flex  gap-2 w-full  mt-5 ">
						<button
							type="button"
							class="block w-full p-2  bg-blue-800 bg-opacity-80 text-white rounded  font-medium text-sm leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							<HouseSharpIcon />	all share complete
						</button>

					</div>
					<div className='flex justify-between mt-3'>
						<div className='flex flex-col justify-center '>
							<h1 className='font-bold '>BDT <span className='text-2xl'>5000/sqft</span> </h1>
							<p className='text-xl font-bold'>Genex Green House</p>
							<p className='font-medium'>Ploat 17,R4 s-15/3 Uttara</p>

						</div>
						<div>
							<button
								type="button"
								class="block px-6 mb-1   text-black rounded  lg:w-auto font-medium text-sm leading-tight  hover:text-white  hover:bg-blue-900 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
							>
								<HotelIcon /> 3 Beds
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
								<HouseSharpIcon /> 1250 sqft
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
							class="inline-block  py-2.5 w-full bg-blue-800 bg-opacity-80 text-white text-xsm lg:text-[16px] font-medium   rounded shadow-md uppercase   hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							<LocalPhoneSharpIcon />	<a href="tel:+88001748885444p123">call Now</a>
						</button>
						<button
							type="button"
							class="inline-block  py-2.5 w-full bg-blue-800 bg-opacity-80 text-white text-xsm lg:text-[16px] font-medium   rounded shadow-md uppercase   hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							<MailOutlineIcon />	<a href="mailto:genexpropertiesltd@gmail.com"> send mail</a>
						</button>
						<button
							type="button"
							class="inline-block  py-2.5 w-full bg-blue-800 bg-opacity-80 text-white text-xsm lg:text-[16px] font-medium   rounded shadow-md uppercase   hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							<WhatsappOutlinedIcon />
							<a href="https://web.whatsapp.com/">whatsapp</a>
						</button>
					</div>


				</div>
				<div className='p-2 lg:p-0'>
					<div>
						<Link to="/projectdetails">
							<img src={Final1} className='rounded ' alt="" />
						</Link>
					</div>
					<div class="flex  gap-2 w-full  mt-5 ">
						<button
							type="button"
							class="block w-full p-2  bg-blue-800 bg-opacity-80 text-white rounded  font-medium text-sm leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							<HouseSharpIcon /> all share complete
						</button>

					</div>
					<div className='flex justify-between mt-3'>
						<div className='flex flex-col justify-center '>
							<h1 className='font-bold '>BDT <span className='text-2xl'>4800/sqft</span> </h1>
							<p className='text-xl font-bold'>Genex Light Homes</p>
							<p className='font-medium'>Ploat 11,R2/a s-a6/g Uttara</p>

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
							class="inline-block  py-2.5 w-full bg-blue-800 bg-opacity-80 text-white font-medium text-xsm lg:text-[16px]  rounded shadow-md uppercase   hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							<LocalPhoneSharpIcon />	<a href="tel:+88001748885444">call Now</a>
						</button>
						<button
							type="button"
							class="inline-block  py-2.5 w-full bg-blue-800 bg-opacity-80 text-white font-medium text-xsm lg:text-[16px]  rounded shadow-md uppercase   hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							<MailOutlineIcon />	 <a href="mailto:genexpropertiesltd@gmail.com"> send mail</a>
						</button>
						<button
							type="button"
							class="inline-block  py-2.5 w-full bg-blue-800 bg-opacity-80 text-white font-medium text-xsm lg:text-[16px]  rounded shadow-md uppercase   hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							<WhatsappOutlinedIcon /><a href="https://web.whatsapp.com/">whatsapp</a>
						</button>
					</div>


				</div>

			</div>


			<hr className='h-[1px] mx-auto  bg-black mt-5 lg:mt-24 ' />
			<h1 className=' text-xl lg:text-2xl font-bold text-center  text-blue-900 text-opacity-70 mt-4 lg:mt-8'>Buy Flat With Land Share In Just 4 Steps</h1>
			<p className='text-center text-xsm lg:text-sm mt-2 lg:mt-4'>Transparency is a big issue in real estate sector. Before investing your hrd earned</p>

			<hr className='h-[1px] mx-auto  bg-black mt-2 lg:mt-5 lg:mb-5' />





			<div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6  gap-2  mt-5 lg:mt-20 mb-2 lg:mb-20 lg:mx-20 p-2 lg:p-0">
				{Service.map((x) => (
					<div className=' p-2' key={x.id}>
						<div className='flex justify-center items-center'>
							<img src={x.ServiceImg} className='w-1/2' alt="" />
						</div>
						<h1 className='text-xsm lg:text-2xl font-bold text-center   text-blue-900 text-opacity-70 mt-5'>{x.ServiceTitle}</h1>
						<h1 className='text-xsm lg:text-2xl font-bold text-center  text-blue-900 text-opacity-70 mb-2'>{x.Servicesubtitle}</h1>
						<p className='text-xsm lg:text-center text-justify'>{x.ServiceBody}</p>
					</div>
				))}


			</div>

			<div className='lg:mx-20 mt-5 lg:mt-14 p-2 lg:p-0 '>
				<p className='text-lg lg:text-2xl font-bold px-3 border-l-8 border-red-500 mb-5  text-blue-900 text-opacity-70'>Associate & Suppliers</p>


				<div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10  gap-5 p-2 lg:p-0">
					<div className=' lg:h-1/1 lg:w-1/2 flex justify-center items-center '>
						<img src={brand1} alt="" />

					</div>
					<div className=' p-4 py-10  lg:h-1/1 lg:w-1/2 flex justify-center items-center'>
						<img src={brand2} alt="" />

					</div>
					<div className=' p-4 py-10  lg:h-1/1 lg:w-1/2 flex justify-center items-center'>
						<img src={brand3} alt="" />

					</div>
					<div className=' p-4 py-10 lg:h-1/1 lg:w-1/2 flex justify-center items-center  '>
						<img src={brand4} alt="" />

					</div>
					<div className=' p-4 py-10 lg:h-1/1 lg:w-1/2 flex justify-center items-center hidden md:block'>
						<img src={brand5} alt="" />

					</div>
					<div className=' p-4 py-10  lg:h-1/1 lg:w-1/2 flex justify-center items-center hidden md:block'>
						<img src={brand6} alt="" />

					</div>
					<div className=' p-4 py-10  lg:h-1/1 lg:w-1/2 flex justify-center items-center hidden md:block'>
						<img src={brand7} alt="" />

					</div>
					<div className=' p-4 py-10 lg:h-1/1 lg:w-1/2 flex justify-center items-center  hidden md:block'>
						<img src={brand8} alt="" />

					</div>
				</div>

			</div>
			{/**<div className="flex flex-col lg:flex-row gap-5 p-2 ">
					<div className='border-2 p-4  h-1/1 w-1/2 flex justify-center items-center '>
						<img src={brand5} alt="" />

					</div>
					<div className='border-2 p-4   h-1/1 w-1/2 flex justify-center items-center'>
						<img src={brand6}   alt="" />

					</div>
					<div className='border-2 p-4  h-1/1 w-1/2 flex justify-center items-center'>
						<img src={brand7}  alt="" />

					</div>
					<div className='border-2 p-4  h-1/1 w-1/2 flex justify-center items-center  '>
						<img src={brand8}   alt="" />

					</div>
				</div> */}


			





			{/**<div className='lg:mx-20 mt-14 p-2 lg:p-0 '>
				<p className='text-lg lg:text-2xl font-bold px-3 border-l-8 border-red-500 mb-5  text-blue-900 text-opacity-70'>Why Choose Genex Properties ltd</p>


				<div className="flex flex-col lg:flex-row gap-5 p-2 ">
					<div className='border-2 p-4 py-10 flex flex-col  justify-center items-center rounded'>
						<AlarmOnIcon sx={{ fontSize: 47 }} />

						<div className='text-center mt-3'><h1 className='text-xl font-bold text-blue-900 text-opacity-70 mb-2'>More Time Practicing</h1>
							<p className='text-sm'>Easily manage your business so you can spend more time with clients.</p>
						</div>


					</div>

					<div className='border-2 p-4 py-10 flex flex-col  justify-center items-center rounded'>
						<AlarmOnIcon sx={{ fontSize: 47 }} />

						<div className='text-center mt-3'><h1 className='text-xl font-bold text-blue-900 text-opacity-70 mb-2'>More Time Practicing</h1>
							<p className='text-sm'>Easily manage your business so you can spend more time with clients.</p>
						</div>


					</div>
					<div className='border-2 p-4 py-10 flex flex-col  justify-center items-center rounded'>
						<AlarmOnIcon sx={{ fontSize: 47 }} />

						<div className='text-center mt-3'><h1 className='text-xl font-bold text-blue-900 text-opacity-70 mb-2'>More Time Practicing</h1>
							<p className='text-sm'>Easily manage your business so you can spend more time with clients.</p>
						</div>


					</div>

				</div>
			</div> */}
			<div class=" flex justify-between gap-5  flex-col  lg:flex-row mt-5  lg:mt-28 lg:mx-20">
				<div className="max-w-lg   p-4 lg:p-0 lg:text-start">
					<div className='max-w-lg'>
						<p className='text-lg lg:text-2xl font-bold px-3 border-l-8 border-red-500 mb-5'>Visit Our Youtube Chanel</p>
						<p className='text-sm'>Start your trial. Invite your team. Join the thousands of care professionals using Therapy PMS to run their practice every day.</p>
						<div class="flex justify-center lg:justify-start space-x-2 mt-5">
							<button
								type="button"
								class="inline-block w-full px-6 py-2.5 bg-orange-700 rounded text-white font-medium text-sm leading-tight uppercase  shadow-md"
							>
								<a href="https://www.youtube.com/channel/UC_fbrk9-nA3pMjJHZKGuszA/featured"><ArrowCircleRightIcon />	Visit Our Chanel</a>

							</button>
						</div>


					</div>
				</div>

				<div className='relative w-full pb-[56.25%] h-0'>

					<iframe className='absolute top-0 left-0 w-[70%] h-full lg:h-[40%] mr-[15%] ml-[15%]' width="560" height="315" src="https://www.youtube.com/embed/yEoiAadWHqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


				</div>


			</div>






			<h1 className='text-lg lg:text-2xl font-bold text-center  text-blue-900 text-opacity-70 mt-[5%] lg:mt-[-22%]'>Gallery</h1>
			<hr className='h-[1px] mx-auto  bg-red-700  mt-2 lg:mt-5 mb-2 lg:mb-5' />


			<div className="grid grid-cols-2 gap-5  p-2 lg:p-0 ">
				<div>
					<img src={Gallary1} className='rounded hidden md:block' alt="" />
				</div>
				<div>
					<img src={Gallary1} className='rounded hidden md:block' alt="" />
				</div>
			</div>
			<div className="flex justify-center gap-5 p-2 lg:p-0">
				<div>
					<img src={Gallary3} className='rounded' alt="" />
				</div>
				<div>
					<img src={Gallary1} className='rounded' alt="" />

				</div>
			</div>



			<hr className='h-[1px] mx-auto  bg-red-700 mt-5 lg:mt-24   hidden md:block' />
			<h1 className='text-lg lg:text-2xl font-bold text-center  text-blue-900 text-opacity-70 mt-2 lg:mt-5 hidden md:block'>Get In Touch With Us</h1>
			<hr className='h-[1px] mx-auto  bg-red-700  mt-2 lg:mt-5 mb-2 lg:mb-5 ' />
			<div className="flex flex-col justify-center items-center lg:flex-row gap-5 p-2 lg:p-0">


				{/** <div className=''>
					<img src={Bg2} alt="" />
				</div>*/}

				<div className='  rounded-lg shadow-2xl p-5   bg-black bg-opacity-70 lg:mt-20 hidden md:block'>
					<div className="  ">
						<form action="https://formspree.io/f/xbjbjyqk"
							method="POST" onSubmit={handleSubmit(onSubmit)}>
							<h1 className=' text-2xl  font-bold text-white mb-2'>Build Your Dream Home With Us</h1>
							<p className='max-w-lg text-white'>share your contact details with us. Our Property Experts will call You soon</p>


							{/*-- Email input-- */}
							<div className="mb-6 mt-5 text-white">
								<label htmlFor="exampleFormControlInput">FullName*</label>
								<input
									type="text"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
									name="exampleFormControlInput"
									id="exampleFormControlInput"
									placeholder="Fullname"
									required
									
								/>
								
							</div>
							<div className="mb-6 text-white">
								<label htmlFor="exampleFormControlInput2">Phone</label>
								<input
									type="number"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
									name="exampleFormControlInput2"
									id="exampleFormControlInput2"
									placeholder="Phone"
									required
								/>
							</div>
							<div className="mb-6 text-white">
								<label htmlFor="exampleFormControlInput3">Email*</label>
								<input
									type="email"
									className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
									name="exampleFormControlInput3"
									id="exampleFormControlInput3"
									placeholder="Email"
									required
									{...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
								/>
								{errors.email && <span>Invalid email</span>}
							</div>






							{/* Submit button */}
							<div className="flex flex-col lg:flex-row  justify-center gap-2 mb-6">
								<button
									type="submit"
									className="inline-block px-9 py-2 w-full bg-blue-900 bg-opacity-80 text-white font-medium   rounded shadow-md "
								>
									SUBMIT
								</button>
								<button
									type="button"
									className="inline-block px-9 py-2 w-full bg-blue-900 bg-opacity-80 text-white font-medium   rounded shadow-md "
								>
									<LocalPhoneSharpIcon />		 <a href="tel:+88001748885444p123">Call Now</a>
								</button>
							</div>

							{/* 2 column grid layout for inline styling */}

						</form>
					</div>
				</div>

			</div>









		</div>;
	</div>
}

export default Home;
