// //Firstly install D3.JS library in react using npm
// //That is "npm install d3"
// import { select } from 'd3-selection'; // Here we are importing select for selecting DOM elements
// import { geoPath, geoMercator } from 'd3-geo';
// //The above two are the D3 modules which are necessary for the React Component
// //The geopath and geoMercator are downloaded for projecting and drawing geometric shapes

// import { feature } from 'topojson-client';
// //Installation of topojson-client using npm
// //Here feature is for working with topo-json
// //TopoJson-client module provides tools for manipulating Topojson, such as to merge shapes or quantize coordinates and for converting back to GeoJSON for rendering with standard tools such as d3.geoPath. 
// import React,{useState,useEffect} from 'react'
// import axios from "axios"
// import data from "./test.json"
// //State variable for holding map data

// const Mapping = () => {
//     const [mapData, setMapData] = useState(null);
//   //   const xhr= new XMLHttpRequest();
//   //   xhr.open("GET","example_2.json");
//   //   xhr.onreadystatechange= function(){
//   //   if(xhr.readyState===4 && xhr.status=== 200){
//   //     const data= JSON.parse(xhr.responseText);
//   //     console.log(data)
//   //   }
//   // };
//   // xhr.send()



// // console.log(data)
//     // useEffect(() => {
//     //   console.log("Hii")
//     //   axios.get("./example_2.json")
//     //   .then(response=>{
//     //     console.log("I am the request",response)
//     //     console.log(response.data);
//     //     setMapData(response.data)
//     //   })
//       // console.log("1",mapData)
//       // async function loadMapData() {
//         // const [jsonData, setJsonData] = useState(data);
//         // try {
//         //   console.log("2",mapData)
//         //   const response = await fetch('/output.json');
//         //   console.log("10",mapData)
//         //   console.log("bsghqj",response)
//         //   // console.log("gdhj",response.text())
//         //   const data = await response.json();
//         //   console.log("I am the data ");
//         //   setMapData(data);
//         //   console.log(data);
//         //   console.log("3",mapData)
//         // } catch (error) {
//         //   console.log("4",mapData)
//         //   // console.error(error);
//         // }
//       // loadMapData(); // Call the function here
//     //   const mapData = JSON.parse(JSON.stringify(data));
//     // setMapData(mapData);
//     // }, []);

//     useEffect(() => {
//       // const[mapData,setMapData]= useState(null); //here react "useState " is called inside callback function, but reacthook cannot be called inside a callback.
//       // // React Hooks must be called in a React function component or a custom React Hook function  
//       async function loadMapData(){
//         try{
//           console.log("1 hello",mapData);
//           const response= await fetch("test.json");
//           console.log("2 hello",response);
//           // console.log(response);
//           const data1= await response.json();
//           console.log("3 hello",data1);
//           setMapData(data1);
//         }catch(error){
//           console.log("4 hello");
//           console.error(error);
//         }
//       }
//       loadMapData();
//       // setMapData(data1);
//     }, [])
    
    


//       // useEffect(() => {
//       //   async function loadMapData() {
//       //     console.log(mapData)
//       //     const response = await fetch('/src/output.json');
//       //     const data = await response.json();
//       //     setMapData(data);
//       //     console.log(mapData)
//       //   }
//       //   loadMapData();
//       // }, []);

//       useEffect(() => {
//         if (!mapData) return;
      
//         const svg = select('#map')
//           .attr('width', 800)
//           .attr('height', 600);
      
//         const projection = geoMercator()
//           .fitSize([800, 600], mapData);
      
//         const path = geoPath().projection(projection);
      
//         svg.selectAll('path')
//           .data(feature(mapData, mapData.objects.states).features)
//           .enter().append('path')
//           .attr('d', path)
//           .style('fill', d => {
//             // Use the stateMap to color the states
//             const state = d.properties.name;
//             const value = stateMap.get(state) || 0;
//             return value > 10000 ? 'darkblue' : 'lightblue';
//           });
//       }, [mapData]);
//       const stateMap= new Map();
//       stateMap.set("Maharashtra",6000);
//       stateMap.set("Bihar",37784)
            
//   return (
//     // <div>
//     // <svg id="map"></svg>
//     // </div>
//     // console.log("I am the mapData",mapData)
//     console.log(data)
//   )
// }

// export default Mapping


// import { select } from 'd3-selection';
// import { geoPath, geoMercator } from 'd3-geo';
// import { feature } from 'topojson-client';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import data from './out_put.json';
// import data from './last_topojson.json'
// import "./map.css"

// const Mapping = (props) => {
//   // const [mapData, setMapData] = useState(null);

//   // useEffect(() => {
//   //   async function loadMapData() {
//   //     try {
//   //       const response = await axios.get('./last_try.json');
//   //       console.log("I am the response",response);
//   //       const data = response.data;
//   //       console.log("I am the data",data);
//   //       setMapData(data);
//   //     } catch (error) {
//   //       console.error(error);
//   //     }
//   //   }    
//   //   loadMapData();
//   // }, []);
//   const map_data = JSON.parse(JSON.stringify(data));
//   const featureCollection = feature(map_data, map_data.objects.last_try_sale_plot);
//   console.log(featureCollection)
//   useEffect(() => {
//     if (!map_data) return;
//     console.log("I am the map_data",map_data);
//     console.log(typeof(map_data));
//     const svg = select('#map')  // here select method used to select the elements in DOM and perform actions on them
//       .attr('width', 800) //attr method used to add attributes to the selected elements. This is used to set width
//       .attr('height', 600); //attr method used to add attributes to the selected elements. This is used to set height
// // It is optional to give map css it doesn't have anything with rendering the map


//     // const projection = geoMercator().fitSize([800, 600], data);
//     // // console.log(d3.geoMercator().code);
//     // console.log("I am the projection",projection)
    
//     // const projection = geoMercator().fitSize([800,600]).feature(data, data.objects.last_politicalmap);
//     const projection = geoMercator().fitSize([800,600],featureCollection);

//     // console.log("I am the projection",projection)
//     console.log("I am the projection", projection([45, 60]))
// //console.log(projection) will return the definition of the projection function. 
// //It will looks like     
// // ƒ projection(point) {
// //   point = transform.apply(point);
// //   return [point[0] * k + b[0], b[1] - point[1] * k];
// // }
    
//     // const path = geoPath(projection);
//     const path = geoPath().projection(projection);
//     // const path = geoPath().projection(projection);
//     console.log("I am the path",path);
    
//     // const features = feature(data, data.objects.last_politicalmap).features;
    


//     // const features = feature(data, data.objects.last_politicalmap).features.map(f => ({
//     //   type: f.type,
//     //   geometry: topojson.merge(data, data.objects.last_politicalmap.geometries.filter(g => g.id === f.id)),
//     //   properties: f.properties
//     // }));
//     // const features = feature(data, data.objects.last_politicalmap).features.map(f => ({
//     //   type: f.type,
//     //   geometry: mergeGeometries(data.objects.last_politicalmap.geometries.filter(g => g.id === f.id)),
//     //   properties: f.properties
//     // }));
    
//     // function mergeGeometries(geometries) {
//     //   const mergedGeometry = {
//     //     type: geometries[0].type,
//     //     coordinates: geometries.reduce((acc, cur) => {
//     //       const coordinates = cur.type === 'MultiPolygon' ? [cur.coordinates] : cur.coordinates;
//     //       return acc.concat(coordinates);
//     //     }, [])
//     //   };
//     //   return mergedGeometry;
//     // }
//     // const featureCollection = {
//     //   type: 'FeatureCollection',
//     //   features: data.objects.last_try_sale_plot.geometries.map(geometry => ({
//     //     type: 'Feature',
//     //     geometry,
//     //     properties: geometry.properties,
//     //   })),
//     // };



//     svg.selectAll('path')
//       .map_data(featureCollection)
//       .enter()
//       .append('path')
//       .attr('d', path)
//       console.log("I am crossing this ")
//       .style('fill', (d) => {
//         console.log("I am the datum d",d);
//         console.log("I am before the state")
//         const state = d.properties.name;
//         console.log("I am the state",state);
//         // console.log("I am the before value");
//         const value = props.money_map.get(state.toUpperCase()) || 0;
//         console.log("I am the value",value);
//         return value > 10000 ? 'darkblue' : 'lightblue';
//       });
//   }, [map_data]);

//   const stateMap = new Map();
  

//   return( 
    
//   <div>
//   <svg id="map">

//   </svg>
//   </div>
//   // console.log(data)
//   )
// };

// export default Mapping;


// .data(feature(mapData, mapData.objects.states).features)
 // .data(feature(data, data.objects.last_try_sale_plot.geometries).features)
      // ?.data(feature(data, Object.values(data.objects)[0]).features)
      // ?.data(feature(data, Object.values(data.objects).find(obj => obj.type === 'GeometryCollection' || obj.type === 'Geometry')).features)
      // ?.data(features)
      // console.log("I am crossing feature")
// console.log("I am crossing path")
  
      // .data(feature(data, data.features))
      // .data(feature(data, Object.values(data.objects.last_try_sale_plot).find(obj => obj.type === 'GeometryCollection' || obj.type === 'Geometry')).features)
      // topojson.feature(jsonObject, jsonObject.objects.last_try_sale_plot)
      
      
      // `featureCollection` is now a GeoJSON FeatureCollection containing all the geometries in the original JSON object.

//       import { select } from 'd3-selection';
//       import { geoPath, geoMercator } from 'd3-geo';
//       import { feature } from 'topojson-client';
//       import React, { useState, useEffect } from 'react';
//       import axios from 'axios';
//       import data from './last_topojson.json'
//       import "./map.css"
      
//       const Mapping = (props) => {
        
// // const max_money = Math.max(...Object.values(props.money_map));
// // console.log(max_money); 
// let max_money= 0;
// for(let [key,value] of props.money_map){
//   if(value> max_money){
//     max_money= value;
//   }
// }
// console.log(max_money);

//         const map_data = JSON.parse(JSON.stringify(data));
//         // const map_data= data;
//         const featureCollection = feature(map_data, map_data.objects.last_try_sale_plot);
      
//         useEffect(() => {
//           if (!map_data) return;
      
//           const svg = select('#map')
//             .attr('width', 800)
//             .attr('height', 600);
      
//           const projection = geoMercator().fitSize([800,600],featureCollection);
//           const path = geoPath().projection(projection);
      
//           svg.selectAll('path')
//             .data(featureCollection.features)
//             .enter()
//             .append('path')
//             .attr('d', path)
//             .style('fill', (d) => {
//               const state = d.properties.STATE;
//               const value = props.money_map.get(state.toUpperCase()) || 0;
//               // return value > 10000 ? 'darkblue' : value === 0 ? 'white' : `rgba(0, 0, 255, ${value / 10})`;
//               // return value > 0 ? `rgba(0, 0, 255, ${value / 10000})` : 'white';
//               return value > 0 ? `rgba(0, 0, 255, ${value / (max_money)})` : 'white';
//               // return value>0 ? `rgba(0,0,255,p)` : 'white';
//             })
//             .style('stroke', 'black')
//             .style('stroke-width', '1px');
//         }, [map_data]);
      
//         return( 
//           <div>
//             <svg id="map"></svg>
//           </div>
//         );
//       };
      
//       export default Mapping;
import { select } from 'd3-selection';
import { geoPath, geoMercator } from 'd3-geo';
import { feature } from 'topojson-client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from './last_topojson.json';
import "./map.css";

const Mapping = (props) => {
  let max_money = 0;
  for(let [key,value] of props.money_map){
    if(value > max_money){
      max_money = value;
    }
  }

  const [popup, setPopup] = useState({ show: false, x: 0, y: 0, state: '', money: 0 });

  const map_data = JSON.parse(JSON.stringify(data));
  const featureCollection = feature(map_data, map_data.objects.last_try_sale_plot);

  useEffect(() => {
    if (!map_data) return;

    const svg = select('#map')
      .attr('width', 800)
      .attr('height', 600);

    const projection = geoMercator().fitSize([800,600],featureCollection);
    const path = geoPath().projection(projection);

    svg.selectAll('path')
      .data(featureCollection.features)
      .enter()
      .append('path')
      .attr('d', path)
      .style('fill', (d) => {
        const state = d.properties.STATE;
        const value = props.money_map.get(state.toUpperCase()) || 0;
        return value > 0 ? `rgba(0, 0, 255, ${value / max_money})` : 'white';
      })
      .style('stroke', 'black')
      .style('stroke-width', '1px')
      .on('click', (event, d) => {
        const state = d.properties.STATE;
        const money = props.money_map.get(state.toUpperCase()) || 0;
        const [x, y] = path.centroid(d);
        const popupWidth = 100;
        const popupHeight = 50;
        setPopup({ show: true, x: x - (popupWidth / 2), y: y - (popupHeight / 2), state: state, money: money });
      });
  }, [map_data]);

  return( 
    <div>
      <svg id="map"></svg>
      {popup.show && (
        
        <div className="popup" style={{ left: popup.x, top: popup.y }}>
          <div>{popup.state}</div>
          <div>{popup.money}</div>
        </div>
        
      )}
    </div>
  );
}

export default Mapping;
