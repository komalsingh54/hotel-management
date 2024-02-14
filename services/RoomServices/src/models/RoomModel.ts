
import { DataTypes, Model, Optional, CreationOptional } from 'sequelize';
import { sequelize } from '../config/database';

interface RoomAttributes {
	room_id?: CreationOptional<number>;
	hotel_id: number;
	room_number: number;
	type: string;
	price?: number;
	capacity?: number;
}

interface RoomCreationAttributes extends Optional<RoomAttributes, 'room_id'> { }

export interface UserInstance extends Model<RoomAttributes, RoomCreationAttributes>, RoomAttributes { }

const Room = sequelize.define<UserInstance>('Room', {
	room_id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	hotel_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	room_number: {
		type: DataTypes.INTEGER,
		allowNull: false,
		unique: true
	},
	type: {
		type: DataTypes.STRING,
		allowNull: false
	},
	price: {
		type: DataTypes.DECIMAL(10, 2),
		allowNull: false
	},
	capacity: {
		type: DataTypes.INTEGER,
		allowNull: true
	},
});

export default Room;