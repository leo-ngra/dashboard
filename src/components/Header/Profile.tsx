import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align='center'>
            <Box mr='4' textAlign='right'>
                <Text>Leonardo Nogueira</Text>
                <Text color='gray.300' fontSize='small'>
                    leonardo.ngra@gmail.com
                </Text>
            </Box>

            <Avatar size='md' name='Leonardo Nogueira' src='http://github.com/leo-ngra.png' />
        </Flex>
    )
}