import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';

import styles from './ArticleParamsForm.module.scss';

import { ArticleStateType, fontFamilyOptions, fontSizeOptions, OptionType,
	fontColors, backgroundColors, contentWidthArr } from 'src/constants/articleProps';
import { useState, useRef, useEffect } from 'react';

import clsx from 'clsx';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

type ArticleParamsFormProps = {
	isOpen: boolean;
	toggle: () => void;
	valueArticleState: ArticleStateType;
	onChangeArticleState: (newArticleState: ArticleStateType) => void;
}

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const {isOpen, toggle, valueArticleState, onChangeArticleState} = props;
	const [formState, setFormState] = useState(valueArticleState);
	const asideRef = useRef<HTMLElement | null>(null);
	useEffect(() => {
	const handle = (e: MouseEvent) => {
		if (isOpen && !asideRef.current?.contains(e.target as Node)) {
			toggle();
		}
	};

		document.addEventListener("mousedown", handle);

		return () => {
          document.removeEventListener("mousedown", handle);
	}},[isOpen, toggle]);

	console.log(isOpen);
	console.log({...formState});
	console.log({...valueArticleState});

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick = {toggle} />
			<aside className={clsx(styles.container, {
				[styles.container_open]: isOpen
			})} ref={asideRef}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase align='center' family='open-sans'>
						Задайте параметры</Text>
					<Select
						selected={formState.fontFamilyOption}
						onChange={(selected: OptionType) => setFormState({...formState, fontFamilyOption: selected})}
						options={fontFamilyOptions}
						placeholder='Выберите шрифт'
						title='Шрифт'>
					</Select>
					<RadioGroup
						selected={formState.fontSizeOption}
						name='radio'
						onChange={(value: OptionType) => setFormState({...formState, fontSizeOption: value})}
						options={fontSizeOptions}
						title='Размер шрифта'>
					</RadioGroup>
					<Select
						selected={formState.fontColor}
						onChange={(selected: OptionType) => setFormState({...formState, fontColor: selected})}
						options={fontColors}
						placeholder='Выберите цвет шрифта'
						title='Цвет шрифта'>
					</Select>
					<Separator></Separator>
					<Select
						selected={formState.backgroundColor}
						onChange={(selected: OptionType) => setFormState({...formState, backgroundColor: selected})}
						options={backgroundColors}
						placeholder='Выберите цвет фона'
						title='Цвет фона'>
					</Select>
					<Select
						selected={formState.contentWidth}
						onChange={(selected: OptionType) => setFormState({...formState, contentWidth: selected})}
						options={contentWidthArr}
						placeholder='Выберите ширину контента'
						title='Ширина контента'>
					</Select>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
