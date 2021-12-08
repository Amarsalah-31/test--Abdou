import React from "react";
import { Component } from "react";
import Map from "./map";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import bootstrap 
import "bootstrap/dist/css/bootstrap.min.css";

class app extends React.Component{
  constructor(){
    super();
    this.state = {
      activeTab:"add",
      items:[],
      subTotal:0,
    }
  }
}