import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/UserModel';

export interface UserData {
	username: string;
	email: string;
	password: string;
	user_id?: number;
	first_name: string,
	last_name: string,
	age: number,
	city: string,
	role?: string;
}

export const registerUser = async (userData: UserData) => {
	const { username, email, password, first_name, last_name, age, city } = userData;

	try {
		const hashedPassword = await bcrypt.hash(password, 12);

		const newUser = await User.create({
			username,
			email,
			password: hashedPassword,
			first_name,
			last_name,
			age,
			city
		});
		return newUser;
	} catch (error) {
		throw error
	}

};

export const loginUser = async (username: string, password: string) => {
	const user = await User.findOne({ where: { username } });
	if (!user) {
		throw new Error('User not found');
	}
	const isPasswordValid = await bcrypt.compare(password, user.password);
	if (!isPasswordValid) {
		throw new Error('Invalid password');
	}
	const token = jwt.sign(
		{ userId: user.user_id, email: user.email },
		process.env.JWT_SECRET as string,
		{ expiresIn: '1h' }
	);
	return token;
};

export const getUserById = async (id: number) => {
	const user = await User.findByPk(id);
	return user;
}