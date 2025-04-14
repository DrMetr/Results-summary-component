import Button from './components/Button.jsx'
import Reaction from './components/Reaction.jsx'
import Memory from './components/Memory.jsx'
import Verbal from './components/Verbal.jsx'
import Visual from './components/Visual.jsx'

function Summary() {
return (
    <>
    <div class='flex flex-col gap-[1rem] bg-white w-full md:w-[50vw]'>
        Summary
        <Reaction />
        <Memory />
        <Verbal />
        <Visual />
        <Button />
    </div>
    </>
)
}

export default Summary