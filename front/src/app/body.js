"use client";

import {React, useState} from 'react';
import { Flex, Text, Spacer, Box } from '@chakra-ui/react';

import { useTheme } from '@/context/ThemeContext';

import TextP from "@/components/bricks/TextP";
import TextS from '@/components/bricks/TextS';
import InputType1 from '@/components/bricks/InputType1';
import TextN from '@/components/bricks/TextN';
import ButtonType1 from "@/components/bricks/ButtonType1";

import LocalStorageHelper from '@/utils/LocalStorageHelper';

export default function Body() {

    const [value, setValue] = useState('');
    const [pureCode, setPureCode] = useState('');

    const handleChange = (event) => {
        const rawValue = event.target.value;
        
        // 1. Remove qualquer caractere que NÃO seja dígito (0-9) ou letra (a-z, A-Z)
        // O `g` garante que a substituição ocorra globalmente em toda a string.
        const alphanumericOnly = rawValue.replace(/[^a-zA-Z0-9]/g, '');

        // 2. Converte todas as letras para maiúsculas
        const uppercaseAlphanumeric = alphanumericOnly.toUpperCase();

        // 3. Limita o tamanho da sequência a 6 caracteres alfanuméricos.
        const limitedChars = uppercaseAlphanumeric.slice(0, 6);

        // 4. Formata a string para adicionar um hífen entre cada caractere.
        let formattedValue = '';
        for (let i = 0; i < limitedChars.length; i++) {
            formattedValue += limitedChars[i];
            // Adiciona o hífen se não for o último caractere e houver mais a serem digitados
            if (i < limitedChars.length - 1) {
                formattedValue += '-';
            }
        }

        setValue(formattedValue);
        setPureCode(limitedChars);
    };


    const { theme, toggleTheme } = useTheme();
    const storage = new LocalStorageHelper();

    //tenta obter o nome do aluno do localStorage verificando se esta no modo cliente
    const studentName = typeof window !== 'undefined' ? storage.getItem('studentName') : null;
    let dayPeriod = ""
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        dayPeriod = "Bom dia";
    }
    else if (currentHour < 18) {
        dayPeriod = "Boa tarde";
    } else {
        dayPeriod = "Boa noite";
    }
    
    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            flex="1"
            background={theme.colors.background}>

            <Flex 
                direction="column"
                align="center"
                justify="center"
                w={["95%", "70%", "40%"]}
                padding={20}
                bg={theme.colors.surface}
                borderRadius="30px"
                color={theme.colors.onSurface}>

                    <TextS color={theme.colors.onSurface}>
                        {dayPeriod}, {studentName || "Aluno"}! Bem-vindo ao Exam.
                    </TextS>

                
                    <TextP
                        mt={8}
                        fontFamily="'Montserrat Variable', sans-serif"
                        color={theme.colors.onSurface}>
                            Digite o código da sua prova para começar.
                    </TextP>

                    <InputType1
                        mt={4}
                        value={value}
                        onChange={handleChange}
                        textAlign="center"
                        placeholder="Ex: A-1-B-2-C-3" 
                        maxLength={11} 
                        type="text" 
                        pattern="[A-Z0-9-]{0,11}"
                    />
                    <TextN
                        mt={2}
                        color={theme.colors.onSurface}>
                            O código da prova é fornecido pelo professor.
                    </TextN>
    
                    
                    
                    <ButtonType1 onClick={toggleTheme} mt={6}>
                        Mudar Tema
                    </ButtonType1>
                </Flex>
        </Flex>
    );
}