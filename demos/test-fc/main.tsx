import React, { useState } from 'react';
import ReactDom from 'react-dom/client';

const App = () => {
	const [num, setNum] = useState<number>(0);

	const handleClick = () => {
		setNum(num + 1);
	};

	return <div onClick={handleClick}>{num}</div>;
};

ReactDom.createRoot(document.getElementById('root')!).render(<App />);
