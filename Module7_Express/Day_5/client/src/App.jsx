import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [genere, setGenere] = useState(""); // Note: Usually spelled "genre"

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:3000/movies");
      setData(res.data);
    }
    fetchData();
  }, []);

  const addMovie = (e) => {
    e.preventDefault(); 

    axios
      .post("http://localhost:3000/movies", {
        title: title,
        genere: genere,
        watched: false,
      })
      .then((res) => {
        setData([...data, res.data]);
        setTitle("");
        setGenere("");
      });
  };

  return (
    <div> {/* Main wrapper div */}
      <form onSubmit={addMovie}>
        <input
          type="text"
          placeholder="Enter the title of the movie"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter the genere of the movie"
          value={genere}
          onChange={(e) => setGenere(e.target.value)}
        />
        <button type="submit">Add Movie</button>
      </form>

      {data.length > 0 && data.map((movie) => (
        <div key={movie.id}> 
          <input type="checkbox" checked={movie.watched} readOnly />
          <span style={{
              textDecoration: movie.watched ? "line-through" : "none",
              marginRight: "20px"
            }}
          >
            {movie.title} ({movie.genere})
          </span>
        </div>
      ))} 
    </div> 
  );
};

export default App;