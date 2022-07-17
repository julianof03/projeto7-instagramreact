import ReactDOM from 'react-dom';
import Storys from './components/storys';
function App() {
    return (
        <div>
			<Storys />
		</div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));