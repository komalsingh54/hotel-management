
import { DataTypes, Model, Optional, CreationOptional } from 'sequelize';
import { sequelize } from '../config/database';

interface BookingAttributes {
	hotel_id?: CreationOptional<number>;
	booking_id?: number;
	room_id: number;
	user_id: number;
	start_date?: Date;
	end_date?: Date;
}

interface HotelCreationAttributes extends Optional<BookingAttributes, 'booking_id'> { }

export interface HotelInstance extends Model<BookingAttributes, HotelCreationAttributes>, BookingAttributes { }


const RoomBooking = sequelize.define('Booking', {
	booking_id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	room_id: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	user_id: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	hotel_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	start_date: {
		type: DataTypes.DATE,
		allowNull: false
	},
	end_date: {
		type: DataTypes.DATE,
		allowNull: false
	}
});

export default RoomBooking;
