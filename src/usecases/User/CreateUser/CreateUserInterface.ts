export interface IUserCreatedResponse {
    id: string,
    username: string,
    email: string,
    status: boolean,
    created_at: Date,
}

export interface IUserRequest {
    username: string,
    email: string,
    password: string,
}