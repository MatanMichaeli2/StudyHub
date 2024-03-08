
import { getPasswordStrength } from "./Registration";

test("getPasswordStrength", () => {
  expect(getPasswordStrength("pass")).toBe(1);
  expect(getPasswordStrength("password")).toBe(2);
  expect(getPasswordStrength("Password")).toBe(3);
  expect(getPasswordStrength("Password1")).toBe(4);
  expect(getPasswordStrength("Password1!")).toBe(5);
});
