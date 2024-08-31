import React from "react";
import Navbar from "../../Components/Navbar";
import Auth from "../../Components/Auth";
const ContactPage = () => {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden background fixed top-0  z-[-1]  m-0 p-0"></div>

      <div className="h-screen w-screen  overflow-y-auto overflow-x-hidden ">
        <Navbar />
        <div className="w-full h-full flex items-center justify-center">
        <div className="contact-container  text-[#c39a1c] font-potter mt-10">
      <h1 className="font-hero font-bold text-xl">Contact Us</h1>
      <p>
        Greetings, fellow wizards and witches of code! Whether you have a query, need assistance with a spell (or code), or simply want to share your magical journey with us, we're here to help.
      </p>
      
      <div className="contact-details">
        <h2>Owl Post</h2>
        <p>
          You can reach us via electronic owl post at: 
          <a href="mailto:support@gryffincode.com">support@gryffincode.com</a>
        </p>
        
        <h2>Visit Us at the Ministry of Coding</h2>
        <p>
          Our enchanted office is located at:
          <br />
          1234 Magic Alley, Coding District
          <br />
          Hogwarts, HP1 9AA
        </p>
        
        <h2>Send Us a Howler</h2>
        <p>
          If you need immediate assistance, send us a Howler via the enchanted phone line:
          <br />
          <a href="">8638709407</a>
        </p>
      </div>
      
      <div className="contact-form">
        <h2>Contact Form</h2>
        <p>Fill out the form below, and our team of coding wizards will get back to you as soon as possible.</p>
        
        <form className="font-hero">
          <div className="">
            <label  htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required className="p-2 bg-[#153448] rounded shadow-md shadow-red-500 m-3" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="mt-4">Email</label>
            <input className="m-5 bg-[#153448] shadow-md shadow-red-500  p-3 rounded" type="email" id="email" name="email" required />
          </div>
          
            <label htmlFor="message">Message :</label>
          <div className="form-group">
            <textarea className="m-2 p-2 rounded shadow-md shadow-red-500  bg-[#153448]" id="message" name="message" rows="3" required></textarea>
          </div>
          
          <button type="submit" className="shadow-lg shadow-emerald-500  rounded p-3 bg-gray-700 m-4">Send Message</button>
        </form>
      </div>
    </div>
      
        
      </div>
      </div>
    </>
  );
};

export default Auth(ContactPage);
