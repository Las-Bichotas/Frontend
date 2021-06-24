import http from './http.common';


class RolesApiService {

    getAll() {
        return http.get('/api/roles');
    }

    get(id) {
        return http.get(`/api/roles/${id}`);
    }

    create(data) {
        return http.post('/api/roles', data);
    }

    delete(id) {
        return http.delete(`/api/roles/${id}`);
    }


    update(id, data) {
        return http.put(`/api/roles/${id}`, data);
    }
}

export default new RolesApiService();