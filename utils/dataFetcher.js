export async function dataFetcher(api) {
    try {
        
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result =  await response.json();

      return result; // Adjust this based on the API structure
    } catch (error) {
      console.error("Error fetching data:", error);
      return []; // Fallback to an empty array if there's an error
    }
  }
  
