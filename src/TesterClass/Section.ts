import { Student } from "./types";
export class building {
  buildingAge: number;
  buildingName: string;
  NewStudent: Student;

  constructor(buildingAge: number, buildingName: string, NewStudent: Student) {
    this.buildingAge = buildingAge;
    this.buildingName = buildingName;
    this.NewStudent = NewStudent;
  }

  public get student(): Student {
    return this.student;
  }
  public set student(student: Student) {
    this.student = student;
  }
}
