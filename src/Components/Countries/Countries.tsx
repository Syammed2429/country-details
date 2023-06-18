import { AspectRatio, Box, Card, CardBody, Flex, Image, Input, Select, SimpleGrid, Spacer, Spinner, Text, useBreakpointValue } from "@chakra-ui/react";
import countiesData from '../../assets/data.json'
import { ChangeEvent, useEffect, useState } from "react";
import { CountryData } from "../../Interfaces/Interface";
import { useNavigate } from "react-router-dom";

export const Countries = () => {
    const [countries, setCountries] = useState<CountryData[]>([]); // Initialize with an empty array
    const [filteredCountries, setFilteredCountries] = useState<CountryData[] | null>(null);

    // const [countries, setCountries] = useState<CountryData[] | null>(null)
    const navigate = useNavigate()
    const flexDir = useBreakpointValue({
        base: "column",
        md: "row",
    }) as any;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const countryName = e.target.value;
        if (countryName.trim() === '') {
            setFilteredCountries(null);
        } else {
            const foundData = countries?.filter((el) => el.name.includes(countryName));
            setFilteredCountries(foundData ?? []);
        }
    };


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

        // }

    }, []);

    const viewCountry = (numericCode: string): void => {
        navigate(`/country-details/${numericCode}`)
    }

    return (
        <>
            {/* FIlter and search section start */}
            <Box my={10}>
                <Flex direction={flexDir} alignItems="center" mb={4}>
                    <Input
                        type="text"
                        onChange={handleChange}
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

            <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing="8" mx={5}

            >

                {!countries?.length ? (
                    <Spinner />
                ) : null
                }
                {countries &&
                    (filteredCountries || countries).map((el, i) => (
                        <Card key={i}
                            _hover={{ cursor: 'pointer' }}
                            onClick={() => viewCountry(el.numericCode)}
                        >

                            <Box w="100%">
                                <AspectRatio ratio={3 / 2}>
                                    <Image
                                        boxSize="100%"
                                        objectFit="cover"
                                        src={el.flags.svg}
                                        alt={el.name}
                                    />
                                </AspectRatio>
                            </Box>
                            <CardBody>
                                <Text fontWeight="800"
                                    fontSize='xl'
                                    mb={5}
                                >
                                    {el.name}
                                </Text>
                                <Flex >
                                    <Text fontWeight="600">Population:</Text>
                                    <Text
                                        mx={2}
                                    >{el.population}</Text>
                                </Flex>
                                <Flex >
                                    <Text fontWeight="600">Regions: </Text>
                                    <Text
                                        mx={2}
                                    >{el.region}</Text>
                                </Flex>
                                <Flex >
                                    <Text fontWeight="600">Capital: </Text>
                                    <Text
                                        mx={2}
                                    >{el.capital}</Text>
                                </Flex>

                            </CardBody>
                        </Card>
                    ))}
            </SimpleGrid>


        </>
    );
};