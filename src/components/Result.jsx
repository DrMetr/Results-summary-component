function Result() {

    return (
      <div class='flex flex-col items-center
                  rounded-xl gap-2 w-full h-[40vh] p-[0.7rem]
                  bg-linear-to-t from-LightSlateBlue to-LightRoyalBlue
                  md:w-[50%] md:h-full md:p-[3rem]'>
        <p class='text-lg mb-2'>Your Result</p>
        <div class='flex flex-col rounded-full bg-blue-700 
                    p-[1rem] p-[20px] w-[120px] h-[120px]
                    bg-linear-to-t from-VioletBlue to-PersionBlue'>
            <h1 class='font-extrabold'>76</h1>
            <p class='font-light'>of 100</p>
        </div>
        <h2 class='font-bold text-xl'>Great!</h2>
        <p class='mt-1'>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    )
  }
  
  export default Result