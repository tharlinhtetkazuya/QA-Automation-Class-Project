const login = require("./login");

test("Returns true for correct username and password", () => {
    expect(login("admin", "123")).toBe(true);
});

test("Returns false for incorrect username", () => {
    expect(login("user", "123")).toBe(false);
});

test("Returns false for incorrect password", () => {
    expect(login("admin", "456")).toBe(false);
});

test("Returns false for incorrect username and password", () => {
    expect(login("user", "456")).toBe(false);
});
