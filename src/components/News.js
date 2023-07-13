import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  
    static defaultProps = {
      country: 'in',
      pageSize: 8,
      category: 'General'
    }

    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category : PropTypes.string,
    }

  // main methods
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.props.category} - NewsWipe`
  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e87722c78b854590a0a98b287b3a23ae&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      
    });

  }
  async componentDidMount() {
    this.updateNews();
    }

  handleNextclick = async () => {
    
    this.setState({page:this.state.page+1});
    this.updateNews();
  };

  handlePrevclick = async () => {
    
    this.setState({page:this.state.page-1});
    this.updateNews();
  };

  fetchMoreData = async () => { 
   this.setState({page: this.state.page + 1})
   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e87722c78b854590a0a98b287b3a23ae&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,  
      loading: false,
    });
  };


  render() {
    return (
     <>
        <h1 className="text-center" style={{margin:"30px 0px" }}>NewsWipe - Top {this.props.category} Headlines</h1>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResult}
          loader={<Spinner/>}
        >

          <div className="container">
        <div className="row">
          {this.state.articles.map((element) => {
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
}

export default News;
