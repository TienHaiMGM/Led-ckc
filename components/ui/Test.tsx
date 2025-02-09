const RectangleWithCutCorner = () => {
  return (
    <div>
      <div
        className="relative z-30 ml-10 mt-10 h-40 w-[20vw] bg-blue-500"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 10%, 75% 100%, 0 100%)",
        }}
      >
        {/* Phần top kéo dài full width */}
      </div>
      <div className="bg-red relative -top-[170px] left-0 right-0 z-50">
        <svg width="1000" height="1000">
          <rect x="10" y="10" width="1000" height="15" fill="#00000" />
        </svg>
      </div>
    </div>
  );
};

export default RectangleWithCutCorner;
