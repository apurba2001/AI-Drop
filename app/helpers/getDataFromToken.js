import jwt from 'jsonwebtoken'
import { dcryptToken } from '../helpers/tokenEncodeDecode'

export const getDataFromToken = (request) => {
    try {
        const token = request.cookies.get('token')?.value || ''
        const reDecodedToken = dcryptToken(token)
        const tokenData = jwt.verify(reDecodedToken, process.env.JWT_ENCRYPTION_KEY)

        console.log(tokenData, '00000000')
        return tokenData
    } catch (error) {
        console.error(error)
    } finally {

    }
}