class Customer
{
    constructor(firstName, lastName, email, telephoneNumber)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.telephoneNumber=telephoneNumber;
    }
}
let customer1 = new Customer('Kengle','Pierrette','Pierrettekengle@gmail.com','653683578');
let customer2 = new Customer('Noutchomwo domini','Pulcherie','Pulcheriedomini@gmail.com','675886530');
let customer3 = new Customer('tankoua nkouamen','clovis martial','martialnkouamen@gmail.com','675547215');
let customer4 = new Customer('tefang nkouamen','sorel laure','lauretefang@gmail.com','676195712');
let customer5 = new Customer('Noutchomwo nkouamen','Alain Landry','alinolandry@gmail.com','695222345');
let customer6 = new Customer('Tankoua Nkouamen','Franck Olivier','OlivierTankoua@gmail.com','696159648');
let customer7 = new Customer('Simo','Adonis','Adonisimo@gmail.com','693539419');
let customer8 = new Customer('Tabigue','Hubert','Hubertabigue@gmail.com','677968817');
let customer9 = new Customer('Tabigue','Hurel Anaelle','AnaelleTabigue@gmail.com','655330528');
let customer10 = new Customer('toulepi foudjo','jordan','jordanfodjo@gmail.com','696806275');
let customer11 = new Customer('Sigha fotsing','daniel','danielfotsing@gmail.com','655130055');
let customer12 = new Customer('Edzoto','Pascal','Pascaledzoto@gmail.com','697619695')
let customer13 = new Customer('Tongang','Herbain Geraldin','GeraldinTongang@gmail.com','691542665');
let customer14 = new Customer('Mbong','Pierre Nelson','NelsonMbong@gmail.com','699178694');
let customer15 = new Customer('Tankeu','Emelda','EmeldaTankeu@gmail.com','658362215');
let customer16 = new Customer('Mvenbe','Donald Fabrice','donaldfabricemvenbe@gmail.com','657840615');
let customer17 = new Customer('Angoula Ayi','Paris','Parisayi@gmail.com','691928238');
let customer18 = new Customer('EL','Senator','LEsenateur@gmail.com','699390058');
let customer19 = new Customer('wachi simo','ange gladice','Angewachi@gmail.com','659128510');
let customer20 = new Customer('EOG','Prince','Princeog@gmail.com','693023052');


const customer = [customer1, customer2, customer3,customer4,customer5,customer6,customer7,customer8,customer9,
    customer10,customer11,customer12,customer13,customer14,customer15,customer16,customer17, customer18, customer19,
    customer20];



class Order
{
    constructor(productName, price, paymentDate)
    {
        this.productName=productName;
        this.price=price;
        this.paymentDate=paymentDate;
    }
}
 
let order1= new Order('sallon',1000000, '12-12-2014');
let order2= new Order('chambre',600000, '12-1-2014');
let order3= new Order('cuisine',1500000, '1-12-2014');
let order4= new Order('douche',2000000, '10-12-2014');
let order5= new Order('salle à manger',2500000, '12-12-2018');
let order6= new Order('lits',100000, '2-12-2014');
let order7= new Order('meubles',1800000, '12-01-2016');
let order8= new Order('jardins',360000, '2-02-2014');
let order9= new Order('sallon',1900000, '15-11-2015');
let order10= new Order('chambre',1000000, '23-07-2017');
let order11= new Order('cuisine',1200000, '19-04-2020');
let order12= new Order('cuisinière',200000, '02-03-2013');
let order13= new Order('douche',700000, '28-02-2019');
let order14= new Order('salle à manger',4000000, '12-12-2014');
let order15= new Order('peintures',1500000, '12-12-2014');
let order16= new Order('jardin',10000000, '12-12-2014');
let order17= new Order('sallon',13000000, '12-12-2014');
let order18= new Order('table dasse',3000000, '12-08-2014');
let order19= new Order('terrasse',2500000, '12-10-2014');
let order20= new Order('terasse',850000, '12-11-2014');


const order = [order1,order2,order3,order4,order5,order6,order7,order8,order9,order10,order11,order11,order13,order14,
    order15,order16,order17,order18,order19,order20];
