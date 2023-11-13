import { client } from '@/libs/appwrite'
import { Users, Account, ID } from 'node-appwrite'

const verifyJWT = async (jwt: string, id: string) => {
    await client.setJWT(jwt)
    const user = new Users(client)
    const result = await user.get(id)
    return result
}

export const authService = {
    verifyJWT
}