import React from 'react';
import Service1 from '../../assets/service/HIPAA-Compliance-Verification-Seal-of-compliance-e1637986779983.png'
import Service2 from '../../assets/service/LL1-ouai0puf0e37giyah65pk5cx09ux9gslu336ob98u8.png'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';

import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import DraftsIcon from '@mui/icons-material/Drafts';

function Footer() {
	const d = new Date();
	return (
		<div className="w-full  bg-primary text-white mt-20">
			<div className="container mx-auto  p-5">
				<div className="flex justify-between flex-col md:flex-row gap-5">
					<div className="flex flex-col gap-5 max-w-sm">

						<h1 className='text-2xl font-bold'>Why Therapy PMS</h1>
						<div>An ABA stage that is both vigorous and instinctive. Raise your clinical and moral principles. Progress clients with satisfaction simultaneously.</div>
					</div>

					<ul className="md:w-[300px] list-disc">
						<h1 className="md:text-lg text-md font-bold mb-5"> TOP FEATURES</h1>

						<li className="md:text-sm text-xsm mb-2">
							Scheduling</li>


						<li className="md:text-sm text-xsm mb-2">Insurance Billing</li>


						<li className="md:text-sm text-xsm mb-2">
							Client/Parent Portal</li>
						<li className="md:text-sm text-xsm mb-2">
							AUTH Management</li>
						<li className="md:text-sm text-xsm mb-2">
							Session Notes</li>

					</ul>
					<ul className="md:w-[300px]">
						<h1 className="md:text-lg text-md font-bold mb-5"> CONTACT US</h1>
						<span className="flex items-center gap-2">
							<MapsHomeWorkIcon />
							<li className="md:text-sm text-xsm mb-2">205, 48th ST, APT2, Union City, NJ-07087</li>
						</span>

						<span className="flex items-center gap-2">
							<DraftsIcon />
							<li className="md:text-sm text-xsm mb-2">
								sales@amrextherapypm.com</li>
						</span>
						<span className="flex items-center gap-2">
							<PhoneEnabledIcon />
							<li className="md:text-sm text-xsm mb-2">+8801888042370</li>
						</span>
					</ul>
				</div>
				<div className="flex justify-between flex-col md:flex-row gap-5">


					<ul className="md:w-[300px] list-disc">
						<h1 className="md:text-lg text-md font-bold mb-5"> PRODUCTS</h1>

						<li className="md:text-sm text-xsm mb-2">
							Practice Management</li>


						<li className="md:text-sm text-xsm mb-2">
							Clinical Solutions</li>


						<li className="md:text-sm text-xsm mb-2">

							Managed Billing</li>
						<li className="md:text-sm text-xsm mb-2">
							Learning Management System</li>
						<li className="md:text-sm text-xsm mb-2">
							Analytics & Reporting</li>

					</ul>
					<ul className="md:w-[300px] lg:ml-10 list-disc">
						<h1 className="md:text-lg text-md font-bold mb-5"> SOLUTIONS</h1>

						<li className="md:text-sm text-xsm mb-2">
							New & Small Practices</li>


						<li className="md:text-sm text-xsm mb-2">Large/Multi-Site Practices</li>


						<li className="md:text-sm text-xsm mb-2">
							School-Based ABA/ABA Clinics</li>


					</ul>
					<ul className="md:w-[300px] list-disc">
						<h1 className="md:text-lg text-md font-bold mb-5"> ABOUT US</h1>

						<li className="md:text-sm text-xsm mb-2">
							About Company</li>


						<li className="md:text-sm text-xsm mb-2">News</li>


						<li className="md:text-sm text-xsm mb-2">
							Contact Us</li>


					</ul>
				</div>

			</div>
			<div className="md:text-sm text-xsm  text-center bg-secondary w-full">
				<div className="flex flex-col lg:flex-row  justify-evenly items-center">
					<div className="text-center py-5">Copyright &copy; {d.getFullYear()} All right reserved </div>
					<div className='flex items-center gap-5'>
						<p className='text-lg   border-r-4 border-red-500 px-4 '>Term</p>
						<p >privacy policy</p>
					</div>
					<div className="flex flex-wrap">
						<img src={Service1} className='h-11' alt="" />
						<img src={Service2} className='h-11' alt="" />
					</div>
				</div>


			</div>
		</div>
	);
}

export default Footer;
