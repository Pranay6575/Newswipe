import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {
  articles = [
    {
      source: {
        id: "news24",
        name: "News24",
      },
      author: "Lynn Butler",
      title:
        "Rickelton accepts the Proteas' pecking order ahead of World Cup in India",
      description:
        "Proteas wicketkeeper-batter Ryan Rickelton doubts he will be in South Africa's squad for the Cricket World Cup in India, but he is eager to cement his place in the Proteas set-up.",
      url: "https://www.news24.com/sport/cricket/proteas/rickelton-accepts-the-proteas-pecking-order-ahead-of-world-cup-in-india-20230705",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/8744/a7f124255a864201a3c33169cf45ab80.jpg",
      publishedAt: "2023-07-05T20:50:00+00:00",
      content:
        "<ul><li>Proteas batter Ryan Rickelton understands that he might not be on the plane to India for the Cricket World Cup in October.</li><li>Rickelton, who made his ODI debut in March, is unlikely to m… [+2977 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];

  // main methods
  constructor() {
    super();
    console.log("This is Constructor fromfrom News Component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    console.log("cdm called");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e87722c78b854590a0a98b287b3a23ae&page=1&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    console.log(parsedData);
  }

  handleNextclick = async () => {
    console.log("Next Clickd");
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e87722c78b854590a0a98b287b3a23ae&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  handlePrevclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e87722c78b854590a0a98b287b3a23ae&page=${
      this.state.page - 1
    }}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsWipe - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description ? element.description.slice(0, 78) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
          <div className=" container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-secondary"
              onClick={this.handlePrevclick}
            >
              &#8249; Prev.
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-secondary"
              onClick={this.handleNextclick}
            >
              Next &#8250;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
