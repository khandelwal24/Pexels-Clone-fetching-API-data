import React from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home({ii, setSaved,saved}) {

    const saveImg = (img) =>{
        let flag = false;

        if(saved!==null && saved.length>0){
           
            for(let i=0;i<saved.length;i++){
                if(saved[i].id===img.id){
                flag = true;
                // react tostify..
                toast.error('Image Already Exists');
                console.log('Img already exits');
                break;
                }
            }
        }
        if(flag===false){
            setSaved([...saved,img])
            toast.success('Image saved succesfully');
        }
    }

  return (
    <div>
    <ToastContainer theme="dark"/>
     
  <div className='max-w-[1080px] mx-auto'>
      <div className='mx-auto grid lg:grid-cols-4 px-7 sm:grid-cols-2 grid-cols-1 gap-5 items-center' id='top'>
        {ii.map((v,i)=>{
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

export default Home
