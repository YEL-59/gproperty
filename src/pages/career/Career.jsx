import React from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Career = () => {
    return (
        <div> 
            <div className="container mx-auto flex lg:flex-row flex-col  justify-evenly   mt-20">
                <div class="   ">
                    <div class="p-6  shadow-lg rounded-lg">
                        <div className="w-[120px] bg-green-100 flex justify-center items-center  border rounded-full  p-2 mb-4">
                            <LocationOnIcon sx={{ fontSize: 17 }} />
                            <p className="px-2 text-sm font-semibold  text-green-500">
                                FullTime
                            </p>
                        </div>


                        <h5 class=" text-gray-900 text-3xl font-bold ">
                            Assistant Project Manager Required
                        </h5>
                        <div className="mt-4 mb-4">
                            <div className="flex items-center">
                                <h4 className="font-semibold">Company :</h4>
                                <p className="uppercase text-sm text-gray-500 ml-2">Genex Properties ltd</p>
                            </div>
                            <div className="flex items-center">
                                <h4 className="font-semibold">Deadline :</h4>
                                <p className="uppercase text-sm text-gray-500 ml-2">
                                    28 Feb April
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-start gap-10 flex-wrap ">
                            <div className="flex justify-center items-center border rounded-full shadow-md p-2">
                                <BusinessCenterIcon
                                    className="text-blue-300"
                                    sx={{ fontSize: 22 }}
                                />
                                <p className="px-2 text-sm font-semibold text-gray-500">
                                    Assistant Project Manager
                                </p>
                            </div>
                            <div className="flex justify-center items-center border rounded-full shadow-md p-2">
                                <LocalAtmIcon className="text-blue-500" sx={{ fontSize: 22 }} />
                                <p className="px-2 text-sm font-semibold text-gray-500">
                                    BDT 50000 - 70000
                                </p>
                            </div>
                            <div className="flex justify-center items-center border rounded-full shadow-md p-2">
                                <LocationOnIcon
                                    className="text-red-500"
                                    sx={{ fontSize: 22 }}
                                />
                                <p className="px-2 text-sm font-semibold text-gray-500">
                                    Dhaka
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*2rd container  */}
                <div>
                    <div className="w-full   bg-[#f4f8f9] p-6 mb-6">
                        <div class=" lg:w-96">
                            <div class="input-group relative flex  items-stretch w-full ">
                                <input
                                    type="search"
                                    class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="button-addon2"
                                />
                                <button
                                    class="btn inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                                    type="button"
                                    id="button-addon2"
                                >
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="search"
                                        class="w-4"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full   bg-[#f4f8f9] p-5 mb-6">
                        <div>
                            <h4 className="mb-2 font-semibold text-2xl">Jobs Category</h4>
                            <div className="text-lg text-gray-500">
                                <p>Business</p>
                                <p>Graphic</p>
                                <p>Enterpreneur</p>
                                <p>Marketing</p>
                                <p>Mobile App</p>
                                <p>Design</p>
                                <p>Writing</p>
                                <p>Software</p>
                                <p>Development</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;
