import { Client } from 'node-appwrite'

const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1')
client.setProject('65239fbce9e2122a0120')
client.setKey('c53fc0a46b6bb616505aaaaec6bac6bd2c283d60dcab2348ba9d7e7e5d2d564591f725fdb92246776cce8e5c67a8e3d72395a2be30f7a33cab4b9871c448b969899e08c22cdf5beebcc72848e724fd14dcfe386adda08bb5c1e6db017f3b0ffcc13430a879fa00a4682ce5cc117de095abe98290646c4591e3e9d6587124573f')

if (process.env.NODE_ENV === 'development') {
    client.setSelfSigned()
}

export default client