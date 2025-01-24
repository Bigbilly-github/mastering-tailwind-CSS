import menu from '../../svg/header/menu.svg'
import youtubelogo from '../../svg/header/logo.svg'
import search from '../../svg/header/search.svg'
import voicelogo from '../../svg/header/voicelogo.svg'
import plus from '../../svg/header/plus.svg'
import alarm from '../../svg/header/alarm.svg'


function Header (){


    return(
        <>
          <header className='flex bg-black h-[78px] w-full justify-between items-center fixed top-0 left-0 right-0 z-50' >
              <div className='flex items-center w-[220px] pl-[30px] mr-[40px] gap-4 min-w-[180px]'>
                    <div className='    hover:border hover:rounded-full hover:border-slate-800 hover:p-1 hover:bg-slate-900'>
                        <img src={menu} className='h-6 w-6'/>
                    </div>
                    <div className='flex'>
                        <img src={youtubelogo} className='h-[32px] '/>
                        <h1 className='text-2xl text-[white] relative'>YouTube
                            <p className='absolute text-sm text-gray-500 top-[-10px] right-[-20px]'>NG</p>
                        </h1>

                    </div>

              </div>
              

             
                <div className='flex flex-grow  flex-shrink  min-w-16 max-w-2xl ml-3 sm:mr-5' >
                    <input type='text' placeholder='Search' className='ml-[30px] hidden sm:block flex-grow min-w-0 flex-shrink bg-transparent border border-slate-700 border-r-0 rounded-l-[25px] p-[8px] pl-[15px] text-lg text-[red]'/>
                    <div className='sm:w-[70px] w-[30px] flex-shrink-0 sm:min-w-16 flex items-center justify-center sm:bg-slate-900 sm:border sm:border-slate-700 sm:rounded-r-[25px] '>
                        <img src={search} className='h-[25px]'/>
                    </div>
                    <div className='sm:bg-slate-900 sm:rounded-full sm:ml-[20px] ml-1 flex-shrink-0 sm:mr-4 mr-1 sm:border sm:border-slate-800 p-2'>
                                <img src={voicelogo} className='sm:h-[25px] h-[22px]'/>
                     </div>

                   
                </div>

                <div className='flex items-center justify-evenly gap-2  w-[200px] flex-shrink-0 sm:ml-2 sm:mr-5 mr-3'>


                    <div className='flex  items-center p-2 border border-slate-900 bg-[#ffffff14] hover:bg-slate-800  duration-150 rounded-[25px] gap-1 font-medium'>
                        <img src={plus} className='h-[25px]'/>
                        <p className='text-white text-[14px]'>Create</p>
                    </div>

                    <div className='relative '>
                        <img src={alarm} className='h-[25px]'/>
                        <div className='absolute rounded-full bg-red-700 text-white text-[10px] p-[2px] top-[-8px] right-[-5px] px-1'>
                            9+
                        </div>
                    </div>

                    <div className='rounded-full bg-purple-700 text-white text-[10px] p-1 px-[10px]  text-center'>
                        <p className='text-xl'>A</p>
                    </div>

                </div>

             

          </header>
        
        </>
    )

}
export default Header