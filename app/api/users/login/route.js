import connect from '../../../DB'
import User from '../../../models'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import moment from 'moment'
import jwt from 'jsonwebtoken'

connect()

export const POST = async (request) => {
    try {
        const { email, password } = await request.json();

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        }

        // Password is correct, generate JWT token
        const token = jwt.sign(
            { userId: existingUser._id, email: existingUser.email , name: existingUser.name},
            process.env.PASSWORD_SICRETKEY, // Replace 'your_secret_key' with a secure random string
            { expiresIn: '30d' } // Token expires in 30 days (1 month)
        );

        return NextResponse.json({ token }, { status: 200 });
    } catch (error) {
        console.error('Error:', error.message);
        return NextResponse.json({ message: 'Error during authentication' }, { status: 500 });
    }
};

