import React from "react";
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid";
import {useForm, SubmitHandler} from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:papareact.team@gmail?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message} ${formData.email}`;
  };

  return (
    <div className='min-h-[1100px] relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-center items-center mx-auto'>
      <h3 className='title'>Contact Me</h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got what you need{" "}
          <span className='decoration-orangish/50 underline'> Let's Talk</span>
        </h4>

        <div className='space-y-10'>
          <div className='flex items-center justify-center space-x-5'>
            <PhoneIcon className='text-orangish h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+989195892013</p>
          </div>
          <div className='flex items-center justify-center space-x-5'>
            <EnvelopeIcon className='text-orangish h-7 w-7 animate-pulse' />
            <p className='text-2xl'>hh7192@gmail.com</p>
          </div>
          <div className='flex items-center justify-center space-x-5'>
            <MapPinIcon className='text-orangish h-7 w-7 animate-pulse' />
            <p className='text-2xl'>123 Developer Lane</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input
              {...register("name")}
              className='contactInput'
              placeholder='Name'
              type='text'
            />
            <input
              {...register("email")}
              className='contactInput'
              placeholder='Email'
              type='email'
            />
          </div>
          <input
            {...register("subject")}
            className='contactInput'
            placeholder='Subject'
            type='text'
          />
          <textarea
            {...register("message")}
            className='contactInput'
            placeholder='Message'
          />
          <button
            type='submit'
            className='bg-orangish py-5 px-10 rounded-md text-black font-bold text-lg'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
