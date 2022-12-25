import React from "react";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:praful.bansalncs@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly px-10 mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-5 mt-12">
        <h4 className="text-4xl  font-semibold text-center px-4">
          I have just what you need.{" "}
          <span className="underline decoration-[#0adff7]/50">Let's Talk.</span>
        </h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#0adff7] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">{pageInfo?.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#0adff7] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">{pageInfo?.email}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapIcon className="text-[#0adff7] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">{pageInfo.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 md:w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-40 md:w-80"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-40 md:w-80"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput w-[328px] md:w-[648px]"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput w-[328px] md:w-[648px]"
          />
          <button
            type="submit"
            className="bg-[#0adff7] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
