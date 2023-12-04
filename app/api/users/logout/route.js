import { NextResponse } from 'next/server'

export const GET = async (request) => {
    try {
        const response = NextResponse.json({ message: 'Logout Successfully' }, { status: 200 })
        response.cookies.delete('token')

        return response
    } catch (error) {
        return NextResponse.json({ message: 'Logout fail' }, { status: 400 })
    } finally {

    }
}