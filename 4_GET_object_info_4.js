// GET запросн на http://162.55.220.72:5005/object_info_4

// Спарсить response body в json
let jsonData = pm.response.json();

let resp_name = jsonData.name;
let resp_age = String(jsonData.age);
let resp_salary = jsonData.salary


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

// Вывести в консоль параметр salary из request
console.log("Request_salary -", req_salary)
// Вывести в консоль параметр salary из response
console.log("Response_salary", resp_salary)
// Вывести в консоль 0-й элемент параметра salary из response
console.log("Response_salary_0 -", resp_salary[0])
// Вывести в консоль 1-й элемент параметра salary параметр salary из response
console.log("Request_salary_1 -", resp_salary[1])
//  Вывести в консоль 2-й элемент параметра salary параметр salary из response
console.log("Request_salary_2 -", resp_salary[2])

// Проверить, что 0-й элемент параметра salary равен salary из request (salary забрать из request)
pm.test("Equality_salary_1", function () {
    pm.expect(String(resp_salary[0])).to.eql(req_salary);
});

// Проверить, что 1-й элемент параметра salary равен salary*2 из request (salary забрать из request)
pm.test("Equality_salary_2", function () {
    pm.expect(resp_salary[1]).to.eql(String(req_salary*2));
});

// Проверить, что 2-й элемент параметра salary равен salary*3 из request (salary забрать из request)
pm.test("Equality_salary_3", function () {
    pm.expect(resp_salary[2]).to.eql(String(req_salary*3));
});

pm.environment.set("name", req.name);
pm.environment.set("age", req.age);
pm.environment.set("salary", req.salary);

resp_salary.forEach((item) => {console.log(item)});

