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
      'Projects',
      [
        {
          id: 1,
          name: 'Livepath',
          description: 'Maecenas tristique, est et t',
          createdAt: '2022-06-23 22:15:44',
          updatedAt: '2022-07-20 08:13:48'
        },
        {
          id: 2,
          name: 'Kaymbo',
          description: 'Morbi porttitor lorem id ligula. Suspendisse ornar',
          createdAt: '2022-04-27 00:06:50',
          updatedAt: '2022-05-02 09:51:45'
        },
        {
          id: 3,
          name: 'Viva',
          description: 'Mauris enim leo, rhoncus sed, vest',
          createdAt: '2022-02-13 10:38:58',
          updatedAt: '2022-08-03 18:10:32'
        },
        {
          id: 4,
          name: 'Photospace',
          description:
            'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Qui',
          createdAt: '2022-11-06 12:31:54',
          updatedAt: '2022-04-07 03:56:42'
        },
        {
          id: 5,
          name: 'Centimia',
          description: 'Nulla ut erat id mauris vulput',
          createdAt: '2022-07-23 06:32:16',
          updatedAt: '2022-11-15 12:54:00'
        },
        {
          id: 6,
          name: 'Wikido',
          description:
            'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla ',
          createdAt: '2022-10-07 18:09:32',
          updatedAt: '2022-03-11 04:36:12'
        },
        {
          id: 7,
          name: 'Browseblab',
          description:
            'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in portti',
          createdAt: '2022-09-19 14:40:08',
          updatedAt: '2022-03-09 16:50:29'
        },
        {
          id: 8,
          name: 'Lazzy',
          description: 'Vestibulum quam sapien, varius ut, ',
          createdAt: '2022-04-24 11:00:23',
          updatedAt: '2022-08-07 02:52:53'
        },
        {
          id: 9,
          name: 'Yoveo',
          description: 'In quis justo. Maecenas r',
          createdAt: '2022-08-09 14:14:27',
          updatedAt: '2022-12-11 04:47:40'
        },
        {
          id: 10,
          name: 'Jaxnation',
          description: 'Curabitur in libero ut massa volutpat convallis.',
          createdAt: '2022-03-23 12:31:07',
          updatedAt: '2022-02-06 08:29:14'
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
    await queryInterface.bulkDelete('Projects', null, {});
  }
};
