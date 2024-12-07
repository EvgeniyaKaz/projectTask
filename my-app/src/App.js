import logo from "./logo.svg"; /*императивный*/
import "./App.css"; /*императивный*/

function App() /*императивный*/ {
	let date = new Date().getFullYear().toString();
	return (
		/*все html теги это декларативный стиль, так как мы запрашиваем нужные нам элементы*/
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{date}</p>
			</header>
		</div>
	);
}
export default App;
