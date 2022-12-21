import React from "react";
import NextLink from "next/link";

import { Link, Heading, Box, Button } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Section from "../../components/section";

const Aboutme = () => {
	return (
		<div>
			<Section delay={0.1}>
				<Heading as="h3" variant="section-title">
					About me
				</Heading>
				I am a student 👨‍🎓 of Instrumentation and Control Engineering
				currently studying at GEC,Gandhinagar. I am a python and
				web-developer🌟. Currently Im learning more about programming
				languages and Linux OS. I am good listener and flexible kind of
				person. I can adjust in any department which is releted to my
				knowledge. I can give all my dedication and hardwork to the
				project/Work I take. I have good knowledge of PLC, Python, Html,
				Microsoft office, C/C++, CSS(TailWindCSS🧷), JavaScript,
				ReactJs, NextJS, ExpressJS, MongoDB. I have my many Projects ,
				you can check it out on my &rdquo;
				<Link href="https://github.com/ronit18" target="_blank">
					Github
				</Link>
				&rdquo;. Check Out my &ldquo;
				<Link
					href="/RonitGandhi-resume.pdf"
					download
					target="_blank"
					rel="noopener noreferrer"
				>
					Resume
				</Link>
				&rdquo;.
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
