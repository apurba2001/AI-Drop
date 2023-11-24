import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email format'
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        validate: {
            validator: function (value) {
                return value.length >= 6;
            },
            message: 'Password must be at least 6 characters long'
        }
    },
    forgetPasswordCode: String,
    forgetPasswordCodeExpiary: String,
    verificationCode: String,
    verifyCodeExpiary: String,
    isVerified: Boolean
}, { timestamps: true });

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;
