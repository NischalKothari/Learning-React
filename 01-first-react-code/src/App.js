import Newcode from "./randomcode"; //component export kar liya 

function App() {
  return (
    <>
      <h1
        style={{
          color: "red",
          backgroundColor: "black",
          border: "8px solid blue",
          height: "33vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        First React Code
      </h1>
      <Newcode />
    </>
  );
}

export default App;
