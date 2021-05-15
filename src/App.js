import React from 'react';

import * as tf from '@tensorflow/tfjs';
import * as speech from '@tensorflow-models/speech-commands';

// CSS file
import './App.css';

function App() {
	// App States
	const [model, setModel] = React.useState(null);
	const [action, setAction] = React.useState(null);
	const [label, setLabel] = React.useState(null);

	const loadModel = async () => {
		const recognizer = await speech.create('BROWSER_FFT');
		console.log('Models Loaded');
		await recognizer.ensureModelLoaded();
		console.log(recognizer.wordLabels());
	};

	React.useEffect(() => {
		loadModel();
	}, []);

	return (
		<React.Fragment>
			<div className='app-header'>Niki Commands</div>
		</React.Fragment>
	);
}

export default App;
