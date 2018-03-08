var map = L.map('map', {
  scrollWheelZoom: false
}).setView([40.730808,-73.997442],10);

L.tileLayer('https://a.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
//
const lookupLandUse = function(landUseCode) {
  switch(landUseCode) {
  case '01':
    return {
      color: "#f4f455",
      description: 'One & Two Family'
    }
  case '02':
    return {
      color: "#f7d496",
      description: 'Multi - Family Walk- Up Buldings'
    }
  case '03':
    return {
      color: "#f7d496",
      description: 'Multi - Family Elevator'
    }
  case '04':
    return {
      color: "#f7cabf",
      description: 'Mixed Residential and Commercial'
    }
  case '05':
    return {
      color: "#ea6661",
      description: 'Commercial and Office'
    }
  case '06':
    return {
      color: "#d36ff4",
      description: 'Industrial and Manufacturing'
    }
  case '07':
    return {
      color: "#dac0e8",
      description: 'Transportation and Utility'
    }
  case '08':
    return {
      color: "#5CA2D1",
      description: 'Public Facilities and Institutions'
    }
  case '09':
    return {
      color: "#8ece7c",
      description: 'Open Space and Outdoor Recreation'
    }
  case '10':
    return {
      color: "#bab8b6",
      description: 'Parking Facilities'
    }
  case '11':
    return {
      color: "#5f5f60",
      description: 'Vacant Land'
    }
  default:
    return {
      color: "black",
      description: 'no land use'
    }
  }
}
//
// add geojson using jquery's $.getJSON()
$.getJSON('data/boundary.geojson', function(boundary) {
  L.geoJSON(boundary, {
    style: {
      dashArray: '3 10',
      color: 'white',
      fillOpacity: 0,
    }
  }).addTo(map);
})

$.getJSON('data/parcels.geojson', function(parcels) {
  L.geoJSON(parcels, {
    style: function(feature) {

        return {
          color: 'white',
          fillColor: lookupLandUse(feature.properties.LandUse).color,
          fillOpacity: 0.8,
          weight: 1,
        }
  },
  onEachFeature: function(feature, layer) {
        const description = lookupLandUse(feature.properties.LandUse).description;

        layer.bindPopup(`${feature.properties.Address}<br/>${description}`, {
          closeButton: false,
          minWidth: 60,
          offset: [0, -10]
        });
        layer.on('mouseover', function (e) {
          this.openPopup();

          e.target.setStyle({
            weight: 3,
            color: '#FFF',
          });

          if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
              layer.bringToFront();
          }
        });
        layer.on('mouseout', function (e) {
          this.closePopup();
          blocksGeojson.resetStyle(e.target);
        });
      }
    }).addTo(map);
})
