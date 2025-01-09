
import home from '../../svg/sidebar/home.svg'
import sub from '../../svg/sidebar/subscription.svg'
import history from '../../svg/sidebar/history.svg'
import playlist from '../../svg/sidebar/playlist.svg'
import video from '../../svg/sidebar/video.svg'
import course from '../../svg/sidebar/graduationcap.svg'
import clock from '../../svg/sidebar/clock.svg'
import thumb from '../../svg/sidebar/thumb.svg'
import download from '../../svg/sidebar/download.svg'
import circle from '../../svg/sidebar/circle.svg'

function Sidebar (){

    return(
        <>
        <section className=" fixed top-[78px] left-0 bottom-0 bg-black w-[270px]">
            <div className='pl-5 pt-1'>
                <div className='flex gap-5 items-center text-slate-200 text-base  cursor-pointer w-[200px] pl-2 py-2 hover:bg-slate-900 hover:rounded-[15px] font-light'>
                    <img src={home} alt="home icon" className='h-[25px]'/>
                    <p>Home</p>

                </div>

                <div className='flex gap-5 items-center text-slate-200 text-base  cursor-pointer w-[200px] pl-2 py-2 hover:bg-slate-900 hover:rounded-[15px] font-light'>
                    <img src={home} alt="home icon" className='h-[25px]'/>
                    <p>Shorts</p>

                </div>

                <div className='flex gap-5 items-center text-slate-200 text-base  cursor-pointer w-[200px] pl-2 py-2 hover:bg-slate-900 hover:rounded-[15px] font-light'>
                    <img src={sub} alt="subscription icon" className='h-[25px]'/>
                    <p>Subscription</p>

                </div>

                <div className='w-[220px] h-[2px] bg-slate-800 my-5 '> </div>

               
                <p className='text-white pl-2 mb-2 after:content-[">"] after:pl-3 font-normal text-lg '> You  </p>

                <div className='flex gap-5 items-center text-slate-200 text-base  cursor-pointer w-[200px] pl-2 py-2 hover:bg-slate-900 hover:rounded-[15px] font-light'>
                    <img src={history} alt="history icon" className='h-[25px]'/>
                    <p>History</p>

                </div>

                <div className='flex gap-5 items-center text-slate-200 text-base  cursor-pointer w-[200px] pl-2 py-2 hover:bg-slate-900 hover:rounded-[15px] font-light'>
                    <img src={playlist} alt="playlist icon" className='h-[25px]'/>
                    <p>Playlist</p>

                </div>


                <div className='flex gap-5 items-center text-slate-200 text-base  cursor-pointer w-[200px] pl-2 py-2 hover:bg-slate-900 hover:rounded-[15px] font-light'>
                    <img src={video} alt="video icon" className='h-[25px]'/>
                    <p>Your videos</p>

                </div>

                <div className='flex gap-5 items-center text-slate-200 text-base  cursor-pointer w-[200px] pl-2 py-2 hover:bg-slate-900 hover:rounded-[15px] font-light'>
                    <img src={course} alt="graduation-cap icon" className='h-[25px]'/>
                    <p>Your courses</p>

                </div>

                <div className='flex gap-5 items-center text-slate-200 text-base  cursor-pointer w-[200px] pl-2 py-2 hover:bg-slate-900 hover:rounded-[15px] font-light'>
                    <img src={clock} alt="clock icon" className='h-[25px]'/>
                    <p>Watch later</p>

                </div>
               
                <div className='flex gap-5 items-center text-slate-200 text-base  w-[200px] cursor-pointer pl-2 py-2 hover:bg-slate-900 hover:rounded-[15px] font-light'>
                    <img src={thumb} alt="thumbs-up icon" className='h-[25px]'/>
                    <p>Liked videos</p>

                </div>

                <div className='flex gap-5 items-center text-slate-200 text-base  w-[200px] cursor-pointer pl-2 py-2 hover:bg-slate-900 hover:rounded-[15px] font-light'>
                    <img src={download} alt="download icon" className='h-[25px]'/>
                    <p>Downloads</p>

                </div>

                <div className='w-[220px] h-[2px] bg-slate-800 my-5 '> </div>

                <p className='text-white pl-2 mb-2  font-medium text-base '> Subscription </p>

                <div className='flex gap-5 items-center text-slate-200 text-base cursor-pointer  w-[200px] pl-2 py-2 hover:bg-slate-900 hover:rounded-[15px] font-light'>
                    <img src={circle} alt="download icon" className='h-[25px]'/>
                    <p>Starboytv</p>

                </div>
               
                <div className='flex gap-5 items-center text-slate-200 text-base cursor-pointer  w-[200px] pl-2 py-2 hover:bg-slate-900 hover:rounded-[15px] ffont-light'>
                    <img src={circle} alt="download icon" className='h-[25px]'/>
                    <p>Iamcoding</p>

                </div>
               
                <div className='flex gap-5 items-center text-slate-200 text-base cursor-pointer  w-[200px] pl-2 py-2 hover:bg-slate-900 hover:rounded-[15px] font-light'>
                    <img src={circle} alt="download icon" className='h-[25px]'/>
                    <p>Much</p>

                </div>
               

                
            </div>


        </section>

        
        </>
    )

}
export default Sidebar