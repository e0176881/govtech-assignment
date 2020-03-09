exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("student_teacher")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("student_teacher").insert([
        { student_id: 1, teacher_id: 1 },
        { student_id: 1, teacher_id: 2 },
        { student_id: 2, teacher_id: 1 },
        { student_id: 2, teacher_id: 2 },
        { student_id: 2, teacher_id: 5 },
        { student_id: 2, teacher_id: 3 },
        { student_id: 3, teacher_id: 1 },
        { student_id: 3, teacher_id: 2 }
      ]);
    });
};
