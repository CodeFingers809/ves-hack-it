import { div } from "framer-motion/client";
import insta from "../assets/insta.png";

const Footer = () => {
  return (
    <div className="bg-green-700 w-full p-12 text-white flex justify-between items-center flex-wrap">
      <p>
        <p className="text-white text-4xl mb-1">We can't wait to see you!</p>
        <br />
        <span className="text-white text-2xl">For any Queries Contact:</span>
        <br />
        <span className="text-white text-xl">
          Gaurang Mapuskar: +91 99697 80696
          <br />
          Shashwat Tripathi: +91 97023 00238
          <br />
          Shreyas Kale: +91 93728 52266
          <br />
          Gaurang Rane: +91 98676 15388
        </span>
      </p>
      <div>
        <a
          href="https://www.instagram.com/ves_hack_it/"
          className="flex items-center mt-5 text-lg"
          target="_blank"
        >
          <img
            src={`${insta}`}
            alt="Instagram"
            height={36}
            width={36}
            className="mr-4"
          />
          ves_hack_it
        </a>
      </div>
    </div>
  );
};

export default Footer;
