/** @format */

import React from 'react';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';

const Preview = () => {
	const articles = useSelector(state => {
		return state.articles.data.filter(item => item.status == 'publish')
	})
	return (
		<div className='app'>
			<Navbar />
			<div className='layout'>
				<div className="new">
					<div className="title mb-20">Preview</div>
					<div className="flex-col gap-16">
						{
							articles.map(item => {
								return <div className="flex-1 border-main p-12 flex-col gap-8 bg-white">
									<div className="title-2 color-primary-main">{item.title}</div>
									<div className="font-12-bold color-neutral-70">{item.category}</div>
									<div className="text color-neutral-100">{item.content}</div>
								</div>
							})
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preview;
