let profile = localStorage.getItem('ProfileImage');
let name1 = localStorage.getItem('Membername');
let address = localStorage.getItem('memderAd');
let id = localStorage.getItem('id')



var memberData = [
    {
        description:'description-1',
        mobile:'+919676302957',
        father:'T.Naresh',
        mother:'T.Narmadha',
        dob:'21-07-1997',
        mail:'Unavalable',
        gender:'Male',
        location:{
            v:'Village : Rajpally',
            d:'Distirc : Medak',
            s:'State   : Telangena'
        }
    },
    {
        description:'description-2',
        mobile:'+917032491730',
        father:'P.Raju',
        mother:'P.Padma',
        dob:'24-02-1998',
        mail:'panthularavi18@gmail.com',
        gender:'Male',
        location:{
            v:'Village : Rajpally',
            d:'Distirc : Medak',
            s:'State   : Telangena'
        }
    },
    {
        description:'description-3',
        mobile:'+917799030237',
        father:'K.Vittal',
        mother:'K.Pushpa',
        dob:'06-03-1997',
        mail:'Unavalable',
        gender:'Male',
        location:{
            v:'Village : Rajpally',
            d:'Distirc : Medak',
            s:'State   : Telangena'
        }
    },
    {
        description:'description-4',
        mobile:'+919347128303',
        father:'K.Raju',
        mother:'Unavalable',
        dob:'14-08-1998',
        mail:'Unavalable',
        gender:'Male',
        location:{
            v:'Village : Rajpally',
            d:'Distirc : Medak',
            s:'State   : Telangena'
        }
    },
    {
        description:'description-5',
        mobile:'+918978098451',
        father:'P.Raju',
        mother:'P.Padma',
        dob:'09-01-2000',
        mail:'Unavalable',
        gender:'Male',
        location:{
            v:'Village : Rajpally',
            d:'Distirc : Medak',
            s:'State   : Telangena'
        }
    },
    {
        description:'description-6',
        mobile:'+916300134390',
        father:'K.Ramesh',
        mother:'K.Nagamani',
        dob:'24-02-2000',
        mail:'Unavalable',
        gender:'Male',
        location:{
            v:'Village : Rajpally',
            d:'Distirc : Medak',
            s:'State   : Telangena'
        }
    },
    {
        description:'description-7',
        mobile:'+916301662983',
        father:'Unavalable',
        mother:'Unavalable',
        dob:'Unavalable',
        mail:'Unavalable',
        gender:'Male',
        location:{
            v:'Village : Nizambad',
            d:'Distirc : Nizamabad',
            s:'State   : Telangena'
        }
    },
    {
        description:'description-8',
        mobile:'+918074651427',
        father:'K.Srishelam',
        mother:'K.Sandya Rani',
        dob:'20-05-2000',
        mail:'Unavalable',
        gender:'Male',
        location:{
            v:'Village : Rajpally',
            d:'Distirc : Medak',
            s:'State   : Telangena'
        }
    },
   
]

let newset = document.getElementById('overlyimg');
let newname = document.getElementById('name');
let newadd = document.getElementById('add');

newset.src = profile;
newname.innerHTML = name1;
newadd.innerHTML = address;
// ------------------------------------- //

let mbn = document.getElementById('mobileNumber');
mbn.innerHTML = memberData[id].mobile;

let description = document.getElementById('descr');
description.innerHTML = memberData[id].description;

document.getElementById('dt1').innerHTML = name1;
document.getElementById('dt2').innerHTML = memberData[id].father;
document.getElementById('dt3').innerHTML = memberData[id].mother;
document.getElementById('dt4').innerHTML = memberData[id].dob;
document.getElementById('dt5').innerHTML = memberData[id].mobile;
document.getElementById('dt6').innerHTML = memberData[id].mail;
document.getElementById('dt7').innerHTML = memberData[id].gender;
document.getElementById('dt8_1').innerHTML = memberData[id].location.v;
document.getElementById('dt8_2').innerHTML = memberData[id].location.d;
document.getElementById('dt8_3').innerHTML = memberData[id].location.s;

