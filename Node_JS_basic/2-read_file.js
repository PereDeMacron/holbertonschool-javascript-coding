const fs = require("fs");

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, "utf8");

    const lines = data.split("\n").filter((line) => line.trim() !== "");

    let totalStudents = -1;
    let csStudents = 0;
    let sweStudents = 0;

    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(",");
      if (firstname && lastname && age && field) {
        totalStudents++;

        if (field === "CS") {
          csStudents++;
        } else if (field === "SWE") {
          sweStudents++;
        }
      }
    });

    console.log(`Number of students: ${totalStudents}`);
    console.log(
      `Number of students in CS: ${csStudents}. List: ${getStudentList(
        lines,
        "CS"
      )}`
    );
    console.log(
      `Number of students in SWE: ${sweStudents}. List: ${getStudentList(
        lines,
        "SWE"
      )}`
    );
  } catch (error) {
    throw new Error("Cannot load the database");
  }
}

function getStudentList(lines, field) {
  return lines
    .filter((line) => line.trim() !== "" && line.split(",")[3] === field)
    .map((line) => line.split(",")[0])
    .join(", ");
}

module.exports = countStudents;
