import react from 'react'
import HomeButtons from './HomeButtons'
import HomeLinks from './HomeLinks'

const HomeCTA = () => {
    return (
        <div className='flex pt-2.5 items-center justify-between'>
            <HomeButtons />
            <HomeLinks />
        </div>
    )
}
export default HomeCTA;