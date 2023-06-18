import { Box, Flex, Input, Select, SimpleGrid, Spacer, useBreakpointValue, useColorMode } from "@chakra-ui/react";
import countiedData from '../../assets/data.json'
import { useEffect } from "react";

export const Countries = () => {
    // 4
    const { colorMode } = useColorMode();
    // const placeholderColor = colorMode === 'dark' ? 'white' : 'darkGray';


    const flexDir = useBreakpointValue({
        base: "column",
        md: "row",
    }) as any;

    useEffect(() => {
        console.log('data', countiedData);

    }, []);
    return (
        <>
            {/* FIlter and search section start */}
            <Box my={10}>
                <Flex direction={flexDir} alignItems="center" mb={4}>
                    <Input
                        type="text"
                        placeholder="Search for a country..."
                        mr={{ base: 0, md: 2 }}
                        mb={{ base: 4, md: 0 }}
                        w={'30%'}
                    />

                    <Spacer />
                    <Select
                        w={'20%'}
                        fontWeight='600'
                        placeholder="Filter By Region">
                        <option
                            style={{ fontWeight: '600' }}
                            value="Africa">Africa</option>
                        <option style={{ fontWeight: '600' }} value="America">America</option>
                        <option style={{ fontWeight: '600' }} value="Asia">Asia</option>
                        <option style={{ fontWeight: '600' }} value="Europe">Europe</option>
                        <option style={{ fontWeight: '600' }} value="Oceania">Oceania</option>
                    </Select>
                </Flex>
            </Box>
            {/* FIlter and search section end */}

        </>
    );
};