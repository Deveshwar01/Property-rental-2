import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";

export const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");

        if (!user)
            return res.status(404).json({
                success: false,
                messsage: "invalid email or password"
            })

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(404).json({
                success: false,
                messsage: "invalid email or password"
            })

        sendCookie(user, res, `Welcome back,${user.name}`, 200);
    } catch (error) {
        next(error);
    }
};
export const Register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });

        if (user)
            return res.status(404).json({
                success: false,
                messsage: "User already exist"
            })

        const hashedPassword = await bcrypt.hash(password, 10);
        user = await User.create({ name, email, password: hashedPassword });

        sendCookie(user, res, "Registered Succesnbfkjf,sfully", 201);
    } catch (error) {
        next(error);
    }
};
export const Logout = (req, res) => {
    res.status(200)
        .cookie("token", "", { expires: new Date(Date.now()) })
        .json({
            success: true,
            user: req.user,
        })
};
export const getMyProfile = async (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user,
    });
};
