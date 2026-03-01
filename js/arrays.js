let defaultEmployees = [

    new Employee(38647, 'Patricia', 'Barber', 'pbarber@company.com', 'Sales', new Date('2005-01-23'), new Date('2015-01-01')),
    new Employee(72102, 'Kimberley', 'Berry', 'kberry@company.com', 'Manufacturing', new Date('2007-06-21'), new Date('2016-05-01')),
    new Employee(36693, 'Burton', 'Miles', 'bmiles@company.com', 'Manufacturing', new Date('2009-03-01'), new Date('2017-03-15')),
    new Employee(58000, 'Rosa', 'Smith', 'rsmith@company.com', 'Sales', new Date('2012-09-26'), new Date('2018-08-15')),
    new Employee(54929, 'Jane', 'Pruitt', 'jpruitt@company.com', 'Manufacturing', new Date('2015-04-01'), null),
    new Employee(24612, 'Regina', 'Suarez', 'rsuarez@company.com', 'Manufacturing', new Date('2018-11-01'), null),
    new Employee(68392, 'Monroe', 'Carr', 'mcarr@company.com', 'Manufacturing', new Date('2019-01-11'), null),
    new Employee(73604, 'Lonny', 'Contreras', 'lcontreras@company.com', 'HR', new Date('2020-02-24'), null),
    new Employee(37640, 'Alba', 'Guzman', 'aguzman@company.com', 'Manufacturing', new Date('2021-03-10'), null),
    new Employee(61036, 'Drew', 'Cowan', 'dcowan@company.com', 'Manufacturing', new Date('2021-04-04'), null),
    new Employee(33211, 'Ike', 'Wyatt', 'iwyatt@company.com', 'HR', new Date('2021-05-06'), null)
];

let defaultSuppliers = [
    new Supplier('ACMED34234', 'ACME Inc.', '34234', 'John', 'Doe', 'jdoe@acmeinc.com', new Date('2021-08-01'), false),
    new Supplier('BESTC23532', 'Best Company', '23532', 'Jane', 'Smith', 'jsmith@bestcompany.com', new Date('2022-02-15'), true),
    new Supplier('COOLS53462', 'Cool Corp', '53462', 'Bob', 'Johnson', 'bjohnson@coolcorp.com', new Date('2022-05-20'), true),
    new Supplier('DELTA23743', 'Delta LLC', '23743', 'Alice', 'Brown', 'abrown@deltallc.com', new Date('2023-01-01'), true),
    new Supplier('EXCEL34865', 'Excel Enterprises', '34865', 'Tom', 'Wilson', 'twilson@excelenterprises.com', new Date('2023-06-30'), true),
    new Supplier('FRESH34235', 'Fresh Foods', '34235', 'Sara', 'Lee', 'slee@freshfoods.com', new Date('2020-05-01'), false),
];
let defaultCustomers = [
    new Customer(9690528, 'Rickey', 'Key', 'rickeykey@sample.com', '578-708-7817', false, new Date('2023-08-11')),
    new Customer(3985939, 'Clarissa', 'Singleton', 'clarissasingleton@sample.com', '339-593-1528', true, new Date('2023-07-01')),
    new Customer(6268069, 'Domenic', 'Maldonado', 'domenicmaldonado@sample.com', '959-706-4190', false, new Date('2023-06-14')),
    new Customer(3868672, 'Isiah', 'Lowery', 'isiahlowery@test.com', '945-715-3043', true, new Date('2022 - 05 - 17')),
    new Customer(5880281, 'Evangeline', 'Figueroa', 'evangelinefigueroa@example.com', '526-803-4658', false, new Date('2023-04-01')),
    new Customer(5916088, 'Mabel', 'Prince', 'mabelprince@test.com', '422-381-8753', true, new Date('2022 - 03 - 15')),
    new Customer(5405271, 'Bret', 'Melendez', 'bretmelendez@example.com', '877-575-2516', false, new Date('2023 - 02 - 18')),
    new Customer(9239813, 'Robby', 'Haley', 'robbyhaley@trial.com', '601-387-5361', false, new Date('2021-01-21')),
    new Customer(2861338, 'Michelle', 'Lawson', 'michellelawson@test.com', '347-376 - 8539', false, new Date('2020 - 12 - 30')),
];