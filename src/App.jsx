import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultsChart from "./components/ResultsChart/ResultsChart";
import axios from "axios";
import MarkCharts from "./components/MarkCharts/MarkCharts";

const pricingPromise = fetch('pricingData.json').then(res=>res.json());

const marksPromise = axios.get('marksData.json')

function App() {
  return (
    <>
     
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
            
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
         
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>
      <ResultsChart></ResultsChart>
      

        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <MarkCharts marksPromise={marksPromise}></MarkCharts>
        </Suspense>
      
      
   
    </>
  );
}

export default App;