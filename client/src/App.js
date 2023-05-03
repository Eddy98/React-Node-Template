import { useState, useEffect } from 'react';

const fetchApi = async (setData) => {
  try {
    const result = await fetch('http://localhost:3000');
    const jsonData = await result.json();
    setData(jsonData);
  } catch (error) {
    setData({ error: 'Unexpected error' });
  }
};

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchApi(setData);
  }, []);

  if (data === null) return <h1>Loading</h1>;

  if (data.error) return <h1>{data.error}</h1>;

  return <h1>{data.message}</h1>;
}

export default App;
