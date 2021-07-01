import http from './http.common';


class SessionApiService {

    getAll() {
        return http.get('/api/sessions');
    }

    get(id) {
        return http.get(`/api/sessions/${id}`);
    }

    create(data) {
        return http.post('/api/sessions', data);
    }

    update(id, data) {
        return http.put(`/api/sessions/${id}`, data);
    }

    delete(id) {
        return http.delete(`/api/sessions/${id}`);
    }

}

export default new SessionApiService();