import React from 'react'

function Saved({saved}) {
  return (
    <div>
      <h1 className='text-4xl text-center font-bold text-white my-3'>Saved Images</h1>
      <div className='max-w-[1080px] mx-auto'>
      <div className='mx-auto grid lg:grid-cols-4 px-7 sm:grid-cols-2 grid-cols-1 gap-5 items-center' id='top'>
        {saved.map((v,i)=>{
            return(
                <div className='flex flex-col'>
                <img onClick={()=>saveImg(v)} className='cursor-pointer border-2 border-white rounded-md hover:scale-150 ease-in-out duration-300 hover:border-yellow-400 ' key={i} src={v.src.landscape}/>
                <span>{v.photographer}</span>
                </div>
            )
        })}
      </div>
      <div className='max-w-[1080px] text-center my-4 mx-auto'>
      <a href='#top' className=' p-2 text-center rounded-md font-semibold hover:bg-yellow-500 bg-yellow-400 border-2 border-black text-black'>Back to top</a>
      </div>
    </div>
    </div>
  )
}

export default Saved
