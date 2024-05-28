export default function LogoSkills({ logos }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 ml-5">
          Popular technologies I've worked with
        </h1>
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          {logos.map((logo, index) => (
            <div className="bg-gray-400/5 p-6 sm:p-10">
              <img
                className="max-h-12 w-full object-contain"
                src={logo}
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
