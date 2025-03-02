export default function TestPage() {
  return (
    <div className="video-container">
      <button className="relative h-14 w-14 cursor-pointer overflow-hidden border-0 bg-transparent outline-none">
        <div className="duration-400 absolute inset-[7px] rounded-full border-4 border-[#f0eeef] transition-opacity ease-in-out hover:scale-75 hover:opacity-0 focus:scale-75 focus:opacity-0"></div>
        <div className="scale-130 duration-400 absolute inset-[7px] rounded-full border-4 border-[#96daf0] opacity-0 transition-opacity ease-in-out hover:scale-100 hover:opacity-100 focus:scale-100 focus:opacity-100"></div>

        <div className="duration-400 absolute left-0 top-0 flex transition-transform ease-in-out hover:-translate-x-14 focus:-translate-x-14">
          <span className="ml-[18px] mt-[17px] block h-5 w-5 rotate-180 fill-[#f0eeef]">
            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
            </svg>
          </span>
          <span className="ml-[18px] mt-[17px] block h-5 w-5 rotate-180 fill-[#f0eeef]">
            <svg viewBox="0 0 46 40">
              <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
            </svg>
          </span>
        </div>
      </button>
    </div>
  );
}
