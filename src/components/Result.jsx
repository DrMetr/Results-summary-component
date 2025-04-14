function Result() {

    return (
      <div class='flex flex-col items-center rounded-xl gap-2 w-full h-[40vh] p-[1rem]
      bg-linear-to-t from-LightSlateBlue to-LightRoyalBlue
      md:w-[40%] md:h-full'>
        <p>Your Result</p>
        <div class='flex flex-col rounded-full bg-blue-700 p-[1rem] p-[20px] w-[120px] h-[120px]
        bg-linear-to-t from-PersianBlue to-VioletBlue'>
            <h1>76</h1>
            <p>of 100</p>
        </div>
        <h2 class='font-bold'>Great!</h2>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    )
  }
  
  export default Result