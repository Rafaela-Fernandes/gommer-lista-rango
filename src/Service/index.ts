import axios from 'axios';
const GET_RESTAURANTE: any = process.env.REACT_APP_GET_RESTAURANTES;

export const getListaRestaurantes = (): Promise<any> => {
	return axios
		.get(GET_RESTAURANTE)
		.then((resposta) => {
			return resposta;
		})
		.catch((error) => {
			if (error.response) {
				return error.response.data;
			}
			return error;
		});
};

export const getRestaurante = (id: string): Promise<any> => {
	return axios
		.get(`${GET_RESTAURANTE}/${id}/menu`)
		.then((resposta) => {
			return resposta;
		})
		.catch((error) => {
			if (error.response) {
				return error.response.data;
			}
			return error;
		});
};
