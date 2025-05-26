import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";

const pricingPromise = fetch('pricingData.json').then(res=>res.json());

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}

      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>

        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>
    </>
  );
}

export default App;