import React from "react";
import { Document, Page } from "react-pdf";
import portefeuille from '../assets/portefeuille.pdf';
import { motion } from 'framer-motion';
import { Container, Center } from '@chakra-ui/react';

const Competences = () => {
    return (
        <Container maxW='80%'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <Center>
                    <Document file={portefeuille} options={{ workerSrc: "/pdf.worker.js" }}>
                        <Page scale={2} pageNumber={1} />
                    </Document>
                </Center>
            </motion.div>
        </Container>
    );
}

export default Competences;