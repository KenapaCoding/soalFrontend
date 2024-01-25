/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import ArticleEdit from '../components/ArticleEdit';

const Edit = () => {
	const { id } = useParams();
  const article = useSelector((state) => {
    const edited = state.articles.data.find(item => item.id == id)
    return edited
  })
	return (
		<div className='app'>
			<Navbar />
			<div className='layout'>
        <ArticleEdit article={article}/>
      </div>
		</div>
	);
};

export default Edit;
