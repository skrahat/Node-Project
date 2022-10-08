import { Student, TeacherType } from './types';
import { Teacher } from './Teacher';
export class Section {
    sectionSize: number;
    sectionName: string;
    classCaptain: Student;
    classTeacher: TeacherType;
    size?: number;

    constructor(
        sectionSize: number,
        sectionName: string,
        classCaptain: Student,
        classTeacher: TeacherType
    ) {
        this.sectionSize = sectionSize;
        this.sectionName = sectionName;
        this.classCaptain = classCaptain;
        this.classTeacher = classTeacher;
    }

    public get classCaptainName(): string {
        return this.classCaptain.name;
    }
    public set classCaptainName(name: string) {
        this.classCaptain.name = name;
    }
    public set setSize(value: number) {
        this.size = value;
    }
    public get getSize(): number {
        return this.size || 0;
    }
    public initTeacher(nameOfTeacher: string) {
        this.classTeacher = new Teacher(nameOfTeacher);
    }
    // public get classTeacher(): TeacherType {
    //     return this.classTeacher;
    // }
    public admitStudent(nameOfStudent: string) {
        //this.classTeacher = new Teacher(nameOfTeacher);
        this.sectionSize++;
    }
}
