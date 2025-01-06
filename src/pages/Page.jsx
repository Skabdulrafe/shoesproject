import React from 'react'
import Header from '../components/Header'

import '../assets/css/page.css'
import shoe from '../assets/images/shoe.jpg'
import Onclick from '../components/onclick'
import Maincompo1 from '../components/Maincompo1'
import Maincompo2 from '../components/Maincompo2'
const Page = () => {
  return (
    <div><Header ></Header>
    <div className='action'>
    <Maincompo1 src={shoe} alt="shoes image"></Maincompo1>
    <Maincompo2  name="Sneakercompany" heading="Fall LIMITED Edition Sneakers"para="These shoes have become a second skin, a part of me as much as the blood in my veins. Where once they were smooth, now there are the crinkles and softness that come with age, with the passage as the soft lines that spill from the corners of my eyes, those eyes that have born laughter and tears just the same. They stay close by as I rest, when I sleep under the stars, always ready" price="$125" btn="Add to card"></Maincompo2>
    <Onclick></Onclick>
    </div>
    </div>

  )
}

export default Page