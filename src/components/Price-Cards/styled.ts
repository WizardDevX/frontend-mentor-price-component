import styled from "styled-components";
import { IText } from "../../interfaces/Props";
import { mediaQuery } from "../../utils/styled";

export const Title = styled.h2<IText>`
	font-size: ${({ size }) => size || "1.5em"};
	color: ${({ theme }) => theme.colors.darkGrayBlue};
	text-align: center;
	line-height: 2em;
	margin-top: 1.5em;
`;

export const Text = styled(Title)`
	font-size: ${({ size }) => size || "1.5em"};
	line-height: 2em;
	margin-top: 0;
`;

export const CheckContainer = styled.div`
	padding: 1em 0;
	text-align: center;
	margin-bottom: 2em;
`;

export const DateText = styled.h2`
	display: inline;
	font-size: 1em;
	color: ${({ theme }) => theme.colors.lightGrayBlue};
`;
export const Checkbox = styled.input`
	position: relative;
	width: 60px;
	height: 30px;
	background-color: ${({ theme, checked }) => {
		return checked ? theme.colors.lightBlue : theme.colors.blue;
	}}};
	margin: 0 15px;
	border-radius: 20px;
	appearance: none;
	box-shadow: inset 0 0 20px 0 rgba(0, 0, 0, 0.2);

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 30px;
		height: 30px;
		background-color: #fff;
		border-radius: 50%;
		transform: scale(1.1);
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
		transition: left 0.5s;
	}

	&:checked::before {
		left: 50%;
	}
`;

export const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	align-items: center;
	justify-content: center;
`;

export const CardPrice = styled(Text)`
	position: relative;
	display: inline-block;
	margin: 0.8em 0 1em;
	line-height: 0;

	&::before {
		content: "$";
		position: absolute;
		font-size: 0.6em;
		top: 2px;
		left: -12%;
	}
`;

export const List = styled.ul`
	list-style: none;
	text-align: center;
	margin: 0 0 2em;
`;

export const Item = styled.li`
	border-top: 1px solid ${({ theme }) => theme.colors.lightGrayBlue};
	padding: 0.5em 0;

	${Text} {
		font-size: 1.1em;
	}

	&:last-child {
		border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrayBlue};
	}
`;

export const Button = styled.a`
	display: inline-block;
	width: 100%;
	background-image: ${({ theme }) => theme.gradient};
	font-size: 1.2em;
	color: ${({ theme }) => theme.colors.veryLightGrayBlue};
	letter-spacing: 0.1em;
	line-height: 3em;
	padding: 0 3em;
	text-transform: uppercase;
	border-radius: 10px;
	transition: all 1s;
	text-decoration: none;

	&:hover {
		border: 1px solid ${({ theme }) => theme.colors.blue};
		background-image: linear-gradient(to right, #fff, #fff);
		color: ${({ theme }) => theme.colors.blue};
	}
`;

export const Card = styled.div`
	width: 350px;
	height: 484px;
	padding: 1.5em;
	margin: 2em 0;
	background-color: #fff;
	text-align: center;
	border-radius: 10px;
	box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);

	${Text} {
		color: ${({ theme }) => theme.colors.grayBlue};
	}

	${CardPrice} {
		color: ${({ theme }) => theme.colors.darkGrayBlue};
	}
`;

export const CardActive = styled(Card)`
	box-shadow: none;
	background-image: ${({ theme }) => theme.gradient};

	${Text} {
		color: ${({ theme }) => theme.colors.veryLightGrayBlue};
	}

	${Item} {
		border-color: ${({ theme }) => theme.colors.veryLightGrayBlue};
	}

	${mediaQuery("min", "700px")`
        height: 530px;
        padding: 3em 1.5em;
    `}
`;

export const ButtonActive = styled(Button)`
	background-image: none;
	background-color: #fff;
	color: ${({ theme }) => theme.colors.blue};

	&:hover {
		border: 1px solid ${({ theme }) => theme.colors.veryLightGrayBlue};
		background-image: ${({ theme }) => theme.gradient};
		color: ${({ theme }) => theme.colors.veryLightGrayBlue};
	}
`;

export const Background1 = styled.figure`
	position: absolute;
	top: -5%;
	right: 0;
	width: 300px;
	height: 600px;
	background-image: url("/img/bg-top.svg");
	background-size: cover;
	z-index: -1;

	${mediaQuery("max", "661px")`
		right: -20%;
	`}
`;

export const Background2 = styled(Background1)`
	top: initial;
	right: initial;
	bottom: -3%;
	left: 0;
	height: 300px;
	background-image: url("/img/bg-bottom.svg");

	${mediaQuery("max", "661px")`
		display: none;
	`}
`;
