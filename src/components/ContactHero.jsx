import React, { useState } from "react";
import imagesData from "../contact.json";

const ContactHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const getImagePath = (imageId) => {
    const image = imagesData.images.find((img) => img.id === imageId);
    return image ? image.path : null;
  };

  return (
    <div>
      <div>
        <img className="w-full" src={getImagePath(1)} alt="/" />
      </div>

      <div className="flex">
        <div className="w-1/2 mt-14 p-8">
          <h1>Get in touch</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
            in ornare quam viverra
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Name :
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Input your name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 focus:ring-green-500 focus:border-green-500 w-full h-12 px-4 placeholder-gray-400 border border-gray-200 rounded-md text-lg"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email :
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 focus:ring-green-500 focus:border-green-500 w-full h-12 px-4 placeholder-gray-400 border border-gray-200 rounded-md text-lg"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Message :
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 focus:ring-green-500 focus:border-green-500 w-full h-40 px-4 py-2 placeholder-gray-400 border border-gray-200 rounded-md text-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Send
            </button>
          </form>
        </div>

        <div className="w-1/2 p-8 mt-14">
          <div>
            <img src={getImagePath(2)} alt="/" />
          </div>

          <div className="flex justify-between mt-12">
            <ul className="font-semibold text-lg">
              <li className="p-2">
                Address:{" "}
                <span className="text-end font-normal">64/E, Jayanagar</span>
              </li>
              <li className="p-2">
                City:{" "}
                <span className="text-end font-normal">Banglore,india</span>
              </li>
              <li className="p-2">
                open: <span className="text-end font-normal">At 8 Am</span>
              </li>
            </ul>

            <ul className="font-semibold text-lg">
              <li className="p-2">
                Phone:{" "}
                <span className="text-end font-normal"> +91 9876543210</span>
              </li>
              <li className="p-2">
                Email:{" "}
                <span className="text-end font-normal">
                  Fake-email@gmail.com
                </span>
              </li>
              <li className="p-2">
                Close: <span className="text-end font-normal">At 8 Pm</span>
              </li>
            </ul>
          </div>
          <p className="uppercase mt-8 text-xl"> Available at 9am-10pm</p>
          <p className="uppercase mt-8 text-xl">Contact-no :</p>
          <p className="font-bold text-6xl">+91 987 654 3210</p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
