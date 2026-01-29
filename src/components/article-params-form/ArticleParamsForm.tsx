import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';

import { ArticleStateType } from 'src/constants/articleProps';

type ArticleParamsFormProps = {
	isOpen: boolean;
	toggle: () => void;
	stateValue: ArticleStateType;
	onChangeState: (newArticleState: ArticleStateType) => void;
}

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const {isOpen, toggle, stateValue, onChangeState} = props;

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick = {toggle} />
			<aside className={styles.container}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
