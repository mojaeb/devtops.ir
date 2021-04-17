import * as React from 'react';
import Layout from "../components/layout";
import {graphql} from "gatsby";
import Container from "../components/container";
import Img from "gatsby-image";
import {MdEmail} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'


function AboutUs({data}) {
    return (
        <Layout>
            <div className={"h-40 bg-blue-700"}/>
            <Container>
                <div className={"flex justify-start flex-col md:flex-row"}>
                    <div className={"w-full md:w-2/5 h-80 -mt-20 ml-20 mb-10 rounded-md overflow-hidden"}>
                        <Img fixed={data?.file?.childImageSharp?.fixed} style={{width: '100%', height: '100%'}}/>
                    </div>
                    <div className={"w-full md:w-3/5 leading-10"}>
                        <p>دوتاپس تو سال 99 با رویکرد انتشار محتوای آموزشی در حوزه برنامه نویسی به صورت کاملا رایگان
                            شروع به کار کرده. تمرکز دوتاپس رو تولید و انتشار مطالبیه که بهش کمتر اشاره شده و قصد
                            دارن این نقاط کور رو پوشش بدن و در تلاشن که این مطالب در حد قابل قبولی کامل و آسون ساخته
                            بشن.
                        </p>
                        <p>همچین دوتاپس از کسانی که علاقه مند به گذاشتن مطالبشون تو سایت دعوت میکنه </p>
                        <p>برای قرار دادن مطلبتون با حساب های زیر در تماس باشید</p>
                        <div className={"rounded-md bg-white mx-5 sm:mx-1 my-10 inline-block divide-y "}>
                            <a href={"mailto:mojaebi@gmail.com"} target={"_blank"} className={"rounded-md px-4 m-2 hover:bg-gray-100 flex gap-2 items-center"}>
                                <MdEmail size={25} className={"text-red-600"}/>
                                <p>mojaebi@gmail.com</p>
                            </a>
                            <a href={"https://t.me/mohjafeb"} target={"_blank"} className={"rounded-md px-4 m-2 hover:bg-gray-100 flex gap-2 items-center"}>
                                <FaTelegramPlane size={25} className={"text-blue-500"}/>
                                <p>گفتگو در تلگرام</p>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
}


export const query = graphql`
    query {
        file(name: {eq: "engineering"}) {
            childImageSharp {
                fixed(width: 400) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

export default AboutUs;