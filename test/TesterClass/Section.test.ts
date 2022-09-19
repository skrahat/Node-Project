import { Section } from '../../src/TesterClass/Section';
import { Student } from '../../src/TesterClass/types';

describe('Section test', () => {
    it('Class test', () => {
        const tempStudent: Student = {
            name: 'rahat',
            age: 25,
        };
        const buildT = new Section(5, 'GH', tempStudent);

        expect(buildT.sectionSize).toBe(5);
        expect(buildT.sectionName).toBe('GH');
        expect(buildT.classCaptain).toBe(tempStudent);
    });

    it('Teacher and student info test', () => {
        const tempStudent: Student = {
            name: 'rahat',
            age: 25,
        };
        const buildT = new Section(5, 'GH', tempStudent);
        buildT.initTeacher('das');
        buildT.admitStudent('tafhim');
        buildT.classCaptain.name = 'tom';

        expect(buildT.classTeacher.name).toBe('das');
        expect(buildT.classCaptain.name).toBe(buildT.classCaptain.name);
    });
});
