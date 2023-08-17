import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '..'
import {  Container, HStack } from '@chakra-ui/react';
import Loading from './Loading';
import ExchangeCard from './ExchangeCard';
import Error from './Error';
const Exchanges = () => {

  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    const fetchExchanges = async () => {
     try {
      const { data } = await axios.get(`${server}/exchanges`);

      setExchanges(data);
      // console.log(data);
      setLoading(false);
     } catch (error) {
      setLoading(false);
      setError(true)
     }

    };
    //call function when mounted
    fetchExchanges();
  }, [])

  if(error)return <Error message={"Error While fetching Exchange"}/>;

  return (
    <Container maxW={'container.xl'}>

      {loading ? <Loading /> : (

        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {
              exchanges.map(i => (
                // <div>{i.name}</div>
                <ExchangeCard 
                key={i.id}
                name={i.name} 
                img={i.image} 
                rank={i.trust_score_rank} 
                url={i.url}/>
              ))
            }
          </HStack>

        </>
      )}
    </Container>

  )
}

export default Exchanges
