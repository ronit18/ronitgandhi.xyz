import React from 'react';
import NextLink from 'next/link';

import { Link, Heading, Box, Button } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Section from '../../components/section';

const Aboutme = () => {
	return (
		<div>
			<Section delay={0.1}>
				<Heading as="h3" variant="section-title">
					About me
				</Heading>
				<p style={{ textIndent: '1em' }}>
					I am a college graduate 👨‍🎓 with a degree in Instrumentation
					and Control Engineering. I have successfully completed my
					college from GEC,Gandhinagar and I am currently employed as
					a Software Engineer💻 at &rdquo;
					<Link href="https://www.eleics.com" target="_blank">
						Eleics Design
					</Link>
					{`  `}|{`  `}
					<Link href="https://iotdashboard.in/" target="_blank">
						IoTdashboard.in
					</Link>
					&rdquo;, an IoT-based company. In my role, I specialize in
					Android app development and website development.
					Additionally, I have a strong command of Linux and Linux
					servers, and I possess good knowledge of ethical hacking.
				</p>
				<br />
				<p style={{ textIndent: '1em' }}>
					Prior to my current position, I developed my skills as a
					python and web developer during my college years. I am a
					dedicated and hardworking individual who can adapt to
					various departments that align with my knowledge and skills.
					My proficiency extends to areas such as PLC, Python,HTML/CSS
					(including TailWindCSS), Microsoft Office, C/C++,
					JavaScript, ReactJS, NextJS, AstroJS, SvelteJS, ExpressJS,
					MongoDB, Flutter, Prisma. If you would like to explore my
					projects, you can find them on my &rdquo;
					<Link href="https://github.com/ronit18" target="_blank">
						Github
					</Link>
					&rdquo; page. For further details about my qualifications
					and experiences, please refer to my &ldquo;
					<Link
						href="/RonitGandhi-resume.pdf"
						download
						target="_blank"
						rel="noopener noreferrer"
					>
						Resume
					</Link>
					&rdquo;.
				</p>
				<Box paddingTop={2} align="center" my={4}>
					<NextLink href="/projects" passHref scroll={false}>
						<Button
							rightIcon={<ChevronRightIcon />}
							colorScheme="teal"
							className="glow-on-hover"
							aria-label="projects-page"
						>
							My projects
						</Button>
					</NextLink>
				</Box>
			</Section>
		</div>
	);
};

export default Aboutme;
