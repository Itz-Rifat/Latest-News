import { useEffect, useState } from "react"
import { Link, useLoaderData, useParams } from "react-router-dom"
import Header from "../components/Header";
import RightNavBar from "../components/RightNavBar";


const NewsDetails = () => {
  // const { id } = useParams();
  // const { news, setNews } = useState({});
  const data = useLoaderData();
  const news = data.data[0];
  const { title, image_url, author, details } = news;
  // console.log(news);

  // useEffect(() => {
  //   fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data.data)
  //       setNews(data.data)
  //     })
  // }, [id])
  return (
    // <div>
    //   {
    //     news.map((newsItem) => (
    //       <div key={newsItem._id}>

    //       </div>
    //     )
    //     )
    //   }
    // </div>

    <div>
      <header>
        <Header></Header>
      </header>
      <div className="flex justify-center"><nav className="  rounded bg-orange-400 text-black px-2  hover:text-white hover:bg-green-600 border border-none w-15" ><Link to={`/`}>Home</Link></nav></div>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-2">
        {/* Left side */}
        <div className="col-span-9">
          <h2>Latest News</h2>
          <div className="card w-full bg-base-100 border border-gray-200 shadow-sm rounded-md p-5 lg:p-8">
            {/* 1. Article Image */}
            <figure className="rounded-md overflow-hidden">
              <img
                src={image_url}
                alt={title}
                className="w-full h-auto object-cover"
              />
            </figure>

            <div className="mt-8">
              {/* 2. Headline */}
              <h1 className="text-2xl lg:text-3xl font-black text-[#403F3F] leading-tight mb-5">
                {title}
              </h1>

              {/* 3. Metadata and Tags */}
              <div className="text-[#706F6F] text-sm leading-relaxed mb-4">
                <span className="font-semibold">{author?.published_date}</span>
                <span className="mx-1">|</span>
                <span className="font-bold text-[#403F3F]">Tag Cloud Tags:</span> Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News
              </div>

              {/* 4. Article Details */}
              <div className="text-[#706F6F] text-base leading-7 space-y-4">
                <p>
                  <span className="font-bold">(Worthy News) – </span>
                  {details}
                </p>
              </div>

              {/* 5. DaisyUI Navigation Button */}
              <div className="card-actions mt-8">
                <Link className="btn bg-orange-400" to={`/category/${news?.category_id}`}>Back to category</Link>
              </div>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="col-span-3">
          <RightNavBar></RightNavBar>
        </div>
      </main>

      <footer>

      </footer>

    </div>

  )
}

export default NewsDetails