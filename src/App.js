import "./App.css";

function App() {
  const Filmlist = [
    {
      name: "Captain Clegg",
      production: "Hammer",
    },

    {
      name: "Vamprie Hunter",
      production: "Hammer",
    },

    {
      name: "Dr. Jekyll and Sister Hyde",
      production: "Hammer",
    },
  ];

  return (
    <div className="films">
      <Films film={Filmlist[0]}></Films>
      <Films film={Filmlist[1]}></Films>
      <Films film={Filmlist[2]}></Films>
    </div>
  );
}

const Films = (props) => {
  console.log(props);
  return (
    <div className="Filmobject">
      <p>{props.film.name}</p>
      <p>{props.film.production}</p>
    </div>
  );
};

export default App;
