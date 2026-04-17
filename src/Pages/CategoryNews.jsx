import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";

const CategoryNews = () => {
    const { id } = useParams()
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                setNews(data.data)
            })
    }, [id])
    return (
        <div >
            <h2 className="font-bold mb-4">Dragon News Home</h2>
            {/* <div className="space-y-4">
                {
                    news.map((newsItem, index) => (
                        <div key={index} className="border rounded-lg p-4 bg-gray-50">
                            <div className="flex gap-4">
                                <img src={newsItem.image_url} alt="" className="w-32 h-32 rounded-lg object-cover" />
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg mb-2">{newsItem.title}</h3>
                                    <p className="text-gray-600 text-sm mb-2">{newsItem.details.slice(0, 150)}...</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">{newsItem.author?.name || "Unknown"}</span>
                                        <span className="text-sm text-gray-500">{newsItem.total_view || 0} views</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div> */}
            {
                news.map((newsItem, index) => (
                    <div className="-mt-2 mb-7 rounded-lg border border-cyan-400 ">
                        <div className="bg-gray-200 p-2 rounded-lg flex justify-between items-center">
                            <div className=" flex gap-2">
                                <img className="w-10 border-2 border-purple-300 h-10 overflow-hidden shrink-0 rounded-full" src={newsItem.author?.img} alt="" />
                                <div className="text-[12px]">
                                    <p className="font-semibold">{newsItem.author.name}</p>
                                    <p className="text-gray-500">{newsItem.author?.published_date?.split(" ")[0]}</p>
                                </div>
                            </div>
                            <div className=" flex  items-center">
                                <button className="btn border-none shadow-none text-lg bg-gray-200"><CiBookmark /></button>
                                <button className="btn border-none shadow-none text-lg bg-gray-200"><CiShare2 /></button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 p-2">
                            <div>
                                <p className="font-bold text-xl">{newsItem.title}</p>
                            </div>
                            <div>
                                <img className="w-full" src={newsItem?.image_url} alt="" />
                            </div>
                            <div>
                                <p>{newsItem.details}</p>
                            </div>
                        </div>

                        <div className="px-2 flex mb-2 justify-between">
                            <div className="flex items-center gap-2">
                                <div className="gap-0.5 flex">
                                    <p className="text-yellow-500"><FaStar /></p>
                                    <p className="text-yellow-500"><FaStar /></p>
                                    <p className="text-yellow-500"><FaStar /></p>
                                    <p className="text-yellow-500"><FaStar /></p>
                                    <p className="text-yellow-500"><FaStar /></p>
                                </div>
                                {newsItem.rating?.number}
                            </div>
                            <div className="flex items-center gap-2">
                                <FaEye />{newsItem.total_view}
                            </div>
                        </div>



                    </div>
                ))
            }
        </div>
    )
}

export default CategoryNews