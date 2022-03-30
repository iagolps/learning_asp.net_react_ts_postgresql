import axios from 'axios';
import {variables} from "../Variables";
import { useQuery } from 'react-query';

export function ArtiaToken() {
    const {data: artiasToken} = useQuery<String>( 'QueryToken', async () =>
    {
        axios({
            method: 'post',
            url: variables.ARTIA_URL,
            headers: { 
            //'OrganizationId': '91378', 
            //'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNjU3NTUsImV4cCI6MTY0ODY3MzQ2OH0.2_d_x3FtMLktdPJgSuvidNd1vEOQGHNrXmbr9_A1e8A', 
            'Content-Type': 'application/json',
            //'Cookie': '_artia_sessions=YU1sTmNMeGVSSW92TU14ZUg1bVIrdGpqQ1FZQnBxeVZxZTJMaFptTUVXZEUwZUVnM0gzMW9GUTlYcVdrWWdNOE9Sdmw3SktDNTQ5aFRXSDBGejdqai9ZMXU3eWszUlpMRWhHdFpLVjE0ZmM9LS1WMUhQRVcrYXV1MDlCWWJhaVNMRTR3PT0%3D--a33918bfd17105d460467792cd3d4af04813fb25'
            },
            data: artiasToken
        })

        return axios.post(variables.ARTIA_URL, null, {params: JSON.stringify({
            query: `mutation{
                authenticationByEmail(email:"iago.leal@projeletric.com.br", password: "Iago.Leal@Projeletric") {
                    token
              }
            }`})}
        )
        .then(
            (response) => {
            return response.data.authenticationByEmail.token;
        })
    },
    {
    staleTime: 1000 * 60, // 1 minuto
    })
}