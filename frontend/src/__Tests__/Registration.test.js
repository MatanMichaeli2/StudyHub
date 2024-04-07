
import { getPasswordStrength } from "../components/Registration";
import { render, fireEvent } from '@testing-library/react';
import Registration from '../components/Registration';



test("getPasswordStrength", () => {
  expect(getPasswordStrength("pass")).toBe(1);
  expect(getPasswordStrength("password")).toBe(2);
  expect(getPasswordStrength("Password")).toBe(3);
  expect(getPasswordStrength("Password1")).toBe(4);
  expect(getPasswordStrength("Password1!")).toBe(5);
});
