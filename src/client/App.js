import { useState, useEffect, useRef } from 'react';

const fetchApi = async (setDataFetched, data) => {
  try {
    const result = await fetch('http://localhost:3000/api');
    const jsonData = await result.json();
    data.current = jsonData;
  } catch (error) {
    data.current = { error: 'Unexpected error' };
  } finally {
    setDataFetched(true);
  }
};

function App() {
  const [dataFetched, setDataFetched] = useState(false);
  const data = useRef({});

  useEffect(() => {
    fetchApi(setDataFetched, data);
  }, []);

  if (!dataFetched) return <h1>Loading</h1>;

  if (data.current.error) return <h1>{data.current.error}</h1>;

  return <h1>{data.current.message}</h1>;
}

export default App;
