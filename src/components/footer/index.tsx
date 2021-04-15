import * as React from 'react'
import BottomSection from "./bottom-section";
import TopSection from "./top-section";


const data = {
    telegramText: "عضویت در کانال تلگرام",
    telegramLink: "https://t.me/devtops",
    copyright: "© استفاده از مطالب سایت تنها با درج لینک مستقیم به آن مطلب مجاز است.",
    links: [
        {text: "مطالب", url: "/posts"},
        {text: "درباره ما", url: "/about-us"}
    ]
};

export default function Footer() {
    return (
        <div>
            <TopSection
                links={data.links}
                telegramLink={data.telegramLink}
                telegramText={data.telegramText}
            />
            <BottomSection>
                {data.copyright}
            </BottomSection>
        </div>
    )
}