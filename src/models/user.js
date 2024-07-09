import { Sequelize, Model } from 'sequelize';
const sequelize = new Sequelize('mssql::memory:');

class User extends Model {
    getFullname() {
        return [this.firstname, this.lastname].join(' ');
    }
}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userType: {
            type: DataType.ENUM,
            values: ['admin', 'candidate', 'recruiter'],
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            set(value) {
                this.setDataValue('password', hash(value));
            }
        },
        preferredName: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        sequelize,
        modelName: 'User',
    },
);

console.log(User === sequelize.models.User); // true