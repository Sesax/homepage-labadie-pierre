import React from "react";
import stluc from '../assets/stluc.png';
import dampierre from '../assets/dampierre.jpg';
import epsi from '../assets/epsi.jpg';
import moi from '../assets/moi.png';
import { FaHtml5, FaReact, FaJava, FaJs, FaDocker, FaEthereum, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container, Box, Button, Center, Heading, Text, WrapItem, Wrap, Image, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <Container maxW='80%' marginTop={120}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <Center>
                    <Heading marginBottom={8} color='black' size='sm'>Hey I'm Pierre !</Heading>
                </Center>
                <Center textAlign='center'>
                    <Heading w={600} color='black' size='3xl'>BackEnd developer constantly learning new technologies</Heading>
                </Center>
                <Center textAlign='center'>
                    <Text marginTop={8} w={800} color='gray.700' size='xs'>Passionate about programming since I entered high school, I'm constantly searching for new knowledge and I am trying to be as versatile as I can in the world of computer science</Text>
                </Center>
                <Center>
                    <Button _hover={{ backgroundColor: 'black' }} size='md' bgColor='black' color='white' colorScheme='blackAlpha' borderRadius={0} variant='solid' marginTop={10}>
                        <Link to='/Contact'>CONTACT ME</Link>
                    </Button>
                </Center>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <Center>
                    <Heading color='black' size='2xl' marginTop={20}>Parcours scolaire</Heading>
                </Center>
                <Box marginTop={8}>
                    <Wrap justify='center' spacing={5}>
                        <WrapItem backgroundImage={stluc} backgroundPosition="center" backgroundRepeat="no-repeat" w={470} h={240}>
                            <motion.div
                                whileHover={{ backgroundColor: 'rgba(0, 0, 0, .4)' }}
                            >
                                <Box w={470} h={240}>
                                    <Center textAlign='center'>
                                        <Heading fontWeight='extrabold' color='white' size='md' marginTop={20} textShadow='1px 1px #000000'>Lycée</Heading>
                                    </Center>
                                    <Center textAlign='center'>
                                        <Heading color='gray.100' size='xs' marginTop={5}>Bac S SI spec ISN</Heading>
                                    </Center>
                                    <Center>
                                        <Button _hover={{ backgroundColor: 'black' }} size='md' bgColor='black' color='white' colorScheme='blackAlpha' borderRadius={0} variant='solid' marginTop={5}>
                                            <a href="https://www.saintluc-cambrai.com/">Plus d'infos</a>
                                        </Button>
                                    </Center>
                                </Box>
                            </motion.div>
                        </WrapItem>
                        <WrapItem backgroundImage={dampierre} backgroundPosition="center" backgroundRepeat="no-repeat" w={470} h={240}>
                            <motion.div
                                whileHover={{ backgroundColor: 'rgba(0, 0, 0, .4)' }}
                            >
                                <Box w={470} h={240}>
                                    <Center textAlign='center'>
                                        <Heading fontWeight='extrabold' color='white' size='md' marginTop={20} textShadow='1px 1px #000000'>Bac+2</Heading>
                                    </Center>
                                    <Center textAlign='center'>
                                        <Heading color='gray.100' size='xs' marginTop={5}>BTS SIO spec SLAM</Heading>
                                    </Center>
                                    <Center>
                                        <Button _hover={{ backgroundColor: 'black' }} size='md' bgColor='black' color='white' colorScheme='blackAlpha' borderRadius={0} variant='solid' marginTop={5}>
                                            <a href="https://lyceedampierre-valarep.fr/">Plus d'infos</a>
                                        </Button>
                                    </Center>
                                </Box>
                            </motion.div>
                        </WrapItem>
                        <WrapItem backgroundImage={epsi} backgroundPosition="center" backgroundRepeat="no-repeat" w={470} h={240}>
                            <motion.div
                                whileHover={{ backgroundColor: 'rgba(0, 0, 0, .4)' }}
                            >
                                <Box w={470} h={240}>
                                    <Center textAlign='center'>
                                        <Heading fontWeight='extrabold' color='white' size='md' marginTop={20} textShadow='1px 1px #000000'>Bac+3</Heading>
                                    </Center>
                                    <Center textAlign='center'>
                                        <Heading color='gray.100' size='xs' marginTop={5}>A venir</Heading>
                                    </Center>
                                    <Center>
                                        <Button _hover={{ backgroundColor: 'black' }} size='md' bgColor='black' color='white' colorScheme='blackAlpha' borderRadius={0} variant='solid' marginTop={5}>
                                            <a href="https://www.epsi.fr/">Plus d'infos</a>
                                        </Button>
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
                transition={{ delay: 2, duration: 1 }}
            >
                <Box marginTop={20}>
                    <Wrap justify='center' spacing={20}>
                        <WrapItem w='341px' h='464px'>
                            <Image src={moi} alt='Moi' />
                        </WrapItem>
                        <WrapItem w='341px' h='464px'>
                            <Box margin={5}>
                                <Heading color='black' size='2xl'>A propos de moi</Heading>
                                <Text marginTop={5} color='gray.700' size='xs'>Etudiant en informatique depuis 2 ans et actuellement en BTS, je suis un jeune développeur spécialisé en BackEnd mais ne laissant pas en reste le FrontEnd pour autant. Mon objectif étant d'être le plus polyvalent possible en tant que débutant.
                                    Une fois le stade de débutant dépassé, je souhaiterais me spécialiser dans le développement "Web 3.0" car j'y vois une grande partie du futur des infrastructures en informatique.</Text>
                            </Box>
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
                    <Heading color='black' size='2xl' marginTop={20}>Compétences</Heading>
                </Center>
                <Box marginTop={20}>
                    <Wrap justify='center' spacing={10}>
                        <WrapItem w={450} h={150}>
                            <Box w={450} h={150}>
                                <Center>
                                    <FaHtml5 size='50px' marginTop={5} />
                                </Center>
                                <Center textAlign='center'>
                                    <Text marginTop={2} color='gray.700' size='xs'>Durant mon BTS et en commençant la programmation, je suis passé par l'apprentissage du HTML/CSS dont je maîtrise les bases aujourd'hui</Text>
                                </Center>
                            </Box>
                        </WrapItem>
                        <WrapItem w={450} h={150}>
                            <Box w={450} h={150}>
                                <Center>
                                    <FaJs size='50px' marginTop={5} />
                                </Center>
                                <Center textAlign='center'>
                                    <Text marginTop={2} color='gray.700' size='xs'>Dans le cadre d'un projet personnel de développement d'un BOT Discord, j'ai l'occasion de prendre en mains JavaScript, que je maîtrise mieux ajourd'hui grâce au développement Web</Text>
                                </Center>
                            </Box>
                        </WrapItem>
                        <WrapItem w={450} h={150}>
                            <Box w={450} h={150}>
                                <Center>
                                    <FaReact size='50px' marginTop={5} />
                                </Center>
                                <Center textAlign='center'>
                                    <Text marginTop={2} color='gray.700' size='xs'>Grâce à la création de ce site puis à la mise en place de différents projets personnels avec le stack MERN, j'ai appris à utiliser le framework React ainsi que la librairie Chakra UI</Text>
                                </Center>
                            </Box>
                        </WrapItem>
                        <WrapItem w={450} h={150}>
                            <Box w={450} h={150}>
                                <Center>
                                    <FaJava size='50px' marginTop={5} />
                                </Center>
                                <Center textAlign='center'>
                                    <Text marginTop={2} color='gray.700' size='xs'>JAVA est le langage avec lequel j'ai fait mes premiers pas en programmation au lycée puis en BTS, j'ai aujourd'hui une compréhension assez bonne de celui-ci</Text>
                                </Center>
                            </Box>
                        </WrapItem>
                        <WrapItem w={450} h={150}>
                            <Box w={450} h={150}>
                                <Center>
                                    <FaDocker size='50px' marginTop={5} />
                                </Center>
                                <Center textAlign='center'>
                                    <Text marginTop={2} color='gray.700' size='xs'>J'ai acquis certaines bases en réseaux et en déploiement d'applications au cours de mes deux années de BTS, notamment avec la technologie Docker</Text>
                                </Center>
                            </Box>
                        </WrapItem>
                        <WrapItem w={450} h={150}>
                            <Box w={450} h={150}>
                                <Center>
                                    <FaEthereum size='50px' marginTop={5} />
                                </Center>
                                <Center textAlign='center'>
                                    <Text marginTop={2} color='gray.700' size='xs'>Interessé par la Blockchain, j'ai décidé d'étudier celle-ci, dans cette optique, j'ai appris à écrire des Smart Contracts avec le langage Solidity</Text>
                                </Center>
                            </Box>
                        </WrapItem>
                    </Wrap>
                </Box>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 1 }}
            >
                <Center>
                    <Heading color='black' size='2xl' marginTop={20}>Contact</Heading>
                </Center>
                <Center textAlign='center'>
                    <Heading w={600} marginTop={10} color='black' size='lg'>Vous pouvez me contacter à cette adresse</Heading>
                </Center>
                <Center textAlign='center'>
                    <Button size='lg' textDecoration='underline' color='black' variant='link' marginTop={5}>
                        <a href="mailto:labadiepierre59400@gmail.com">labadiepierre59400@gmail.com</a>
                    </Button>
                </Center>
                <Center marginTop={5}>
                    <HStack spacing={10}>
                        <a href="https://github.com/Sesax"><FaGithub size='30px' /></a>
                        <a href="https://www.linkedin.com/in/pierre-labadie-97a2321b8"><FaLinkedin size='30px' /></a>
                    </HStack>
                </Center>
            </motion.div>
            <Center>
                <Text marginTop={10} marginBottom={20} size='xs' color='gray.500'>© 2022 Pierre Labadie tout droits réservés.</Text>
            </Center>
        </Container >
    );
}

export default Home;