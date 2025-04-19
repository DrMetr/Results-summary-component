function Reaction() {
    return (
        <div class="bg-LightRed/10 rounded-xl w-full h-[2lh] p-[1rem]
                    flex flex-row justify-between items-center">
            <div class='flex flex-row gap-1'>
                <img src='./assets/images/icon-reaction.svg' class="opacity-70 h-[1lh]"/>
                <p class="text-LightRed/75 font-extrabold">Reaction</p>
            </div>
            <p class='font-extrabold text-DarkGrayBlue/50'><span class='text-DarkGrayBlue font-extrabold'>80 </span>/100</p>
        </div>
    )
    }
    
    export default Reaction