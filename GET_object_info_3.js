// GET запрос на http://162.55.220.72:5005/object_info_3

// Спарсить response body в json
let jsonData = pm.response.json();

let resp_name = jsonData.name;
let resp_age = jsonData.age;
let resp_salary = String(jsonData.salary);
let resp_family = jsonData.family;
let resp_dog = jsonData.family.pets.dog;
let resp_name_dog = jsonData.family.pets.dog.name;
let resp_age_dog = jsonData.family.pets.dog.age;

// Спарсить request
let req = pm.request.url.query.toObject();

let req_name = req.name;
let req_age = req.age;
let req_salary = req.salary

// Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Проверить, что name в ответе равно name s request (name забрать из request)
pm.test("Name", function () {
    pm.expect(resp_name).to.eql(req_name);
});

// Проверить, что age в ответе равно age s request (age забрать из request)
pm.test("Age", function () {
    pm.expect(resp_age).to.eql(req_age);
});

// Проверить, что salary в ответе равно salary s request (salary забрать из request)
pm.test("Salary", function () {
    pm.expect(resp_salary).to.eql(req_salary);
});

// Вывести в консоль параметр family из response
console.log("response_family - ", resp_family)

// Проверить, что у параметра dog есть параметры name
pm.test("Dog_name", function () {
    pm.expect(JSON.stringify(resp_dog)).to.include("name");
});

// Проверить, что у параметра dog есть параметры age
pm.test("Dog_age", function () {
    pm.expect(JSON.stringify(resp_dog)).to.include("age");
});

// Проверить, что параметр name имеет значение Luky
pm.test("Correct_Name", function () {
    pm.expect(resp_name_dog).to.eql("Luky");
});

// Проверить, что параметр age имеет значение 4
pm.test("Correct_Age", function () {
    pm.expect(resp_age_dog).to.eql(4);
});
