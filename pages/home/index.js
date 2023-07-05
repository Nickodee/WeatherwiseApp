import Navbar from "@/components/Navbar/navbar";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import Image from "next/image";
import person from "../../public/person.png";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { TiWeatherSunny } from "react-icons/ti";

export default function DefaultPage() {
    return (
        <>
            <div className="flex">
                <Navbar />
                <div className="w-3/5 border-r-2 p-7">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2 p-3 bg-white border rounded border-black-50">
                            <BiSearchAlt2 />
                            <input type="text" className="bg-white outline-none" placeholder="Search..." />
                        </div>
                        <div className="flex items-center gap-2">
                            <MdNotificationsNone size={24} />
                            <div>
                                <Image src={person} alt="" className="border rounded-full" width={25} height={25} />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 p-5 mt-10 bg-blue-200  h-200 rounded-xl">
                        <div className="w-3/4 ">
                            <div className="flex justify-between ">
                                <div className="flex items-center gap-2">
                                    <CiLocationOn />
                                    <span>Nairobi</span>
                                </div>
                                <span>Today, 10:20pm</span>
                            </div>
                            <div>
                                <h1 className="justify-center text-center text-9xl">24</h1>
                                <h3 className="justify-center text-center">Mostly clear</h3>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className="w-1/4 p-5 bg-white rounded">
                            <h3>Temperature</h3>
                            <div>Graph here</div>
                        </div>

                    </div>
                    <div className="flex flex-wrap justify-center mt-10 gap-7">
                        <div className="flex items-center w-1/3 gap-5 p-5 bg-gray-200 rounded-lg">
                            <div>
                                <h1 className="text-2xl">Wind</h1>
                                <span>Today wind speed</span>
                                <h2>12km/h</h2>
                            </div>
                            <div>wind</div>
                        </div>
                        <div className="flex items-center w-1/3 gap-5 p-5 bg-gray-200 rounded-lg">
                            <div>
                                <h1 className="text-2xl">Wind</h1>
                                <span>Today wind speed</span>
                                <h2>12km/h</h2>
                            </div>
                            <div>wind</div>
                        </div>
                        <div className="flex items-center w-1/3 gap-5 p-5 bg-gray-200 rounded-lg">
                            <div>
                                <h1 className="text-2xl">Wind</h1>
                                <span>Today wind speed</span>
                                <h2>12km/h</h2>
                            </div>
                            <div>wind</div>
                        </div>
                        <div className="flex items-center w-1/3 gap-5 p-5 bg-gray-200 rounded-lg">
                            <div>
                                <h1 className="text-2xl">Wind</h1>
                                <span>Today wind speed</span>
                                <h2>12km/h</h2>
                            </div>
                            <div>wind</div>
                        </div>
                    </div>
                    <div className="p-5 mt-10 bg-white rounded shadow">
                        Other destails will go here
                    </div>
                </div>
                <div className="flex flex-col w-2/5 gap-10 p-5">
                    <div className="flex items-center justify-between">
                        <AiOutlineArrowLeft />
                        <span>This week</span>
                        <AiOutlineArrowRight />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1>Tommorrow</h1>
                            <span>12 Apr</span>
                        </div>
                        <h1 className="text-2xl">16</h1>
                        <span>
                            <TiWeatherSunny size={30} />
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1>Monday</h1>
                            <span>13 Apr</span>
                        </div>
                        <h1 className="text-2xl">16</h1>
                        <span>
                            <TiWeatherSunny size={30} />
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1>Tuesday</h1>
                            <span>14 Apr</span>
                        </div>
                        <h1 className="text-2xl">16</h1>
                        <span>
                            <TiWeatherSunny size={30} />
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1>Wednesday</h1>
                            <span>15 Apr</span>
                        </div>
                        <h1 className="text-2xl">16</h1>
                        <span>
                            <TiWeatherSunny size={30} />
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1>Thursday</h1>
                            <span>16 Apr</span>
                        </div>
                        <div>
                            <h1 className="text-2xl">16</h1>
                        </div>
                        <span>
                            <TiWeatherSunny size={30} />
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1>Friday</h1>
                            <span>12 Apr</span>
                        </div>
                        <div>
                            <h1 className="text-2xl">16</h1>
                        </div>
                        <span>
                            <TiWeatherSunny size={30} />
                        </span>
                    </div>
                    <div className="p-5 bg-gray-100 rounded">
                        Something goes here
                    </div>
                </div>
            </div>
        </>
    );
}