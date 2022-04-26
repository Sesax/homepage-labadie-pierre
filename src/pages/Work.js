import React from "react";
import { Link } from "react-router-dom";
import blockchain from '../assets/blockchain.jpg';
import labyrinth from '../assets/labyrinth.jpg';
import mailapi from '../assets/mailapi.png';
import portfolio from '../assets/portfolio.png';
import fcdigital from '../assets/fcdigital.jpg';
import petitbateau from '../assets/petitbateau.jpg';
import { motion } from 'framer-motion';
import { Container, Box, Center, Heading, Text, WrapItem, Wrap, Image } from '@chakra-ui/react';

const Work = () => {
    return (
        <Container maxW='80%' marginTop={120}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <Center>
                    <Heading marginBottom={8} color='black' size='sm'>Différents projets !</Heading>
                </Center>
                <Center textAlign='center'>
                    <Heading w={600} color='black' size='3xl'>Ici vous trouverez certains de mes travaux récents ainsi que mes expériences professionnelles</Heading>
                </Center>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <Box marginTop={20}>
                    <Wrap justify='center' spacing={20}>
                        <WrapItem w='700px' h='437px'>
                            <Link to='/Veille'>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Image src={blockchain} alt='Blockchain' borderRadius={20} />
                                </motion.div>
                            </Link>
                        </WrapItem>
                        <WrapItem w='600px' h='464px'>
                            <Box margin={5}>
                                <Heading color='black' size='2xl'>Veille actuelle</Heading>
                                <Text marginTop={5} color='gray.700' size='xs'>Dans un monde où la cybersécurité devient de plus en plus importante, la blockchain pourrait répondre à différentes problèmatiques rencontrées par les développeurs. Notamment parce que celle-ci promet, de par sa structure, une intégrité à toute épreuve, une très bonne fiabilité, en effet, la blockchain est grâce à ses mechanismes de concensus proche d'inattaquable. Et enfin, elle est transparente.</Text>
                                <Heading color='black' size='xl' marginTop={2}>Ethique</Heading>
                                <Text marginTop={5} color='gray.700' size='xs'>La Blockchain peut aussi répondre à la problèmatique de l'utilisation des données personnelles par les entreprises, grâce à elle, on pourrait avoir le contrôle total sur nos données puisque le méchanisme est décentralisé.</Text>
                            </Box>
                        </WrapItem>
                    </Wrap>
                </Box>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <Center>
                    <Heading color='black' size='2xl' marginTop={10}>Projets</Heading>
                </Center>
                <Box marginTop={16}>
                    <Wrap justify='center' spacing={5}>
                        <WrapItem backgroundImage={mailapi} backgroundPosition="center" backgroundRepeat="no-repeat" w={470} h={240}>
                            <motion.div
                                whileHover={{ backgroundColor: 'rgba(0, 0, 0, .4)' }}
                            >
                                <Box w={470} h={240}>
                                    <Center textAlign='center'>
                                        <Heading fontWeight='extrabold' color='white' size='md' marginTop={20} textShadow='1px 1px #000000'>API de gestion de mail</Heading>
                                    </Center>
                                    <Center textAlign='center'>
                                        <Heading color='gray.100' size='xs' marginTop={5}>Créé avec Symfony et MySQL</Heading>
                                    </Center>
                                </Box>
                            </motion.div>
                        </WrapItem>
                        <WrapItem backgroundImage={portfolio} backgroundPosition="center" backgroundRepeat="no-repeat" w={470} h={240}>
                            <motion.div
                                whileHover={{ backgroundColor: 'rgba(0, 0, 0, .4)' }}
                            >
                                <Box w={470} h={240}>
                                    <Center textAlign='center'>
                                        <Heading fontWeight='extrabold' color='white' size='md' marginTop={20} textShadow='1px 1px #000000'>Ce site web</Heading>
                                    </Center>
                                    <Center textAlign='center'>
                                        <Heading color='gray.100' size='xs' marginTop={5}>Créé avec React et Chakra UI</Heading>
                                    </Center>
                                </Box>
                            </motion.div>
                        </WrapItem>
                        <WrapItem backgroundImage={labyrinth} backgroundPosition="center" backgroundRepeat="no-repeat" w={470} h={240}>
                            <motion.div
                                whileHover={{ backgroundColor: 'rgba(0, 0, 0, .4)' }}
                            >
                                <Box w={470} h={240}>
                                    <Center textAlign='center'>
                                        <Heading fontWeight='extrabold' color='white' size='md' marginTop={20} textShadow='1px 1px #000000'>Jeu de labyrinthe 2D</Heading>
                                    </Center>
                                    <Center textAlign='center'>
                                        <Heading color='gray.100' size='xs' marginTop={5}>Créé avec Java et LibGDX</Heading>
                                    </Center>
                                </Box>
                            </motion.div>
                        </WrapItem>
                    </Wrap>
                </Box>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 1 }}
            >
                <Center>
                    <Heading color='black' size='2xl' marginTop={16}>Experiences</Heading>
                </Center>
                <Box marginTop={16}>
                    <Wrap justify='center' spacing={5}>
                        <WrapItem w={600} h={150}>
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                            >
                                <Image borderRadius='full' boxSize='150px' src={fcdigital} alt='FcDigital'></Image>
                            </motion.div>
                            <Box w={440} h={150} marginLeft={10}>
                                <Heading marginTop={50} size='xs'>Du 10 Janvier 2022 au 04 Fevrier 2022</Heading>
                                <Heading size='md'>Stage chez Fc Digital</Heading>
                            </Box>
                        </WrapItem>
                        <WrapItem w={600} h={150}>
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                            >
                                <Image borderRadius='full' boxSize='150px' src={petitbateau} alt='FcDigital'></Image>
                            </motion.div>
                            <Box w={440} h={150} marginLeft={10}>
                                <Heading marginTop={50} size='xs'>Du 25 Mai 2021 au 02 Juillet 2021</Heading>
                                <Heading size='md'>Stage chez Petit Bateau</Heading>
                            </Box>
                        </WrapItem>
                    </Wrap>
                </Box>
            </motion.div>
            <Center>
                <Text marginTop={20} marginBottom={20} size='xs' color='gray.500'>© 2022 Pierre Labadie all rights reserved.</Text>
            </Center>
        </Container>
    );
}

export default Work;