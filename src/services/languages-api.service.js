import http from './http.common';

class LanguageApiService {

    getAll() {
        return http.get('/api/languages');
    }

    get(id) {
        return http.get(`/api/languages/${id}`);
    }

    delete(id) {
        return http.delete(`/api/languages/${id}`);
    }

    update(id, data) {
        return http.put(`/api/languages/${id}`, data);
    }

    create(data) {
        return http.post('/api/languages', data);
    }

}

export default new LanguageApiService();