console.log("Hello World!")

var testDiv = document.getElementById('testdiv');

var craDom = document.createElement('p');
var txt = 'Hello World!';
var txtNode = document.createTextNode(txt)
var newDom = craDom.appendChild(txtNode);

// testDiv.appendChild(newDom).replaceChild();

// console.log(testDiv);

var abbrs = document.getElementsByTagName('abbr');


function isArray(obj) {

    return Array.isArray(obj);
}


function unique1(array) {

    var n = []; //创建一个临时数组

    for (var i = 0; i < array.length; i++) {
        //如果当前数组的第i项已经保存进了临时数组，就跳过，
        //否则把当前项push到临时数组里面
        if (n.indexOf(array[i]) == -1) {

            n.push(array[i]);
        }
    }

    return n;
}


var testArr = [1, 2, 1, 3, 5, 2, 6, 7, 5, 4, 3, 2];

console.log(testArr);
console.log(unique1(testArr));

console.log(typeof(testArr));
console.log(toString(testArr));


var peoples = [{
    name: 'Agraj',
    gender: 'M',
    age: 29,
    address: {
        city: 'Delhi',
        pincode: '110064'
    }
}, {
    name: 'Mark',
    gender: 'M',
    age: 35,
    address: {
        city: 'West Bengal',
        pincode: '220013'
    }
}, {
    name: 'Lance',
    gender: 'M',
    age: 39,
    address: {
        city: 'Chandigarh',
        pincode: '201201'
    }
}, {
    name: 'Vikas',
    gender: 'M',
    age: 21,
    address: {
        city: 'Noida',
        pincode: '201301'
    }
}, {
    name: 'Kanika',
    gender: 'F',
    age: 21,
    address: {
        city: 'Noida',
        pincode: '201301'
    }
}];

console.log(peoples[3].hasOwnProperty('address'));
// debugger;

// peoples.forEach();

// var articleHeight = document.getElementById('article1').clientHeight;
// var footer = document.getElementById('footer');
// window.addEventListener('scroll', scrollHandler);

// function scrollHandler(e) {
//     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//     if (($("body").height() - scrollTop) <= document.documentElement.clientHeight) {
//         footer.classList.add('title-anim');
//     } else {
//         footer.classList.remove('title-anim')
//     }
// }

window.onscroll = function() {

    var topBg = document.getElementById('topbg');

    var sot = document.body.scrollTop;
    if (sot >= 100) {
        topBg.className = 'blur';
    } else {

        topBg.className = '';
    }

}

document.cookie = 'username=yourusername';
var cookies = document.cookie;
console.log(cookies);

//  var dt = new Date(); 
// dt.setSeconds(dt.getSeconds() + 60); 
// document.cookie = "cookietest=1; expires=" + dt.toGMTString(); 
// var cookiesEnabled = document.cookie.indexOf("cookietest=") != -1; 
// if(!cookiesEnabled) { 
//     //没有启用cookie 
//     alert("没有启用cookie ");
// } else{
//     //已经启用cookie 
//     alert("已经启用cookie ");
// }

function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}


// setCookie('name', 'Mary', 10);

// for (var i = 0; i < 10; i++) {
//     setCookie('name' + i, 'Mary' + i, 10);
// }

var day = new Date();
console.log(day.getDate());
// document.cookie = '';
var strings = "1234sdf asfsd56";

var test1 = "My first";
console.log(encodeURI(test1));
// console.log(escape('strings'));



var height = parseFloat(prompt('请输入身高(m):'));
var weight = parseFloat(prompt('请输入体重(kg):'));


var bmi = weight / (height * height);
if (bmi < 18.5) {
    alert("体重过轻！");
} else if (bmi >= 18.5 && bmi < 25) {
    alert("体重正常！");
} else if (bmi >= 25 && bmi < 28) {
    alert("体重过重！");
} else if (bmi >= 28 && bmi < 32) {
    alert("体重肥胖！");
} else if (bmi > 32) {
    alert("体重严重肥胖！");
}