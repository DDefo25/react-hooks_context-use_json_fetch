import './App.css';
import useJsonFetch from './hooks/useJsonFetch';

function App() {
  const data = useJsonFetch('https://ddefo25-ideal-meme-v45jggxgrxfpvv-7070.preview.app.github.dev/data');
  console.log(data)
  setTimeout(() => console.log(data), 1000)

  const error = useJsonFetch('https://ddefo25-ideal-meme-v45jggxgrxfpvv-7070.preview.app.github.dev/error');
  console.log(error)
  setTimeout(() => console.log(error), 1000)

  const loading = useJsonFetch('https://ddefo25-ideal-meme-v45jggxgrxfpvv-7070.preview.app.github.dev/loading');
  console.log(loading)
  setTimeout(() => console.log(loading), 1000)

  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
