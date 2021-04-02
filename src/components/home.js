import React, { Component } from "react";
import "./style.css";
import { createClient } from "pexels";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_query: "",
      photoSource: [],
    };
  }
  getPhotos = () => {
    const client = createClient(
      "563492ad6f91700001000001ab6e088526cb458389a6c39acb4e411f"
    );
    const query = this.state.search_query;

    client.photos.search({ query, per_page: 20 }).then((photos) => {
      this.setState({ photoSource: photos.photos });
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { search_query, photoSource } = this.state;
    return (
      <div>
        <div className="header">
          <div className="container">
            <div className="heading">
              Your local source of high quality images and videos directly from
              their creators
            </div>
            <div>
              <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Photos And Videos"
                  name="search_query"
                  value={search_query}
                  onChange={this.handleChange}
                />
                <div className="btn-sub">
                  {" "}
                  <button className="btn btn-primary " onClick={this.getPhotos}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {photoSource.map((photo) => {
            <div key={photo.id} className="col-md-4">
              <div>
                <img src={photo.src.small} alt={photo.id} />
              </div>
            </div>;
          })}
        </div>
      </div>
    );
  }
}
