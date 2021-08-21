  let img =  document.querySelectorAll('.myimg');
  let name1 = document.querySelectorAll('.membername');
  let ad = document.querySelectorAll('.memberaddress');
  let newset = document.getElementById('overlyimg');

let sendData = (n)=>{
    localStorage.setItem('ProfileImage',img[n].src);
    localStorage.setItem('Membername',name1[n].innerHTML);
    localStorage.setItem('memderAd',ad[n].innerHTML);
    localStorage.setItem('id',n);
}


