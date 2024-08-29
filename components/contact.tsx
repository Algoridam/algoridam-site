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
    <section className='flex flex-col items-center mb-20'>
      <h1 className='text-6xl font-medium text-center'>Get in touch</h1>
      <p className='mt-4 text-center tracking-wide opacity-70'>We specialize in creating custom software solutions that empower <br /> businesses to achieve their unique goals.</p>
      <div className='mt-16 w-[760px] bg-white bg-opacity-5 border border-white border-opacity-20 px-8 py-10 rounded-[40px]'>
        <p className='tracking-wide opacity-70 mb-5 text-xl font-light'>We're excited to hear from you and discuss how we can help with your project or answer any questions you may have.</p>
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