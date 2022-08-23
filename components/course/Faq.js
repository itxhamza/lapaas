import React from "react";
import { Disclosure } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";
import Footer from "../layouts/Footer";

const Faq = () => {

    const faq = [
        {
            q: "Who can join this course? ",
            a: "Anyone who wants to learn digital marketing can join this program. We will teach you everything from the start.",
        },
        {
            q: "Is there a qualification we need to join this course? ",
            a: "No, you don’t need any qualification for this course. But you should know basic English so you can implement all the learning.",
        },
        {
            q: "What are the requirements to join this program? ",
            a: "Good Internet Connection for Joining Live Session Laptop and Basic knowledge of Laptop so you can implement all the learning and complete your assignments",
        },

        {
            q: "Will we get any recordings, if we miss any live class?",
            a: "We will not provide any kind of recording because we solely want to focus on live learning. However video recording will be provided on the basis of special requests in genuine cases.",
        },
        {
            q: "What is your refund Policy?",
            a: "We will not provide any kind of refund for this course.",
        },
        {
            q: "From Which Device we can access the class?",
            a: "You can access live classes from mobile as well as Laptop.",
        },
        {
            q: "What will be the language of this course? ",
            a: "Hindi",
        },
        {
            q: "I am from outside India, How I can enroll in this Course? ",
            a: "For Outside India we accept only paypal. Pay $500 through Paypal on email id intellectualindies@gmail.com and send us screenshot at +91 9540065704",
        },
    ];

    return (
        <section className="transition-all section">
            <div className="hero-section">
                <div className="w-full">
                    {/* :TITLE & IMAGE */}
                    <div className="mb-8 mx-auto max-w-4xl flex flex-col items-center">
                        <h2 className="text-center text-2xl sm:text-3xl text-white font-semibold px-2">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    {/* :FAQ */}
                    <dl className="mx-auto mb-10 p-2 max-w-4xl flex flex-col items-center">
                        {/* ::Accordion Panel */}
                        {faq.map((faq) => (
                            <Disclosure key={faq.a}>
                                {({ open }) => (
                                    <>
                                        {/* Question */}
                                        <dt
                                            className={`group w-full border-b-2 border-[#D14B39] text-white hover:bg-[#D14B39] hover:text-white ${open && "bg-[#D14B39] text-white"
                                                }`}
                                        >
                                            <Disclosure.Button className="py-5 px-3 w-full flex justify-between items-center">
                                                <span className="text-lg md:text-xl text-left font-semibold">
                                                    {faq.q}
                                                </span>
                                                <FaAngleDown
                                                    className={`${open && "transform rotate-180 text-white"
                                                        } flex-shrink-0 ml-2 w-7 h-7 text-[#D14B39] group-hover:text-white`}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                        </dt>
                                        {/* Answer */}
                                        <dd className="w-full text-lg text-white">
                                            <Disclosure.Panel className="px-4 pt-4 pb-2">
                                                {faq.a}
                                            </Disclosure.Panel>
                                        </dd>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
            <div className='absolute bottom-0 w-full'>
                <Footer />
            </div>
        </section>
    );
};

export default Faq;
