import * as React from 'react'
import {FaTelegramPlane} from "react-icons/fa";


export default function Footer() {
    return (
        <div>
            <div className={"bg-gray-800 py-5 px-20 flex justify-between items-center"}>
                <div className={"text-white text-sm flex gap-5"}>
                    <p>مطالب</p>
                    <p>درباره ما</p>
                    <p>ارتباط باما</p>
                </div>
                <div className={"px-5 py-2 text-white rounded-md flex gap-3 items-center"} style={{backgroundColor: '#0088CC'}}>
                    <FaTelegramPlane size={20}/>
                    <p className={"text-sm"}>عضویت در کانال تلگرام</p>
                </div>
            </div>
            <div className={"bg-gray-900 py-3 px-20"}>
                <p className={"text-gray-400 text-xs"}>© استفاده از مطالب سایت تنها با درج لینک مستقیم به آن مطلب مجاز است.</p>
            </div>
        </div>
    )
}