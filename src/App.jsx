import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="mx-20">
      <Navbar></Navbar>

      <h1 className="text-5xl font-extrabold text-center mt-10">
        Coffee Store
      </h1>
      <h2 className="text-3xl font-bold">Coffee Length : {coffees.length}</h2>
      <div className="grid grid-cols-2 gap-8 mt-12">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
