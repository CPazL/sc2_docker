// src/routes.js
const BASE_URL = "http://localhost:4000";

export const API_ROUTES = {
    GET_ALL_USERS: `${BASE_URL}/users/all`,
    CREATE_USER: `${BASE_URL}/users/create`,
    FIND_USER: (dni) => `${BASE_URL}/users/find/${dni}`,
    UPDATE_USER: (dni) => `${BASE_URL}/users/update/${dni}`,
    DELETE_USER: (dni) => `${BASE_URL}/users/delete/${dni}`,
};
