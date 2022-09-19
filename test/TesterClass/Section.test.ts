import { building } from "../../src/TesterClass/Section";
import { Student } from "../../src/TesterClass/types";

describe("sample test", () => {
  it("test one", () => {
    const tempStudent: Student = {
      name: "rahat",
      age: 25,
    };
    const buildT = new building(5, "GH", tempStudent);

    expect(buildT.buildingAge).toBe(5);
    expect(buildT.buildingName).toBe("GH");
    expect(buildT.NewStudent).toBe(tempStudent);
  });
});
