import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';


function Navbar({SS}) {
    const navigate = useNavigate();
    const loc = useLocation();

  const [Nav,setNav] = useState(false);

  return (
  
<>
    <div className='w-[100%] bg-slate-800 sticky top-0'>
    <div className='max-w-[1260px] mx-auto px-3 py-3'>
        
        <div className='flex justify-between items-center gap-5' >
           
           <h1 className='text-3xl font-bold'>Pexels Clone</h1>

           <div className='lg:block hidden space-x-3' >
            <button onClick={()=>{SS('nature'), navigate('/')}} className='text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-gray-500'>Nature</button>
            <button onClick={()=>{SS('Travel'), navigate('/')}} className='text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-gray-500'>Travel</button>
            <button onClick={()=>{SS('City'), navigate('/')}} className='text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-gray-500'>City</button>
            <button onClick={()=>{SS('car'), navigate('/')}} className='text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-gray-500'>Car</button>
            <button onClick={()=>{SS('Fashion'), navigate('/')}} className='text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-gray-500'>Fashion</button>
            <button onClick={()=>{SS('Animal'), navigate('/')}} className='text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-gray-500'>Animal</button>
            <button onClick={()=>{SS('Technology'), navigate('/')}} className='text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-gray-500'>Technology</button>
            <button onClick={()=>{SS('Bussiness'), navigate('/')}} className='text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-gray-500'>Finanace</button>
            <button onClick={()=>{SS('tokyo'), navigate('/')}} className='text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-gray-500'>Tokyo</button>
            <button onClick={()=>{SS('dubai'), navigate('/')}} className='text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-gray-500'>Dubai</button>
            {loc.pathname==='/' ? <button onClick={()=>navigate('/saved')} className={`text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-red-500`}>Saved</button> : <button onClick={()=>navigate('/')} className={`text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-red-500`}>Home</button>  }
           </div>


        <div onClick={()=>setNav(!Nav)} className='block lg:hidden'>
        {(!Nav) ? <i class="fa-solid fa-bars text-4xl text-white"></i> : <i class="fa-solid fa-xmark text-4xl text-white"></i> }
        </div>

        </div>

     </div>
 </div>

    {loc.pathname==='/' && <div className='mx-auto max-w-[1080px] px-5'>
    <input onChange={(e)=>SS(e.target.value)} placeholder='Search Image' type='search' className='w-full my-3 py-2 px-4 bg-gray-600 rounded-full'></input>
    </div>}


    <div className= {Nav ? 'fixed left-0 top-0 w-[65%] h-full bg-[#080f29] rounded-e-xl text-center duration-300 ease-in-out': 'bg-[#080f29] ease-in-out duration-300 text-center fixed hidden -left-40 '} >
    <h1 className='text-3xl font-bold my-[18px]'>Pexels Clone</h1>
    <div className='flex flex-col space-y-4 px-5'>
            {loc.pathname==='/' ? <button onClick={()=>navigate('/saved')} className={`text-md p-2.5 border-white border-2 rounded-xl bg-red-300 text-white hover:bg-red-500`}>Saved</button> : <button onClick={()=>navigate('/')} className={`text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-red-500`}>Home</button>  }
            <button onClick={()=>{SS('nature'), navigate('/')}} className='text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-gray-500'>Nature</button>
            <button onClick={()=>{SS('Travel'), navigate('/')}} className='text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-gray-500'>Travel</button>
            <button onClick={()=>{SS('City'), navigate('/')}} className='text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-gray-500'>City</button>
            <button onClick={()=>{SS('car'), navigate('/')}} className='text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-gray-500'>Car</button>
            <button onClick={()=>{SS('Fashion'), navigate('/')}} className='text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-gray-500'>Fashion</button>
            <button onClick={()=>{SS('Animal'), navigate('/')}} className='text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-gray-500'>Animal</button>
            <button onClick={()=>{SS('Technology'), navigate('/')}} className='text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-gray-500'>Technology</button>
            <button onClick={()=>{SS('Bussiness'), navigate('/')}} className='text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-gray-500'>Finanace</button>
            <button onClick={()=>{SS('tokyo'), navigate('/')}} className='text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-gray-500'>Tokyo</button>
            <button onClick={()=>{SS('dubai'), navigate('/')}} className='text-md p-2.5 border-white border-2 rounded-xl bg-slate-600 text-white hover:bg-gray-500'>Dubai</button>
    </div>
      </div>

    </>
    
  )
}

export default Navbar
