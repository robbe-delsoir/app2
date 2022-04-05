import "./App.css";
import GroupedListComponent from "./GroupList.tsx";
import VerticalStackGrowExample from "./Stack.tsx"
import CommandBarButtonAsExample from "./CommandBar"


export default function App() {
  return (
    <div className="App">
    <VerticalStackGrowExample/>
    <CommandBarButtonAsExample/>
    <GroupedListComponent />
    </div>
  );
}
