import { useParams } from "react-router-dom";
import countiesData from '../../assets/data.json'
import { useEffect, useState } from "react";
import { CountryData } from "../../Interfaces/Interface";
import { AspectRatio, Box, Button, Card, Container, Flex, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { IoMdArrowBack } from 'react-icons/io'

export const CountryDetail = () => {
    const [countries, setCountries] = useState<CountryData[] | null>(null)
    const [countryDetails, setCountryDetails] = useState<CountryData | null>(null);


    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const convertedData: any[] = countiesData.map((item) => ({
            name: item.name,
            topLevelDomain: item.topLevelDomain,
            alpha2Code: item.alpha2Code,
            alpha3Code: item.alpha3Code,
            callingCodes: item.callingCodes,
            capital: item.capital || undefined,
            altSpellings: item.altSpellings || undefined,
            subregion: item.subregion,
            region: item.region,
            population: item.population,
            latlng: item.latlng,
            demonym: item.demonym,
            area: item.area,
            timezones: item.timezones,
            borders: item.borders,
            nativeName: item.nativeName,
            numericCode: item.numericCode,
            flags: item.flags,
            currencies: item.currencies,
            languages: item.languages,
            translations: item.translations,
            flag: item.flag,
            regionalBlocs: item.regionalBlocs,
            cioc: item.cioc,
            independent: item.independent
        }));

        setCountries(convertedData);

        console.log('countries:', countries)
        const countryDetails = countries?.find(country => country.numericCode === id)
        console.log('countryDetails:', countryDetails)

        // }

    }, []);
    useEffect(() => {
        const country = countries?.find((country) => country.numericCode === id);
        console.log('country:', country)
        setCountryDetails(country as CountryData);
    }, [countries, id]);

    return (
        <>
            <Box
                // mt={8}
                mt={8} px={8} py={4}
            >
                <Button
                    m={8}
                    leftIcon={<IoMdArrowBack />}
                >Back</Button>

                {countryDetails ? (
                    <Flex
                        direction={{ base: "column", md: "column", lg: 'row' }}
                        mx={8}
                    >
                        <Box
                            px={8} py={4}
                        // w="80%"
                        >
                            <Image
                                boxSize={{ base: "100%", md: "100%", lg: '80%' }}


                                // boxSize="85%"
                                objectFit="cover"
                                src={countryDetails?.flags.svg}
                                alt={countryDetails?.name}
                            />
                        </Box>

                        {/* <Spacer /> */}
                        <Box

                            px={8} py={4} mt={{ base: 8, md: 8 }}

                            w="70%"
                        >
                            <Text fontWeight={'extrabold'}
                                fontSize={"4xl"}
                                mb={10}
                            >{countryDetails?.name}</Text>
                            <Flex
                                direction={{ base: "column", md: "column", lg: "row" }}
                                justifyContent={{ base: "flex-start", md: "space-between" }}
                            >
                                <Box


                                >
                                    <Text mb={2}>Native Name: <span className="">{countryDetails?.nativeName}</span></Text>
                                    <Text mb={2}>Population: <span>{countryDetails?.population}</span></Text>
                                    <Text mb={2}>Region: <span className="text-stone-400	text-md">{countryDetails?.region}</span></Text>
                                    <Text mb={2}>Sub Region: <span>{countryDetails?.subregion}</span></Text>
                                    <Text mb={2}>Capital: <span>{countryDetails?.capital}</span></Text>
                                </Box>
                                <Box>
                                    <Text mb={2}>Top Level Domain: <span>{countryDetails?.topLevelDomain}</span></Text>
                                    <Flex>

                                        <Text mb={2}>Currencies: </Text>
                                        {countryDetails?.currencies?.map((currency) => (
                                            <Box key={currency.code}
                                                mx={1}
                                            >
                                                {currency.name})
                                            </Box>
                                        ))}
                                    </Flex>
                                    <Flex>
                                        <Text mb={2}>Languages:</Text>
                                        {countryDetails?.languages?.map((language) => (
                                            <Box key={language.iso639_1}
                                                mx={1}
                                            >
                                                {language.name},
                                            </Box>
                                        ))}
                                    </Flex>
                                </Box>
                            </Flex>
                            <Flex flexWrap="wrap"
                                mt={12}
                            >
                                Border Countries:
                                <Flex>
                                    {countryDetails.borders ? (
                                        countryDetails.borders.map((el, i) => (
                                            <Card key={i} w="auto" px={5} mx={1}>
                                                {el}
                                            </Card>
                                        ))
                                    ) : (
                                        <Text>No Borders</Text>
                                    )}
                                </Flex>
                            </Flex>

                        </Box>
                    </Flex>
                ) : (
                    <Box>some</Box>
                )}



            </Box >

        </>
    );
}