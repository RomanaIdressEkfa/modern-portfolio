import { motion } from "framer-motion";
import { useState } from "react";
import { BsArrowRight, BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Thank you. I will get back to you ASAP.");
          myForm.reset();
        } else {
          console.log(res);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="h-full bg-primary/30 overflow-y-auto relative">
      <Circles />
      
      {/* Container: Spacing adjusted */}
      <div className="container mx-auto min-h-full flex items-center justify-center pt-32 pb-24 xl:pt-0 xl:pb-0">
        
        {/* Gap reduced from gap-x-20 to gap-x-12 for better proximity */}
        <div className="flex flex-col xl:flex-row gap-x-12 gap-y-12 w-full max-w-[1200px]">
          
          {/* LEFT SIDE: Text & Contact Info */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col justify-center text-center xl:text-left"
          >
            {/* Title Size Increased */}
            <h2 className="h2 text-4xl xl:text-6xl mb-6">
              Let's <span className="text-accent">Connect.</span>
            </h2>
            
            {/* Description Size Increased */}
            <p className="max-w-[500px] mx-auto xl:mx-0 mb-10 text-white/80 text-lg leading-relaxed">
              Have a project in mind or want to discuss modern web technologies? 
              I am available for freelance work and open to new opportunities.
            </p>

            {/* Contact Info Boxes (Updated Data) */}
            <div className="flex flex-col gap-6 max-w-[500px] mx-auto xl:mx-0">
               
               {/* Phone (NEW) */}
               <div className="flex items-center gap-x-6 bg-white/10 p-4 rounded-xl border border-white/5 hover:border-accent/50 transition-colors group">
                  <div className="text-accent text-2xl group-hover:scale-110 transition-transform"><BsTelephone /></div>
                  <div className="text-white text-lg font-medium">01307957682</div>
               </div>

               {/* Email (UPDATED) */}
               <div className="flex items-center gap-x-6 bg-white/10 p-4 rounded-xl border border-white/5 hover:border-accent/50 transition-colors group">
                  <div className="text-accent text-2xl group-hover:scale-110 transition-transform"><BsEnvelope /></div>
                  <div className="text-white text-lg font-medium">romanaidressekfa@gmail.com</div>
               </div>

               {/* Location */}
               <div className="flex items-center gap-x-6 bg-white/10 p-4 rounded-xl border border-white/5 hover:border-accent/50 transition-colors group">
                  <div className="text-accent text-2xl group-hover:scale-110 transition-transform"><BsGeoAlt /></div>
                  <div className="text-white text-lg font-medium">Dhaka, Bangladesh</div>
               </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE: The Form */}
          <motion.div
             variants={fadeIn("left", 0.5)}
             initial="hidden"
             animate="show"
             exit="hidden"
             className="flex-1 w-full"
          >
            {/* Form Container: Made larger and darker background for better visibility */}
            <form
              className="flex flex-col gap-6 w-full bg-[#1e1e1e]/80 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <h3 className="text-2xl text-white font-bold mb-2 xl:hidden">Send a Message</h3>

              {/* Input Group */}
              <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="flex-1">
                    <input type="hidden" name="form-name" value="contact" />
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        // Input Styling: Boxed, Taller, Larger Text
                        className="input w-full h-[55px] bg-black/30 border border-white/10 rounded-lg focus:border-accent px-6 text-white text-base outline-none transition-all focus:bg-black/50"
                        disabled={isLoading}
                        required
                    />
                </div>
                <div className="flex-1">
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        className="input w-full h-[55px] bg-black/30 border border-white/10 rounded-lg focus:border-accent px-6 text-white text-base outline-none transition-all focus:bg-black/50"
                        disabled={isLoading}
                        required
                    />
                </div>
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input w-full h-[55px] bg-black/30 border border-white/10 rounded-lg focus:border-accent px-6 text-white text-base outline-none transition-all focus:bg-black/50"
                disabled={isLoading}
                required
              />

              {/* Textarea */}
              <textarea
                name="message"
                placeholder="Write your message..."
                className="textarea w-full bg-black/30 border border-white/10 rounded-lg focus:border-accent p-6 text-white text-base outline-none min-h-[180px] resize-none transition-all focus:bg-black/50"
                disabled={isLoading}
                required
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[200px] px-10 h-[55px] transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent hover:bg-accent group mt-2"
                disabled={isLoading}
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 font-bold text-lg">
                  {isLoading ? "Sending..." : "Let's Talk"}
                </span>

                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[26px] text-white"
                  aria-hidden
                />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;