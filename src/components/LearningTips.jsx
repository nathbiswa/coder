
import { FaGraduationCap, FaRegCalendarAlt } from 'react-icons/fa';
import { GoStopwatch } from 'react-icons/go';
import { LuNotebookPen } from 'react-icons/lu';
import { PiBookOpenText, PiBrainDuotone } from 'react-icons/pi';

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
                    <div className='px-4 py-1 mt-6'>
                        <h1 className='flex items-center gap-3'> <span className='bg-amber-200  p-4 rounded-full'><PiBookOpenText className='text-amber-600 h-[30px] w-[30px] ' /></span><span className='text-[16px] md:text-3xl text-yellow-400'>Dtudy Techniques</span></h1>
                    </div>
                    <div className='px-12 py-2'>
                        <ul>
                            <li className='p-3 mt-2 bg-amber-50 rounded-2xl'>
                                <div className='flex items-center gap-3'>
                                    <span className='bg-amber-200  p-4 rounded-full'>
                                        <PiBrainDuotone className='text-amber-600 h-[30px] w-[30px] ' />
                                    </span>
                                    <div>
                                        <span className='text-xl text-yellow-400'>1. Active Recall</span>
                                        <p>Test your self insted of redaing <br />
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
                                        <span className='text-xl text-yellow-400'>2. Respact Repetion</span>
                                        <p>Review materials at inreasing intervais <br />
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
                                        <span className='text-xl text-yellow-400'>3. Promodoro Technique</span>
                                        <p>Study for 25 minutes,take a 5-minutes breack. <br />
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
                                        <span className='text-xl text-yellow-400'>4. Note Macking</span>
                                        <p>Test your self insted of redaing <br />
                                            Use flashcard of try to explain this topic <br />
                                            in your one word</p>
                                    </div>

                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
                <div className='bg-green-200 flex-1 justify-start'>
                    <h1>Time Management Tips</h1>
                </div>
            </div>
        </div>
    );
};

export default LearningTips;