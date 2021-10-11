import "./App.css";
import Nav from "./components/Nav";
import Container from "./components/Container";
import { useEffect, useState, useRef, useCallback } from "react";
import moment from "moment";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  // Getting the required date
  const date = moment().subtract(30, "days").format("YYYY-MM-DD");

  // Infinite list setup
  const observer = useRef();
  // Check when last item in view
  const lastRepoElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );
  // Call API
  useEffect(() => {
    setLoading(true);
    const getRepos = async (pageNumber, date) => {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${pageNumber}`
      );
      const data = await response.json();
      // Add data to state
      setRepos([...repos, ...data.items]);
    };

    getRepos(pageNumber, date);
    setLoading(false);
  }, [pageNumber]);

  return (
    <div className="App ">
      <Nav />
      <Container repos={repos} refrance={lastRepoElementRef} />
    </div>
  );
}

export default App;
