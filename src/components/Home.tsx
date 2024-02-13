import React, {useEffect, useState} from "react";
import {
    Box,
    Grid,
    GridItem, Heading,
    Image, List, ListIcon, ListItem,
    SimpleGrid,
    Tab,
    TabIndicator,
    TabList,
    TabPanel,
    TabPanels,
    Tabs, Text
} from "@chakra-ui/react";
import {EmailIcon, PhoneIcon} from "@chakra-ui/icons";
import {ISections} from "./ISections";
import useFetch from "use-http";
import Carousel from "./Carousel";

const Home = () => {
    const[sections, setSections] = useState<ISections>();

    const {get, response, loading, error} = useFetch("./data")

    useEffect(() => {loadData()},[]);
    const loadData = async () => {
        const initialValue: ISections = await get('db.json');
        if (response.ok) {
            console.log('db data:'+initialValue);
            setSections(initialValue);
        }
    }
    return (
        <Grid>
            <GridItem>
                <Tabs isFitted m='40px' p='20px' variant='enclosed' colorScheme='purple'>
                    <TabList>
                        {sections?.sections?.map((section) => <Tab _selected={{color:'white', bg:'green.200'}} key={section.id}>{section.title}</Tab>)}
                        <Tab _selected={{color:'white', bg:'green.200'}} key='last'> Contact </Tab>
                    </TabList>
                    <TabIndicator
                        mt="-1.5px"
                        height="2px"
                        bg="blue.500"
                        borderRadius="1px"
                    />
                    <TabPanels>
                        {sections?.sections?.map((section) =>
                            <TabPanel key={section.id}>
                                <Carousel section={section}/>
                                {/*<SimpleGrid spacing={5} minChildWidth='250px'>*/}
                                {/*    <Box>*/}
                                {/*        <Image src={page.img} alt={page.title} />*/}
                                {/*    </Box>*/}
                                {/*    <Box>*/}
                                {/*        <Heading> Head here </Heading>*/}
                                {/*        <Text> {page.description} </Text>*/}
                                {/*    </Box>*/}
                                {/*</SimpleGrid>*/}
                            </TabPanel>)}
                        <TabPanel>
                            <SimpleGrid spacing={5} columns={2}>
                                <Box><Text>Picture here</Text></Box>
                                <Box>
                                    <List spacing={4} fontSize='1.2em'>
                                        <ListItem>
                                            <ListIcon as={EmailIcon} color='teal.400'/>
                                            Email: caozhang125@gmail.com
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={PhoneIcon} color='teal.400'/>
                                            Phone: xxxxxxx
                                        </ListItem>
                                    </List>
                                </Box>
                            </SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </GridItem>
        </Grid>
    );
};
export default Home;
