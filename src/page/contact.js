import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [messgae, setMessgae] = useState("");
  const [agree, setAgree] = useState(false);

  const handlesubmit = () => {
    alert("submitted successfully");
  };

  return (
    <div className="contact bg-gray-900 h-screen">
      <div className="touch text-white flex flex-col items-center justify-center text-center mx-8">
        <div>
          <h1 className="text-3xl font-bold">Get in touch With US</h1>
        </div>
        <div>
          <p>
            `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the <br /> industry's standard dummy
            text ever since the 1500s`
          </p>
        </div>
      </div>
      <form onSubmit={handlesubmit}>
        <div className="form mx-8 bg-gray-800 py-8 px-4 rounded-lg my-5">
          <div className="form1 flex justify-between mb-8">
            <div className="w-5/12">
              <label className="text-white">First Name</label>
              <input
                className="block w-full h-12 bg-gray-700 text-white px-4 mt-1 rounded-lg"
                type="text"
                placeholder="joe mama"
              />
            </div>
            <div className="w-5/12">
              <label className="text-white">Email Address</label>
              <input
                className="block w-full h-12 bg-gray-700 text-white px-4 mt-1 rounded-lg"
                type="email"
                placeholder="joemama@gmail.com"
              />
            </div>
          </div>
          <div className="form1 flex justify-between mb-8">
            <div className="w-5/12">
              <label className="text-white">Phone Number</label>
              <input
                className="block w-full h-12 bg-gray-700 text-white px-4 mt-1 rounded-lg"
                type="tel"
                placeholder="+977"
              />
            </div>
            <div className=" w-5/12">
              <label className="text-white">Get in Touch with Us</label>
              <input
                className="block w-full h-12 bg-gray-700 text-white px-4 mt-1 rounded-lg"
                type="text"
                placeholder="Drop"
              />
            </div>
          </div>
          <div className="msg_container mb-8">
            <div className="">
              <label className="text-white">Message</label>
              <textarea
                className="block w-full h-32 bg-gray-700 text-white px-4 py-2 mt-1 rounded-lg"
                rows="5"
                cols="80"
                placeholder="Drop us a message!"
              ></textarea>
            </div>
          </div>
          <div className="agree flex items-center mb-8">
            <input className="tick w-5 h-5" type="checkbox" />
            <label className="text-white ml-2">I agree</label>
          </div>
          <button className="submit h-12 w-28 bg-blue-700 text-white rounded-lg cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
