export default (sequelize, DataTypes) => {
  const WeatherPrimary = sequelize.define(
    'WeatherPrimary',
    {
      weather_primary_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      temperature: {
        type: DataTypes.DOUBLE
      },
      humidity: {
        type: DataTypes.DOUBLE
      },
      wind_speed: {
        type: DataTypes.INTEGER
      },

      date: {
        type: DataTypes.DATETIME
      },
      weather_secondary_id: {
        type: DataTypes.STRING
      },
      region_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      season_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return WeatherPrimary;
};
