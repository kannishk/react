import axios from "axios";
export function Cache() {
  async function fetchDataWithCache(url) {
    const cachedData = localStorage.getItem(url);
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      if (new Date().getTime() - timestamp < ttl) {
        return data;
      }
    }
    try {
      const response = await axios.get(url).data;
      localStorage.setItem(
        url,
        JSON.stringify({ data: response, timestamp: new Date().getTime() })
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  const ttl = 3600000;
  fetchDataWithCache();
}

/*
### **Question 5**

Develop a web application of your choice that makes frequent requests to an external 
REST API. To improve latency and reduce the load on the API, implement a client-side
 caching strategy that caches responses to API requests and serves them from the client-side
  cache when the same request is made again.
*/
