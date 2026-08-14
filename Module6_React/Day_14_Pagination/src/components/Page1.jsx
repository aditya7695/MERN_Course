import { useEffect, useState } from "react";
import axios from "axios";

const Page1 = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = useState([]);
  
  // 1. Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10); // Change this number to show more/less posts per page

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(API_URL);
      setData(res.data);
    };
    fetchData();
  }, []);

  // 2. Calculate the posts to display on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // 3. Calculate total pages for the controls
  const totalPages = Math.ceil(data.length / postsPerPage);

  // 4. Navigation Handlers
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      {/* 5. Map over currentPosts instead of data */}
      {currentPosts.map((item) => {
        return (
          <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
            <h2>User Id : {item.userId}</h2>
            <h3>Title : {item.title}</h3>
            <p>Body : {item.body}</p>
          </div>
        );
      })}

      {/* 6. Pagination Controls */}
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
          disabled={currentPage === totalPages || totalPages === 0}
          style={{ padding: "8px 16px", cursor: currentPage === totalPages ? "not-allowed" : "pointer" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page1;

