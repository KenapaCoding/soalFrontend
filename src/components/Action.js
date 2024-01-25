/** @format */

import React from 'react';

const Action = ({item,handleEdit, handleDelete }) => {
	return (
		<div className='flex-icon'>
			<div
				className='icons icon-edit'
				onClick={() => handleEdit(item.id)}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='21'
					height='20'
					viewBox='0 0 21 20'
					fill='none'>
					<path
						d='M13.1935 4.36019L16.1398 7.30647M14.4435 3.11019C15.2571 2.2966 16.5762 2.2966 17.3898 3.11019C18.2034 3.92379 18.2034 5.24288 17.3898 6.05647L5.91667 17.5296H3V14.5537L14.4435 3.11019Z'
						stroke='#455487'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</div>
			<div
				className='icons icon-delete'
				onClick={() => handleDelete(item)}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='21'
					height='20'
					viewBox='0 0 21 20'
					fill='none'>
					<path
						d='M16.3333 5.83333L15.6105 15.9521C15.5482 16.8243 14.8225 17.5 13.9481 17.5H7.05178C6.17739 17.5 5.45165 16.8243 5.38935 15.9521L4.66659 5.83333M8.83325 9.16667V14.1667M12.1666 9.16667V14.1667M12.9999 5.83333V3.33333C12.9999 2.8731 12.6268 2.5 12.1666 2.5H8.83325C8.37301 2.5 7.99992 2.8731 7.99992 3.33333V5.83333M3.83325 5.83333H17.1666'
						stroke='#B1343A'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</div>
		</div>
	);
};

export default Action;
