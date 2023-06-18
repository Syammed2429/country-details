import { Box } from "@chakra-ui/react";
import countiedData from '../../assets/data.json'
import { useEffect } from "react";

export const Countries = () => {

    useEffect(() => {
        console.log('data', countiedData);

    }, []);
    return (
        <>
            <Box>
                Countries
            </Box>
        </>
    );
};