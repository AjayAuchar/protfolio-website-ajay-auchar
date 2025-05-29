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
    <div className="mb-24">
      <div className="flex items-center justify-center">
        <span className="text-xl font-medium text-black font-extrabold my-8">
          CONTACT US
        </span>
      </div>
      <div className="flex gap-10 px-14 mt-4">
        <div className="flex-1 p-4">
          <h4 className="pb-3 text-lg font-medium"> CONTACT INFORMATION </h4>
          <p className="text-md my-4 text-black font-medium">
            {" "}
            I'm open for new opportunities and collaborations. If you have a
            project that needs my help, please get in touch{" "}
          </p>
          {contactInfo?.map((elem) => (
            <div>
              <h6 className="text-lg font-medium">{elem.title} : </h6>{" "}
              <p className="mb-4"> {elem.detail}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 border-2 rounded-lg p-6 border-3 border-black-700">
          <h4 className="text-lg font-medium text-black font-bold">
            {" "}
            GET IN TOUCH{" "}
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
              onClick={() => {}}
              className={`${["border-red-900", "bg-red-800", "mt-12"]}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
