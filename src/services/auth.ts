import appwriteAccount from '@/libs/appwrite/account'
import appwriteClient from '@/libs/appwrite/client'

const verifyJWT = async (jwt: string) => {
    await appwriteClient.setJWT(jwt)

    const result = appwriteAccount.get()

    return result
}

export const authService = {
    verifyJWT
}