import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Spinner from "../src/Components/Spinner";
import GoogleMapRestaurant from "./GoogleMapRestaurantD";
import BestComment from "./BestComment";
import "./Slider.css";
import Commentaires from "./Commentaires";
import PhotoRestaurant from "./PhotoRestaurant";

class RestaurantInfo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      d: [],
      googlemap: false,
      data: [],
      Comment: false,
      show: false,
      showBis: false,
      commentaire: false,
    };
    this.handleGoogleMap = this.handleGoogleMap.bind(this);
  }
  handleSet = () => {
    setTimeout(() => {
      this.setState((prevState) => ({
        show: true,
      }));
    }, 5000);
    setTimeout(() => {
      this.setState((prevState) => ({
        show: true,
      }));
    }, 7000);
  };
  componentDidMount = () => {
    this.handleSet();
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.dataInfo !== prevProps.dataInfo) {
      let r = [];
      r.push(this.props.dataInfo);
      this.setState((prevState) => ({
        d: this.state.d.concat(r),
      }));
    }
  };

  handleGoogleMap = (data) => {
    let e = [];
    e.push(data);
    this.setState((prevState) => ({
      googlemap: !prevState.googlemap,
      data: this.state.data.concat(data),
    }));
  };

  render() {
    setTimeout(() => {
      this.setState((prevState) => ({
        show: true,
      }));
    }, 20000);
    if (this.state.commentaire) {
      this.setState((prevState) => ({
        show: false,
      }));
    }
    let info = (
      <Fragment>
        {" "}
        {this.state.googlemap && (
          <button
            style={{
              background: "#011627",
              width: "150px",
              height: "50px",
              color: "#41EAD4",
              border: "1px solid #41EAD4",
              marginLeft: "70vw",
              marginTop: "10px",
              zIndex: "10000",
              position: "fixed",
            }}
            onClick={() =>
              this.setState((prevState) => ({
                googlemap: false,
              }))
            }
          >
            Fermer GoogleMap
          </button>
        )}
        {this.state.googlemap ? (
          <div
            style={{
              position: "static",
              position: "-webkit-sticky",
              position: "fixed",
              display: "flex",
              top: "0px",
              width: "100vw",
              justifyContent: "flex-end",
            }}
          >
            <GoogleMapRestaurant data={this.state.data} />
          </div>
        ) : null}
        {this.state.d.map((items, index) => {
          return (
            <Fragment>
              <div key={index} style={{ color: "#011627", width: "100vw" }}>
                <div
                  style={{ width: this.state.googlemap ? "100vw" : "100vw" }}
                >
                  <div
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      width: this.state.googlemap ? "50vw" : "100vw",
                    }}
                  >
                    <h1
                      style={{
                        textAlign: "center",
                        paddingTop: "10px",
                        marginTop: "10px",
                        zIndex: "1000",
                      }}
                      onClick={() =>
                        this.setState((prevState) => ({
                          googlemap: false,
                        }))
                      }
                    >
                      {items.data.name}
                    </h1>{" "}
                  </div>{" "}
                  {this.state.commentaire && (
                    <Fragment>
                      <Commentaires
                        ChangeVis={() =>
                          this.setState((prevState) => ({
                            commentaire: false,
                          }))
                        }
                      />
                    </Fragment>
                  )}
                  <div
                    style={{
                      width: "100vw",
                      display: "flex",
                      justifyContent: "center",
                      borderRadius: "10px",
                    }}
                    onClick={() =>
                      this.setState((prevState) => ({
                        show: false,
                      }))
                    }
                  >
                    <BestComment show={this.state.show} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: this.state.googlemap ? "50vw" : "100vw",
                    }}
                    onClick={() =>
                      this.setState((prevState) => ({
                        googlemap: false,
                      }))
                    }
                  >
                    <div
                      style={{
                        width: this.state.googlemap ? "47vw" : "80vw",
                        textAlign: "center",
                        display: "flex",
                        fontSize: "1em",
                        color: " #41EAD4",
                        background: "#011627",
                        borderRadius: "10px",
                        justifyContent: "center",
                        marginTop: "10px",
                        zIndex: "1000",
                      }}
                      onClick={() =>
                        this.setState((prevState) => ({
                          googlemap: false,
                        }))
                      }
                    >
                      <div style={{ margin: "0px", padding: "0px" }}>
                        <p style={{}}> {items.data.address}</p>
                      </div>
                      <div style={{ marginLeft: "10px", padding: "0px" }}>
                        <p> {items.data.city}</p>
                      </div>
                      <div style={{ marginLeft: "10px", padding: "0px" }}>
                        <p>{items.data.zipcode}</p>
                      </div>
                      <div style={{ marginLeft: "10px", padding: "0px" }}>
                        <p>{items.data.country}</p>
                      </div>
                      <div style={{ marginLeft: "10px", padding: "0px" }}>
                        <p>Cuisine : {items.data.speciality}</p>
                      </div>
                      <div style={{ marginLeft: "10px", padding: "0px" }}>
                        <p>
                          Parking : {items.data.parking ? "Oui" : "Non"}
                          <span style={{ marginLeft: "10px", padding: "0px" }}>
                            {items.data.parking ? items.data.parking : null}{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: this.state.googlemap ? "50vw" : "100vw",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "5px",
                    }}
                  >
                    <h3
                      style={{
                        marginLeft: "20px",
                        border: "1px solid  #41EAD4",
                        padding: "8px",
                        borderRadius: "5px",
                        zIndex: "1000",
                      }}
                      onClick={() => this.handleGoogleMap(items.data)}
                    >
                      Voir sur GoogleMap
                    </h3>
                    <h3
                      style={{
                        padding: "8px",
                        marginLeft: "20px",
                        border: "1px solid  #41EAD4",
                        borderRadius: "5px",
                        zIndex: "1000",
                      }}
                      onClick={() =>
                        this.setState((prevState) => ({
                          googlemap: false,
                        }))
                      }
                    >
                      Tél : {items.data.phone}
                    </h3>
                    <h3
                      style={{
                        padding: "8px",
                        marginLeft: "20px",
                        color: "white",
                        border: "1px solid  #41EAD4",
                        borderRadius: "5px",
                        background: "#011627",
                        zIndex: "1000",
                      }}
                      onClick={() =>
                        this.setState((prevState) => ({
                          commentaire: !prevState.commentaire,
                        }))
                      }
                    >
                      Voir les commentaires
                    </h3>
                  </div>
                  <div
                    style={{
                      width: this.state.googlemap ? "50vw" : "100vw",
                      justifyContent: "center",
                      flexDirection: "row",
                      display: "flex",
                      fontSize: this.state.googlemap ? "0.7em" : "0.9em",
                      zIndex: "1000",
                    }}
                    onClick={() =>
                      this.setState((prevState) => ({
                        googlemap: false,
                      }))
                    }
                  >
                    <div
                      style={{ zIndex: "1000" }}
                      onClick={() =>
                        this.setState((prevState) => ({
                          googlemap: false,
                        }))
                      }
                    >
                      <p>
                        Prix bouteille de champagne :{" "}
                        <span style={{ color: " #41EAD4" }}>
                          {items.data.price_bottle_of_champagne
                            ? items.data.price_bottle_of_champagne + " EUR"
                            : "inconnue"}{" "}
                        </span>
                      </p>
                    </div>
                    <div
                      style={{ marginLeft: "10px", zIndex: "1000" }}
                      onClick={() =>
                        this.setState((prevState) => ({
                          googlemap: false,
                        }))
                      }
                    >
                      <p>
                        Prix bouteille eau minéral :{" "}
                        <span style={{ color: " #41EAD4" }}>
                          {items.data.price_bottle_of_mineral_water
                            ? items.data.price_bottle_of_mineral_water + " EUR"
                            : "inconnue"}
                        </span>
                      </p>
                    </div>
                    <div
                      style={{ marginLeft: "10px", zIndex: "1000" }}
                      onClick={() =>
                        this.setState((prevState) => ({
                          googlemap: false,
                        }))
                      }
                    >
                      <p>
                        Prix bouteille de vin (prix bas) :{" "}
                        <span style={{ color: " #41EAD4" }}>
                          {items.data.price_bottle_of_wine_min
                            ? items.data.price_bottle_of_wine_min + " EUR"
                            : "inconnue"}{" "}
                        </span>
                      </p>
                    </div>
                    <div
                      style={{ marginLeft: "10px", zIndex: "1000" }}
                      onClick={() =>
                        this.setState((prevState) => ({
                          googlemap: false,
                        }))
                      }
                    >
                      <p>
                        Prix bouteille de vin (prix haut) :{" "}
                        {items.data.price_bottle_of_wine_max
                          ? items.data.price_bottle_of_wine_max + " EUR"
                          : "inconnue"}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      width: this.state.googlemap ? "50vw" : "100vw",
                      justifyContent: "center",
                      flexDirection: "row",
                      display: "flex",
                      fontSize: this.state.googlemap ? "0.7em" : "0.9em",
                      zIndex: "1000",
                    }}
                    onClick={() =>
                      this.setState((prevState) => ({
                        googlemap: false,
                      }))
                    }
                  >
                    <div>
                      <p>
                        Prix verre champagne (prix haut) :{" "}
                        <span style={{ color: " #41EAD4" }}>
                          {items.data.price_glass_of_champagne
                            ? items.data.price_glass_of_champagne + " EUR"
                            : "inconnue"}{" "}
                        </span>
                      </p>
                    </div>
                    <div
                      style={{ marginLeft: "10px", zIndex: "1000" }}
                      onClick={() =>
                        this.setState((prevState) => ({
                          googlemap: false,
                        }))
                      }
                    >
                      <p>
                        Prix verre de vin (prix bas) :{" "}
                        <span style={{ color: " #41EAD4" }}>
                          {items.data.price_glass_of_wine_min
                            ? items.data.price_glass_of_wine_min + " EUR"
                            : "inconnue"}{" "}
                        </span>
                      </p>
                    </div>
                    <div
                      style={{ marginLeft: "10px", zIndex: "1000" }}
                      onClick={() =>
                        this.setState((prevState) => ({
                          googlemap: false,
                        }))
                      }
                    >
                      <p>
                        Prix verre de vin (prix haut) :{" "}
                        <span style={{ color: " #41EAD4" }}>
                          {items.data.price_glass_of_wine_max
                            ? items.data.price_glass_of_wine_max + " EUR"
                            : " inconnue"}
                        </span>
                      </p>
                    </div>
                    <div
                      style={{ marginLeft: "10px", zIndex: "1000" }}
                      onClick={() =>
                        this.setState((prevState) => ({
                          googlemap: false,
                        }))
                      }
                    >
                      <p>
                        Prix du café :{" "}
                        <span style={{ color: " #41EAD4" }}>
                          {items.data.price_of_coffee
                            ? items.data.price_of_coffee + " EUR"
                            : "inconnue"}{" "}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      width: this.state.googlemap ? "50vw" : "100vw",
                      justifyContent: "space-evenly",
                      flexDirection: "row",
                      display: "flex",
                      fontSize: this.state.googlemap ? "0.7em" : "0.9em",
                      zIndex: "1000",
                    }}
                    onClick={() =>
                      this.setState((prevState) => ({
                        googlemap: false,
                      }))
                    }
                  >
                    <div>
                      <p>
                        Prix menu (prix bas) :{" "}
                        <span style={{ color: " #41EAD4" }}>
                          {items.data.min_price
                            ? items.data.min_price + " EUR"
                            : "inconnue"}{" "}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      width: this.state.googlemap ? "50vw" : "100vw",
                      display: "flex",
                      fontSize: "1.5em",
                      justifyContent: "center",
                      zIndex: "1000",
                    }}
                    onClick={() =>
                      this.setState((prevState) => ({
                        googlemap: false,
                      }))
                    }
                  >
                    <img
                      style={{ borderRadius: "10px" }}
                      alt="imagebis"
                      className="imagebis"
                      src={
                        items.data.pics_main
                          ? items.data.pics_main["1350x759"]
                          : null
                      }
                      width={this.state.googlemap ? "50%" : "50%"}
                      height={this.state.googlemap ? "auto" : "100%"}
                    />
                  </div>
                  <div
                    style={{
                      width: this.state.googlemap ? "50vw" : "100vw",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "80vw",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        fontSize: this.state.googlemap ? "0.8em" : "0.9em",
                      }}
                    >
                      <h5 style={{ marginTop: "3vh" }}>
                        {items.data.insider_description
                          ? items.data.insider_description
                          : null}
                      </h5>
                    </div>
                  </div>
                  <div
                    style={{
                      width: this.state.googlemap ? "50vw" : "100vw",
                      display: "flex",
                      justifyContent: "center",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: this.state.googlemap ? "50vw" : "100vw",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "oblique",
                        fontSize: this.state.googlemap ? "0.8em" : "0.9em",
                        borderRadius: "10px",
                      }}
                    >
                      <h5
                        style={{
                          fontStyle: "oblique",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        {items.data.insider_tips
                          ? items.data.insider_tips
                          : null}
                      </h5>{" "}
                    </div>
                  </div>
                  {items.data.hour_open ? (
                    <div
                      style={{
                        width: this.state.googlemap ? "50vw" : "100vw",
                        justifyContent: "center",
                        display: "flex",
                        borderRadius: "10px",
                      }}
                    >
                      <div
                        style={{
                          width: this.state.googlemap ? "45vw" : "70vw",
                          display: "flex",
                          justifyContent: "center",
                          background: "#011627",
                          color: "white",
                          marginTop: "10px",
                          fontSize: this.state.googlemap ? "0.8em" : "1em",
                          borderRadius: "10px",
                        }}
                      >
                        {" "}
                        <h3>{items.data.hour_open}</h3>
                      </div>
                    </div>
                  ) : null}
                  <div
                    style={{
                      width: this.state.googlemap ? "50vw" : "100vw",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: this.state.googlemap ? "50vw" : "70vw",
                        display: "flex",
                        justifyContent: "center",
                        color: "#41EAD4",
                        background: "#011627",
                        borderRadius: "10px",
                        marginTop: "5px",
                        fontSize: this.state.googlemap ? "0.8em" : "1em",
                      }}
                    >
                      {" "}
                      <h3>
                        Note moyenne : {items.data.avg_rate} / 10{" "}
                        {items.data.rate_distinction}
                      </h3>
                    </div>
                  </div>
                  <div
                    style={{
                      width: this.state.googlemap ? "50vw" : "100vw",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <h5
                      style={{
                        paddingTop: "2px",
                      }}
                    >
                      Prix moyen :{" "}
                      <span
                        style={{
                          background: "#011627",
                          color: "#41EAD4",
                          padding: "5px",
                        }}
                      >
                        {" "}
                        {items.data.card_price} EUR
                      </span>
                    </h5>{" "}
                  </div>
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
                      width: this.state.googlemap ? "50vw" : "80vw",
                      display: "flex",
                      justifyContent: "center",
                      color: "white",
                      background: "#011627",
                      borderRadius: "10px",
                    }}
                  >
                    <h2>Menus</h2>
                  </div>
                </div>
                <div
                  style={{
                    width: this.state.googlemap ? "50vw" : "100vw",
                    display: "flex",
                    justifyContent: "space-evenly",
                    fontSize: "0.8em",
                    marginTop: "10px",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid #41EAD4",
                      flexBasis: "30%",
                      borderRadius: "10px",
                      height: "30vh",
                      textAlign: "center",
                    }}
                  >
                    <h3
                      style={{
                        textAlign: "center",
                        fontSize: "2em",
                        marginTop: "50px",
                      }}
                    >
                      Entrées
                    </h3>
                    <p style={{ marginTop: "50px" }}>
                      {items.data.card_start_1
                        ? items.data.card_start_1
                        : "Aucune données"}
                    </p>
                    <p>
                      {items.data.card_start_2
                        ? items.data.card_start_2
                        : "Aucunes données"}
                    </p>
                    <p>
                      {items.data.card_start_3
                        ? items.data.card_start_3
                        : "Aucunes données"}
                    </p>
                  </div>
                  <div
                    style={{
                      border: "1px solid #41EAD4",
                      flexBasis: "30%",
                      borderRadius: "10px",
                      textAlign: "center",
                      height: "30vh",
                    }}
                  >
                    <h3
                      style={{
                        textAlign: "center",
                        fontSize: "2em",
                        marginTop: "50px",
                      }}
                    >
                      Plats
                    </h3>
                    <p style={{ marginTop: "50px" }}>
                      {items.data.card_main_1
                        ? items.data.card_main_1
                        : "Aucunes données"}
                    </p>
                    <p>
                      {items.data.card_main_2
                        ? items.data.card_main_2
                        : "Aucunes données"}
                    </p>
                  </div>
                  <div
                    style={{
                      border: "1px solid #41EAD4",
                      flexBasis: "30%",
                      borderRadius: "10px",
                      textAlign: "center",
                      height: "30vh",
                    }}
                  >
                    <h3
                      style={{
                        textAlign: "center",
                        fontSize: "2em",
                        marginTop: "50px",
                      }}
                    >
                      Desserts
                    </h3>
                    <p style={{ marginTop: "50px" }}>
                      {items.data.card_dessert_1
                        ? items.data.card_dessert_1
                        : "Aucunes données"}
                    </p>
                    <p>
                      {items.data.card_dessert_2
                        ? items.data.card_dessert_2
                        : "Aucunes données"}
                    </p>
                    <p>
                      {items.data.card_dessert_3
                        ? items.data.card_dessert_3
                        : "Aucunes données"}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: this.state.googlemap ? "50vw" : "100vw",
                  }}
                >
                  <div>
                    <h5
                      style={{
                        marginTop: "2.5vh",
                        padding: "10px",
                        background: "#011627",
                        color: "#41EAD4",
                        textAlign: "center",
                        borderRadius: "4px",
                      }}
                    >
                      {items.data.chef_name
                        ? "Chef : " + items.data.chef_name
                        : "Chef : aucune(s) donnée(s)"}
                    </h5>
                    {items.data.highlighted_tag ? (
                      <h5
                        style={{
                          marginTop: "0vh",
                          padding: "10px",
                          background: "#011627",
                          color: "#41EAD4",
                          textAlign: "center",
                          borderRadius: "4px",
                        }}
                      >
                        Distinction :{" "}
                        {items.data.highlighted_tag.text
                          ? items.data.highlighted_tag[1].text
                          : "pas de données"}
                      </h5>
                    ) : null}

                    {items.data.highlighted_tag ? (
                      <h5
                        style={{
                          marginTop: "0vh",
                          padding: "10px",
                          background: "#011627",
                          color: "#41EAD4",
                          textAlign: "center",
                          borderRadius: "4px",
                        }}
                      >
                        Distinction :{" "}
                        {items.data.highlighted_tag.slug
                          ? items.data.highlighted_tag[1].slug
                          : "pas de données"}
                      </h5>
                    ) : null}
                  </div>
                </div>
                <div
                  style={{
                    width: this.state.googlemap ? "50vw" : "100vw",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {" "}
                  <div style={{ width: "50vw", paddingBottom: "40px" }}>
                    <AwesomeSlider className="aws-btn">
                      {items.data.pics_diaporama.map((items, index) => {
                        return (
                          <img
                            alt="slider"
                            data-src={items["664x374"]}
                            className="sliderimg"
                            style={{ borderRadius: "10px" }}
                          />
                        );
                      })}
                    </AwesomeSlider>
                  </div>
                </div>{" "}
                {this.props.loading ? (
                  <Spinner />
                ) : (
                  <div>
                    <PhotoRestaurant />
                  </div>
                )}
              </div>
            </Fragment>
          );
        })}{" "}
      </Fragment>
    );
    return (
      <Fragment>
        {this.props.loading ? <Spinner /> : <div>{info}</div>}
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    dataInfo: state.RestoBis.RestaurantInfo,
    loading: state.RestoBis.loading,
  };
};

export default connect(mapStateToProps, null)(RestaurantInfo);
