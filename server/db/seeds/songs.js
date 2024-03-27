/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('songs').del()
  await knex('songs').insert([
    {
      id: 1,
      url: 'https://soundcloud.com/necrosisters/the-sword-of-damocles?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    {
      id: 2,
      url: 'https://soundcloud.com/a-boogie-wit-da-hoodie/jungle?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    {
      id: 3,
      url: 'https://soundcloud.com/waihaki-pepene-330653887/children-of-the-mist?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
  ])
}
