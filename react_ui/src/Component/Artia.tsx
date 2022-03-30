import axios from 'axios';
import {variables} from "../Variables";
import { useQuery } from 'react-query';
import {Artias} from '../Types/Artia';
//import {ArtiaToken} from './ArtiaToken';

export function Artia() {
    const {data: artias, isFetching} = useQuery<Artias[]>( 'ProjectId', async () =>
        {
            return axios({
                method: 'post',
                url: variables.ARTIA_URL,
                headers: { 
                'OrganizationId': '91378', 
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNjU3NTUsImV4cCI6MTY0ODY3OTM0N30.KRVcQ8mgEHmurZpg7QwIADHrOe9qq0zilXlcTSRA3go',// + ArtiaToken.toString() ,
                'Content-Type': 'application/json',
                //'Cookie': '_artia_sessions=YU1sTmNMeGVSSW92TU14ZUg1bVIrdGpqQ1FZQnBxeVZxZTJMaFptTUVXZEUwZUVnM0gzMW9GUTlYcVdrWWdNOE9Sdmw3SktDNTQ5aFRXSDBGejdqai9ZMXU3eWszUlpMRWhHdFpLVjE0ZmM9LS1WMUhQRVcrYXV1MDlCWWJhaVNMRTR3PT0%3D--a33918bfd17105d460467792cd3d4af04813fb25'
                },
                data: JSON.stringify({
                    query: `query{
                        listingProjects(
                        accountId: 2973306
                        ) {
                        id,
                        name,
                        }
                        }`,
                        variables: {}
                    })
            })

            .then(
                (response) => {
                return response.data;
            })
            
            //.catch((error) => {
            //    console.log(error);
            //});
        },
        {
        staleTime: 1000 * 60, // 1 minuto
        })

    return(
        <div>
            { isFetching && <p>Carregando...</p>}
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>
                            ProjectId
                        </th>
                        <th>
                            ProjectName
                        </th>
                        <th>
                            Options
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {artias?.map(art => {
                        return (
                        <tr key={art.projectid}>
                            <th scope="row">{art.projectid}</th>
                            <td>{art.projectname}</td>
                            <td>
                                <button type='button'
                                className='btn btn-light mr-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                </button>

                                <button type='button'
                                className='btn btn-light mr-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
                </table>
        </div>
    )
}