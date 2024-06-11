// export default function LogoSkills({ logos, msg }) {
//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl ">
//         <h1 className="text-2xl font-semibold text-gray-900 ml-5">{msg}</h1>
//         <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
//           {logos.map((logo, index) => (
//             <div className="bg-gray-400/5 p-6 sm:p-10">
//               <img
//                 className="max-h-12 w-full object-contain"
//                 src={logo}
//                 alt="Transistor"
//                 width={158}
//                 height={48}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Example({ logos, msg }) {
  return (
    <div className="bg-white mb-10 sm:mb-7">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-lg font-semibold leading-8 text-gray-900">
            {msg}
          </h2>
          <div className="mx-auto mt-5 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5 align-middle">
            {logos.map((logo, index) => (
              <img
                className="max-h-12 w-full object-contain"
                src={logo}
                alt="Transistor"
                width={158}
                height={48}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
