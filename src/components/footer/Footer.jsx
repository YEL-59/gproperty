import React from 'react';

import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import Logo from '../../assets/logo/logo.png';
import logo from '../../assets/logo/logo-removebg-preview.png'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import DraftsIcon from '@mui/icons-material/Drafts';

function Footer() {
	const d = new Date();
	return (
		<div className="w-full bg-slate-300 bg-opacity-40  text-black  lg:mt-20">
			<hr />
			<div className="container mx-auto  p-5">
				<div className="flex justify-between flex-col md:flex-row gap-5">
					<div className="flex flex-col gap-5 max-w-sm">

						<img src={logo} className='w-[50%] h-24' alt="" />
						<div>Genex Properties Ltd. offers flat at 40% less cost of current market price with luxurious facilities. Build Your Dream Home With Us.</div>
					</div>

					<ul className="md:w-[300px]  font-medium ">
						<h1 className="md:text-lg text-md font-bold mb-5"> TOP FEATURES</h1>

						<li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
							- Home</li>




						<li className="md:text-sm text-xsm mb-2 hover:text-blue-900">- Product Details</li>


						<li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
							- Career</li>
						<li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
							- About us</li>
						<li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
							- contact us</li>

					</ul>
					<ul className="md:w-[300px]">
						<h1 className="md:text-lg text-md font-bold mb-5"> CONTACT US</h1>
						<span className="flex items-center gap-2">
							<MapsHomeWorkIcon />
							<li className="md:text-sm text-xsm mb-2">Mirpur DOHS 9/A ave 11RD, Mirpur-12</li>
						</span>

						<span className="flex items-center gap-2">
							<DraftsIcon />
							<li className="md:text-sm text-xsm mb-2">

								genexpropertiesltd@gmail.com
								
								</li>
						</span>
						<span className="flex items-center gap-2">
							<PhoneEnabledIcon />
							<li className="md:text-sm text-xsm mb-2">01748885444</li>
						</span>
					</ul>
				</div>
				

			</div>
			<div className=" text-xsm  text-center bg-secondary w-full">
				<div className="flex flex-col lg:flex-row text-white  justify-evenly items-center">
					<div className="text-center py-2">Copyright &copy; {d.getFullYear()} All right reserved <a href="https://github.com/YEL-59">.</a> </div>
					<div className='flex items-center gap-5 '>
						<p className='text-xsm   border-r-2 border-red-500 px-4 '> <span className='text-red-500 text-lg'>T</span>erm & <span className='text-red-500 text-lg'>C</span>ondition</p>
						<p className='text-xsm'><span className='text-red-500 text-lg'>P</span>rivacy <span className='text-red-500 text-lg'>P</span>olicy</p>
					</div>
					<div className="flex flex-wrap ">
						<img src={Logo} className='h-4  rounded' alt="" />
						<a href="https://github.com/YEL-59">.</a>
					</div>
				</div>


			</div>
		</div>
	);
}

export default Footer;
