export default (sequelize, DataTypes) => {
    const Regions = sequelize.define(
      'Regions',
      {
        region_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          primaryKey: true
        },
        city: {
          type: DataTypes.STRING
        },
        state: {
          type: DataTypes.STRING
        },
        zip_code: {
            type: DataTypes.INTEGER
          },
      },
      { freezeTableName: true, timestamps: false }
    );
    return Regions;
  };