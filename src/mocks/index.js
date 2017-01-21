import Mock from 'mockjs';
// 首页
Mock.mock(/\/jinshizi-manage-web\/api\/subject\/list/, {
    data: [{
        id: 310012,
        lendRate: 8.00,
        isNewer: 1,
        subjectName: '分秒YY100-20170103期',
        subjectType: 2,
        lendAmt: 300000.00,
        investMoney: 266000.00,
        rewardRate: 8.00,
        lendDate: 1,
        subjectLabel: '3',
        productName: '分秒月盈',
    }, {
        id: 310017,
        lendRate: 8.00,
        isNewer: 0,
        subjectName: '圣诞专享标-拿iPhone7',
        subjectType: 2,
        lendAmt: 300000.00,
        investMoney: 233000.00,
        rewardRate: 0.00,
        lendDate: 6,
        subjectLabel: '3',
        productName: '活动产品',
    }, {
        id: 310016,
        lendRate: 8.00,
        isNewer: 0,
        subjectName: '圣诞专享标-拿iPhone7',
        subjectType: 2,
        lendAmt: 500000.00,
        investMoney: 445000.00,
        rewardRate: 0.00,
        lendDate: 3,
        subjectLabel: '3',
        productName: '分秒月盈',
    }, ],
    retCode: '0000',
    pageOffset: 1,
    totalCount: 21,
    pageSize: 3,
    totalPage: 7,
});
Mock.mock('http://192.168.1.13:8080/jinshizi-manage-web/api/subject/view?id=310012', {
    success: true,
    data: {
        id: 310014,
        lendRate: 11.00,
        planInterestDate: '2017-01-06',
        subjectName: '分秒SX100-20170103期',
        repayMode: 2,
        lendAmt: 150000.00,
        payBackDate: '2017-07-04',
        lendCycleValue: 6,
        investMoney: 119900.00,
        rewardRate: 0.00,
        overDate: '2017-01-25',
        publishDate: '2017-01-03',
    },
    code: '0000',
});
Mock.mock('http://192.168.1.13:8080/jinshizi-manage-web/api/subject/viewInfo?id=310012', {
    data: [{
            content: '借款企业是一家中央企业，注册资金1亿人民币，其主要从事卫星导航通信遥感技术、信息、数据、智能技术开发、技术咨询、技术转让、技术服务；导航通信遥感一体化终端产品的研发、生产、销售等。企业致力于建设成为具有较强投融资能力、国内一流的现代化保税区投资建设集团公司。借款企业汇集韩、台、港三地企业商会、协会、资金、技术、成果等资源，拥有多家国内外财团、风投、创投、银行等金融机构伙伴与合作关系。集聚了投融资、法律等各领域的专门人才，整合政府、政策、企业、管理、资金、信息等多方面优势。通过投融资专业化平台的搭建，汇集优势力量，整合优质资源,充分利用各种资本运营和创新手段，为各地政府、企业、投资者提供全方位的服务。',
            name: '项目描述',
        },
        {
            content: '因企业近期参与多个项目合作，主要进行某大型商圈、港口建设及周边配套服务区土地前期开发；市政基础设置投资和建设；公用设施的投资、建设和经营；信息平台建设和经营；开展物业管理、咨询服务、仓储、物流、加工等相关业务。而造成资金短缺，因此需补充流动资金用于企业正常运转使用，以保证项目的顺利进行。根据企业实际借款需求，分期融资，此次为融资项目30万元。',
            name: '借款用途',
        },
        {
            content: '1、借款企业第一还款来源主要为项目回款，企业经营状况好，还款来源有保障；2、第三方企业的反担保保证代偿；3、借款企业作为项目方借款人，以股权做为质押对项目本息做全额担保，并承担无限连带责任；4、某大型国企为本项目提供现金补足担保，若项目公司发生兑付风险，该国企代其兑付本基金的本金及投资收益；',
            name: '还款来源',
        },
    ],
    retCode: '0000',
});
// 可用余额
Mock.mock('http://192.168.1.13:8080/jinshizi-manage-web/api/user/getBlance?acctKey=f4b37ae9978cb85c0529de792b87f115', {
    data: {
        balance: '1200100.33',
        noAvailableBalance: '1200000.00',
    },
    retCode: '0000',
});