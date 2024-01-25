/** @format */

import React from 'react';
import { deleteClose } from '../slices/deleteModal';
import { useDispatch, useSelector } from 'react-redux';
import { removeArticle } from '../slices/article';

const DeleteModal = () => {
	const dispatch = useDispatch();
    const article = useSelector(state => {
        return state.deleteModal.data
    })
	return (
		<div
			className='modalContainer'
			onClick={(e) => {
				if (e.target.className === 'modalContainer') {
					dispatch(deleteClose());
				}
			}}>
			<div className='modal flex-col gap-16'>
				<div className='title'>Delete {article.title}</div>
				<div className='text'>Are you sure to delete this article ?</div>
				<div className='flex-row gap-16'>
					<button
						className='flex-1 button-cancel'
						onClick={() => {
							dispatch(deleteClose());
						}}>
						Cancel
					</button>
					<button
						className='flex-1 button-submit'
						onClick={() => {
							dispatch(deleteClose());
                            dispatch(removeArticle(article.id))
						}}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteModal;
