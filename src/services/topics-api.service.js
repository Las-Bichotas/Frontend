import http from './http.common';

class TopicApiService {
    getAll() {
        return http.get('/api/topics');
    }

    get(id) {
        return http.get(`/api/topics/${id}`);
    }

    create(data) {
        return http.post('/api/topics', data);
    }

    delete(id) {
        return http.delete(`/api/topics/${id}`);
    }

    update(id, data) {
        return http.put(`/api/topics/${id}`, data);
    }
}

export default new TopicApiService();