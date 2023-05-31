import React from 'react';

import { Heading, Button, SimpleGrid } from '@chakra-ui/react';

import Section from '../../components/section';
import { GrArchlinux } from 'react-icons/gr';
import {
	SiTailwindcss,
	SiNextdotjs,
	SiExpress,
	SiMongodb,
	SiAdobephotoshop,
	SiCanva,
	SiMicrosoftoffice,
	SiPrisma,
	SiSvelte,
	SiFlutter,
} from 'react-icons/si';
import { IoLogoReact, IoLogoPython } from 'react-icons/io5';

let skillsIndex = 0;
const skills = [
	{
		id: skillsIndex++,
		icon: <GrArchlinux />,
		name: 'Linux',
	},
	{
		id: skillsIndex++,
		icon: <IoLogoReact />,
		name: 'ReactJS',
	},
	{
		id: skillsIndex++,
		icon: <SiNextdotjs />,
		name: 'NextJS',
	},
	{
		id: skillsIndex++,
		icon: <IoLogoPython />,
		name: 'Python',
	},
	{
		id: skillsIndex++,
		icon: <SiFlutter />,
		name: 'Flutter',
	},
	{
		id: skillsIndex++,
		icon: <SiSvelte />,
		name: 'SvelteKIT',
	},

	{
		id: skillsIndex++,
		icon: <SiTailwindcss />,
		name: 'TailwindCSS',
	},
	{
		id: skillsIndex++,
		icon: <SiExpress />,
		name: 'ExpressJS',
	},
	{
		id: skillsIndex++,
		icon: <SiMongodb />,
		name: 'MongoDB',
	},
	{
		id: skillsIndex++,
		icon: <SiPrisma />,
		name: 'Prisma',
	},
	{
		id: skillsIndex++,
		icon: <SiCanva />,
		name: 'Canva',
	},
	{
		id: skillsIndex++,
		icon: <SiMicrosoftoffice />,
		name: 'Microsoft Office',
	},
	{
		id: skillsIndex++,
		icon: <SiAdobephotoshop />,
		name: 'PhotoShop',
	},
];
const Skill = () => {
	return (
		<Section delay={0.3}>
			<Heading as="h3" variant="section-title">
				Skills 🌟
			</Heading>
			<SimpleGrid minChildWidth="120px" spacing="30px">
				{skills.map(({ id, icon, name }) => (
					<section key={id}>
						<Button
							variant="ghost"
							colorScheme="teal"
							leftIcon={icon}
							aria-label={`skills${name}`}
						>
							{name}
						</Button>
					</section>
				))}
			</SimpleGrid>
		</Section>
	);
};

export default Skill;
