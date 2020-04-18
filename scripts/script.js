var money; // Бюджет на месяц
var time; // Дата
var textforuser;
var Budget = "Ваш бюджет на месяц";
var userDate = "Введите дату в формате YYYY-MM-DD";
var expensestext = "Обязательная статья расходов";
var expensestext2 = "Сколько";
money = prompt(Budget, 10000); // Ввод бюджета
time = prompt(userDate, "2000-01-01"); // Ввод даты
textforuser = Budget + " = " + money; alert(textforuser);
textforuser = "Дата:" + time; alert(textforuser);
var appData = {
    budget: money,
    timeData: time,
    expenses: {
        type: {},
        size: {}
    },
    optionalExpenses : {},
    income: [],
    savings: false
};

textforuser = "Объекты Бюджет = " + appData.budget + ", Дата = " + appData.timeData;
alert(textforuser);
appData.expenses.type = prompt(expensestext, "Комунальные плтежи");
textforuser = expensestext + appData.expenses.type;
alert(textforuser);
textforuser = "Комунальные платежи за месяц (всего)";
appData.expenses.size = prompt(textforuser, 3000);
textforuser = "Комунальные платежи за день =" + appData.expenses.size/30;
alert(textforuser);
