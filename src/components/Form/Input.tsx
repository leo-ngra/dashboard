
import { Input as ChakraInput, InputProps as ChakraInputProps, FormLabel, FormControl } from '@chakra-ui/react'


interface InputProps extends ChakraInputProps {
   name: string;
   label?: string;
}


   export function Input({label, name, ...rest}: InputProps){
   return (
      <FormControl>
         { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
         <ChakraInput
            name={name}
            id={name}
            focusBorderColor="pink.400"
            size="lg"
            _hover={{
               bgColor: "gray.900"
            }}
            {...rest}
         />

      </FormControl>
   )
}
