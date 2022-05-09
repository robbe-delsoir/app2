import "./App.css";
import GroupedListComponent from "./GroupList.tsx";
import VerticalStackGrowExample from "./Stack.tsx"
import CommandBarButtonAsExample from "./CommandBar"
import CommandBarButtonText from "./CommandBarButton"
import VerticalStackList from "./StackList.tsx"

export default function App() {
  return (
    <div className="App">
    <VerticalStackGrowExample/>
    <CommandBarButtonText/>
    <VerticalStackList/>
    <CommandBarButtonAsExample/>
    <GroupedListComponent />
    </div>
  );
}
