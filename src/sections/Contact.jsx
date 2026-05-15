import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7czctnq",     // your service id
        "template_q5jmkow",    // your template id
        form.current,
        "bxof9yaQOnEaoigs2"    // your public key
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message 😢");
          console.log(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#071018] text-white px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#1de9c3] tracking-[4px] text-sm md:text-base uppercase">
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Let&apos;s build{" "}
            <span className="italic font-serif font-normal">
              something great.
            </span>
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            Have a project in mind? I&apos;d love to hear about it.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Contact Form */}
          <div className="bg-[#0d1822]/90 border border-cyan-400/10 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,255,200,0.05)] backdrop-blur-md">
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              
              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                required
                className="w-full bg-[#111d29] rounded-2xl px-5 py-4 outline-none border border-transparent focus:border-cyan-400 text-white placeholder:text-gray-500 transition"
              />

              <input
                type="email"
                name="from_email"
                placeholder="your@email.com"
                required
                className="w-full bg-[#111d29] rounded-2xl px-5 py-4 outline-none border border-transparent focus:border-cyan-400 text-white placeholder:text-gray-500 transition"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your message..."
                required
                className="w-full bg-[#111d29] rounded-2xl px-5 py-4 outline-none border border-transparent focus:border-cyan-400 text-white placeholder:text-gray-500 transition resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#1de9c3] hover:scale-[1.02] transition-all duration-300 text-white text-lg font-medium py-4 rounded-full shadow-[0_0_25px_rgba(29,233,195,0.45)]"
              >
                Send Message 
              </button>

            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-[#0d1822]/90 border border-cyan-400/10 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,255,200,0.05)] backdrop-blur-md flex flex-col justify-center">
            
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Contact Information
            </h2>

            {/* Email */}
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-[#10242d] flex items-center justify-center text-[#1de9c3] text-3xl">
                ✉
              </div>

              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <h3 className="text-xl font-medium">
                  yourmail@gmail.com
                </h3>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-[#10242d] flex items-center justify-center text-[#1de9c3] text-3xl">
                ☎
              </div>

              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <h3 className="text-xl font-medium">
                  +880 1518-424626
                </h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};