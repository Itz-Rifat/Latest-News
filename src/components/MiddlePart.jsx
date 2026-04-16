

// // const MiddlePart = () => {
// //   return (
// //     <div>MiddlePart</div>
// //   )
// // }

// // export default MiddlePart






// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"

// const MiddlePart = () => {
//   const { id } = useParams()
//   const [news, setNews] = useState([])

//   useEffect(() => {
//     fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
//       .then(res => res.json())
//       .then(data => {
//         console.log(data.data)
//         setNews(data.data)
//       })
//   }, [id])

//   return (
//     <div>
//       <h2 className="font-bold mb-4">Breaking News</h2>
//       <div className="space-y-4">
//         {
//           news.map((newsItem, index) => (
//             <div key={index} className="border rounded-lg p-4 bg-gray-50">
//               <div className="flex gap-4">
//                 <img src={newsItem.image_url} alt="" className="w-32 h-32 rounded-lg object-cover" />
//                 <div className="flex-1">
//                   <h3 className="font-bold text-lg mb-2">{newsItem.title}</h3>
//                   <p className="text-gray-600 text-sm mb-2">{newsItem.details.slice(0, 150)}...</p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-sm text-gray-500">{newsItem.author?.name || "Unknown"}</span>
//                     <span className="text-sm text-gray-500">{newsItem.total_view || 0} views</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default MiddlePart