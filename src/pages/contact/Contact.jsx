import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Contact = () => {
    return (
        <div> <div className="flex flex-col lg:flex-row justify-center gap-5 p-2  mt-24 ">
            <div className=" bg-slate-200 text-center p-6 rounded">
                <LocationOnIcon sx={{ fontSize: 70 }} />
                <h3 className="text-lg font-semibold mt-4 mb-2">Dhaka Office</h3>
                <p className=" text-gray-500 ">
                 House#1150 Block#11
                </p>
                <p className=" text-gray-500 ">
                    mirpur-12, Dhaka-1212
                </p>
            </div>
          
            <div className=" bg-slate-200 text-center p-6 rounded">
                <EmailIcon sx={{ fontSize: 70 }} />
                <h3 className="text-lg font-semibold mt-4 mb-2">Email Address</h3>
                <p className=" text-gray-500 ">genexpropertiesltd@gmail.com</p>
            </div>
            <div className=" bg-slate-200 text-center p-6 rounded">
                <LocalPhoneIcon sx={{ fontSize: 70 }} />
                <h3 className="text-lg font-semibold mt-4 mb-2">Phone Number</h3>
                <p className=" text-gray-500 ">+8801748885444</p>
                <p className=" text-gray-500 ">+880 1888 042371</p>
            </div>
            
        </div>

            <div className="max-w-lg px-5 mx-auto ">
                <form>
                    <h1 className="text-center font-extrabold md:text-3xl text-2xl mb-14 mt-24">
                        Request A Quote
                    </h1>
                    {/*-- Email input-- */}
                    <div className="mb-6 ">
                        <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-md  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="Name"
                        />
                    </div>
                    
                    <div className="mb-6 ">
                        <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-md  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="Email"
                        />
                    </div>

                    <div className="mb-6 ">
                        <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-md  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="City"
                        />
                    </div>
                    <div className="mb-6 ">
                        <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-md  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="phone"
                        />
                    </div>
                    <div className="mb-6 ">
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
        rounded
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
                    <div className="mb-6">
                        <label
                            for="formFile"
                            class="form-label inline-block mb-2 text-gray-700"
                        >
                            {" "}
                            File{" "}
                        </label>
                        <input
                            class="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="file"
                            id="formFile"
                        ></input>
                    </div>
                    <div className="mb-6 flex items-center gap-3">
                        <input
                            type="checkbox"
                            className="form-control  h-10 w-5 "
                            id="exampleFormControlInput2"
                            placeholder="Username"
                        />
                        <span> Accept Our Terms & Condition Privacy Policy <a href="https://github.com/YEL-59">.</a> </span>
                    </div>

                    {/* Submit button */}
                    <div className="flex  justify-center mb-6">
                        <button
                            type="button"
                            className="inline-block px-9 py-2  bg-blue-900 bg-opacity-80%  text-white font-medium   rounded shadow-md "
                        >
                            Send Quote
                        </button>
                    </div>
                </form>
            </div></div>
    )
}

export default Contact