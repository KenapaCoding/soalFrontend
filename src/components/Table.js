/** @format */

import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteOpen } from '../slices/deleteModal';
import { useNavigate } from 'react-router-dom';

const Table = ({ data, config, keyFn }) => {
	const dispatch = useDispatch();
    const navigate = useNavigate()
	const handleDelete = (article) => {
		dispatch(deleteOpen(article));
	};
	const handleEdit = (id) => {
		navigate(`/edit/${id}`)
	};
	const renderHeader = config.map((column) => {
		return <th key={keyFn}>{column.label}</th>;
	});
	const renderRows = data.map((rowData) => {
		const renderCell = config.map((column) => {
			if (column.label == 'Action') {
				return <td>{column.render(rowData, handleDelete, handleEdit)}</td>;
			}
			return <td>{column.render(rowData)}</td>;
		});
		return <tr key={keyFn(rowData)}>{renderCell}</tr>;
	});
	return (
		<table id='dtables'>
			<thead>
				<tr>{renderHeader}</tr>
			</thead>
			<tbody>{renderRows}</tbody>
		</table>
	);
};

export default Table;
