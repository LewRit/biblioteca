'use strict';

// npx sequelize-cli db:seed:all adds the seeds to database.

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstname:'Lewis',
      lastname: 'Ritenour',
      email:'name@mail.com',
      gitHubId: 16876,
      gitHubUsername:'Metaknight',
      createdAt:new Date(),
      updatedAt:new Date()
    }])
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users',null,{})
    
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
