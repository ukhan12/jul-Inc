/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // insert seed entries
      return knex("tasks").insert([
        // Insert data into tables
        { task_id: 4, severity_id: 5, task: "Start Unit 8 Problem Set" },
        { task_id: 5, severity_id: 1, task: "Read Books" },
        { task_id: 1, severity_id: 2, task: "Take Sparky To The Dog Park" },
        { task_id: 2, severity_id: 3, task: "Go Food Shopping" },
        { task_id: 3, severity_id: 5, task: "Fix The Car " },
        { task_id: 6, severity_id: 3, task: "Buy Another Leash For Sparky" },
      ]);
    });
};
