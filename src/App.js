import React, { useState } from 'react';
import Editor from './pages/editor';
import Upload from './pages/upload';
import Header from './components/header';
import './styles/app.css';

function App() {
	const [image, setImage] = useState(null);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	function changeSidebarState() {
		setIsSidebarOpen(!isSidebarOpen);
	}
	return (
		<>
			<Header
				image={image}
				isSidebarOpen={isSidebarOpen}
				changeSidebarState={changeSidebarState}
			/>
			<main className={isSidebarOpen ? 'sidebar-open' : ''}>
				{image ? (
					<Editor image={image} closeSidebar={changeSidebarState} resetImage={() => setImage(null)}/>
				) : (
					<Upload setImage={setImage} />
				)}
			</main>
		</>
	);
}

export default App;
