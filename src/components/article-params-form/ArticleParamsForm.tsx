import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';

import styles from './ArticleParamsForm.module.scss';

import { ArticleStateType, fontFamilyOptions, OptionType } from 'src/constants/articleProps';
import { useState } from 'react';

import clsx from 'clsx';

type ArticleParamsFormProps = {
	isOpen: boolean;
	toggle: () => void;
	valueArticleState: ArticleStateType;
	onChangeArticleState: (newArticleState: ArticleStateType) => void;
}

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const {isOpen, toggle, valueArticleState, onChangeArticleState} = props;
	const [formState, setFormState] = useState(valueArticleState);

	console.log(isOpen);
	console.log({...formState});
	console.log({...valueArticleState});

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick = {toggle} />
			<aside className={clsx(styles.container, {
				[styles.container_open]: isOpen
			})}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase align='center' family='open-sans'>
						Задайте параметры</Text>
						<Select selected={formState.fontFamilyOption}
						onChange={(selected: OptionType) => setFormState({...formState, fontFamilyOption: selected})}
						options={fontFamilyOptions}
						title='Шрифт'></Select>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
