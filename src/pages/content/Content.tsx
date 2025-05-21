const Content = () => {
  return (
    <div
      style={{
        height: "calc(100vh - calc(var(--spacing) * 6))",
      }}
      className=" bg-white m-3 border  h-screen rounded-2xl flex flex-col"
    >
      <div className="border-b p-4">
        <div className="flex justify-between items-center">
          <h4 className="text-lg">Pricing & Content</h4>
          <button className="bg-black text-white py-2 px-4 rounded text-sm">
            Add new Price
          </button>
        </div>
      </div>
      <div className="grow"></div>

      <div>{/* bottom content */}</div>
    </div>
  );
};

export default Content;
