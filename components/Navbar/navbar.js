"use client"
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { BiSolidDashboard } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";

export default function Navbar() {
    return (
        <div className="p-5 bg-white rounded-xl border-l-2 border w-60 flex flex-col min-h-screen justify-between">
            <div className="flex flex-col gap-10">
                <div className="flex gap-2 items-center">
                    <Image src={logo} alt="logo" width={20} height={20} />
                    <h2>Weather-wise</h2>
                </div>
                <div className="flex gap-2 items-center">
                    <BiSolidDashboard />
                    <Link href="/">Dashboard</Link>
                </div>
                <div className="flex gap-2 items-center">
                    <AiOutlineCalendar />
                    <Link href="/">Calendar</Link>
                </div>
                <div className="flex gap-2 items-center">
                    <SiGooglemaps />
                    <Link href="/">Map</Link>
                </div>
                <div className="flex gap-2 items-center">
                    <CiSettings />
                    <Link href="/">Settings</Link>
                </div>
            </div>
            <div className="flex bottom-0 items-center gap-2">
                <AiOutlineLogout />
                <Link href="/">Logout</Link>
            </div>

        </div>
    );
}