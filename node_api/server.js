const express = require('express');
const cors = require('cors');
const axios = require('axios');

const PORT = 5000;
const REACT_PORT = 3000;
const app = express();

app.use(cors());

const corsOptions = {
    origin: "http://localhost:3000"
};

app.use(express.json());

const requestEndpoint = "#############################";

app.get('/getToken', cors(corsOptions), async (req, res) => {
    const data = JSON.stringify({
        query: `mutation{
                        authenticationByEmail(
                            email:"#############################",
                            password: "#############################")
                            {
                                token
                            }
                    }`,
        variables: {}
    });

    const config = {
        method: 'post',
        url: requestEndpoint,
        responseType: 'text',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    }

    res.setHeader('Content-Type', 'application/json');
    const response = await axios(config)
        .then(
            (response) => {
                return response.data;
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
        res.json(response.data.authenticationByEmail.token);
});

app.get('/getProjects', cors(corsOptions), async (req, res) => {
    const auth = req.get('Authorization');
    const data = JSON.stringify({
        query: `query{
                    listingProjects(
                        accountId: #############################
                        ) {
                        id,
                        accountId,
                        status,
                        name,
            
                    }
                }`,
        variables: {}
    });

    const config = {
        method: 'post',
        url: requestEndpoint,
        headers: {
            'OrganizationId': '#############################',
            'Authorization': auth,
            'Content-Type': 'application/json'
        },
        data: data
    }

    res.setHeader('Content-Type', 'application/json');
    const response = await axios(config)
        .then(
            (response) => {
                console.log(response.data);
                return response.data;
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
        res.json(response);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});