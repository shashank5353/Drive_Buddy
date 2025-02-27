console.log("hello");
const toCapitalCase = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

let d_l_name = [
  "shashank tirandas",
  "kumara swamy",
  "ronith",
  "suhas anadh",
  "jeevan sai",
  "ramesh verma",
  "siddharth rao",
  "arjun mehta",
  "vikram singh",
  "harsha teja",
  "gopal krishna",
  "manoj kumar",
  "naveen reddy",
  "akhil varma",
  "yashwanth guptha",
  "ravi teja",
  "pavan kumar",
  "tarun yadav",
  "pranay sharma",
  "rohit varma",
  "sandeep reddy",
  "bharath raj",
  "uday kiran",
  "charan deep",
  "aravind prasad"
];

const d_l_ex = [
  5, 6, 4, 3, 7, 8, 5, 6, 10, 4, 
  6, 5, 7, 3, 8, 9, 4, 5, 6, 10, 
  7, 8, 9, 6, 5
];

let d_type=[];
for(let i=0;i<d_l_name.length;i++){
  d_type[i]=[];
  for(let j=0;j<d_l_name.length;j++){
  d_type[i][j]=j;
  }
}

let d_l_ex_t=d_l_ex.slice();

const sort=(arr,arr_i)=>{
  for(let i=0;i<arr.length;i++){
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]<arr[j]){
       let temp=arr[i];
       arr[i]=arr[j];
       arr[j]=temp;
       let temp_i=arr_i[i];
       arr_i[i]=arr_i[j];
       arr_i[j]=temp_i;
    }
    }
}
   return [arr,arr_i];
}

[d_l_ex_t,d_type[1]]=sort(d_l_ex_t,d_type[1]);

console.log(d_type[1],d_l_ex_t,d_l_ex);

const d_l_r = [
  4, 3.5, 4.5, 3, 3.5, 4.2, 4.8, 3.9, 4.6, 3.8, 
  4.1, 4.4, 3.7, 3.2, 4.9, 4.5, 3.6, 4.2, 4.3, 4.7, 
  3.9, 4.8, 4.2, 4.0, 4.1
];
let d_l_r_t=d_l_r.slice();
[d_l_r_t,d_type[2]]=sort(d_l_r_t,d_type[2]);
const d_l_s = [
  8, 9, 8, 7, 10, 9, 8, 7, 11, 8, 
  9, 7, 10, 6, 11, 10, 7, 8, 9, 12, 
  10, 11, 12, 9, 8
];
let d_status = [
  "available", "working", "unavailable", "available", "working",
  "unavailable", "available", "working", "unavailable", "available",
  "working", "unavailable", "available", "working", "unavailable",
  "available", "working", "unavailable", "available", "working",
  "unavailable", "available", "working", "unavailable", "available"
];
let d_status_c=[
  "available", "working", "unavailable"
  ];

/*const a_sort=(arr,arr_i)=>{
  for(let i=0;i<arr.length;i++){
  for(let j=i+1;j<arr.length;j++){
    for(let u=i+1;u<3;u++){
    if(arr[i]){
    }
    }
    }
    }
}
   return [arr,arr_i];
}*/

for(let i=0;i<d_l_name.length;i++){
    d_l_name[i]=toCapitalCase(d_l_name[i]);
   // d_status[i]=toCapitalCase(d_status[i]);
    console.log(d_l_name[i]);
  } 
  

function sugg(type){
const suggetion_space=document.querySelector(".suggetion_space");
suggetion_space.innerHTML="";
let a=1;
for(let ii=0;ii<d_l_name.length ;ii++){
  let i=type[ii];
const sugg=document.createElement("div");
sugg.classList.add("sugg");

const d_sugg_head=document.createElement("div");
d_sugg_head.classList.add("d_sugg_head");

const d_sugg_head_name=document.createElement("div");
d_sugg_head_name.classList.add("d_sugg_head_name");
d_sugg_head_name.innerText="Driver";
d_sugg_head.append(d_sugg_head_name);

const d_sugg_ex=document.createElement("div");
d_sugg_ex.classList.add("d_sugg_ex");
d_sugg_ex.innerText=`${d_l_ex[i]} years`;
d_sugg_head.append(d_sugg_ex);

sugg.append(d_sugg_head);

const d_profile_info=document.createElement("div");
d_profile_info.classList.add("d_profile_info");

const d_profile_photo=document.createElement("div");
d_profile_photo.classList.add("d_profile_photo");
if(i<5)
d_profile_photo.style.backgroundImage=`url('d_p_p/d${i}.jpg')`;
else
d_profile_photo.style.backgroundImage=`url('d_p_p/d${1}.jpg')`;
d_profile_info.append(d_profile_photo);

const d_profile_dis=document.createElement("div");
d_profile_dis.classList.add("d_profile_dis");

const d_profile_dis_name=document.createElement("div");
d_profile_dis_name.classList.add("d_profile_dis_name");
d_profile_dis_name.innerText=d_l_name[i];
d_profile_dis.append(d_profile_dis_name);

const d_profile_dis_rating=document.createElement("div");
d_profile_dis_rating.classList.add("d_profile_dis_rating");
let tem_r="";
for(let tr=0;tr<5;tr++){
  if(tr<Math.floor(d_l_r[i])){
    tem_r+=`<i class="fa-solid fa-star"></i>`;
  }
  else if(tr<d_l_r[i]){
   tem_r+=`<i class="fa-solid fa-star-half-stroke"></i>`;
  }
  else{
  tem_r+=`<i class="fa-regular fa-star"></i>`;
  }
}
d_profile_dis_rating.innerHTML=tem_r;
d_profile_dis.append(d_profile_dis_rating);

const d_profile_dis_salary=document.createElement("div");
d_profile_dis_salary.classList.add("d_profile_dis_salary");
d_profile_dis_salary.innerHTML=`Salary : ${d_l_s[i]} LPA`;
d_profile_dis.append(d_profile_dis_salary);

d_profile_info.append(d_profile_dis);

sugg.append(d_profile_info);

const f_sugg_space=document.createElement("div");
f_sugg_space.classList.add("f_sugg_space");

const f_sugg=document.createElement("div");
f_sugg.classList.add("f_sugg");
if(d_status[i]==d_status_c[0]){
f_sugg.innerHTML=`
 <i class="fa-solid fa-circle-check"></i>
 `;
}
else if(d_status[i]==d_status_c[1]){
f_sugg.innerHTML=`
  <i class="fa-solid fa-circle-check" style="color:#ffa000"></i>
 `;
 f_sugg.style.color="##ffc000";
}
else if(d_status[i]==d_status_c[2]){
f_sugg.innerHTML=`
 <i class="fa-solid fa-circle-xmark" style="color:#ff5353"></i>
 `;
 //f_sugg.style.color="#fe9696";
}

f_sugg.innerHTML+=`${d_status[i]}`;
f_sugg_space.append(f_sugg);

sugg.append(f_sugg_space);


suggetion_space.append(sugg);
}
}
//sugg(d_l_ex_t_i);
sugg(d_type[0]);
function menu_bar_f(){
  const m_l = [
    "All ",
    "Experience",
    "Rating",
    "Availability",
    "Location",
    "Salary",
    "Experience Level",
    "License Type",
    "Age",
    "Driver's Vehicle",
    "Working Hours",
    "Distance Covered",
    "Hourly Rate",
    "long-distance ", 
    "city driving",
    "Customer Feedback",
    "Insurance Status"
];
  let m_l_a=[]
  const menu_bar=document.querySelector(".menu_bar");
  let p=0;
  for(let i=0;i<m_l.length;i++){
    const m_b=document.createElement("div");
    m_b.classList.add("m_b");
    m_b.innerText=m_l[i];
    if(i==p){
     m_b.style.color="#faa71f";
    }
    m_l_a[i]=m_b;
    m_b.addEventListener("click",()=>{
      if(i==1){
        sugg(d_type[1]);
      }
      else if(i==2){
      sugg(d_type[2]);
      }
      else{
        sugg(d_type[0]);
      }
      m_l_a[p].style.color="#7c969a";
      m_l_a[i].style.color="#faa71f";
      p=i;
    })
    menu_bar.append(m_b);
  }
  
}
menu_bar_f();