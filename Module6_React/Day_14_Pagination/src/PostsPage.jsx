import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const PostsPage = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);
  const [postsPerPage] = useState(10);
  
  // 1. Get the page number from the URL and navigation function
  const { pageNumber } = useParams();
  const navigate = useNavigate();

  // 2. Convert the URL string to a number (fallback to 1 if it fails)
  const currentPage = parseInt(pageNumber) || 1;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(API_URL);
      setData(res.data);
    };
    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(data.length / postsPerPage);

  // 3. Navigate to a new URL instead of setting state
  const handlePrev = () => {
    if (currentPage > 1) {
      navigate(`/page/${currentPage - 1}`);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      navigate(`/page/${currentPage + 1}`);
    }
  };

  return (
    <div>
      {currentPosts.map((item) => {
        return (
          <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
            <h2>User Id : {item.userId}</h2>
            <h3>Title : {item.title}</h3>
            <p>Body : {item.body}</p>
          </div>
        );
      })}

      <div style={{ padding: "20px", display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}>
        <button 
          onClick={handlePrev} 
          disabled={currentPage === 1}
          style={{ padding: "8px 16px", cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
        >
          Previous
        </button>
        
        <span style={{ fontWeight: "bold" }}>
          Page {currentPage} of {totalPages}
        </span>
        
        <button 
          onClick={handleNext} 
          disabled={currentPage >= totalPages || totalPages === 0}
          style={{ padding: "8px 16px", cursor: currentPage >= totalPages ? "not-allowed" : "pointer" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostsPage;