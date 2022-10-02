import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dog from "./components/Dog";

function App() {
  return (
    <>
      <h1 className="text-center">Dog Breed list</h1>
      <div className="App  d-flex align-items-center justify-content-center">
        <Dog />
      </div>
    </>
  );
}

export default App;
