import { useEffect, useState } from "react";
import axios from "axios";
export function Paige() {
  const [count, setCount] = useState(2);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await axios.get(
          `http://shibe.online/api/shibes?count=${count}`
        );
        const data = await response.data;
        setImages(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchImages();
  }, [count]);

  //   function loading() {
  //     return <h2>🌀 Loading...</h2>;
  //   }

  function forward() {
    if (page < 15) {
      setPage((page) => page + 1);
      setCount((page + 1) * 2);
    }
  }
  function backward() {
    if (page > 1) {
      setPage((page) => page - 1);
      setCount((page - 1) * 2);
    }
  }

  return (
    <>
      <div>
        <ul>
          {images.map((image, index) => {
            return (
              <li key={index}>
                <img src={image} />
              </li>
            );
          })}
        </ul>
        <button onClick={backward} disabled={page === 1}>
          Back
        </button>
        <button onClick={forward} disabled={page === 15}>
          Next
        </button>
      </div>
    </>
  );
}

//http://shibe.online/api/shibes?count=[1-100]
//### **Question 10**

//Develop a paginated list view that shows items fetched from an API or a
//mock dataset.Implement a pagination system through which users can navigate
//between pages.Also, display the number of items per page.Use React state,
//components and hooks to manage the data and user interactions.
