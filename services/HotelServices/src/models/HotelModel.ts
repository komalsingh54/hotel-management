import { CreationOptional, DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface HotelAttributes {
	hotel_id?: CreationOptional<number>;
	name: string;
	address: string;
	description: string;
	ratings?: string;
	images?: string;
	city?: string;
	country?: string;
	price?: number;
}

interface HotelCreationAttributes extends Optional<HotelAttributes, 'hotel_id'> { }

export interface HotelInstance extends Model<HotelAttributes, HotelCreationAttributes>, HotelAttributes { }

const Hotel = sequelize.define('Hotel', {
	hotel_id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	address: {
		type: DataTypes.STRING,
		allowNull: false
	},
	description: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	ratings: {
		type: DataTypes.STRING,
		allowNull: true
	},
	images: {
		type: DataTypes.STRING,
		allowNull: true
	},
	price: {
		type: DataTypes.DECIMAL,
		allowNull: true
	},
	city: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	country: {
		type: DataTypes.STRING,
		allowNull: true
	}

});

export default Hotel;
