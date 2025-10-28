import React from "react";

// Base Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Student subclass
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  getInfo() {
    return `${super.getInfo()}, Grade: ${this.grade}`;
  }
}

// Teacher subclass
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  getInfo() {
    return `${super.getInfo()}, Subject: ${this.subject}`;
  }
}

const InheritanceDemo = () => {
  const student1 = new Student("Aman", 21, "B.Tech CSE");
  const teacher1 = new Teacher("Mr. Sharma", 40, "Computer Science");

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>React Inheritance Demo</h2>

      <h3>Student Details</h3>
      <p>{student1.getInfo()}</p>

      <h3>Teacher Details</h3>
      <p>{teacher1.getInfo()}</p>
    </div>
  );
};

export default InheritanceDemo;
