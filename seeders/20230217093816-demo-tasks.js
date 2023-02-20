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
      'Tasks',
      [
        {
          id: 1,
          name: 'fault-tolerant',
          description:
            'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
          createdAt: '2022-12-20 06:00:23',
          updatedAt: '2022-04-27 08:55:52',
          projectId: 1
        },
        {
          id: 2,
          name: 'parallelism',
          description:
            'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
          createdAt: '2022-05-11 02:05:19',
          updatedAt: '2022-08-07 19:07:42',
          projectId: 2
        },
        {
          id: 3,
          name: 'project',
          description:
            'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
          createdAt: '2022-12-17 15:13:33',
          updatedAt: '2022-03-12 10:18:10',
          projectId: 3
        },
        {
          id: 4,
          name: 'concept',
          description:
            'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
          createdAt: '2022-07-09 11:29:17',
          updatedAt: '2022-03-01 06:24:16',
          projectId: 4
        },
        {
          id: 5,
          name: 'Organized',
          description:
            'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
          createdAt: '2022-07-07 12:42:21',
          updatedAt: '2022-12-18 00:11:37',
          projectId: 5
        },
        {
          id: 6,
          name: 'cohesive',
          description:
            'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
          createdAt: '2022-07-03 19:22:25',
          updatedAt: '2023-01-15 06:42:03',
          projectId: 6
        },
        {
          id: 7,
          name: 'Front-line',
          description:
            'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
          createdAt: '2022-11-29 02:17:00',
          updatedAt: '2022-06-02 02:34:17',
          projectId: 7
        },
        {
          id: 8,
          name: 'holistic',
          description:
            'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
          createdAt: '2022-06-12 22:00:57',
          updatedAt: '2022-06-18 12:14:50',
          projectId: 8
        },
        {
          id: 9,
          name: 'conglomeration',
          description:
            'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
          createdAt: '2022-06-11 12:16:40',
          updatedAt: '2022-04-02 09:54:24',
          projectId: 9
        },
        {
          id: 10,
          name: 'Face to face',
          description:
            'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
          createdAt: '2022-02-13 08:07:27',
          updatedAt: '2022-06-09 00:29:47',
          projectId: 10
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
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
