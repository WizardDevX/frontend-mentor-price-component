import React, { useState, useEffect } from "react";
import {
	Title,
	Text,
	CheckContainer,
	DateText,
	Checkbox,
	Card,
	CardActive,
	CardPrice,
	List,
	Item,
	Button,
	ButtonActive,
	CardContainer,
	Background1,
	Background2,
} from "./styled";
import { IData } from "../../interfaces/Props";

const data: IData[] = [
	{
		title: "Basic",
		mothly: "19.99",
		annually: "199.99",
		benefits: ["500 GB Storage", "2 Users Allowed", "Send Up to 3 GB"],
	},
	{
		title: "Professional",
		mothly: "24.99",
		annually: "249.99",
		benefits: ["1 TB Storage", "5 Users Allowed", "Send Up to 10 GB"],
	},
	{
		title: "Master",
		mothly: "39.99",
		annually: "399.99",
		benefits: ["2 TB Storage", "10 Users Allowed", "Send Up to 20 GB"],
	},
];

const createCardBody = (plan: IData, active: boolean) => {
	return (
		<>
			<Text>{plan.title}</Text>

			<CardPrice size="5em">
				{active ? plan.mothly : plan.annually}
			</CardPrice>

			<List>
				{plan.benefits.map((benefit, idx) => {
					return (
						<Item key={idx}>
							<Text>{benefit}</Text>
						</Item>
					);
				})}
			</List>
		</>
	);
};

const Cards = () => {
	const [plans, _] = useState<IData[]>(data);
	const [active, setActive] = useState<boolean>(false);

	const activate = (e: React.ChangeEvent<HTMLInputElement>) => {
		setActive(prevState => !prevState);
	};

	useEffect(() => {
		console.log(`refreshing: ${active}`);
	}, [active]);

	return (
		<>
			<Background1 />
			<Background2 />
			<Title>Our Pricing</Title>
			<CheckContainer>
				<DateText>Annually</DateText>
				<Checkbox
					type="checkbox"
					id="price"
					checked={active}
					onChange={activate}
				/>
				<DateText>Monthly</DateText>
			</CheckContainer>
			<CardContainer>
				{plans &&
					plans.map((plan, idx) => {
						if (plan.title === "Professional")
							return (
								<CardActive key={idx}>
									{createCardBody(plan, active)}
									<ButtonActive href="/">
										Learn More
									</ButtonActive>
								</CardActive>
							);

						return (
							<Card key={idx}>
								{createCardBody(plan, active)}
								<Button href="/">Learn More</Button>
							</Card>
						);
					})}
			</CardContainer>
		</>
	);
};

export default Cards;
