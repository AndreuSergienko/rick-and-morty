import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://rickandmortyapi.com/api',
});

export const ApiService = {
	async getCharacters(page) {
		return instance
			.get(`/character/?page=${page}`)
			.then(({ data }) => this.transformCharacters(data));
	},
	transformCharacters(data) {
		return {
			...data,
			results: data.results.map((item) => ({
				...item,
				origin: item.origin.name,
				episode: this.extractEpisode(item.episode),
			})),
		};
	},
	extractEpisode(episodes) {
		return episodes?.map((item) => {
			return item.match(/[0-9]+$/g)[0];
		})[0];
	},
};
