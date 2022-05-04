import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.github.com/',
});

export const userAPI = {
    getUser(name: string) {
        return instance.get(`users/${name}`)
    },
    getRepositories(name: string, page: number | string) {
        return instance.get(`users/${name}/repos`, {
            params: {
                per_page: 4,
                page: page,
            }
        })
    },
}
