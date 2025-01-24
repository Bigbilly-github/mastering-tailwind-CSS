import tailwindimage from '../../img/youtube/videos/tailwindcss.png'
import circle from '../../svg/sidebar/circle.svg'
import checkmark from '../../svg/videos/checkmark.svg'
import threedots from '../../svg/videos/three-dots.svg'
import arsenal from '../../img/youtube/videos/arsenal.jpg'
import madrid from '../../img/youtube/videos/madrid.jpg'
import wizkid from '../../img/youtube/videos/wizkid.jpg'
import morayo from '../../img/youtube/videos/morayo.jpg'
import rizz from '../../img/youtube/videos/rizz.jpg'


function Videos () {

  
    const Videodata = [{
        image: tailwindimage,
        text:'Learn Tailwind-Css-Course for Beginners',
        author:"freeCodeCamp.org ",
        profilepic: circle,
        views: "310k"
        
        

}, {
    image: arsenal, 
    text:'Gunners lose First Leg At Home To Newcastle',
    author:"Supersport ",
    profilepic: circle,
     views: "430k"
    

}, {
    image: madrid,
    text:'Madrid Win To Set Up Classico Final With Barcelona',
    author:"Goal.com",
    profilepic: circle,
     views: "124k"
    

}, {
    image: wizkid,
    text:"Wizkid's Performance At The British Fashion Awards",
    author:"Abioladblogger",
    profilepic: circle,
     views: "799k"
    

}, {
    image: morayo,
    text:'Is Morayo The Album Of The Year??',
    author:"Spiricoco.com",
    profilepic: circle,
     views: "999k"
    

}, {
    image: rizz,
    text:'How To Talk To Girls At Schools',
    author:"Rizzgod.com",
    profilepic: circle,
     views: "334k"
    

}];
  console.log(Videodata);


    return(
        <>
         <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-[78px] gap-x-5  gap-y-[80px] p-5 md:ml-[100px] xl:ml-[270px] bg-black"> 
            {Videodata.map((elements, index)=>
                    <div key={index} className="  h-[325px] cursor-pointer rounded-[25px]">
                        <div className='rounded-[25px] relative'>
                            <img src={elements.image} alt="tailwind css image"className='w-full rounded-[15px] h-[250px]' />
                            <p className='absolute bottom-2 right-2 bg-slate-800 text-slate-200 p-1 rounded-[10px] text-xs'>4:12:54</p>

                        </div>

                        <div className='grid grid-cols-[50px_1fr] pt-4 pl-2'>
                            <img src={elements.profilepic} alt="profile picture"  className='h-[35px]'/>
                            <div className='flex  justify-between'> 
                                <div className=' h-[90px] flex flex-col'>
                                    <p className='text-slate-200 font-medium leading-5 mb-2  cursor-pointer'>{elements.text}</p>
                                    <p className='flex gap-2 text-sm font-normal items-center cursor-pointer text-slate-400 mb-0'>{elements.author}<img src={checkmark} alt="checkmark image"  className='h-6'/></p>
                                    <p className='text-slate-400  cursor-pointer font-normal mt-0'>{elements.views} views &#183; 1 year ago </p>

                                </div>
                                <img src={threedots} alt='three-dots icon' className='h-6'/>

                            </div>


                        </div>

                    </div>



    )};


            

         </section>
        
        </>
    )

}
export default Videos