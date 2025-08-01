import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Task = sequelize.define(
  'Task',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'Tasks',
    timestamps: true,
    underscored: true,
  }
);

export default Task;
