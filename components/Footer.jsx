import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <div className="mt-20">

      <div className="text-center">

        <Image
          src={assets.logo}
          alt="Abdus Salam logo"
          className="w-36 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={assets.mail_icon}
            alt="email icon"
            className="w-6"
          />
          <a href="mailto:abdussalam9891@gmail.com">
            abdussalam9891@gmail.com
          </a>
        </div>

      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">

        <p>© 2026 Abdus Salam. All rights reserved.</p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">

          <li>
            <a
              href="https://github.com/abdussalam9891"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/abdus-salam123/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              LinkedIn
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/abbdduuss/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              Instagram
            </a>
          </li>

        </ul>

      </div>
    </div>
  );
};

export default Footer;
