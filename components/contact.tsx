import React from 'react'
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const Contact = () => {
  // const { register, handleSubmit, reset } = useForm();

  const onSubmit = () => {
    // emailjs.sendForm("service_ey1yo4p", "template_om329zc", ".form", "BjWnSmHPI_7VMVMi6").then(
    //     (result: any) => {
    //         console.log(result.text);
    //     },
    //     (error: any) => {
    //         console.log(error.text);
    //     }
    // );
    // reset();
  };

  return (
    <section className='flex flex-col items-center mb-20 w-[90%] mx-auto max-w-[1440px]'>
      <h1 className='text-[40px] md:text-6xl leading-snug font-medium text-center'>Plan een afspraak</h1>
      <p className='text-xl mt-4 text-center tracking-wide opacity-70 font-light'>Wij staan jou graag te woord om een beeld te geven van alle mogelijkheden. Neem <br className='hidden md:block' /> telefonisch contact op om direct de mogelijkheden te bespreken.</p>
      <div className='mt-16 md:w-[680px] lg:w-[760px] bg-white bg-opacity-5 border border-white border-opacity-20 px-8 py-10 rounded-[40px]'>
        <p className='tracking-wide opacity-70 mb-5 text-xl font-light'>We&rsquo;re excited to hear from you and discuss how we can help with your project or answer any questions you may have.</p>
        <form className="form">
          <input
              type="text"
              placeholder="Full Name"
              className="bg-white bg-opacity-30 py-[18px] px-4 rounded-xl block w-full mt-5 placeholder-white placeholder-opacity-70"
              // {...register("fullName", {
              //     required: "required",
              // })}
          />
          <input
              type="email"
              placeholder="Email"
              className="bg-white bg-opacity-30 py-[18px] px-4 rounded-xl block w-full mt-5 placeholder-white placeholder-opacity-70"
              // {...register("email", {
              //     required: "required",
              // })}
          />
          <textarea
              // {...register("message", {
              //     required: "required",
              // })}
              className="bg-white bg-opacity-30 py-[18px] px-4 rounded-xl block w-full mt-5 placeholder-white placeholder-opacity-70"
              placeholder="message"
              rows={10}
              ></textarea>
          <button className='border border-[#E39CD1] bg-[#330658] py-3 rounded-full mt-6 w-full btn-shadow'>
            Start a project
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact