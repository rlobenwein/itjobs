import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('mssql::memory:');

(async () => {
    await sequelize.sync({ force: true });

    const daniel = await User.create({ firstName: 'Daniel', lastName: 'Cardoso' });
    console.log("Daniel's auto-generated ID:", daniel.id);

    const rodrigo = await User.create({ firstName: 'Rodrigo', lastName: 'Lobenwein' });
    console.log("Rodrigo's auto-generated ID:", rodrigo.id);
})();

