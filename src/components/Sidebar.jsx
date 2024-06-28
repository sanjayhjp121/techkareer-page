import React from 'react';
import {
	Trash2,
	Pencil,
	Users,
	UserCheck,
	MessageSquare,
	Eye,
} from 'lucide-react';
import Person from '../assets/person.png';

const Sidebar = () => {
	return (
		<div className='flex flex-col p-10 w-[500px]'>
			<div className='flex gap-4 mb-8'>
				<button className='flex gap-3 items-center bg-[#fef4f2] border border-[#dc4a2d] text-[#dc4a2d] rounded-md px-6 py-3'>
					<Trash2 size={18} />
					<span className='text-sm'>Delete Job</span>
				</button>
				<button className='flex gap-3 items-center bg-[#dc4a2d] border-2 border-[#fed3ca] text-white rounded-md px-6 py-3'>
					<Pencil size={18} />
					<span className='text-sm'>Edit Job</span>
				</button>
			</div>
			<div className='flex flex-col mb-6 gap-4 px-6'>
				<div className='flex items-center justify-between border-b-[1px] pb-6'>
					<div className='flex items-center gap-4'>
						<Users size={18} />
						<span className='text-sm '>Applicants</span>
					</div>
					<span>400</span>
				</div>
				<div className='flex items-center justify-between border-b-[1px] pb-6'>
					<div className='flex items-center gap-4'>
						<UserCheck size={18} />
						<span className='text-sm'>Matches</span>
					</div>
					<span>100</span>
				</div>
				<div className='flex items-center justify-between border-b-[1px] pb-6'>
					<div className='flex items-center gap-4'>
						<MessageSquare size={18} />
						<span className='text-sm '>Messages</span>
					</div>
					<span>147</span>
				</div>
				<div className='flex items-center justify-between pb-6'>
					<div className='flex items-center gap-4'>
						<Eye size={18} />
						<span className='text-sm '>Views</span>
					</div>
					<span>800</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
