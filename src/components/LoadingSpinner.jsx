const LoadingSpinner = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-800 bg-opacity-50 z-50'>
      <div className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-[#2563EB] motion-reduce:animate-[spin_1.5s_linear_infinite] '>
        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
          Loading...
        </span>
      </div>
      <p className='mt-4 text-xl text-[#4B5563] text-center font-bold'>
        The answer generation is in processing, <br />
        it will take from 2 to 3 min
      </p>
    </div>
  );
};

export default LoadingSpinner;
