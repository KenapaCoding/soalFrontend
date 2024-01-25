/** @format */

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import Table from '../components/Table';
import Action from '../components/Action';
import DeleteModal from '../components/DeleteModal';
import { createPortal } from 'react-dom';

const AllPosts = () => {
	const [tab, setTab] = useState('all');
	const tabs = [
		{ title: 'All', value: 'all' },
		{ title: 'Published', value: 'publish' },
		{ title: 'Draft', value: 'draft' },
		{ title: 'Trashed', value: 'trash' },
	];
	const { data, modalOpen } = useSelector((state) => {
		if (tab == 'all') {
			return { data: state.articles.data, modalOpen: state.deleteModal.open };
		}
		const datas = state.articles.data.filter((item) => item.status == tab);
		return { data: datas, modalOpen: state.deleteModal.open };
	});

	const configs = [
		{
			label: 'Title',
			type: 'text',
			render: (item) => item.title,
		},
		{
			label: 'Category',
			type: 'text',
			render: (item) => item.category,
		},
		{
			label: 'Status',
			type: 'text',
			render: (item) => item.status,
		},
		{
			label: 'Action',
			type: 'text',
			render: (item, handleDelete, handleEdit) => (
				<Action
					item={item}
					handleDelete={handleDelete}
					handleEdit={handleEdit}
				/>
			),
		},
	];
	const keyFn = (item) => {
		return item.id;
	};
	return (
		<div className='app'>
			<Navbar />
			<div className='layout'>
				<div className='header'>
					<div className='flex-row gap-12'>
						{tabs.map((item) => {
							return (
								<div
									onClick={() => setTab(item.value)}
									className={`tab ${tab == item.value ? 'tab-active' : ''}`}>
									{item.title}
								</div>
							);
						})}
					</div>
				</div>
				<div className='dynamicTable'>
					<div className='table'>
						<div className='tableHeader'>
							<div className='title'>Article</div>
						</div>
						<div className='tableContent'>
							<Table
								data={data}
								config={configs}
								keyFn={keyFn}
							/>
						</div>
					</div>
				</div>
			</div>
			{modalOpen && createPortal(<DeleteModal />, document.body)}
		</div>
	);
};

export default AllPosts;
