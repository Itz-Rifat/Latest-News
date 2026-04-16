import { useEffect, useState } from "react"
// import SingleCategory from "./SingleCategory"
import { NavLink } from "react-router-dom"


const LeftNavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => {
            // console.log(data.data.news_category)
            setCategories(data.data.news_category)
        })


    }, [])
  return (
    <div>
        <h2 className="font-semibold mb-2">All Category ({categories.length})</h2>
        <div className=" grid justify-center items-center gap-2">
        {
        // categories.map((category,index) => (<NavLink to={`/category/${category.category_id}`}  className={({isActive}) => `btn active bg-base-200 border-none ${isActive && "bg-red-500 text-white"}`} key={index}>{category.category_name}</NavLink>))
        categories.map((category, index) => (<NavLink to={`/category/${category.category_id}`} className={({ isActive }) => `btn bg-base-200 border-none hover:bg-gray-200 hover:text-black transition-all ${isActive && "bg-gray-300 text-black"}`} key={index}>{category.category_name}</NavLink>))
        
        }
        </div>
    </div>
    // <div>
    //   console.log(categories)
    //   <h2 className="font-semibold mb-2">All Category</h2>
    //   {
    //     categories.map((category,index) => <SingleCategory key={index} SingleCategory={category.category_name}>console.log(category.category_name)</SingleCategory>)
    //     }

    // </div>
  )
}

export default LeftNavBar