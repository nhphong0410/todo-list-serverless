const hello = async (): Promise<String> => {
    const number = Math.floor(Math.random() * 10 + 1)

    const generatedString = `Hello World${Array(number).fill('!').join('')}`

    return generatedString
}

export const helloService = {
    hello
}