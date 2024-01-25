/** @format */

import { createSlice, nanoid } from '@reduxjs/toolkit';

const article = createSlice({
	name: 'article',
	initialState: {
		data: [
			{
				id: 1,
				title: 'Indonesia Maju',
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				category: 'news',
				status: 'publish',
			},
			{
				id: 2,
				title: 'Ada Udang dibalik bakwan',
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				category: 'news',
				status: 'draft',
			},
			{
				id: 3,
				title: 'Peraih penghargaan ...',
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				category: 'news',
				status: 'publish',
			},
			{
				id: 4,
				title: 'Debat Capres ke empat',
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				category: 'news',
				status: 'publish',
			},
			{
				id: 5,
				title: 'Tanggapan Presiden',
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				category: 'news',
				status: 'publish',
			},
		],
	},
	reducers: {
		addArticle(state, action) {
			state.data.push({
				id: nanoid(),
				title: action.payload.title,
				content: action.payload.content,
				category: action.payload.category,
				status: action.payload.status,
			});
		},
		editArticle(state, action) {
			const updated = state.data.map((article) => {
				if (article.id == action.payload.id) {
					return { ...article, ...action.payload };
				}
				return article;
			});
			state.data = updated;
		},
		removeArticle(state, action) {
			const updatedArticle = state.data.map((article) => {
				if (article.id == action.payload) {
					return { ...article, status: 'trash' };
				}
				return article;
			});
			state.data = updatedArticle;
		},
	},
});

export const { removeArticle, editArticle, addArticle } = article.actions;
export const articlesReducer = article.reducer;
