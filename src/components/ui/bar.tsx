const Bar = () => {
  // TODO: Fix this
  return (
    <div className="flex">
      <div className="flex flex-col items-center justify-center">
        <img src="/icons/high.png" alt="High" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <input
          type="range"
          min="0"
          max="100"
          name="score"
          className="w-[200px]  "
        />
      </div>
      <div className="flex flex-col items-center">
        <img src="/icons/low.png" alt="Low" />
      </div>
    </div>
  );
};

export default Bar;
