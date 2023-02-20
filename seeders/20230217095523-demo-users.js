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
          email: 'mark@yopmail.com',
          password:
            '$argon2id$v=19$m=65536,t=3,p=4$dQ4mudK0ltjQjyLlP6/tag$qtSimCZ9/kV/QqMnT1ymUnz1mGrPCqql9S1ECnot6bU',
          createdAt: '2022-06-06 09:40:35',
          updatedAt: '2022-09-02 20:52:31',
          role: 'USER'
        },
        {
          id: 2,
          email: 'admin@yopmail.com',
          password:
            '$argon2id$v=19$m=65536,t=3,p=4$EwTJliVi0YJdVd+PE+mpow$IB+rsnQt0Sg1miRKzZHvaIFRxacfO/8lkFAIemzVdYY',
          createdAt: '2022-04-29 06:24:17',
          updatedAt: '2023-02-12 10:52:10',
          role: 'ADMIN'
        },
        {
          id: 3,
          email: 'johndoe@yopmail.com',
          password:
            '$argon2id$v=19$m=65536,t=3,p=4$m8H0N1MiLytQarKhgH1cHQ$YhE5yyPymNco5eTpNrcU7e9Z+8Y9n77NTtsusOnC834',
          createdAt: '2022-09-26 06:06:19',
          updatedAt: '2022-03-31 19:42:52',
          role: 'USER'
        },
        {
          id: 4,
          email: 'maryjane@yopmail.com',
          password:
            '$argon2id$v=19$m=65536,t=3,p=4$AwhY+yPVkn8MfHD0qarTCA$U9K1h8TMgTAZSyw6P7WnxEqMWv0ITOdyIz8AcHlaLJw',
          createdAt: '2022-06-14 19:16:53',
          updatedAt: '2023-01-12 18:51:05',
          role: 'USER'
        },
        {
          id: 5,
          email: 'peter@yopmail.com',
          password:
            '$argon2id$v=19$m=65536,t=3,p=4$dynXEm9S1lclvMonpi4t6w$RZNaCatwKIlHbBeTHDxOouNRjkWb3XxYTkVcqIkxQhg',
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
