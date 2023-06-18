import { Box } from "@chakra-ui/react";
import { Navbar } from "../Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Countries } from "../Countries/Countries";

export const Routers = () => {
    return (
        <>
            <Box>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Countries />} />
                </Routes>
            </Box>
        </>
    );
}