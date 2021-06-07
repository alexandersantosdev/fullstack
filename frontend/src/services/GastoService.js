import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/gastos/';

class GastoService{

    listarTodos(){
        return axios.get(API_URL);
    }

    adicionar(data){
        return axios.post(API_URL, data);
    }

    remover(id){
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new GastoService();