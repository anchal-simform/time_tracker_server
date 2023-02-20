'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          email: 'achamp0@meetup.com',
          password: 'test1',
          createdAt: '2022-06-06 09:40:35',
          updatedAt: '2022-09-02 20:52:31',
          role: 'USER'
        },
        {
          id: 2,
          email: 'admin@yopmail.com',
          password: 'admin',
          createdAt: '2022-04-29 06:24:17',
          updatedAt: '2023-02-12 10:52:10',
          role: 'ADMIN'
        },
        {
          id: 3,
          email: 'johndoe@yopmail.com',
          password: 'johndoe',
          createdAt: '2022-09-26 06:06:19',
          updatedAt: '2022-03-31 19:42:52',
          role: 'USER'
        },
        {
          id: 4,
          email: 'maryjane@yopmail.com',
          password: 'maryjane',
          createdAt: '2022-06-14 19:16:53',
          updatedAt: '2023-01-12 18:51:05',
          role: 'USER'
        },
        {
          id: 5,
          email: 'peter@yopmail.com',
          password: 'peter',
          createdAt: '2022-06-09 00:56:56',
          updatedAt: '2022-03-07 01:15:06',
          role: 'USER'
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
