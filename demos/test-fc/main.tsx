import React from 'react';
import ReactDom from 'react-dom/client';

const App = () => <div>hello</div>;

ReactDom.createRoot(document.getElementById('root')!).render(<App />);
