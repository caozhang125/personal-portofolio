
import {Outlet} from 'react-router-dom'
import { SimpleGrid } from "@chakra-ui/react";

const RootLayout = () => {
    return (
        <SimpleGrid>
            <Outlet/>
        </SimpleGrid>
    )
}
export default RootLayout
