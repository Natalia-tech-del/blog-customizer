import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
} from '../../constants/articleProps';
import { CSSProperties, useState } from 'react';
import styles from './App.module.scss';

export const App = () => {
	const [articleState, setArticleState] = useState(defaultArticleState);
	const [isOpen, setIsOpen] = useState(false);

	function onChangeState(newArticleState: ArticleStateType) {
		setArticleState({ ...newArticleState });
	}

	const toggle = () => {
		isOpen ? setIsOpen(false) : setIsOpen(true);
	};

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': articleState.fontFamilyOption.value,
					'--font-size': articleState.fontSizeOption.value,
					'--font-color': articleState.fontColor.value,
					'--container-width': articleState.contentWidth.value,
					'--bg-color': articleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				isOpen={isOpen}
				toggle={toggle}
				valueArticleState={articleState}
				onChangeArticleState={onChangeState}
			/>
			<Article />
		</main>
	);
};
