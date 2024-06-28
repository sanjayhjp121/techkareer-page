import React from 'react';
import {
	Briefcase,
	MessageSquare,
	HandCoins,
	Users,
	Bell,
	ChevronDown,
} from 'lucide-react';
import Company from '../assets/company.png';

const Navbar = () => {
	return (
		<div className='flex items-center justify-between mb-1 p-8 py-4'>
			<div className='bg-[#e7e7e7]'>
				<p className='px-6 py-3 text-[#dc4a2d] font-bold text-[20px]'>Logo</p>
			</div>
			<div className='flex items-center justify-around text-white gap-4'>
				<div className='flex gap-2 p-3 py-[10px] mx-auto items-center bg-[#dc4a2d] border-2 border-[#FCB4A5] rounded-full shadow-md'>
					<Briefcase size={20} />
					<p className='text-lg tracking-wide'>Jobs</p>
				</div>
				<div className='flex gap-10 items-center shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] text-[#b0b0b0] border rounded-full px-10 py-5'>
					<div className='flex gap-2 items-center'>
						<div className='relative'>
							<MessageSquare />
							<div className='absolute top-[-1px] right-[-1px] w-1 h-1 bg-red-500 rounded-full'></div>
						</div>
						<p className='text-lg'>Messages</p>
					</div>
					<div className='flex gap-2 items-center'>
						<HandCoins />
						<p className='text-lg'>Payments</p>
					</div>
					<div className='flex gap-2 items-center'>
						<Users />
						<p className='text-lg'>Application</p>
					</div>
				</div>
			</div>
			<div className='flex items-center justify-center gap-4'>
				<div className='relative'>
					<Bell size={28} />
					<div className='absolute top-[-1px] right-1 w-1 h-1 bg-red-500 rounded-full'></div>
				</div>
				<div className='flex gap-1 items-center'>
					<img src={Company} alt='' className='w-8 h-8 rounded-full' />
					<ChevronDown size={20} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
