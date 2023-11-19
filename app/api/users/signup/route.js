import connect from '../../../DB'
import User from '../../../models'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

connect()

export const POST = async (request) => {
    try {
        const { name, email, password } = await request.json();

        // Check if the user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            // User with the provided email already exists
            return NextResponse.json({ message: 'User already exists' }, { status: 409 });
        }

        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

        return NextResponse.json({ message: 'User registration successful' }, { status: 201 });
    } catch (error) {
        console.error('Error:', error.message);
        return NextResponse.json({ message: 'Error during registration' }, { status: 500 });
    } finally {
        // You can perform cleanup or additional actions here if needed
    }
};