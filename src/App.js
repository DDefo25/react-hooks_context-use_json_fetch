import useJsonFetch from './hooks/useJsonFetch';

function App() {
  const data = useJsonFetch(process.env.REACT_APP_SERVER_URL + '/data');
  setTimeout(() => console.log(data), 1000)

  const error = useJsonFetch(process.env.REACT_APP_SERVER_URL + '/error');
  setTimeout(() => console.log(error), 1000)

  const loading = useJsonFetch(process.env.REACT_APP_SERVER_URL + '/loading');
  setTimeout(() => console.log(loading), 1000)
}

export default App;
