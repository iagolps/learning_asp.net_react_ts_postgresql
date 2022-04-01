import axios from 'axios';
import {variables} from "../Variables";
import { useQuery } from 'react-query';

export function ArtiaToken() {
    const {data: artiasToken} = useQuery<String>( 'QueryToken', async () =>
    {
        return axios.post(
            variables.ARTIA_URL,
            {
                headers: { 
                //'OrganizationId': '91378', 
                'Content-Type': 'application/json',
                }
            },
            {
                data: {
                    query: `mutation{
                    authenticationByEmail(email:"iago.leal@projeletric.com.br", password: "Iago.Leal@Projeletric") {
                        token
                    }
                    }`,
                    variable: {}
                }
            }
        )
        .then(
            (response) => {
            return response.data;
        })
    },
    {
    staleTime: 1000 * 60, // 1 minuto
    })

    return(
        artiasToken
    )
}