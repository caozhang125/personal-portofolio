import {Box, Heading, Image, SimpleGrid, Text} from '@chakra-ui/react'
import React from "react";
import {Page} from "./ISections";

interface Props {
    page: Page;
}
const CarouselItem = ({page}:Props) => {
    return (
        <SimpleGrid spacing={5} minChildWidth='250px'>
            <Box>
                {/*<Image src={page.img} alt={page.title} />*/}
                <Image src='./personal-portofolio/images/home.png' alt={page.title} />
            </Box>
            <Box>
                <Heading> {page.title} </Heading>
                <Text> {page.description} </Text>
            </Box>
        </SimpleGrid>
    )
}

export default CarouselItem;
