import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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

    // {
    //       "_id": "0282e0e58a5c404fbd15261f11c2ab6a",
    //       "others_info": {
    //         "is_todays_pick": false,
    //         "is_trending": true
    //       },
    //       "category_id": "01",
    //       "rating": {
    //         "number": 4.5,
    //         "badge": "Excellent"
    //       },
    //       "total_view": 488,
    //       "title": "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet",
    //       "author": {
    //         "name": "Jimmy Dane",
    //         "published_date": "2022-08-24 17:27:34",
    //         "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    //       },
    //       "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
    //       "image_url": "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",
    //       "details": "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2."
    //     },

    return (
        <div>
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
                    <div>
                        <div>
                            <img src={newsItem.author.img} alt="" />
                            <p>{newsItem.author.name}</p>
                        </div>
                    </div>
                ))

            }
        </div>
    )
}

export default CategoryNews