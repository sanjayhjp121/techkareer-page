import React from 'react';
import { MapPin } from 'lucide-react';
import Company from '../assets/company.png';
import Figma from '../assets/figma.png';
import Ai from '../assets/ai.png';
import Xd from '../assets/xd.png';

const SkillBadge = ({ icon, name }) => (
	<div className='inline-flex items-center rounded-md border border-[#D0D5DD] p-1 shadow-inner'>
		<img src={icon} alt='' className='w-3 h-3' />
		<span className='ml-2 text-[10px]'>{name}</span>
	</div>
);

const InfoItem = ({ label, value }) => (
	<div>
		<p className='text-sm text-gray-500 mb-2'>{label}</p>
		<p>{value}</p>
	</div>
);

const Main = () => {
	return (
		<div className='flex-grow border-r-[1px] border-[#D0D5DD] py-8 w-full'>
			<div className='border-b-[1px] border-[#D0D5DD] pb-6 px-20'>
				<div className='flex items-center gap-4 mb-6'>
					<h2 className='text-3xl font-bold text-[#3d3d3d]'>
						Senior Product Designer
					</h2>
					<div className='flex gap-2 items-center'>
						<span className='rounded-full w-1 h-1 bg-gray-300'></span>
						<p className='text-gray-400 text-xs'>posted 2 days ago</p>
					</div>

					<div className='flex gap-1 items-center text-green-700 bg-[#ecfdf3] rounded-full px-1 py-0.5 border border-green-300'>
						<span className='rounded-full w-1 h-1 bg-green-700'></span>
						<p className='text-[10px] font-medium'>Open</p>
					</div>
				</div>
				<div className='flex gap-4 items-center'>
					<div className='flex items-center gap-2 text-[#5D5D5D]'>
						<MapPin />
						<p>Delaware, USA</p>
					</div>
					<span className='rounded-full w-1 h-1 bg-gray-300'></span>
					<div className='flex items-center gap-2 text-[#5D5D5D]'>
						<svg
							width='22'
							height='21'
							viewBox='0 0 22 21'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M12 3.53015C12 4.63472 9.53757 5.53015 6.5 5.53015C3.46243 5.53015 1 4.63472 1 3.53015M12 3.53015C12 2.42558 9.53757 1.53015 6.5 1.53015C3.46243 1.53015 1 2.42558 1 3.53015M12 3.53015V5.03015M1 3.53015V15.5302C1 16.6347 3.46243 17.5302 6.5 17.5302M6.5 9.53015C6.33145 9.53015 6.16468 9.52739 6 9.522C3.19675 9.43014 1 8.57343 1 7.53015M6.5 13.5302C3.46243 13.5302 1 12.6347 1 11.5302M21 10.0302C21 11.1347 18.5376 12.0302 15.5 12.0302C12.4624 12.0302 10 11.1347 10 10.0302M21 10.0302C21 8.92558 18.5376 8.03015 15.5 8.03015C12.4624 8.03015 10 8.92558 10 10.0302M21 10.0302V17.5302C21 18.6347 18.5376 19.5302 15.5 19.5302C12.4624 19.5302 10 18.6347 10 17.5302V10.0302M21 13.7802C21 14.8847 18.5376 15.7802 15.5 15.7802C12.4624 15.7802 10 14.8847 10 13.7802'
								stroke='#5D5D5D'
								stroke-width='1.6'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>

						<p>$300k - $400k</p>
					</div>
				</div>
			</div>

			<div className='bg-white rounded-lg'>
				<div className='flex gap-24 border-b-[1px] border-[#D0D5DD] p-6 px-20'>
					<div>
						<p className='text-sm text-gray-500 mb-2'>Skills Required</p>
						<div className='flex flex-col gap-2 mb-6 items-start'>
							<SkillBadge icon={Figma} name='Figma' />
							<SkillBadge icon={Ai} name='Adobe Illustrator' />
							<SkillBadge icon={Xd} name='Adobe XD' />
						</div>
					</div>
					<InfoItem label='Preferred Language' value='English' />
					<InfoItem label='Type' value='Full Time' />
					<InfoItem
						label='Years of Experience'
						value='3+ Years of Experience'
					/>
				</div>

				<div className='mb-6 p-6 px-20'>
					<p className='text-[#6E6D6D] mb-2'>About the job</p>
					<ol className='list-decimal list-inside space-y-2 mb-2'>
						<li>Handle the UI/UX research design</li>
						<li>
							Work on researching on latest web applications designs & trends
						</li>
						<li>Work on conceptualizing and visualizing</li>
						<li>
							Work on creating graphics content and other graphic related works
						</li>
					</ol>
					<p className='mb-2'>Benefits:</p>
					<ul className='list-disc list-inside space-y-1 mb-2'>
						<li>Health Insurance</li>
						<li>Provident Fund</li>
					</ul>
					<p className='mb-2'>Schedule:</p>
					<ul className='list-disc list-inside mb-2'>
						<li>Day shift</li>
					</ul>
					<p className='mb-2'>Supplemental pay types:</p>
					<ul className='list-disc list-inside'>
						<li>Performance bonus</li>
					</ul>
				</div>

				<div className='border-t pt-6'>
					<div className='flex items-center mb-4 p-6 px-20'>
						<img
							className='w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center text-white text-2xl font-bold mr-4'
							src={Company}
							alt=''
						/>
						<p className='text-xl'>Atlassian</p>
						<button className='ml-4 px-3 py-1 bg-[#E0EBF9] text-[#003788] rounded-lg shadow-md text-xs font-semibold'>
							Follow
						</button>
					</div>
					<div className='grid grid-cols-2 gap-8 px-20 w-[900px]'>
						<InfoItem label='Company size' value='1k - 2k Employees' />
						<InfoItem label='Type' value='Private' />
						<InfoItem
							label='Sector'
							value='Information Technology, Infrastructure'
						/>
						<InfoItem label='Funding' value='Bootstrapped' />
						<InfoItem label='Founded in' value='2018' />
						<InfoItem
							label='Founded by'
							value='Scott Farquhar, Mike Cannon-Brookes'
						/>
					</div>
					<p className='underline text-[#B0B0B0] text-xs mt-4 pt-2 px-20'>
						Report this listing
					</p>
				</div>
			</div>
		</div>
	);
};

export default Main;
