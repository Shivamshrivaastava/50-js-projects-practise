/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react"
import NewsItem from "./NewsItem";


function NewsBoard({Category}) {
  const [articles,SetArticles] = useState([]);
  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&Category=${Category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(response => response.json()).then(data => SetArticles(data.articles));
  },[])
  return (
    <div>
      <h2 className="text-center">Latest<span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        return< NewsItem key={index} title={news.title} description={news.description} src = {news.urlToImage} url = {news.url}/>
      })}
    </div>
  )
}

export default NewsBoard