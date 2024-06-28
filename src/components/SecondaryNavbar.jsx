import React from 'react';

const SecondaryNavbar = () => {
	return (
		<div className='border-y border-gray-200'>
			<div className='flex flex-row items-center px-4 md:px-16 gap-8'>
				<NavItem text='Job preview' active={true} />
				<NavItem text='Applicants' />
				<NavItem text='Match' />
				<NavItem text='Messages' />
			</div>
		</div>
	);
};

const NavItem = ({ text, active = false }) => {
	return (
		<div className={`py-4 px-4 ${active ? 'border-b-2 border-red-500' : ''}`}>
			<p className={`${active ? 'text-red-500' : 'text-gray-500'}`}>{text}</p>
		</div>
	);
};

export default SecondaryNavbar;
