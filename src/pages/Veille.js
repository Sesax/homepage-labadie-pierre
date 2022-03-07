import React from "react";
import blocks from '../assets/blocks.jpg';
import contract from '../assets/contract.jpg';
import plante from '../assets/plante.jpg';
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
                    <Box marginTop={20} width={1000}>
                        <Center>
                            <Heading color='black' size='2xl'>Qu'est ce qu'une Blockchain ?</Heading>
                        </Center>
                        <Center textAlign='center'>
                            <Text marginTop={5} color='gray.700' size='xs'>Une Blockain est une base de données distribuée totalement transparente et très sécurisée fonctionnant sans organe de contrôle central. Ses applications sont diverses et profitent du grand avantage de son aspect décentralisé, avec notemment la plus connue, celle de la finance avec les cryptomonnaies où on supprimera l'intermédiaire qui est la banque.</Text>
                        </Center>
                    </Box>
                </Center>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <Box marginTop={20}>
                    <Wrap justify='center' spacing={20}>
                        <WrapItem w='400px' h='400px'>
                            <Image src={blocks} alt='Blockchain' borderRadius={20} boxSize='400px' />
                        </WrapItem>
                        <WrapItem w='700px' h='464px'>
                            <Box margin={5}>
                                <Heading color='black' size='2xl'>Fonctionnement</Heading>
                                <Text marginTop={5} color='gray.700' size='xs'>La Blockchain, comme son nom l'indique, est une chaine de blocs dans lesquels les données sont inscrites. A chaque fois qu'un utilisateur agit sur la blockchain pour stocker une nouvelle donnée, elle est enregistrée dans le dernier bloc de la chaine. Une fois ce bloc "plein" de données, il est validé ou non par les mineurs du réseau et est ajouté ou non à la chaine.</Text>
                                <Heading color='black' size='xl' marginTop={3}>Minage</Heading>
                                <Text marginTop={5} color='gray.700' size='xs'>Les mineurs sont chargés de vérifier l'authenticité des nouvelles données en résolvant des problèmes mathématiques complèxes. Ils sont ensuite récompensés pour le travail qu'ils ont fourni. N'importe qui peut devenir mineur à condition d'avoir le materiel necessaire.</Text>
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
                <Box>
                    <Wrap justify='center' spacing={20}>
                        <WrapItem w='540px' h='380px'>
                            <Box margin={5}>
                                <Heading color='black' size='2xl'>Smart Contract</Heading>
                                <Text marginTop={5} color='gray.700' size='xs'>Un Smart Contract (Contract intélligent) est un contract qui s'appuie sur la technologie de la Blockchain pour rendre infalsifiable et totalement transparents les termes et les conditions de celui-ci. Ceux-ci ne sont cepandant pas disponibles sur toutes les Blockchains, la blockchain Bitcoin, par exemple, n'en bénéficie pas.</Text>
                            </Box>
                        </WrapItem>
                        <WrapItem w='600px' h='300px'>
                            <Image src={contract} alt='Contract' borderRadius={20} marginTop={5} />
                        </WrapItem>
                    </Wrap>
                </Box>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 1 }}
            >
                <Box>
                    <Wrap justify='center' spacing={20}>
                        <WrapItem w='540px' h='300px'>
                            <Box margin={5} textAlign='center'>
                                <Heading color='black' size='2xl'>Assurance</Heading>
                                <Text marginTop={5} color='gray.700' size='xs'>Un exemple d'application des smart contracts commun est celui des assurances. On pourrait imaginer une application vérifiant les horaires d'un vol d'avion, et rembourssant ou non le voyageur selon l'heure de départ de l'avion, qui sera récupérée grâce à un Oracle. Plus besoin d'envoyer les documents cértifiants que le vol a bien été retardé et attendre de longs delais pour se faire rembourser.</Text>
                            </Box>
                        </WrapItem>
                        <WrapItem w='540px' h='300px'>
                            <Box margin={5} textAlign='center'>
                                <Heading color='black' size='2xl'>Oracle</Heading>
                                <Text marginTop={5} color='gray.700' size='xs'>Un Oracle est une entité permettant de faire le lien entre la blockchain et le monde en réel. Elle peut aussi bien intégrer des données du monde réel (températures, résultats sportifs, horaires de vols...) à un smart contracts que l'inverse. Un Oracle se doit de récupérer des données de sources bien différentes de façon à s'assurer de la fiabilité de la donnée.</Text>
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
                <Box>
                    <Wrap justify='center' spacing={20}>
                        <WrapItem w='600px' h='300px'>
                            <Image src={plante} alt='Plante' borderRadius={20} marginTop={5} />
                        </WrapItem>
                        <WrapItem w='540px' h='380px'>
                            <Box margin={5}>
                                <Heading color='black' size='2xl'>Impact Environmental</Heading>
                                <Text marginTop={5} color='gray.700' size='xs'>Certaines Blockchains polluent énormement. Cette pullution est expliquée par la puissance de calcul nécessaire pour valider les nouveaux blocs proposés par le réseau. Néanmoins, beaucoup d'ingénieurs travaillent sur des solutions pour résoudre ce problème et celle qui revient le plus souvent est le "Proof of Stake" (PoS). Les blockchains utilisant ce mécanisme de consensus polluent nettement moins que celles utilisant le "Proof of Work" (PoW) comme le Bitcoin.</Text>
                            </Box>
                        </WrapItem>
                    </Wrap>
                </Box>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5, duration: 1 }}
            >
                <Box>
                    <Wrap justify='center' spacing={20}>
                        <WrapItem w='540px' h='300px'>
                            <Box margin={5} textAlign='center'>
                                <Heading color='black' size='2xl'>Proof of Work</Heading>
                                <Text marginTop={5} color='gray.700' size='xs'>Le Proof of Work (Preuve de travail) est un mécanisme de consensus dans lequel tous les mineurs du réseaux doivent résoudre un problème mathématique extrémement compliqué. Le premier mineur à le résoudre gagne le droit de proposer sa solution au reste du réseau qui le validera ou non. Une fois le bloc validé, il est ajouté à la chaine est devient immuable.</Text>
                            </Box>
                        </WrapItem>
                        <WrapItem w='540px' h='300px'>
                            <Box margin={5} textAlign='center'>
                                <Heading color='black' size='2xl'>Proof of Stake</Heading>
                                <Text marginTop={5} color='gray.700' size='xs'>Le Proof of Stake (Preuve d'enjeu) est lui aussi un mécanisme de consensus mais celui-ci ne nécessite pas de grosse puissance de calcul. Il repose sur un système de staking de jeton, plus l'utilisateur stake de jeton, plus il a de chance d'être choisi pour vérifier le prochain bloc (et moins il a de raison de vouloir attaquer le réseau). Ce mécanisme est moins sécurisé mais résout le problème écologique.</Text>
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