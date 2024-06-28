import Navbar from './components/Navbar.jsx';
import SecondaryNavbar from './components/SecondaryNavbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Main from './components/Main.jsx';

function App() {
	return (
		<div className=''>
			<Navbar />
			<SecondaryNavbar />
			<div className='flex w-full justify-between'>
				<Main />
				<Sidebar />
			</div>
		</div>
	);
}

export default App;
