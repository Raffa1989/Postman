// GET запрос на http://162.55.220.72:5005/first

// Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Проверить, что в body приходит правильный string
pm.test("Correct type", function () {
    pm.expect(pm.response.text()).to.include("This is the first responce from server!");
});
