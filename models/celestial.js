export default (sequelize, DataTypes) => {
  const CelestialPhases = sequelize.define(
    'CelestialPhases',
    {
      celestial_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      moon_type: {
        type: DataTypes.VARCHAR45
      },
      moon_rise_time: {
        type: DataTypes.TIME
      },
      moon_fall_time: {
        type: DataTypes.TIME
      },
      sun_rise_time: {
        type: DataTypes.TIME
      },
      sun_fall_time: {
        type: DataTypes.TIME
      },
      sea_info_id: {
        type: DataTypes.INTEGER
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return CelestialPhases;
};
