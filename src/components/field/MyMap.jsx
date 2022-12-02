import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

let MyMap = () => {
  const [zoom, setZoom] = React.useState(10);
  const mapState = React.useMemo(
    () => ({ center: [56.02081101239866, 92.8571793681262], zoom }),
    [zoom]
  );

  return (
    <YMaps
      query={{
        ns: "use-load-option",
        load: "package.full",
      }}
    >
      <div className="wrapper_map">
        <Map state={mapState}>
          <Placemark
            defaultGeometry={[56.02081101239866, 92.8571793681262]}
            properties={{
              balloonContentBody:
                "This is balloon loaded by the Yandex.Maps API module system",
            }}
          />
        </Map>
      </div>
    </YMaps>
  );
};

/* ---------------------------------------------------------------------------------- */

MyMap = React.memo(MyMap);

export default MyMap;
