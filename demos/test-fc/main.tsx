import React, { useState } from 'react';
import ReactDom from 'react-dom/client';

const App = () => {
	const [num, setNum] = useState<number>(0);
	return num === 3 ? <Child /> : <div>{num}</div>;
};

function Child() {
	return <span>hello</span>;
}

ReactDom.createRoot(document.getElementById('root')!).render(<App />);
