// import { Link } from "react-router-dom";
// import { Users, Database, Settings } from "lucide-react";

// function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center px-4">
//       <div className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-10 border border-gray-100">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Welcome to CRUD Dashboard
//           </h1>
//           <p className="text-gray-600 mt-2">
//             Manage your people data using .NET API + React
//           </p>
//         </div>

//         {/* Cards Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {/* Manage People Card */}
//           <Link
//             to="/person"
//             className="group p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//           >
//             <div className="flex items-center space-x-4">
//               <div className="p-3 bg-blue-100 rounded-xl">
//                 <Users className="w-7 h-7 text-blue-600" />
//               </div>
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
//                   Manage People
//                 </h2>
//                 <p className="text-sm text-gray-600">
//                   View, update, delete and create people.
//                 </p>
//               </div>
//             </div>
//           </Link>

//           {/* API Status Card */}
//           <div className="p-6 bg-white border border-gray-200 rounded-xl shadow">
//             <div className="flex items-center space-x-4">
//               <div className="p-3 bg-green-100 rounded-xl">
//                 <Database className="w-7 h-7 text-green-600" />
//               </div>
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   .NET API Connected
//                 </h2>
//                 <p className="text-sm text-gray-600">
//                   Your backend is ready for operations.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Settings Card */}
//           <div className="p-6 bg-white border border-gray-200 rounded-xl shadow">
//             <div className="flex items-center space-x-4">
//               <div className="p-3 bg-purple-100 rounded-xl">
//                 <Settings className="w-7 h-7 text-purple-600" />
//               </div>
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   App Settings
//                 </h2>
//                 <p className="text-sm text-gray-600">
//                   Configure application preferences.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="text-center mt-10">
//           <p className="text-gray-500 text-sm">
//             Built with ❤️ using React + .NET + TailwindCSS
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import { Link } from "react-router-dom";
import { Users, Database, Settings } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full bg-gray-900/60 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-gray-700">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            CRUD Admin Dashboard
          </h1>
          <p className="text-gray-400 mt-3 text-sm tracking-wide">
            Professional control panel built with React, .NET API & TailwindCSS
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Manage People */}
          <Link
            to="/person"
            className="group p-6 bg-gray-800 border border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
                <Users className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white group-hover:text-blue-300">
                  Manage People
                </h2>
                <p className="text-sm text-gray-400">
                  Add, edit, delete and browse people records.
                </p>
              </div>
            </div>
          </Link>

          {/* API Connected */}
          <div className="p-6 bg-gray-800 border border-gray-700 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-500/20 rounded-xl border border-green-500/30">
                <Database className="w-7 h-7 text-green-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  API Connected
                </h2>
                <p className="text-sm text-gray-400">
                  .NET backend is up and running.
                </p>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="p-6 bg-gray-800 border border-gray-700 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-500/30">
                <Settings className="w-7 h-7 text-purple-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  App Settings
                </h2>
                <p className="text-sm text-gray-400">
                  Customize your application preferences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Crafted with ❤️ using <span className="text-blue-400">React</span>,{" "}
            <span className="text-purple-400">.NET API</span>, and{" "}
            <span className="text-pink-400">TailwindCSS</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

