import React, { useState } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../../assets/logo/logo.png';
import NavLinks from './Navlinks';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
function Navbar() {
	const [open, setOpen] = useState(false);
	return (
		<>
		
		
			<nav className="bg-white shadow-2xl lg:text-black text-black sticky top-0 w-full z-50">
				<div className="container mx-auto flex items-center font-medium justify-between">
					<div className="z-50 p-5 lg:w-auto w-full flex justify-between">
						<img src={Logo} alt="logo" className="lg:cursor-pointer h-10" />
						<div className="text-3xl lg:hidden" onClick={() => setOpen(!open)}>
							{open ? <CloseIcon className="text-black" /> : <MenuIcon className="text-black" />}
						</div>
					</div>
					<ul className="lg:flex hidden items-center gap-3 font-[Poppins] ">
						<NavLinks  />
						<div class="flex items-center p-5 gap-2">
							<button type="button" class="inline-block px-6 py-2 bg-blue-900 bg-opacity-80 text-white font-medium text-sm leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
								
								<LocalPhoneSharpIcon /> <a href="tel:+88001748885444p123">01748885444</a> </button>
						</div>
					</ul>

					{/* Mobile nav */}
					<ul
						className={`
        lg:hidden bg-white fixed w-full top-20 overflow-y-auto bottom-0 py-5 pl-4
        duration-500 ${open ? 'left-0' : 'left-[-100%]'}
        `}
					>
						<NavLinks />
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
