import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Search from "./Search";
import Video from "./Video";
import * as ACT from "./RestaurantActions";
import Spinner from "./Components/Spinner";
import { Helmet } from "react-helmet";
import "./Style.css";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: null,
      restaurantData: [],
      restaurantload: false,
      ville: null,
      villeData: [],
      resto: "",
      state: "",
      id: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeBis = this.handleChangeBis.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
  }
  changeSelect = (e, target) => {
    let d = e.target.value;

    switch (target) {
      case "RESTO":
        if (d) {
          this.setState((prevState) => ({
            resto: d,
          }));
        } else {
          this.setState((prevState) => ({
            resto: "",
          }));
        }
        break;
      case "VILLE":
        if (d) {
          this.setState((prevState) => ({
            state: d,
          }));
        } else {
          this.setState((prevState) => ({
            state: "",
          }));
        }
        break;
      default:
        break;
    }
  };

  componentDidMount = () => {
    if (this.props.restaurant || this.props.ville) {
      this.setState((prevState) => ({
        restaurantData: this.props.restaurant,
        villeData: this.props.ville,
      }));
    }
  };
  componentDidUpdate = (prevProps) => {
    if (
      prevProps.restaurant !== this.props.restaurant ||
      prevProps.ville !== this.props.ville
    ) {
      this.setState((prevState) => ({
        restaurantData: this.props.restaurant,
        villeData: this.props.ville,
      }));
    }
  };

  handleChangeBis = (e) => {
    let f = e.target.value;
    this.setState((prevState) => ({
      ville: f,
    }));
    if (e.keyCode === 13 && this.state.ville !== null) {
      this.props.changeHandlerBis(this.state.ville);
      this.setState((prevState) => ({
        restaurantload: true,
      }));
    }
  };

  handleChange = (e) => {
    let d = e.target.value;
    this.setState((prevState) => ({
      restaurant: d,
    }));
    if (e.keyCode === 13) {
      if (this.state.restaurant !== null) {
        this.props.changeHandler(this.state.restaurant);
      }
    }
  };

  render() {
    return (
      <Fragment>
        <Helmet>
          <meta name="author" content="trouver mon restaurant" />
          <meta name="description" content="trouver votre restaurant" />
          <title>TrouverMonRestaurant || Accueil</title>
        </Helmet>{" "}
        {this.props.loading ? (
          <div
            style={{
              position: "fixed",
              zIndex: "10",
              width: "100vw",
              justifyContent: "center",
            }}
          >
            <Spinner />
          </div>
        ) : null}
        <div
          style={{
            display: "flex",
            position: "fixed",
            width: "100vw",
            zIndex: "40",
            color: "white",
            fontSize: "3em",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              margin: "0px",
              background: "#011627",
              borderRadius: "1vw",
              marginTop: "30vh",
              border: "10px double #41EAD4",
              padding: "1vw",
              zIndex: "0",
              position: "fixed",
            }}
          >
            TrouverMonRestaurant
          </h1>
        </div>
        <Video />
        <div
          style={{
            width: "100vw",
            display: "flex",
            position: "fixed",
            justifyContent: "center",
            marginTop: "10vh",
            border: "none",
          }}
        >
          <div
            style={{
              width: "100vw",
              justifyContent: "center",
              flexDirection: "row",
              display: "flex",
              position: "fixed",
              marginTop: "45vh",
              zIndex: "100",
            }}
          >
            <Search
              change={(e) => this.handleChange(e)}
              changeBis={(e) => this.handleChangeBis(e)}
            />
          </div>
          <div
            style={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "50vw",
                justifyContent: "space-evenly",
                display: "flex",
                flexDirection: "row",
              }}
            >
              {this.state.restaurantData.length > 0 ? (
                <div
                  style={{
                    marginTop: "45vh",
                  }}
                >
                  {" "}
                  <div>
                    <select
                      style={{
                        width: "30vw",
                        background: "#011627",
                        color: "#41EAD4",
                        marginTop: "10vh",
                        zIndex: "1000",
                        border: "none",
                        height: "5vh",
                        paddingLeft: "2%",
                        textTransform: "uppercase",
                        fontSize: "1em",
                        display: this.props.error !== null ? "none" : "flex",
                      }}
                      onChange={(e) => this.changeSelect(e, "RESTO")}
                    >
                      {" "}
                      <option value="">Selectionner une restaurant</option>
                      {this.state.restaurantData.map((items, index) => {
                        return (
                          <option
                            className="optionBis"
                            value={items.id}
                            key={index}
                          >
                            {items.name.text} | {items.zipCode} |{" "}
                            {items.cityName} | {items.countryName}
                          </option>
                        );
                      })}
                    </select>{" "}
                  </div>
                </div>
              ) : null}
              {this.state.villeData.length > 0 ? (
                <div
                  style={{
                    marginTop: "45vh",
                    zIndex: "50",
                  }}
                >
                  {" "}
                  <div>
                    <select
                      style={{
                        width: "30vw",
                        marginLeft: "5px",
                        background: "#011627",
                        color: "#41EAD4",
                        marginTop: "10vh",
                        border: "none",
                        height: "5vh",
                        paddingLeft: "2%",
                        textTransform: "uppercase",
                        fontSize: "1em",
                        display: this.props.error !== null ? "none" : "flex",
                      }}
                      onChange={(e) => this.changeSelect(e, "VILLE")}
                    >
                      {" "}
                      <option value="">Selectionner une ville</option>
                      {this.state.villeData.map((items, index) => {
                        return (
                          <option key={index} value={items.id.id}>
                            {items.name.text}
                          </option>
                        );
                      })}
                    </select>{" "}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>{" "}
        <div
          style={{ width: "100vw", justifyContent: "center", display: "flex" }}
        >
          {localStorage.getItem("token") ? (
            <div
              style={{
                width: "50vw",
                display: "flex",
                zIndex: "100",
                marginTop: "75vh",
                justifyContent: "center",
              }}
            >
              {this.state.resto ? (
                <div>
                  <button
                    style={{
                      width: "10vw",
                      height: "10vh",
                      color: "white",
                      background: "#011627",
                      border: "1px solid #41EAD4",
                      borderRadius: "10px",
                    }}
                    onClick={() => {
                      this.props.history.push({
                        pathname: "/restaurant/" + this.state.resto,
                      });
                    }}
                  >
                    Voir ce restaurant
                  </button>
                </div>
              ) : null}{" "}
              {this.state.state ? (
                <div>
                  <button
                    style={{
                      width: "10vw",
                      height: "10vh",
                      color: "white",
                      background: "#011627",
                      border: "1px solid #41EAD4",
                      borderRadius: "10px",
                    }}
                    onClick={() =>
                      this.props.history.push({
                        pathname: "/ville/" + this.state.state,
                      })
                    }
                  >
                    Voir les restaurants de cette ville
                  </button>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    loading: state.resto.loading,
    restaurant: state.resto.restaurantDataBis,
    ville: state.resto.villeDataBis,
    error: state.resto.error,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    changeHandler: (data) => dispatch(ACT.FETCHRESTAURANT(data)),
    changeHandlerBis: (data) => dispatch(ACT.FETCHVILLE(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
