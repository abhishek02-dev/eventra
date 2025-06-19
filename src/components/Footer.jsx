import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} Eventra. All rights reserved.</p>

        {/* Site links */}
        <div className="flex gap-4">
          <a href="#!" className="hover:text-blue-500">Privacy&nbsp;Policy</a>
          <a href="#!" className="hover:text-blue-500">Terms&nbsp;of&nbsp;Service</a>
          <a href="#!" className="hover:text-blue-500">Contact</a>
        </div>

        {/* Social icons */}
        <div className="flex gap-4 text-lg">
          <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer" className="hover:text-blue-600">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="hover:text-sky-500">
            <FaXTwitter />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="hover:text-blue-700">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/yourrepo" target="_blank" rel="noreferrer" className="hover:text-gray-800">
            <FaGithub />
          </a>
          <a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
