import Mock from 'mockjs';

Mock.mock('http://192.168.1.13:8080/jinshizi-manage-web/api/subject/list?pageOffset=2&pageSize=3', {
    success: true,
    data: {
        pageOffset: 2,
        count: 8,
        pageSize: 3,
        firstResult: 3,
        maxResults: 6,
        totalPage: 3,
        params: {
            all_status: [
                5,
                6,
                8,
            ],
        },
        list: [
            {
                lendRate: 11.00,
                isNewer: 0,
                subjectName: '分秒SX100-20170103期',
                subjectType: 2,
                lendAmt: 150000.00,
                investMoney: 119900.00,
                rewardRate: 0.00,
                lendDate: 6,
                subjectLabel: '3',
                productName: '分秒省心',
            }, {
                lendRate: 8.00,
                isNewer: 0,
                subjectName: '分秒YY200-20170103期',
                subjectType: 2,
                lendAmt: 100000.00,
                investMoney: 0.00,
                rewardRate: 0.00,
                lendDate: 1,
                subjectLabel: '3',
                productName: '分秒月盈',
            }, {
                lendRate: 12.00,
                isNewer: 0,
                subjectName: '分秒SX200-20170103期',
                subjectType: 2,
                lendAmt: 100000.00,
                investMoney: 100000.00,
                rewardRate: 0.00,
                lendDate: 9,
                subjectLabel: '3',
                productName: '分秒省心',
            },
        ],
    },
    code: '1000',
});
