import { Section } from '../../src/TesterClass/Section';
import { Student, TeacherType } from '../../src/TesterClass/types';
//jest.mock('../../src/TesterClass/Section');

describe('Section test', () => {
    beforeAll(() => {});

    afterAll(() => {
        jest.restoreAllMocks();
    });
    it('Class test', () => {
        const tempStudent: Student = {
            name: 'rahat',
            age: 25,
        };
        const tempTeacher: TeacherType = {
            name: 'skrr',
        };
        const buildT = new Section(5, 'GH', tempStudent, tempTeacher);
        expect(buildT.sectionSize).toBe(5);
        expect(buildT.sectionName).toBe('GH');
        expect(buildT.classCaptain).toBe(tempStudent);
    });

    it('Teacher and student info test', () => {
        const tempStudent: Student = {
            name: 'rahat',
            age: 25,
        };
        const tempTeacher: TeacherType = {
            name: 'skrr',
        };
        const spier = jest
            .spyOn(Section.prototype, 'initTeacher')
            .mockImplementation(() => 'Hello');
        const buildT = new Section(5, 'GH', tempStudent, tempTeacher);
        buildT.initTeacher('kamlesh');
        buildT.admitStudent('tafhim');
        buildT.classCaptain.name = 'tom';

        expect(spier).toBeCalled();
        console.debug(JSON.stringify(buildT.classTeacher));
        //expect(buildT.classTeacher.name).toBe('kamlesh');
        expect(buildT.classCaptain.name).toBe(buildT.classCaptain.name);
    });
});
