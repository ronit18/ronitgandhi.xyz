import React from 'react';

import { Link, Heading, Button, SimpleGrid } from '@chakra-ui/react';

import Section from '../../components/section';
import {
	IoLogoTwitter,
	IoLogoInstagram,
	IoLogoGithub,
	IoLogoLinkedin,
} from 'react-icons/io5';

let linksIndex = 0;
const links = [
	{
		id: linksIndex++,
		social: 'https://github.com/ronit18',
		icon: <IoLogoGithub />,
		name: '@ronit18',
		ariaLabel: 'Github',
	},
	{
		id: linksIndex++,
		social: 'https://www.linkedin.com/in/ronitgandhi08/',
		icon: <IoLogoLinkedin />,
		name: '@RonitGandhi20',
		ariaLabel: 'LinkedIn',
	},
	{
		id: linksIndex++,
		social: 'https://www.instagram.com/ronitgandhi.xyz/',
		icon: <IoLogoInstagram />,
		name: '@ronitgandhi.xyz',
		ariaLabel: 'Insta',
	},
	{
		id: linksIndex++,
		social: 'https://twitter.com/RonitGandhi20',
		icon: <IoLogoTwitter />,
		name: '@RonitGandhi20',
		ariaLabel: 'Twitter',
	},
];

const LinksComponent = () => {
	return (
		<Section delay={0.3}>
			<Heading as="h3" variant="section-title">
				On the web 🌏
			</Heading>
			<SimpleGrid minChildWidth="120px" spacing="30px">
				{links.map(({ id, social, icon, name, ariaLabel }) => (
					<section key={id}>
						<Link href={social} target="_blank">
							<Button
								variant="ghost"
								colorScheme="teal"
								leftIcon={icon}
								aria-label={ariaLabel}
							>
								{name}
							</Button>
						</Link>
					</section>
				))}
			</SimpleGrid>
		</Section>
	);
};

export default LinksComponent;
