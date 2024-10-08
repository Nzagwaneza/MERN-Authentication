import React from "react";

const Home = () => {
  return (
    <div className="p-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-700">
        Welcome All to my Mern App
      </h1>
      <p className=" mb-4 text-slate-800">
        I’m thrilled to introduce you to this full-stack authentication app,
        built using the MERN stack (MongoDB, Express, React, and Node.js). This
        application allows users to securely sign up, log in, and manage their
        accounts with ease, providing robust user authentication using modern
        web technologies. Whether you’re exploring the app as a new user or
        looking to test its features, you’ll find a smooth and intuitive
        experience.
      </p>
      <p className=" mb-4 text-slate-800">
        In today’s digital world, authentication is key to keeping data safe and
        ensuring a personalized user experience. With this MERN authentication
        app, I’ve focused on combining security and efficiency, utilizing JWT
        (JSON Web Tokens) for secure user sessions and integration with popular
        authentication methods like Google. My goal is to offer a simple yet
        powerful solution for handling user authentication and account
        management. Feel free to explore the app and see how it works!
      </p>
    </div>
  );
};

export default Home;
