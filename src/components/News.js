import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [totalResults, setTotalResults] = useState(0)
  // document.title = `${props.category} - NewsWipe`

  // main methods


  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e87722c78b854590a0a98b287b3a23ae&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false)
  }
  useEffect(() => {
    updateNews();
  }, [])


 const handleNextclick = async () => {

    setPage(page + 1);
    updateNews();
  };

  const handlePrevclick = async () => {

    setPage(page - 1);
    updateNews();
  };

 const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e87722c78b854590a0a98b287b3a23ae&page=${page}&pagesize=${props.pageSize}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)
    
  };


  
    return (
      <>
        <h1 className="text-center" style={{ margin: "30px 0px" }}>NewsWipe - Top {props.category} Headlines</h1>
        {/* {this.state.loading && <Spinner />} */}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >

          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title.slice(0, 40) : ""}
                      description={
                        element.description ? element.description.slice(0, 78) : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'General'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News;
