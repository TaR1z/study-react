import React, { useState } from 'react';
import ReactDom from 'react-dom/client';

const App = () => {
	const [num, setNum] = useState<number>(0);

	const handleClick = () => {
		setNum((num) => num + 1);
		setNum((num) => num + 1);
		setNum((num) => num + 1);
	};

	return <h1 onClick={handleClick}>{num}</h1>;
};

ReactDom.createRoot(document.getElementById('root')!).render(<App />);
