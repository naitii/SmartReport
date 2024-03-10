import "./App.css";
import { data } from "./data";
import CoverPage from "./coverpage/CoverPage";
import LabReport from "./labReport/LabReport";

function App() {
  return (
    <div className="App">
      {/* <LabReport data={data} /> */}
      <CoverPage data={data}/>
    </div>
  );
}

export default App;
