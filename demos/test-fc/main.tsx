import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom/client';

const Child = () => {
	useEffect(() => {
		console.log('Child mount');
		return () => {
			console.log('Child unmount');
		};
	}, []);
	return <h1>Child</h1>;
};

const App = () => {
	const [num, setNum] = useState<number>(0);

	useEffect(() => {
		console.log('App mount');
	}, []);

	useEffect(() => {
		console.log('num change mount', num);
		return () => {
			console.log('num change destroy', num);
		};
	}, [num]);

	const handleClick = () => {
		setNum((num) => num + 1);
	};

	return <div onClick={handleClick}>{num === 0 ? <Child /> : 'noop'}</div>;
};

ReactDom.createRoot(document.getElementById('root')!).render(<App />);
