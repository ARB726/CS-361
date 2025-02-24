import React from 'react'
import bannerImg from "../../assets/banner.png"
const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row py-16 justify-between gap-12'>
         <div className='md:w-1/2 w-full flex items-center'>
                    <img src={bannerImg} alt='' />

        </div>

        <div className='md:w-1/2 w-full'>
                <h1 className='md:text-5xl text-2xl font-medium mb-7'>New Releases This Week</h1>
                <p className='mb-10'>Expand your reading horizons with the freshest literary gems
                   hitting shelves this week. From edge-of-your-seat mysteries to inspiring personal
                    stories, these new releases promise to captivate every kind of reader.</p>
                <button className='btn-primary'>Subscribe</button>
        </div>

       





    </div>
  )
}

export default Banner