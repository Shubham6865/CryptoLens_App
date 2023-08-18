import { Button, HStack} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import ColorModeSwither from '../ColorModeSwitcher';
const Header = () => {
  return (
    

    <HStack p={"4s"}  shadow={"base"} bgColor={"blackAlpha.900"}   position="fixed" w="100%" zIndex={1}
     >
      <Button variant={'unstyled'} color={'white'} mx={"5"} >
        <Link to="/">Home</Link>
      </Button>
      <Button variant={'unstyled'} color={'white'} mx={"5"}>
      <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={'unstyled'} color={'white'} mx={"5"}>
      <Link to="/coins">Coins</Link>
      </Button>


      <ColorModeSwither /> 

    </HStack>
    
   
  )
}

export default Header
