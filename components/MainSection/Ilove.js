import React from "react";

import { Heading } from "@chakra-ui/react";
import Paragraph from "../../components/paragraph";
import Section from "../../components/section";

const Ilove = () => {
	return (
		<Section delay={0.3}>
			<Heading as="h3" variant="section-title">
				I ♥
			</Heading>
			<Paragraph>
				Art, Music, Photography, Web Development, Web Designing, Machine
				Learning
			</Paragraph>
		</Section>
	);
};

export default Ilove;
