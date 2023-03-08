import React from 'react'
import Mapping from './map';
// import Map from "./map"

const Plott = (props) => {
    
    let Data= [];
    props.excelData.map((iterator)=>{
        const {Invoice_Amount}= iterator;
        const {Ship_To_State}= iterator;
        var set= [Invoice_Amount,Ship_To_State];
        Data= [...Data,set];
    })
    console.log("I am the New array of objects ",Data);
//     let money_map= {};
//     for(const[Invoice_Amount,Ship_To_State] of Data){
//         if(money_map[Ship_To_State]){
//             money_map[Ship_To_State]+= Invoice_Amount;
//         }
//         else{
//             money_map[Ship_To_State]= Invoice_Amount;
//         }
//     }
// console.log("I am money_map",money_map);
    // console.log("I am the Data",Data);
    // console.log(money_map);
    // console.log("I am the type of money_map",typeof(money_map));
    
    let money_map= new Map();
    for(const[Invoice_Amount,Ship_To_State] of Data){
        let curr_sum= money_map.get(Ship_To_State) || 0;
        money_map.set(Ship_To_State,curr_sum+ Invoice_Amount);
    }



    console.log("I am the money_map",money_map);
    console.log("I am the type of money_map",typeof(money_map));
    
    
    

    return (
        <>
        {console.log("Now I am entering into the Map part")}
        <Mapping money_map= {money_map}/>
        </>
  )
}

export default Plott
