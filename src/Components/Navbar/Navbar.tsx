import { Box, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import {
    BsMoonFill,
    BsSunFill,
} from "react-icons/bs";

export const Navbar: FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>

            <Box

            >
                <Flex
                    // mx={{ base: 0, md: 16 }}

                    boxShadow="2xl" p="5" alignItems="center" w="100%">
                    <Text flex="1"
                        fontWeight={'800'}
                    >Where in the world?</Text>
                    <HStack fontSize="18">
                        <Box
                            _hover={{ cursor: "pointer" }}
                            display="flex" alignItems="center" onClick={toggleColorMode}>
                            {colorMode === "light" ? (
                                <>
                                    <BsMoonFill />
                                    <Text ml="2">Dark Mode</Text>
                                </>
                            ) : (
                                <>
                                    <BsSunFill />
                                    <Text ml="2">Light Mode</Text>
                                </>
                            )}
                        </Box>
                    </HStack>
                </Flex>
            </Box>
        </>
    );
}