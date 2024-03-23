import React, { useState } from 'react';
import ReactDom from 'react-dom/client';

const App = () => {
	const [num, setNum] = useState<number>(0);

	const handleClick = () => {
		setNum(num + 1);
	};

	// const arr =
	// 	num % 2 === 0
	// 		? [<li key={1}>1</li>, <li key={2}>2</li>, <li key={3}>3</li>]
	// 		: [<li key={3}>3</li>, <li key={2}>2</li>, <li key={2}>2</li>];
	// return <ul onClick={handleClick}>{arr}</ul>;

	return (
		<ul>
			<>
				<li>1</li>
				<li>2</li>
			</>
			<li>3</li>
			<li>4</li>
		</ul>
	);
};

ReactDom.createRoot(document.getElementById('root')!).render(<App />);
