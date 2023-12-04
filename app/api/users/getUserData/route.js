import { NextResponse } from 'next/server'
import { getDataFromToken } from '../../../helpers/getDataFromToken'

export const GET = async (request) => {
    try {
        const data = getDataFromToken(request)

        console.log(data)
        return NextResponse.json({ data }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Unable to get data' }, { status: 400 })
    } finally {

    }
}