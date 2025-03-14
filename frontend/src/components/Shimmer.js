const Shimmer = () => {
  return (
    <div
      className="container mx-auto px-4 py-8"
      aria-label="Loading restaurants"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <div className="w-full sm:w-80 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
        <div className="w-full sm:w-32 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array(12)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="animate-pulse w-full">
              <div className="bg-gray-200 rounded-xl overflow-hidden h-full">
                <div className="aspect-[4/3] bg-gray-300"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
