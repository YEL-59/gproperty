import React from 'react';
import Service1 from '../../assets/service/HIPAA-Compliance-Verification-Seal-of-compliance-e1637986779983.png'
import Service2 from '../../assets/service/LL1-ouai0puf0e37giyah65pk5cx09ux9gslu336ob98u8.png'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import Logo from '../../assets/logo/logo.png';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import DraftsIcon from '@mui/icons-material/Drafts';

function Footer() {
	const d = new Date();
	return (
		<div className="w-full bg-blue-900 bg-opacity-90 text-white  mt-20">
			<div className="container mx-auto  p-5">
				<div className="flex justify-between flex-col md:flex-row gap-5">
					<div className="flex flex-col gap-5 max-w-sm">

						<img src={Logo} className='w-[50%] h-24' alt="" />
						<div>An ABA stage that is both vigorous and instinctive. Raise your clinical and moral principles. Progress clients with satisfaction simultaneously.</div>
					</div>

					<ul className="md:w-[300px] list-disc">
						<h1 className="md:text-lg text-md font-bold mb-5"> TOP FEATURES</h1>

						<li className="md:text-sm text-xsm mb-2">
							Home</li>


						<li className="md:text-sm text-xsm mb-2">Product Details</li>


						<li className="md:text-sm text-xsm mb-2">
							Career</li>
						<li className="md:text-sm text-xsm mb-2">
							AUTH Management</li>
						<li className="md:text-sm text-xsm mb-2">
							Session Notes</li>

					</ul>
					<ul className="md:w-[300px]">
						<h1 className="md:text-lg text-md font-bold mb-5"> CONTACT US</h1>
						<span className="flex items-center gap-2">
							<MapsHomeWorkIcon />
							<li className="md:text-sm text-xsm mb-2">Mirpur DOHS 11/6, Mirpur-12</li>
						</span>

						<span className="flex items-center gap-2">
							<DraftsIcon />
							<li className="md:text-sm text-xsm mb-2">
								genex@gmail.com</li>
						</span>
						<span className="flex items-center gap-2">
							<PhoneEnabledIcon />
							<li className="md:text-sm text-xsm mb-2">+8801888042370</li>
						</span>
					</ul>
				</div>
				

			</div>
			<div className="md:text-sm text-xsm  text-center bg-secondary w-full">
				<div className="flex flex-col lg:flex-row  justify-evenly items-center">
					<div className="text-center py-2">Copyright &copy; {d.getFullYear()} All right reserved </div>
					<div className='flex items-center gap-5'>
						<p className='text-lg   border-r-4 border-red-500 px-4 '>Term</p>
						<p >privacy policy</p>
					</div>
					<div className="flex flex-wrap">
						<img src={Logo} className='h-4  rounded' alt="" />
						
					</div>
				</div>


			</div>
		</div>
	);
}

export default Footer;
