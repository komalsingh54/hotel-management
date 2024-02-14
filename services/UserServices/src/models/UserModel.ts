// src/models/User.ts

import { DataTypes, Model, Optional, CreationOptional } from 'sequelize';
import { sequelize } from '../config/database';

interface UserAttributes {
	user_id?: CreationOptional<number>;
	username: string;
	email: string;
	password: string;
	first_name?: string;
	last_name?: string;
	city?: string;
	age?: number;
	role?: 'customer' | 'admin';
}

interface UserCreationAttributes extends Optional<UserAttributes, 'user_id'> { }

export interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes { }

const User = sequelize.define<UserInstance>('User', {
	user_id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	username: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
	first_name: {
		type: DataTypes.STRING,
		allowNull: true
	},
	last_name: {
		type: DataTypes.STRING,
		allowNull: true
	},
	city: {
		type: DataTypes.STRING,
		allowNull: true
	},
	age: {
		type: DataTypes.INTEGER,
		allowNull: true
	},
	role: {
		type: DataTypes.ENUM('customer', 'admin'),
		defaultValue: 'customer'
	},
});

export default User;