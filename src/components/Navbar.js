import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { Container, Box, Button, Spacer, Flex, Heading } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <Container maxW='80%' marginTop={20}>
            <Flex>
                <Box>
                    <Heading size='sm' paddingTop={1}>Portfolio</Heading>
                </Box>
                <Spacer />
                <Box>
                    <Link to='/'>
                        <Button leftIcon={<AiOutlineHome />} size='sm' colorScheme='gray' variant='ghost'>Accueil</Button>
                    </Link>
                    <Link to='/Work'>
                        <Button size='sm' colorScheme='gray' variant='ghost'>Projets</Button>
                    </Link>
                </Box>
            </Flex>
        </Container >
    )
}

export default Navbar;