import http from './http.common';


class UsersApiService {
    getAll() {
        return http.get('/api/user');
    }

    get(id) {
        return http.get(`/api/user/${id}`);
    }

    create(user, roleId) {
        return http.post(`/api/user/${roleId}`, user);
    }
    update(id, user) {
        return http.put(`/api/user/${id}`, user);
    }

    delete(id) {
        return http.delete(`/api/user/${id}`);
    }

}

export default new UsersApiService();