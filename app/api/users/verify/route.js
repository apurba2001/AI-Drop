import connect from '../../../DB'
import User from '../../../models'
import { NextResponse } from 'next/server'
import moment from 'moment'
import nodemailer from 'nodemailer'

connect()


export const PATCH = async (request) => {
    try {
        const { email } = await request.json();
        const code = Math.ceil(Math.random() * 100000);
        const expiaryTime = moment().add(60, 'minutes').format('DD-MM-YYYY hh:mm:ss');

        const updatedUser = await User.findOneAndUpdate(
            { email },
            {
                $set: {
                    verificationCode: code,
                    verifyCodeExpiry: expiaryTime,
                },
            },
            { new: true }
        );

        if (!updatedUser) {
            return NextResponse.json({ message: 'User not found' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASSWORD
            }
        });

        const info = await transporter.sendMail({
            from: 'apurbaruidas0358@gmail.com',
            to: email,
            subject: "Email Verification Code",
            text: `Hello!\n\nThank you for registering with Aidrop. Please use the following verification code to complete your registration:\n\nVerification Code: ${code}\n\nIf you didn't request this code, you can safely ignore this email.\n\nBest regards,\nThe AidropOfficial Team`,
        });

        return NextResponse.json({ message: 'Verification code sent successfully', info }, { status: 200 });

    } catch (error) {
        console.error('Error:', error.message);
        return NextResponse.json({ message: 'Error during registration' }, { status: 500 });
    } finally {

    }
}

export const PUT = async (request) => {
    try {
        const { email } = await request.json();
        const code = Math.ceil(Math.random() * 100000);
        const expiaryTime = moment().add(60, 'minutes').format('DD-MM-YYYY hh:mm:ss');

        const updatedUser = await User.findOneAndUpdate(
            { email },
            {
                $set: {
                    verificationCode: code,
                    verifyCodeExpiry: expiaryTime,
                },
            },
            { new: true }
        );

        if (!updatedUser) {
            return NextResponse.json({ message: 'User not found' }, { status: 400 });
        }

        return NextResponse.json({ message: 'Verification code sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Error:', error.message);
        return NextResponse.json({ message: 'Error during registration' }, { status: 500 });
    } finally {

    }
}