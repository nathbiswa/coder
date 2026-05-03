
import { FaGraduationCap, FaRegCalendarAlt } from 'react-icons/fa';
import { FcPlanner } from 'react-icons/fc';
import { GoStopwatch } from 'react-icons/go';
import { LuNotebookPen } from 'react-icons/lu';
import { PiBookOpenText, PiBrainDuotone, PiWatchDuotone } from 'react-icons/pi';
import { TbTargetArrow } from 'react-icons/tb';

const LearningTips = () => {
    return (
        <div className='my-20'>
            <div className='text-center space-y-3'>
                <h3 className='text-md p-2 w-[150px] mx-auto bg-amber-200 rounded-full flex gap-2 justify-center items-center'> <FaGraduationCap /> <span>Smart Learnig</span></h3>
                <span><h1 className=' text-xl md:text-6xl font-bold'> <span>Learnig</span> <span className='text-amber-300'>Tips</span></h1> </span>
                <p className='text-gray-400 text-[14px] md:text-xl my-4'>Learn smarter,not harter.Foloow this proven tips <br /> to improve your learning and Productivity.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-2'>
                <div className='bg-amber-100 flex-1 rounded-2xl'>
                    <div className='px-4 mt-5'>
                        <h1 className='flex items-center gap-3'> <span className='bg-amber-200  p-4 rounded-full'><PiBookOpenText className='text-amber-600 h-[30px] w-[30px] ' /></span><span className='text-[16px] md:text-3xl text-yellow-600'>Study Techniques</span></h1>
                    </div>
                    <div className='px-12 py-2'>
                        <ul>
                            <li className='p-3 mt-2 bg-amber-50 rounded-2xl'>
                                <div className='flex items-center gap-3'>
                                    <span className='bg-amber-200  p-4 rounded-full'>
                                        <PiBrainDuotone className='text-amber-600 h-[30px] w-[30px] ' />
                                    </span>
                                    <div>
                                        <span className='text-[14px] md:text-xl text-yellow-400'>1. Active Recall</span>
                                        <p className='text-[10px] md:text-[16px]'>Test your self insted of redaing <br />
                                            Use flashcard of try to explain this topic <br />
                                            in your one word</p>
                                    </div>

                                </div>
                            </li>
                            <li className='p-3 mt-2 bg-amber-50 rounded-2xl'>
                                <div className='flex items-center gap-3'>
                                    <span className='bg-amber-200  p-4 rounded-full'>
                                        <FaRegCalendarAlt className='text-amber-600 h-[30px] w-[30px] ' />
                                    </span>
                                    <div>
                                        <span className='text-[12px] md:text-xl text-yellow-400'>2. Respact Repetion</span>
                                        <p className='text-[10px] md:text-[16px]'>Review materials at inreasing intervais <br />
                                            It help more information from shor-turm. <br />
                                            to long-turm memory</p>
                                    </div>

                                </div>
                            </li>
                            <li className='p-3 mt-2 bg-amber-50 rounded-2xl'>
                                <div className='flex items-center gap-3'>
                                    <span className='bg-amber-200  p-4 rounded-full'>
                                        <GoStopwatch className='text-amber-600 h-[30px] w-[30px] ' />
                                    </span>
                                    <div>
                                        <span className='text-[12px] md:text-xl text-yellow-400'>3. Promodoro Technique</span>
                                        <p className='text-[10px] md:text-[16px]'>Study for 25 minutes,take a 5-minutes breack. <br />
                                            After 4 cycle,take of longer breack of <br />
                                            20-30 minutes</p>
                                    </div>

                                </div>
                            </li>
                            <li className='p-3 mt-2 bg-amber-50 rounded-2xl'>
                                <div className='flex items-center gap-3'>
                                    <span className='bg-amber-200  p-4 rounded-full'>
                                        <LuNotebookPen className='text-amber-600 h-[30px] w-[30px] ' />
                                    </span>
                                    <div>
                                        <span className='text-[12px] md:text-xl text-yellow-400'>4. Note Macking</span>
                                        <p className='text-[10px] md:text-[16px]'>Test your self insted of redaing <br />
                                            Use flashcard of try to explain this topic <br />
                                            in your one word</p>
                                    </div>

                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
                <div className='bg-green-200  flex-1 justify-start rounded-2xl space-y-8'>
                    <div className='px-4 py-1 mt-6'>
                        <h1 className='flex items-center gap-3'>
                            <span className='bg-green-300  p-4 rounded-full'>
                                <PiWatchDuotone className='text-green-600 h-[30px] w-[30px] ' />
                            </span>
                            <span className='text-[16px] md:text-3xl text-green-600'>Time Management Tips</span>
                        </h1>
                    </div>
                    <div className='px-12 py-2'>
                        <ul>
                            <li className='p-3 mt-2 bg-green-50 rounded-2xl'>
                                <div className='flex items-center gap-3'>
                                    <span className='bg-green-200  p-4 rounded-full'>
                                        <FcPlanner className='text-green-600 h-[30px] w-[30px] ' />
                                    </span>
                                    <div>
                                        <span className='text-[12px] md:text-xl text-green-400'>1. Daily Plan</span>
                                        <p className='text-[10px] md:text-[16px]'>Put your plan in daily advanced <br />
                                            List your task set time bloks <br />
                                            for each</p>
                                    </div>

                                </div>
                            </li>
                            <li className='p-3 mt-2 bg-green-50 rounded-2xl'>
                                <div className='flex items-center gap-3'>
                                    <span className='bg-green-200  p-4 rounded-full'>
                                        <TbTargetArrow className='text-green-600 h-[30px] w-[30px] ' />
                                    </span>
                                    <div>
                                        <span className='text-[12px] md:text-xl text-green-400'>2. Priority System</span>
                                        <p className='text-[10px] md:text-[16px]'>Do impotent task and deficalt task first <br />
                                            Use priority level, high, medium and low.
                                        </p>
                                    </div>

                                </div>
                            </li>
                            <li className='p-3 mt-2 bg-green-50 rounded-2xl'>
                                <div className='flex items-center gap-3'>
                                    <span className='bg-green-200  p-4 rounded-full'>
                                        <GoStopwatch className='text-green-600 h-[30px] w-[30px] ' />
                                    </span>
                                    <div>
                                        <span className='text-[12px] md:text-xl text-green-400'>3. Eliminate Distractions</span>
                                        <p className='text-[10px] md:text-[16px]'>Trun on notification, stay way from. <br />
                                            Social media while studing </p>
                                    </div>

                                </div>
                            </li>
                            <li className='p-3 mt-2 bg-green-50 rounded-2xl'>
                                <div className='flex items-center gap-3'>
                                    <span className='bg-green-200  p-4 rounded-full'>
                                        <LuNotebookPen className='text-green-600 h-[30px] w-[30px] ' />
                                    </span>
                                    <div>
                                        <span className='text-[12px] md:text-xl text-green-400'>4. Consistency is key</span>
                                        <p className='text-[10px] md:text-[16px]'>Study at same time everyday <br />
                                            Consistecy create disciplain<br />
                                            and better results</p>
                                    </div>

                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LearningTips;