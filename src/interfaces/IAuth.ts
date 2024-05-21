export interface ISigInResponse{
    user: {
        id: string
        username: string
        email: string
        // password: string
        status: boolean
        phone: string
        address: string
        avatar: string
        created_at: Date
    },
    token: string
}

export interface ISigInRequest{
    email: string
    password: string
}