'use strict';
import {
  Model,
  DataTypes,
  Optional,
  ModelScopeOptions,
  ModelValidateOptions,
  BelongsToGetAssociationMixin,
} from 'sequelize'
import sequelize from '../configs/database';

// export interface UserAttributes {
//   id: number
//   email: string
//   password: string
// }

class User extends Model {
  public id!: number;
  public password!: string;
  public email!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

export default User
