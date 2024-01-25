/** @format */

import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editArticle } from '../slices/article';

const ArticleEdit = ({ article }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
	const initialState = {
		id: article.id,
		title: article.title,
		content: article.content,
		category: article.category,
		status: article.status,
	};
	const [formData, setFormData] = useState(initialState);
	const { title, content, category, status } = formData;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(editArticle(formData))
        navigate('/')
	};
    const handleCancel = (e) => {
        e.preventDefault()
        navigate('/')
    }

	return (
		<div className='new'>
			<div className='title mb-20'>Edit Article</div>
			<form
				onSubmit={handleSubmit}
				className='flex-col gap-16'>
				<div className='flex-col gap-12 flex-1'>
					<label className='text'>Title</label>
					<input
						className='input'
						type='text'
						name='title'
						value={title}
						onChange={handleChange}
					/>
				</div>
				<div className='flex-col gap-12 flex-1'>
					<label className='text'>Content</label>
					<textarea
						className='input'
						type='text'
						name='content'
						value={content}
						onChange={handleChange}
					/>
				</div>
				<div className='flex-col gap-12 flex-1'>
					<label className='text'>Category</label>
					<input
						className='input'
						type='text'
						name='category'
						value={category}
						onChange={handleChange}
					/>
				</div>
				<div className='flex-col gap-12 flex-1'>
					<label className='text'>Status</label>
					<select
						className='select'
						type='text'
						name='status'
						value={status}
						onChange={handleChange}>
						<option
							value=''
							selected
							disabled
							hidden>
							Choose here
						</option>
						<option value='publish'>Publish</option>
						<option value='draft'>Draft</option>
					</select>
				</div>
				<div className='button'>
					<input
						type='submit'
						value='Save'
						className='button-submit'
					/>
					<button className='button-cancel' onClick={handleCancel}>Cancel</button>
				</div>
			</form>
		</div>
	);
};

export default ArticleEdit;
