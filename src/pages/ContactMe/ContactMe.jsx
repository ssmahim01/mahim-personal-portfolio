import { useRef } from "react";
import Heading from "../../components/Heading/Heading";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { ImLocation, ImWhatsapp } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactMe = () => {
  const form = useRef();

  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${import.meta.env.VITE_SERVICE_ID}`, `${import.meta.env.VITE_TEMPLATE_ID}`, form.current, `${import.meta.env.VITE_PUBLIC_KEY}`)
    .then(result => {
        // console.log(result.text);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Message sent successfully!",
            showConfirmButton: false,
            timer: 3000
          });
    }).catch(error => {
        // console.log(error.text);
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Failed to send the message! Please try again later.",
            showConfirmButton: false,
            timer: 3000
          });
    })
  };

  return (
    <div className="py-20">
      <Heading title={"Contact Me"} />

      <div className="lg:w-4/5 w-11/12 mx-auto flex lg:flex-row flex-col-reverse justify-between gap-8">
        <div className="lg:w-1/2 bg-zinc-200 border border-gray-300 shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 rounded-lg">
        <form
          ref={form}
          onSubmit={handleSendEmail}
          className="space-y-4 p-7"
        >
         <h2 className="text-3xl font-bold">Get in Touch</h2>

        <div className="divider md:w-2/5 w-3/5 pb-5"></div>

          <div className="form-control">
            <input
              type="text"
              name="from_name"
              placeholder="Write your Name"
              className="input input-bordered input-success block w-full lg:w-4/5"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              name="from_email"
              placeholder="Type your Email"
              className="input input-bordered input-success block w-full lg:w-4/5"
              required
            />
          </div>
          <div className="form-control">
            <textarea
              name="message"
              placeholder="Write your message..."
              className="textarea textarea-bordered textarea-success textarea-lg lg:pt-2 lg:pl-3 block w-full lg:w-4/5"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-amber-500 text-white text-lg font-bold md:w-2/6 w-full border-none">
              Send Message
            </button>
          </div>
        </form>
        </div>

        <div className="lg:w-1/2 bg-fuchsia-50 p-12 space-y-5 border border-gray-300 shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 rounded-lg">

        <h2 className="text-2xl font-bold">Contact Information</h2>

        <div className="divider md:w-1/2 w-4/5 pb-4"></div>

        <h4 className="text-xl text-gray-700 flex gap-x-3 items-center"><ImLocation className="text-xl text-accent" /> <span className="font-semibold">Sylhet, Bangladesh</span></h4>

        <h4 className="text-xl text-gray-700 flex gap-x-3 items-center"><MdEmail className="text-xl text-indigo-500" /> <span className="font-semibold">mahimzayn666@gmail.com</span></h4>

        <h4 className="text-xl text-gray-700 flex gap-x-3 items-center"><FaPhoneAlt className="text-xl text-success" /> <span className="font-semibold">+8801818788816</span></h4>

        <h4 className="text-xl text-gray-700 flex gap-x-3 items-center"><ImWhatsapp className="text-2xl text-lime-500" /> <span className="font-semibold">+8801614583148</span></h4>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;