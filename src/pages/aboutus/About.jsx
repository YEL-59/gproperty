import React from "react";
import AboutBlogimg from "../../assets/background/rexoit-about-image.png";
import BlogImg from '../../assets/background/blog.jpg';
import AboutGrid from "../../assets/background/grid-know-about.jpg";
import Aboutback from '../../assets/background/Group-23620.png'

function About() {
    {/**   employeeImg: require("../../assets/background/arifsm.png"), */}
    const employees = [
        {
            id: 1,
         
            employeeName: "Md.jakir Hossan",
            employeeDesi: "Founder CEO & Managing Director",
        },
        {
            id: 2,
          
            employeeName: "Md.Arif islam",
            employeeDesi: "Co-Founder & Chairman",
        },

    ];
    const gmemployees = [
        {
            id: 1,
          
            employeeName: "Md.Arif islam",
            employeeDesi: "General Manager",
        },


    ];
    const itemployees = [
        {
            id: 1,
          
            employeeName: "Md.Kamrul hassan",
            employeeDesi: "Head of Sales & Marketing",
        },
        {
            id: 2,
           
            employeeName: "Md.mONOWAR",
            employeeDesi: "Digital Marketing",
        },
        {
            id: 3,
          
            employeeName: "Md.TOFAYEL islam",
            employeeDesi: "Developer",
        },

    ];
    const gremployees = [
        {
            id: 1,
           
            employeeName: "Md.Fahim Ahmed",
            employeeDesi: "Deputy Manager",
        },
        {
            id: 2,
          
            employeeName: "Md.Miraj Ahmed",
            employeeDesi: "Assistant Manager",
        },
        {
            id: 3,
           
            employeeName: "Md.sifat islam",
            employeeDesi: "Business Development ",
        },


    ];
    const gr2employees = [
        {
            id: 1,
          
            employeeName: "Md.Hridoy ahmed",
            employeeDesi: "Business Development",
        },


    ];

    return (
        <div className="container mx-auto">
            <div className="flex flex-col  justify-center items-center mt-32 mb-24">
                <h1 className=" text-4xl font-bold max-w-3xl text-center mb-10">
                    Landshare –<span className="text-blue-900 bg-opacity-80%"> a hassle-free</span> alternative to

                    traditional real estate investments
                </h1>
                <p className="max-w-4xl text-center mb-4">Landshare brings real estate to the Binance Smart Chain, offering a hassle-free alternative to traditional real estate investments. By turning real estate assets into fully liquid, yield generating tokens, we create a more accessible form of real estate investment.

                </p>
                <p className="max-w-4xl text-center">Our mission is simple; bridge the gap between DeFi and the real estate industry and make real estate investments accessible to everyone around the globe by eliminating the barriers of traditional real estate investment.</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-evenly items-center mb-14">
                <div className="max-w-lg" >
                    <h1 className="font-bold text-4xl mb-4">The Future of <br /> <span className="text-blue-900 bg-opacity-80% ">Real Estate Investing</span></h1>
                    <p className="max-w-lg text-justify">The rapid growth of DeFi has shown the world that it is the future of finance. It creates investment opportunities for millions of people worldwide who do not have easy access to traditional investment forms. Traditionally, the real estate industry has had a high barrier of entry and has not been attainable for the majority of the population. Landshare is here to change that.</p>
                </div>
                <div>
                    <img src={Aboutback} className='h-[600px]' alt="" />
                </div>
            </div>
            <div className="text-center bg-blue-900 bg-opacity-80% lg:w-[50%] mx-auto  p-10 rounded-lg shadow-2xl mb-20">
                <p className="font-bold text-white text-xl mb-4">
                    “Buy land, they’re not making it anymore”
                </p>
                <h1 className="font-bold text-white">- Mark Twain</h1>
            </div>
           
            <h1 className="text-center text-3xl font-bold text-blue-900 bg-opacity-90 mt-14 mb-5">Management</h1>
            {/*grid img start */}
            <div className="  ">
                <div className="flex flex-col lg:flex-row  justify-around items-center text-center gap-5 lg:gap-0  mt-10">
                    {/* img div start */}

                    {employees.map((employee) => (
                        <div key={employee.id}>
                            <img
                                src={employee.employeeImg}
                                className="h-56 w-auto rounded-full mb-2 mx-auto"
                                alt="# Image not Uploaded"
                            />
                            <div className="mt-10 bg-blue-900 bg-opacity-80 p-3 rounded text-white px-12">
                                <h1 className=" text-2xl  font-bold uppercase">
                                    {employee.employeeName}
                                </h1>
                                <p className="">{employee.employeeDesi}</p>
                            </div>
                        </div>
                    ))}
                    {/* img div end */}
                </div>
            </div>

            {/*grid img start */}
            <div className="  ">
                <div className="flex flex-col lg:flex-row  justify-around items-center text-center  gap-5 lg:gap-0 mt-24">
                    {/* img div start */}

                    {gmemployees.map((employee) => (
                        <div key={employee.id}>
                            <img
                                src={employee.employeeImg}
                                className="h-56 w-auto rounded-full mb-2 mx-auto"
                                alt="# Image not taken"
                            />
                            <div className="mt-10  rounded bg-blue-900 bg-opacity-80 p-3  text-white px-12">
                                <h1 className=" text-2xl font-bold uppercase">
                                    {employee.employeeName}
                                </h1>
                                <p className="">{employee.employeeDesi}</p>
                            </div>
                        </div>
                    ))}
                    {/* img div end */}
                </div>
            </div>
            <h1 className="text-center text-2xl font-bold text-blue-900 bg-opacity-90 mt-24 mb-24">Tech Team</h1>
            {/*grid img start */}
            <div className=" " >
                <div className="flex flex-col lg:flex-row   justify-around items-center text-center  mt-10 gap-5 lg:gap-0">
                    {/* img div start */}

                    {itemployees.map((employee) => (
                        <div key={employee.id}>
                            <img
                                src={employee.employeeImg}
                                className="h-56 w-auto rounded-full mb-2 mx-auto"
                                alt="# Image not taken"
                            />
                            <div className="mt-10 bg-blue-900 bg-opacity-80 p-3 rounded text-white px-12">
                                <h1 className=" text-2xl  font-bold uppercase">
                                    {employee.employeeName}
                                </h1>
                                <p className="">{employee.employeeDesi}</p>
                            </div>
                        </div>
                    ))}
                    {/* img div end */}
                </div>
            </div>
            <h1 className="text-center text-2xl font-bold text-blue-900 bg-opacity-90 mt-24 mb-24">Growth Team</h1>
            {/*grid img start */}
            <div className="  ">
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-around items-center text-center  mt-10">
                    {/* img div start */}

                    {gremployees.map((employee) => (
                        <div key={employee.id}>
                            <img
                                src={employee.employeeImg}
                                className="h-56 w-auto rounded-full mb-2 mx-auto"
                                alt="# Image not taken"
                            />
                            <div className="mt-10 bg-blue-900 bg-opacity-80 p-3 rounded text-white px-12">
                                <h1 className=" text-2xl  font-bold uppercase">
                                    {employee.employeeName}
                                </h1>
                                <p className="">{employee.employeeDesi}</p>
                            </div>
                        </div>
                    ))}
                    {/* img div end */}
                </div>
            </div>
            <div className="  ">
                <div className="flex justify-around items-center text-center  mt-10">
                    {/* img div start */}

                    {gr2employees.map((employee) => (
                        <div key={employee.id}>
                            <img
                                src={employee.employeeImg}
                                className="h-56 w-auto rounded-full mb-2 mx-auto"
                                alt="# Image not taken"
                            />
                            <div className="mt-10 bg-blue-900 bg-opacity-80 p-3 rounded text-white px-12">
                                <h1 className=" text-2xl  font-bold uppercase">
                                    {employee.employeeName}
                                </h1>
                                <p className="">{employee.employeeDesi}</p>
                            </div>
                        </div>
                    ))}
                    {/* img div end */}
                </div>
            </div>

        </div>
    );
}

export default About;
