import { describe, expect, it } from "vitest";
import { twiceAsOld } from "../src/twiceasold";

describe("twiceasold as function", () => {
  it("if son age equals the age difference between them, it should return 0 because the age is currently doubled", () => {
    //Given
    const ageDad = 42;
    const ageSon = 21;
    const expected = 0;
    //When
    const result = twiceAsOld(ageDad, ageSon);
    //Then
    expect(result).toBeTypeOf("number");
    expect(result).toEqual(expected);
  });

  it("if the age difference minus the age of the son its not zero, it returns how many years will pass until the condition its fullfilled", () => {
    //Given
    const ageDad = 36;
    const ageSon = 7;
    const expected = 22;
    //When
    const result = twiceAsOld(ageDad, ageSon);
    //Then
    expect(result).toBeTypeOf("number");
    expect(result).toEqual(expected);
  });

  it("if the age difference minus the age of the son its not zero and the doubled age has already passed, it returns how many years have had passed since", () => {
    //Given
    const ageDad = 55;
    const ageSon = 30;
    const expected = 5;
    //When
    const result = twiceAsOld(ageDad, ageSon);
    //Then
    expect(result).toBeTypeOf("number");
    expect(result).toEqual(expected);
  });

  it("more cases", () => {
    //Given
    const ageDad = 22 ;
    const ageSon = 1;
    const expected = 20;
    //When
    const result = twiceAsOld(ageDad, ageSon);
    //Then
    expect(result).toBeTypeOf("number");
    expect(result).toEqual(expected);
  });

  it("more cases", () => {
    //Given
    const ageDad = 29 ;
    const ageSon = 0;
    const expected = 29;
    //When
    const result = twiceAsOld(ageDad, ageSon);
    //Then
    expect(result).toBeTypeOf("number");
    expect(result).toEqual(expected);
  });
  });
