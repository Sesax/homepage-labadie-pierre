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
                    <Button leftIcon={<AiOutlineHome />} size='sm' colorScheme='gray' variant='ghost'>
                        <Link to='/'>Accueil</Link>
                    </Button>
                    <Button size='sm' colorScheme='gray' variant='ghost'>
                        <Link to='/Work'>Projets</Link>
                    </Button>
                </Box>
            </Flex>
        </Container>
    )
}

export default Navbar;