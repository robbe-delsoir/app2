import "./App.css";
import VerticalStackGrowExample from "./components/Stack";
import CommandBarButtonAsExample from "./components/Commandbar";
import ListComp from "./components/DetailList";

export default function App() {
  return (
    <div className="App">
      <VerticalStackGrowExample text="UPrince Main window" />
      <CommandBarButtonAsExample />
      <ListComp />
    </div>
  );
}
