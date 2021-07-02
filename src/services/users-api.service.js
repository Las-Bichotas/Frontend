import http from './http.common';


class UsersApiService {
    getAll() {
        return http.get('/api/users');
    }

    get(id) {
        return http.get(`/api/users/${id}`);
    }

    getAllTutors() {
        return http.get('/api/role/2/users');
    }

    create(user, roleId) {
        return http.post(`/api/users/${roleId}`, user);
    }
    update(id, user) {
        return http.put(`/api/users/${id}`, user);
    }

    delete(id) {
        return http.delete(`/api/users/${id}`);
    }

}

export default new UsersApiService();