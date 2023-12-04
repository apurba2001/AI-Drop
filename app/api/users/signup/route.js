import connect from '../../../database'
import User from '../../../models'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import moment from 'moment'


connect()

export const POST = async (request) => {
    try {
        const { name, email, password } = await request.json()

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return NextResponse.json({ message: 'User already exists' }, { status: 409 });
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        return NextResponse.json({ message: 'User registration successful' }, { status: 201 });
    } catch (error) {
        console.error('Error:', error.message);
        return NextResponse.json({ message: 'Error during registration' }, { status: 500 });
    } finally {

    }
}

