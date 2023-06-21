import { useNavigate, useParams } from "react-router-dom";
import countiesData from '../../assets/data.json'
import { useEffect, useState } from "react";
import { CountryData } from "../../Interfaces/Interface";
import { Box, Button, Card, Flex, Image, Text } from "@chakra-ui/react";
import { IoMdArrowBack } from 'react-icons/io'

export const CountryDetail = () => {
    const [countries, setCountries] = useState<CountryData[] | null>(null)
    const [countryDetails, setCountryDetails] = useState<CountryData | null>(null);
    const navigate = useNavigate()


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
    }, []);
    useEffect(() => {
        const country = countries?.find((country) => country.numericCode === id);
        setCountryDetails(country as CountryData);
    }, [countries, id]);

    return (
        <>
            <Box
                mt={{ base: 0, md: 8 }} px={{ base: 0, md: 8 }} py={{ base: 0, md: 4 }}
            >
                <Button
                    onClick={() => (navigate(-1))}
                    m={8}
                    mx={{ base: 7, md: 16 }}
                    leftIcon={<IoMdArrowBack />}
                >Back</Button>

                {countryDetails ? (
                    <Flex
                        direction={{ base: "column", md: "column", lg: 'row' }}
                        mx={8}
                    >
                        <Box
                            px={{ base: 0, md: 8 }} py={{ base: 0, md: 4 }}
                        >
                            <Image
                                boxSize={{ base: "100%", md: "100%", lg: '80%' }}
                                objectFit="cover"
                                src={countryDetails?.flags.svg}
                                alt={countryDetails?.name}
                            />
                        </Box>
                        <Box
                            px={{ base: 0, md: 8 }} py={{ base: 0, md: 4 }} mt={{ base: 8, md: 8 }}
                            w="70%"
                        >
                            <Text fontWeight={'extrabold'}
                                fontSize={"4xl"}
                                mb={10}
                                w='100%'
                            >{countryDetails?.name}</Text>
                            <Flex
                                direction={{ base: "column", md: "column", lg: "row" }}
                                justifyContent={{ base: "flex-start", md: "space-between" }}
                            >
                                <Box>
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
                                                {currency.name}
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
                            <Flex
                                flexWrap="wrap"
                                mt={12}
                                w={{ base: '10rem', md: '100%' }}
                            >
                                Border Countries:
                                <Flex
                                    flexWrap="wrap"
                                    justify='space-around'

                                >
                                    {countryDetails.borders ? (
                                        countryDetails.borders.map((el, i) => (
                                            <Card key={i} w="auto"
                                                px={2} mx={0}
                                            >
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