// import { Code2, Layers, Rocket, Server } from "lucide-react";

// function About() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4 flex items-center justify-center">
//       <div className="max-w-4xl bg-white shadow-2xl rounded-2xl p-10 border border-gray-100">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             About This Project
//           </h1>
//           <p className="text-gray-600 mt-2 text-sm">
//             Learn more about the technologies and purpose behind this CRUD
//             application.
//           </p>
//         </div>

//         {/* Intro Section */}
//         <div className="mb-10">
//           <p className="text-lg text-gray-700 leading-relaxed">
//             This CRUD Application is built using modern web technologies,
//             combining the power of{" "}
//             <span className="font-semibold">React.js</span> on the frontend and
//             <span className="font-semibold"> ASP.NET Core Web API</span> on the
//             backend. It demonstrates clean architecture, REST API integration,
//             form validation, state management, and professional UI design using
//             TailwindCSS.
//           </p>
//         </div>

//         {/* Cards Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {/* React Card */}
//           <div className="p-6 rounded-xl border bg-white shadow hover:shadow-lg transition-all">
//             <div className="flex items-center space-x-4">
//               <div className="p-3 bg-blue-100 rounded-xl">
//                 <Code2 className="w-7 h-7 text-blue-600" />
//               </div>
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   React Frontend
//                 </h2>
//                 <p className="text-sm text-gray-600">
//                   Built with React, React Hook Form, Axios & modern UI
//                   components.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* .NET API Card */}
//           <div className="p-6 rounded-xl border bg-white shadow hover:shadow-lg transition-all">
//             <div className="flex items-center space-x-4">
//               <div className="p-3 bg-purple-100 rounded-xl">
//                 <Server className="w-7 h-7 text-purple-600" />
//               </div>
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   .NET Backend API
//                 </h2>
//                 <p className="text-sm text-gray-600">
//                   Uses ASP.NET Core Web API with EF Core and SQL database.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Purpose Card */}
//           <div className="p-6 rounded-xl border bg-white shadow hover:shadow-lg transition-all">
//             <div className="flex items-center space-x-4">
//               <div className="p-3 bg-green-100 rounded-xl">
//                 <Rocket className="w-7 h-7 text-green-600" />
//               </div>
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-800">Purpose</h2>
//                 <p className="text-sm text-gray-600">
//                   To practice full-stack development with a real CRUD app.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Skills Card */}
//           <div className="p-6 rounded-xl border bg-white shadow hover:shadow-lg transition-all">
//             <div className="flex items-center space-x-4">
//               <div className="p-3 bg-yellow-100 rounded-xl">
//                 <Layers className="w-7 h-7 text-yellow-600" />
//               </div>
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   Skills Learned
//                 </h2>
//                 <p className="text-sm text-gray-600">
//                   CRUD operations, API handling, UI/UX design, forms,
//                   validation.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="text-center mt-10">
//           <p className="text-gray-500 text-sm">
//             Designed & Developed as part of learning Full-Stack Development.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

import { Code2, Server, Rocket, Layers } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-gray-900/60 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-gray-700">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            About This Project
          </h1>
          <p className="text-gray-400 mt-3 text-sm tracking-wide">
            A full-stack CRUD system built with cutting-edge web technologies
          </p>
        </div>

        {/* Intro Section */}
        <div className="mb-12">
          <p className="text-lg text-gray-300 leading-relaxed">
            This project is designed to demonstrate a fully functional CRUD
            (Create, Read, Update, Delete) application using modern web
            development. It features a{" "}
            <span className="text-blue-400 font-semibold">
              React.js Frontend
            </span>{" "}
            integrated with a{" "}
            <span className="text-purple-400 font-semibold">
              .NET Core Web API
            </span>{" "}
            backend, styled using{" "}
            <span className="text-pink-400 font-semibold">TailwindCSS</span> for
            a sleek and professional UI.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* React Frontend */}
          <div className="group p-6 bg-gray-800 border border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
                <Code2 className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  React Frontend
                </h2>
                <p className="text-sm text-gray-400">
                  Built using React Hook Form, Axios & reusable UI components.
                </p>
              </div>
            </div>
          </div>

          {/* .NET Backend */}
          <div className="group p-6 bg-gray-800 border border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-500/30">
                <Server className="w-7 h-7 text-purple-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  .NET Backend API
                </h2>
                <p className="text-sm text-gray-400">
                  ASP.NET Core, Entity Framework Core & SQL database
                  integration.
                </p>
              </div>
            </div>
          </div>

          {/* Purpose */}
          <div className="group p-6 bg-gray-800 border border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-500/20 rounded-xl border border-green-500/30">
                <Rocket className="w-7 h-7 text-green-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Project Purpose
                </h2>
                <p className="text-sm text-gray-400">
                  Practice real-world full-stack development & CRUD workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Learned */}
          <div className="group p-6 bg-gray-800 border border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-yellow-500/20 rounded-xl border border-yellow-500/30">
                <Layers className="w-7 h-7 text-yellow-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Skills Learned
                </h2>
                <p className="text-sm text-gray-400">
                  REST API handling, UI/UX design, validation, forms & state
                  management.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Developed with passion using{" "}
            <span className="text-blue-400">React</span>,{" "}
            <span className="text-purple-400">.NET API</span>, and{" "}
            <span className="text-pink-400">TailwindCSS</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
