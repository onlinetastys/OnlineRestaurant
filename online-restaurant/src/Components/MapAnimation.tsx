import * as React from "react";
import Car from "./Car";

const MapAnimation = () => (
    <div className="map-container">
      <Car carMovementType="car-movement-1" carColor="fill-dark" />
      <Car carMovementType="car-movement-2" carColor="fill-dark" />
      <Car carMovementType="car-movement-3" carColor="fill-dark" />
    </div>
);

export default MapAnimation;
