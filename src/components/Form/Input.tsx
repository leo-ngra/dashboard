
import { Input as ChakraInput, InputProps as ChakraInputProps, FormLabel, FormControl } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react';


interface InputProps extends ChakraInputProps {
   name: string;
   label?: string;
}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, name, ...rest }, ref) => {
   return (
      <FormControl>
         {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
         <ChakraInput
            name={name}
            id={name}
            focusBorderColor="pink.400"
            size="lg"
            _hover={{
               bgColor: "gray.900"
            }}
            ref={ref}
            {...rest}
         />

      </FormControl>
   )
}

export const Input = forwardRef(InputBase)
