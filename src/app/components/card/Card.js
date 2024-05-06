import "./card.css";
import config from "../../config.json";

export default function Card() {
  let configArr = Array.isArray(config.articles) ? config.articles : [];

  return (
    <>
      <h1 className="title">Popular Topics</h1>

      <div id="cardContainer" className="card-container">
        {configArr.map((data, i) => (
          <div className="card" key={i}>
            <img
              className="card-img-top"
              src={
                data.urlToImage ||
                "https://i.pinimg.com/736x/95/cd/f6/95cdf68b1adaba5d4ac0bf9414b217d7.jpg"
              }
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">
                {data.description || (
                  <span>
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Autem culpa, consequuntur ipsa eligendi ducimus consectetur
                    obcaecati. Sapiente ipsum sequi dolores!"
                  </span>
                )}
              </p>
              <a href={data.url} target="_blank" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
