import axios from 'axios';

const buscaUsuario = async(usuario) => {
    try {
        const resp = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(resp.data);
    } catch (error) {
        console.log(error.message, '- user not found');
    }
};

buscaUsuario('AllysonAbreu');
buscaUsuario('joaodascouves');

