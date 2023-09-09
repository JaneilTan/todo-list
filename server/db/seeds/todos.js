export async function seed (knex) {
  // Deletes ALL existing entries
  await knex('todo').del()

  // Inserts seed entries
  await knex('todos').insert([
    { id: 1, task: '' },
  ])
}
