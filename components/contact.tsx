import React, { forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import useLanguageStore from '@/zeustand/languageStore';

const Contact = forwardRef<HTMLElement, {}>((props, ref) => {
  const { translations } = useLanguageStore();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    emailjs.sendForm("service_ey1yo4p", "template_om329zc", ".form", "BjWnSmHPI_7VMVMi6").then(
      (result: any) => {
        console.log(result.text);
      },
      (error: any) => {
        console.log(error.text);
      }
    );
    reset();
  };

  return (
    <section className='flex flex-col items-center mb-20 w-[90%] mx-auto max-w-[1440px]'>
      <h1 className='text-[40px] md:text-6xl leading-snug font-medium text-center'>
        {translations.contact.heading}
      </h1>
      <p className='text-xl mt-4 text-center tracking-wide opacity-70 font-light'>
        {translations.contact.intro}
      </p>
      <section ref={ref}>
        <div className='mt-16 md:w-[680px] lg:w-[760px] bg-white bg-opacity-5 border border-white border-opacity-20 px-5 md:px-8 py-7 md:py-10 rounded-[40px]'>
          <p className='tracking-wide opacity-70 text-xl font-light'>
            {translations.contact.description}
          </p>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder={translations.contact.fullNamePlaceholder}
              className="bg-white bg-opacity-30 py-[18px] px-4 rounded-xl block w-full mt-5 placeholder-white placeholder-opacity-70"
              {...register("fullName", { required: "Full name is required" })}
            />
            <input
              type="email"
              placeholder={translations.contact.emailPlaceholder}
              className="bg-white bg-opacity-30 py-[18px] px-4 rounded-xl block w-full mt-5 placeholder-white placeholder-opacity-70"
              {...register("email", { required: "Email is required" })}
            />
            <textarea
              className="bg-white bg-opacity-30 py-[18px] px-4 rounded-xl block w-full mt-5 placeholder-white placeholder-opacity-70"
              placeholder={translations.contact.messagePlaceholder}
              rows={10}
              {...register("message", { required: "Message is required" })}
            ></textarea>
            <button className='border border-[#E39CD1] bg-[#330658] py-3 rounded-full mt-6 w-full btn-shadow'>
              {translations.contact.buttonText}
            </button>
          </form>
        </div>
      </section>
    </section>
  );
});

export default Contact;
