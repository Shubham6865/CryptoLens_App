import React from 'react'
import {Line} from "react-chartjs-2" 
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";


ChartJS.register(CategoryScale,PointElement,LinearScale,LineElement,Title,Tooltip,Legend)

const Chart = ({arr=[],currency,days}) => {

const prices =[];
const date =[]

for (let i = 0; i < arr.length; i++) {
    if (days==="24h") {
        
        date.push(new Date(arr[i][0]).toLocaleTimeString());
    }
    else

        date.push(new Date(arr[i][0]).toLocaleDateString());
        prices.push(arr[i][1]);
    
    
}

const data={
    
        labels:date,
        datasets:[{
            label:`Price in ${currency}`,
            data:prices,borderColor:"black",
            backgroundColor:"rgba{0,0,0,0.5}"
        }]
       
};
  return (
   <Line
   options={
    {
        responsive:true,
    }
   }
   data={data}
   />
  )
}

export default Chart
