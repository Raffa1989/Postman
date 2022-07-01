// POST запрос на http://162.55.220.72:5005/user_info_2

// Спарсить response body в json
let jsonData = pm.response.json();

let start_salary = jsonData.start_qa_salary;
let month_6_salary = jsonData.qa_salary_after_6_months;
let month_12_salary = jsonData.qa_salary_after_12_months;
let month_18_salary = jsonData["qa_salary_after_1.5_year"];
let month_42_salary = jsonData["qa_salary_after_3.5_years"];
let person_u_name = jsonData.person.u_name;
let person_u_age = jsonData.person.u_age;
let salary_5_years = jsonData.person.u_salary_5_years;
let resp_person = jsonData.person;

// Спарсить request
let req = request.data;

let req_salary = req.salary;
let req_age = req.age;

// Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Проверить, что json response имеет параметр start_qa_salary
pm.test("Check_1", function(){
    pm.expect(JSON.stringify(jsonData)).to.include("start_qa_salary");
});

// Проверить, что json response имеет параметр qa_salary_after_6_months
pm.test("Check_2", function(){
    pm.expect(JSON.stringify(jsonData)).to.include("qa_salary_after_6_months");
});

// Проверить, что json response имеет параметр qa_salary_after_12_months
pm.test("Check_3", function(){
    pm.expect(JSON.stringify(jsonData)).to.include("qa_salary_after_12_months");
});

// Проверить, что json response имеет параметр qa_salary_after_1.5_year
pm.test("Check_4", function(){
    pm.expect(JSON.stringify(jsonData)).to.include("qa_salary_after_1.5_year");
});

// Проверить, что json response имеет параметр qa_salary_after_3.5_years
pm.test("Check_5", function(){
    pm.expect(JSON.stringify(jsonData)).to.include("qa_salary_after_3.5_year");
});

// Проверить, что json response имеет параметр person
pm.test("Check_6", function(){
    pm.expect(JSON.stringify(jsonData)).to.include("person");
});

// Проверить, что параметр start_qa_salary равен salary из request (salary забрать из request.)
pm.test("Correct_salary_1", function () {
    pm.expect(String(start_salary)).to.eql(req_salary);
});

// Проверить, что параметр qa_salary_after_6_months равен salary*2 из request (salary забрать из request.)
pm.test("Correct_salary_2", function () {
    pm.expect(month_6_salary).to.eql(req_salary*2);
});

// Проверить, что параметр qa_salary_after_12_months равен salary*2.7 из request (salary забрать из request.)
pm.test("Correct_salary_3", function () {
    pm.expect(month_12_salary).to.eql(req_salary*2.7);
});

// Проверить, что параметр qa_salary_after_1.5_year равен salary*3.3 из request (salary забрать из request.)
pm.test("Correct_salary_4", function () {
    pm.expect(month_18_salary).to.eql(req_salary*3.3);
});

// Проверить, что параметр qa_salary_after_3.5_years равен salary*3.8 из request (salary забрать из request)
pm.test("Correct_salary_5", function () {
    pm.expect(month_42_salary).to.eql(req_salary*3.8);
});

// Проверить, что в параметре person, 1-й элемент из u_name равен salary из request (salary забрать из request)
pm.test("Person_name", function () {
    pm.expect(String(person_u_name[1])).to.eql(req_salary);
});

// Проверить, что что параметр u_age равен age из request (age забрать из request)
pm.test("Person_age", function () {
    pm.expect(String(person_u_age)).to.eql(req_age);
});

// Проверить, что параметр u_salary_5_years равен salary*4.2 из request (salary забрать из request.)
pm.test("Future_salary", function () {
    pm.expect(salary_5_years).to.eql(req_salary*4.2);
});

// ***Написать цикл который выведет в консоль по порядку элементы списка из параметра person
// for (let i in jsonData.person )  
// console.log(jsonData.person[i])

for (let key in resp_person){
    console.log(key + ':' + resp_person[key])
}
