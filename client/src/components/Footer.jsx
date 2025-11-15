// import { Github, Linkedin, Mail } from "lucide-react";

// function Footer() {
//   return (
//     <footer className="bg-white border-t border-gray-200 py-6 mt-12">
//       <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
//         {/* Left Section */}
//         <p className="text-gray-600 text-sm">
//           © {new Date().getFullYear()} CRUD App by Umair — All rights reserved.
//         </p>

//         {/* Social Icons */}
//         <div className="flex items-center space-x-4 mt-4 sm:mt-0">
//           <a
//             href="#"
//             className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all"
//             title="GitHub"
//           >
//             <Github className="w-5 h-5 text-gray-700" />
//           </a>

//           <a
//             href="#"
//             className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all"
//             title="LinkedIn"
//           >
//             <Linkedin className="w-5 h-5 text-blue-700" />
//           </a>

//           <a
//             href="#"
//             className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all"
//             title="Email"
//           >
//             <Mail className="w-5 h-5 text-red-600" />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import { Github, Linkedin, Mail } from "lucide-react";

function FooterDark() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10  border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-xl font-semibold text-white">
            CRUD App by Umair
          </h2>

          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="#"
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all"
              title="GitHub"
            >
              <Github className="w-5 h-5 text-gray-300" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-300" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all"
              title="Email"
            >
              <Mail className="w-5 h-5 text-gray-300" />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          <div>
            <h3 className="text-white font-semibold mb-3">Pages</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/person" className="hover:text-white transition">
                  Person
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Technologies</h3>
            <ul className="space-y-1 text-sm">
              <li>React.js</li>
              <li>ASP.NET Core Web API</li>
              <li>TailwindCSS</li>
              <li>Axios</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Developer</h3>
            <ul className="space-y-1 text-sm">
              <li>Umair Amjad</li>
              <li>Front-end Developer</li>
              <li>BSCS — University of Karachi</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-10 border-t border-gray-700 pt-5">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterDark;




// updated
