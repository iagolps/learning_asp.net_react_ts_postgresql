import { variable } from "../Variables";
import { artiaProj } from "../Types/Artia"
import { useQuery } from 'react-query';

export function ArtiaProjects() {
    const axios = require('axios');
    const { data: projects, isFetching } = useQuery<artiaProj[]>('projects', async () => {
        const auth = await artiaToken();
        console.log(auth);
        return axios.get(variable.NODE_URL + 'getProjects', {
            headers: {
                'Authorization': 'Bearer ' + auth,
            }
        })
            .then((response: any) => {
                console.log('Resposta:=> ' + JSON.stringify(response.data));
                return response.data.data.listingProjects;
            })
            .catch((error: any) => {
                console.log(error);
            });

    }, {
        staleTime: 1000 * 60, // 1 minuto
    });

    return (
        <div>
            {isFetching && <p>Carregando...</p>}
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>
                            Project Id
                        </th>
                        <th>
                            Project Name
                        </th>
                        <th>
                            Options
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {projects?.map(proj => {
                        return (
                            <tr key={proj.id}>
                                <th scope="row">{proj.id}</th>
                                <td>{proj.name}</td>
                                <td>
                                    <button type='button'
                                        className='btn btn-light mr-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </button>

                                    <button type='button'
                                        className='btn btn-light mr-1'>
                                        <svg xmlns="http://www.w3.org/2000/TR/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export async function artiaToken() {
    const axios = require('axios');
    return await axios.get(variable.NODE_URL + 'getToken', {responseType: 'text'})
        .then(
            (response: any) => {
                return response.data;
            },
            (error: any) => {
                console.log(error.response);
            }
        );

}