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
            employeeDesi: "Senior Developer",
        },
        {
            id: 2,
            employeeImg: require("../../assets/background/arifsm.png"),
            employeeName: "Md.Arif islam",
            employeeDesi: "Senior Developer",
        },
        {
            id: 3,
            employeeImg: require("../../assets/background/arifsm.png"),
            employeeName: "Md.Arif islam",
            employeeDesi: "Senior Developer",
        },
        {
            id: 4,
            employeeImg: require("../../assets/background/arifsm.png"),
            employeeName: "Md.Arif islam",
            employeeDesi: "Senior Developer",
        },
    ];

    const aboutUs = [
        {
            id: 1,
            aboutImg: require("../../assets/background/rexoit-about-image.png"),
            aboutTitle: " Our Vision",
            aboutText:
                " Our vision is to become a reliable company in the Software & IT industry in the world. We want to become the key partner to our clients.y ",
        },
        {
            id: 2,
            aboutImg: require("../../assets/background/rexoit-about-image.png"),
            aboutTitle: " Our Mision",
            aboutText:
                " Our mission is to help people secure valuable data, use advanced technology in the digital era, discover insights, unlock endless possibilities.",
        },
        {
            id: 3,
            aboutImg: require("../../assets/background/rexoit-about-image.png"),
            aboutTitle: " Our Process",
            aboutText:
                " We listen to our clients closely, try to understand their needs in the best possible way. Analyzing, summering the case study. We add additional value based on the client's demand by innovative ideas, creative work, and advanced strategy. Security, scalability, and efficiency are our core components. We do not compromise with the product and service quality. ",
        },
        {
            id: 4,
            aboutImg: require("../../assets/background/rexoit-about-image.png"),
            aboutTitle: " Our Achievement",
            aboutText:
                " The achievement comes through the vision and mission to reach the goal to create a great success story. We are working according to our target to achieve success. We know the value of client satisfaction, and it's our most priority. We are working with the best possible strategies concerning the significant changes in the Software & IT industry. We have done so many successful projects in the past. We strongly focused on the quality when workings for an effective result and that enhances our client family with sincerity and insight to produce efficient outcomes.",
        },
    ];
    const aboutLargeText = [
        {
            largeText:
                "Rexoit is one of the leading software companies in Bangladesh. Rexoit was established in 2017 to steer customers through the next generation of business innovation powered by technology with state-of-the-art software development and IT services. We provide a wide variety of Software Development & information technology services, including ERP system development, CRM system development, SCADA system development, Cloud development, IoT software development, Mobile app development (IOS & Android), Web Development, Cyber Security, Server development & Management, Artificial Intelligent, Data analysis, Digital marketing, and many more. For companies operating in the digital information era, we help leverage new technologies to competitive advantage. We deliver high-value innovated solutions by bridging the gap between business and technology. Rexoit started its journey 05 years ago to improve digital technology, distribution, and product development for corporate businesses. Our team members are masters in these fields and have consistently delivered high-level results to satisfied customers over the past years. Innovation, advanced technology, information security, creativity, and sophisticated strategy, you have all in one place at Rexoit.",
        },
    ];

    return (
        <div className="container mx-auto">
            <div class=" flex justify-evenly gap-5  flex-col lg:flex-row  mt-14">
                <div className="max-w-lg text-center  p-4 lg:p-0 lg:text-start">
                    <h1 class="text-2xl font-bold   lg:text-start  mb-5">Who We Are</h1>


                    {aboutLargeText.map((lgtext) => (
                        <p className="text-justify">{lgtext.largeText}</p>
                    ))}
                    <div class="flex justify-center lg:justify-start space-x-2 mt-5">
                        <button
                            type="button"
                            class="inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            See more
                        </button>
                    </div>
                </div>

                <div>
                    <a href="#"><img src={BlogImg} className=" h-full w-full lg:w-[90%] rounded " alt="" /></a>
                    
                </div>
            </div>

            {/*grid img start */}
            <div className="  mx-20">
                <div className="grid grid-rows-1   lg:grid-cols-4  mt-14">
                    {/* img div start */}

                    {employees.map((employee) => (
                        <div key={employee.id}>
                            <img
                                src={employee.employeeImg}
                                className="h-auto w-auto rounded-xl mb-2"
                                alt=""
                            />
                            <div className="">
                                <h1 className=" text-2xl font-bold uppercase">
                                    {employee.employeeName}
                                </h1>
                                <p className="text-gray-500">{employee.employeeDesi}</p>
                            </div>
                        </div>
                    ))}
                    {/* img div end */}
                </div>
            </div>
            {/*grid img end */}

            <div className="text-center mt-20 mb-10 ">
                <h1 className="text-4xl font-semibold">Know About Us</h1>
                <p className="text-sm mt-2">
                    We are ready to help you grow your business with more than 5 years of
                    real-life experience in the software & It industry.
                </p>
            </div>

            <div className="lg:mx-20">
                <div className="grid grid-rows-2 lg:grid-cols-2 gap-5  justify-center">
                    {/* img div start */}
                    {aboutUs.map((aboutItem) => (
                        <div className=" h-full   p-2  " key={aboutItem.id}>
                            <a href="#!">
                                <img className=" h-auto w-full  " src={AboutGrid} alt="" />
                            </a>
                            <div className="p-6 ">
                                <h5 className=" text-gray-900 text-2xl font-semibold mb-2">
                                    {aboutItem.aboutTitle}
                                </h5>

                                <p className=" text-gray-500 ">{aboutItem.aboutText}</p>
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
