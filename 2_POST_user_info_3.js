// POST запрос на http://162.55.220.72:5005/user_info_3

// Спарсить response body в json
let jsonData = pm.response.json();

let cor_name = jsonData.name;
let cor_age = jsonData.age;
let cor_salary = jsonData.salary;
let family = jsonData.family;
let salary_4 = jsonData.family.u_salary_1_5_year

// Спарсить request
let req = request.data;

let req_name = req.name;
let req_age = req.age;
let req_salary = req.salary;
let req_salary_1_5 = req.salary * 4;

// Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Проверить, что name в ответе равно name s request (name вбить руками)
pm.test("Correct name", function () {
    pm.expect(cor_name).to.eql("Tatiana");
});

// Проверить, что age в ответе равно age s request (age вбить руками) 
pm.test("Correct age", function () {
    pm.expect(cor_age).to.eql("33");
});

// Проверить, что salary в ответе равно salary s request (salary вбить руками)
pm.test("Correct salary", function () {
    pm.expect(cor_salary).to.eql(150000);
});

// Проверить, что name в ответе равно name s request (name забрать из request)
pm.test("Correct name_req", function () {
    pm.expect(req_name).to.eql("Tatiana");
});

// Проверить, что age в ответе равно age s request (age забрать из request)
pm.test("Correct age_req", function () {
    pm.expect(cor_age).to.eql(req_age);
});

// Проверить, что salary в ответе равно salary s request (salary забрать из request)
pm.test("Correct salary_req", function () {
    pm.expect(req_salary).to.eql("150000");
});

// Вывести в консоль параметр family из response
console.log("response_family - ", family)

// Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request)
pm.test("Salary_1_5", function () {
    pm.expect(req_salary_1_5).to.eql(salary_4);
});

