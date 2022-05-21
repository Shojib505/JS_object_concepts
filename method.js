const student = {
    id: 101,
    money: 5000,
    name: 'Ali',
    major: 'mathematics',
    isRitch: true,
    subject: ['english', 'economics', 'math101', 'ICT'],
    bestFriend: {
        name: 'bnadu',
        major: 'mathmatics'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam')
    },
    treatday: function (expense, bokshis) {
        this.money = this.money - expense - bokshis;
        return this.money;
    }
}

student.takeExam();
const remaining = student.treatday(900, 10);
const remaining1 = student.treatday(100, 5);
console.log(remaining1)