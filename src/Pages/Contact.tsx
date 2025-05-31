import React from "react";
import Button from "../ReusableComponents/Button";

const Contact = () => {
  const contactInfo = [
    { title: "Email", detail: "ajayauchar02@gmail.com" },
    { title: "Number", detail: "+91 8291626294" },
    {
      title: "Linked In",
      detail: "https://www.linkedin.com/in/ajay-auchar-6ab080223/",
    },
    {
      title: "Location",
      detail: "Airoli Navi Mumbai, Maharashtra, India",
    },
  ];

  const contactForm = [
    { title: "Name", info: "", placeholder: "Enter your name" },
    { title: "Email", info: "", placeholder: "Enter your email" },
    {
      title: "Address",
      info: "",
      placeholder: "Enter your address",
    },
    {
      title: "Message",
      info: "",
      placeholder: "Enter your message",
    },
  ];
  return (
    <div id="contact" className="mb-24">
      <div className="flex items-center justify-center">
        <span className="text-xl font-medium text-black font-extrabold my-8">
          CONTACT US
        </span>
      </div>
      <div className="flex gap-25 px-16 mt-4">
        <div className="flex-1 p-4">
          <h4 className="pb-3 text-lg font-medium text-red-800">
            {" "}
            CONTACT INFORMATION{" "}
          </h4>
          <p className="text-md my-5 text-black">
            I am currently open to new opportunities and collaborative projects
            where I can contribute my skills and experience in frontend
            development. Let’s connect and build something great together.
          </p>
          {contactInfo?.map((elem) => (
            <div>
              <h6 className="text-md font-medium text-red-800">
                {elem.title} :
              </h6>
              <p className="mb-5 font-medium"> {elem.detail}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 border-2 rounded-lg py-8 px-6 border-3 border-black-700">
          <h4 className="text-lg font-medium text-black font-bold text-red-800">
            GET IN TOUCH
          </h4>
          <div className="mt-6">
            {contactForm?.map((item) => (
              <div className="flex-col">
                <h4 className="text-md font-medium"> {item.title} : </h4>
                <input
                  type="text"
                  className="my-3 w-lg py-1 px-2 border-2 rounded-md"
                  placeholder={item.placeholder}
                />
              </div>
            ))}

            <Button
              name="Submit"
              routeId="contact"
              className={`${["border-red-900", "bg-red-800", "mt-12"]}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
