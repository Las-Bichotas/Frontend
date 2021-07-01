import http from './http.common';

class UserSessionApiService{

    assingSessionToUser(userId, sessionId){
        return http.post(`/api/users/${userId}/sessions/${sessionId}`)
    }

}

export default new UserSessionApiService();