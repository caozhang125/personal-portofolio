import {Button, ButtonGroup, Flex, Grid, GridItem, VStack} from "@chakra-ui/react";
import {useState} from "react";
import {Section, Page} from "./ISections";
import CarouselItem from "./CarouselItem";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";

interface Props {
    section: Section;
}
const Carousel = ({section}:Props) => {
    // const [trackIsActive, setTrackIsActive] = useState(false);
    // const [multiplier, setMultiplier] = useState(0.35);
    // const [sliderWidth, setSliderWidth] = useState(0);
    // const [activeItem, setActiveItem] = useState(0);
    // const [constraint, setConstraint] = useState(0);
    // const [itemWidth, setItemWidth] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? 0 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex === section.pages.length - 1 ? section.pages.length - 1 : prevIndex + 1));
    };
    return (
        <>
            <Grid   h='100%'
                    templateRows='repeat(2, 1fr)'
                    templateColumns="repeat(3, 1fr)"
                    gap={2}>
                <GridItem rowSpan={1} colSpan={3} justifyContent="center">
                    <CarouselItem page={section.pages[currentIndex]}/>
                </GridItem>
                <GridItem rowSpan={1}  colSpan={3} justifyContent="center">
                    <ButtonGroup gap='2'>
                        <Button
                            onClick={handlePrev}
                            // ml={`${gap / 3}px`}
                            color="gray.500"
                            variant="link"
                            zIndex={2}
                            minW={0}
                        >
                            <ChevronLeftIcon boxSize={9} />
                        </Button>
                        <Button
                            onClick={handleNext}
                            // ml={`${gap / 3}px`}
                            color="gray.500"
                            variant="link"
                            zIndex={2}
                            minW={0}
                        >
                            <ChevronRightIcon boxSize={9} />
                        </Button>
                    </ButtonGroup>
                </GridItem>
            </Grid>
        </>
    );
}

export default Carousel;
