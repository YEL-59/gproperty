import React from "react";
import AboutBlogimg from "../../assets/background/rexoit-about-image.png";
import BlogImg from '../../assets/background/blog.jpg';
import AboutGrid from "../../assets/background/grid-know-about.jpg";
function About() {
    const employees = [
        {
            id: 1,
            employeeImg: require("../../assets/background/arifsm.png"),
            employeeName: "Md.Arif islam",
            employeeDesi: "Founder CEO & Managing Director",
        },
        {
            id: 2,
            employeeImg: require("../../assets/background/arifsm.png"),
            employeeName: "Md.Arif islam",
            employeeDesi: "Co-Founder & Chairman",
        },
      
    ];
    const gmemployees = [
        {
            id: 1,
            employeeImg: require("../../assets/background/arifsm.png"),
            employeeName: "Md.Arif islam",
            employeeDesi: "General Manager",
        },
      

    ];
    const itemployees = [
        {
            id: 1,
            employeeImg: require("../../assets/background/arifsm.png"),
            employeeName: "Md.Arif islam",
            employeeDesi: "Senior it Manager",
        },
        {
            id: 2,
            employeeImg: require("../../assets/background/arifsm.png"),
            employeeName: "Md.Arif islam",
            employeeDesi: "Digital Marketing",
        },
        {
            id: 3,
            employeeImg: require("../../assets/background/arifsm.png"),
            employeeName: "Md.Arif islam",
            employeeDesi: "Developer",
        },

    ];
    const gremployees = [
        {
            id: 1,
            employeeImg: require("../../assets/background/arifsm.png"),
            employeeName: "Md.Fahim Ahmed",
            employeeDesi: "Deputy Manager",
        },
        {
            id: 2,
            employeeImg: require("../../assets/background/arifsm.png"),
            employeeName: "Md.Miraj Ahmed",
            employeeDesi: "Assistant Manager",
        },
        {
            id: 3,
            employeeImg: require("../../assets/background/arifsm.png"),
            employeeName: "Md.sifat islam",
            employeeDesi: "Business Development ",
        },
   

    ];
    const gr2employees = [
        {
            id: 1,
            employeeImg: require("../../assets/background/arifsm.png"),
            employeeName: "Md.Arif islam",
            employeeDesi: "General Manager",
        },


    ];
 
    return (
        <div className="container mx-auto">
           
            <h1 className="text-center text-2xl font-bold text-blue-900 bg-opacity-90 mt-14 mb-5">Management</h1>
            {/*grid img start */}
            <div className="  ">
                <div className="flex flex-col lg:flex-row  justify-around items-center text-center gap-5 lg:gap-0  mt-10">
                    {/* img div start */}

                    {employees.map((employee) => (
                        <div key={employee.id}>
                            <img
                                src={employee.employeeImg}
                                className="h-56 w-auto rounded-full mb-2 mx-auto"
                                alt=""
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
                                alt=""
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
                                alt=""
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
                                alt=""
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
                                alt=""
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
