import Button from './components/Button.jsx'
import Reaction from './components/Reaction.jsx'
import Memory from './components/Memory.jsx'
import Verbal from './components/Verbal.jsx'
import Visual from './components/Visual.jsx'

function Summary() {
return (
    <div class='flex flex-col items-center gap-[1rem] 
                w-full p-[2rem]'>
        <h2 class='self-start text-DarkGrayBlue 
                  font-bold text-xl'>Summary</h2>
        <Reaction />
        <Memory />
        <Verbal />
        <Visual />
        <Button />
    </div>
)
}

export default Summary