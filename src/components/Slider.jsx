import React,{useState,useEffect} from 'react'
import {MdNavigateNext} from 'react-icons/md';
import {MdNavigateBefore} from 'react-icons/md';
const Slider = () => {
 
    const [slider1,setSlider1]=useState('opacity-100');
    const [slider2,setSlider2]=useState('opacity-0');
    const [slider3,setSlider3]=useState('opacity-0');
    const [id,setid]=useState(1);
    
    const shownext=()=>{
        if(id<3){
            setid(id+1);
        }
    }
    const showprev=()=>{
        if(id>1){
            setid(id-1);
        }
    }

    useEffect(() => {
        switch (id){
            case 1:
                setSlider1('opacity-100');
                setSlider2('opacity-0');
                setSlider3('opacity-0');
                break;
            case 2:
                setSlider2('opacity-100');
                setSlider1('opacity-0');
                setSlider3('opacity-0');
                break;
            case 3:
                setSlider3('opacity-100');
                setSlider1('opacity-0');
                setSlider2('opacity-0');
                break;
            default:
                break;
        }
    }, [id])
    
  return (
    <div className='w-full h-screen bg-black-shadow '>
     <div className='w-full h-4/5 border relative overflow-hidden top-20'>
        <div className={`${slider1} w-full absolute inset-0 transition-opacity duration-1000 `}> 
        <div className='w-full absolute inset-0  bg-center bg-cover'  style={{backgroundImage:'url("/images/1.jpg")'}}></div>
        <h1 className='text-white opacity-85 text-5xl font-semibold absolute  bottom-32 left-24 z-20'>FLOATING HOUSE MESSINIA</h1>
        </div>

        <div className={`${slider2} w-full absolute inset-0 transition-opacity duration-1000 `} >
        <div className='w-full absolute inset-0 bg-center bg-cover'  style={{backgroundImage:'url("/images/2.jpg")'}}></div>
        <h1 className='text-white opacity-85 text-5xl font-semibold absolute bottom-32 left-24 z-20'>IN THE PINE FOREST</h1>
        </div>

        <div  className={`${slider3} w-full absolute inset-0 transition-opacity duration-1000 `}>
        <div className='w-full absolute inset-0 bg-center bg-cover '  style={{backgroundImage:'url("/images/3.jpg")'}}></div>
        <h1 className='text-white opacity-85 text-5xl font-semibold absolute bottom-32 left-24 z-20'>BUGANVILLA HOUSE</h1>            
        </div>

        <div className='bg-black opacity-30 z-30 absolute inset-0'></div>
        <div className='absolute inset-0 z-40 '>
        <div className='absolute bottom-1/2 right-16'>
        <button onClick={shownext} className='border h-16 w-16 m-1 grid place-items-center  text-white '><MdNavigateNext className='text-xl text-white' /></button>
        <button onClick={showprev} className='border h-16 w-16 m-1 grid place-items-center  text-white '><MdNavigateBefore className='text-xl text-white' /></button>
        </div>
        </div>
     </div>
    </div>
  )
}

export default Slider