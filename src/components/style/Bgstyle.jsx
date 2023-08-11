export default function BgStyle() {
  return (
    <section className="h-screen px-20 py-16">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-4 w-28 sm:w-32 md:w-40 lg:w-52 h-28 sm:h-32 md:h-40 lg:h-52 bg-green-300 rounded-full mx-auto mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-0 left-20  md:left-32 lg:left-44 w-28 sm:w-32 md:w-40 lg:w-52 h-28 sm:h-32 md:h-40 lg:h-52 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-4 sm:top-10 left-12 md:left-16 lg:left-20 w-28 sm:w-32 md:w-40 lg:w-52 h-28 sm:h-32 md:h-40 lg:h-52 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
    </section>
  );
}
