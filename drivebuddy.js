console.log("hello");
const toCapitalCase = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
const cars_list = [
    // Popular Indian Cars
    "Maruti Suzuki Alto",
    "Maruti Suzuki Swift",
    "Maruti Suzuki Baleno", 
    "Maruti Suzuki WagonR",
    "Maruti Suzuki Dzire", 
    "Maruti Suzuki Ertiga", 
    "Hyundai Creta", 
    "Hyundai Venue", 
    "Hyundai i20", 
    "Hyundai Verna", 
    "Tata Nexon",
    "Tata Harrier",
    "Tata Punch", 
    "Tata Altroz",
    "Tata Safari", 
    "Mahindra XUV700",
    "Mahindra Scorpio-N",
    "Mahindra Thar", 
    "Kia Sonet", 
    "Kia Seltos", 
    "Kia Carens", 
    "Toyota Fortuner",
    "Toyota Innova Crysta",
    "Toyota Urban Cruiser", 
    "Honda City",
    "Honda Amaze",
    "Renault Kiger",
    "Renault Triber", 
    "MG Hector", 
    "MG Astor", 
    "Volkswagen Virtus",
    "Skoda Slavia",

    // Luxury Brands
    "BMW 3 Series", "BMW X5", "BMW 7 Series", 
    "Audi A4", "Audi Q7", "Audi R8", 
    "Mercedes-Benz C-Class", "Mercedes-Benz E-Class", "Mercedes-Benz GLE", 
    "Land Rover Defender", "Range Rover Evoque", "Range Rover Velar", 
    "Porsche 911", "Porsche Cayenne", 
    "Jaguar F-PACE", "Jaguar XE", 
    "Lexus RX", "Lexus NX", 
    "Volvo XC90", "Volvo S60"
];

let d_l_name = [
   "Aarav",
  "Vikram",
  "Rohan",
  "Sanjay",
  "shashank tirandas",
  "kumara swamy",
  "ronith",
  "suhas anadh",
  "jeevan sai",
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
const skilled_at = [
  [0, 1], [0, 2], [3, 4], [1, 5], [2, 6],
  [3, 7], [4, 8], [0, 3], [1, 7], [5, 8],
  [2, 9], [6, 10], [0, 11], [2, 12], [3, 13],
  [4, 14], [5, 15], [6, 16], [7, 17], [8, 18],
  [0, 19], [1, 4], [2, 8], [3, 12], [4, 16]
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

//console.log(d_type[1],d_l_ex_t,d_l_ex);

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
 //   console.log(d_l_name[i]);
  } 

//searched list search bar
function s_l_search_bar_f(){
  //console.log("helloooo");
  const search_text=document.querySelector(".s_l_search_text");
  const search_icon=document.querySelector(".s_l_search_icon");
  const searched_list_space=document.querySelector(".s_l_searched_list_space");
let c_l_l=[];
let s_l_l=[];
let s_l_sugg_list=[];
let s_l_m=[];
search_text.addEventListener("input",()=>{
   searched_list_space.innerHTML="";
   let value=search_text.value;
   let v_len=value.length;
   const c_list_out=(c_l,valuee)=>{
      let c_len=c_l.length;
      let c_listed=[];
      let c_listed_index=[];
      let c_listed_u=[];
      let c_listed_c=[];
      let c_listed_i=0;
      for(let i=0;i<c_len;i++){
      for(let j=0;j<c_l[i].length;j++){
       let c_len=cars_list[c_l[i][j]].length;
      for(let v=0;v<c_len-(c_len%v_len)-1;v++){
        let sl=cars_list[c_l[i][j]].slice(v,v+v_len);
 if(valuee.toLowerCase()==sl.toLowerCase()){
    //  console.log(`${v} ${v_len} ${sl}`);
  // console.log(`=> ${value} ${sl} ${l[u]}`);
    c_listed[c_listed_i]=cars_list[c_l[i][j]];
      c_listed_index[c_listed_i]=v;
      c_listed_u[c_listed_i]=i;
      c_listed_c[c_listed_i]=0;
      c_listed_i++;
        break;
          }
        } 
        }
      }
      return [c_listed,c_listed_index,c_listed_u,c_listed_c];
   }
   c_l_l=c_list_out(skilled_at,value);
   
   const list_out=(l)=>{
      let len=l.length;
      let listed=[];
      let listed_index=[];
      let listed_u=[];
      let listed_s=[];
      let listed_i=0;
      for(let u=0;u<len;u++){
       let s_len=l[u].length;
     for(let v=0;v<s_len-(s_len%v_len)-1;v++){
          let sl=l[u].slice(v,v+v_len);
    if(value.toLowerCase()==sl.toLowerCase()){
    //  console.log(`${v} ${v_len} ${sl}`);
  // console.log(`=> ${value} ${sl} ${l[u]}`);
      listed[listed_i]=l[u];
      listed_index[listed_i]=v;
      listed_u[listed_i]=u;
      listed_s[listed_i]=1;
      listed_i++;
        break;
          }
        }
      }
      return [listed,listed_index,listed_u,listed_s];
    }
  
   const concat=(pre,post)=>{
      let pp=0;
      let con=[];
      for(let p=0;p<pre.length;p++){
        con[pp]=pre[p];
        pp++;
      }
      for(let p=0;p<post.length;p++){
        con[pp]=post[p];
        pp++;
      }
      return con;
    }
   const e_copy=(arr)=>{
      let d_arr=[];
      let d_i=1;
      d_arr[0]=arr[0];
      for(let a=1;a<arr.length;a++){
        let test=true;
        for(let b=0;b<a;b++){
         if(arr[b]==arr[a]){
           test=false;
           break;
         }
        }
        if(test){
          d_arr[d_i]=arr[a];
          d_i++;
        }
      }
      return d_arr;
    }
    s_l_l= list_out(d_l_name);
    
  const e_copy_cs=(arr_m,arr_f,arr_sign)=>{
      let d_arr_m=[];
      let d_arr_f=[];
      let d_arr_sign=[];
      let d_i=1;
      d_arr_m[0]=arr_m[0];
      d_arr_f[0]=arr_f[0];
      d_arr_sign[0]=arr_sign[0];
      for(let a=1;a<arr_m.length;a++){
        let test=true;
        for(let b=0;b<a;b++){
         if(arr_m[b]==arr_m[a]){
           test=false;
           break;
         }
        }
        if(test){
          d_arr_m[d_i]=arr_m[a];
          d_arr_f[d_i]=arr_f[a];
          d_arr_sign[d_i]=arr_sign[a];
          d_i++;
        }
      }
      return [d_arr_m,d_arr_f,d_arr_sign];
    }
    
  s_l_m=e_copy_cs(concat(c_l_l[0],s_l_l[0]),concat(c_l_l[1],s_l_l[1]),concat(c_l_l[3],s_l_l[3]));
   
   let s_l=s_l_m[0];
   let s_l_in=s_l_m[1];
   let s_l_sign=s_l_m[2];
   console.log(s_l_m);
   s_l_sugg_list=e_copy(concat(c_l_l[2],s_l_l[2]));
   if(s_l_in[0]){
   console.log("finall",s_l,s_l_in);
    for(let i=0;i<s_l.length;i++){
    const searched_list_item=document.createElement("div");  
    searched_list_item.classList.add("m_searched_list_item");
    
    const searched_list_item_icon=document.createElement("div");  
    searched_list_item_icon.classList.add("m_searched_list_item_icon");
    searched_list_item_icon.innerHTML=`
     <i class="fa-solid fa-magnifying-glass"></i>
    `;
    searched_list_item.append(searched_list_item_icon);
    
    const searched_list_item_name=document.createElement("div");  
    searched_list_item_name.classList.add("m_searched_list_item_name");
    searched_list_item_name.innerHTML=`
   ${s_l[i].slice(0,s_l_in[i])}<span>${s_l[i].slice(s_l_in[i],v_len+s_l_in[i])}</span>${s_l[i].slice(v_len+s_l_in[i],)}`;
    searched_list_item.append(searched_list_item_name);
    
 searched_list_item.addEventListener("click",()=>{
   if(!s_l_sign[i]){
   searched_list_item.style.backgroundColor="yellow";
   searched_list_space.innerHTML="";
   search_text.value=s_l[i];
   let list_bar_d=[];
   let list_bar_d_i=0;
   for(let ci=0;ci<skilled_at.length;ci++){
   for(let cj=0;cj<skilled_at[ci].length;cj++){
     if(cars_list[skilled_at[ci][cj]].toLowerCase()==s_l[i].toLowerCase()){
     list_bar_d[list_bar_d_i]=ci;
        list_bar_d_i++;
       }
     }
   }
   s_l_sugg(list_bar_d);
  // console.log(list_bar_d);
   }
  // ("alert");
    })
   // console.log(searched_list_item_name.innerHTML);
    searched_list_space.append(searched_list_item);
    }
    searched_list_space.style.display="flex";
   }
  })
  search_icon.addEventListener("click",()=>{
    if(s_l_m[1][0]){
      //console.log(s_l_m[1][0]);
    s_l_sugg(s_l_sugg_list);
    searched_list_space.innerHTML="";
    }
  })
}

//searched list suggetion list
function s_l_sugg(type){
const suggetion_space=document.querySelector(".s_l_suggetion_space");
suggetion_space.innerHTML="";
let a=1;
for(let ii=0;ii<type.length ;ii++){
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

//searched list page
function search_list_page(){
  const search_list_page=document.querySelector(".search_list_page");
  const home_page=document.querySelector(".home_page");
  const s_l_back_btn=document.querySelector(".s_l_back_btn");
  s_l_back_btn.addEventListener("click",()=>{
    search_list_page.style.display="none";
    home_page.style.display="flex";
  })
  s_l_search_bar_f();
  //s_l_sugg(d_type[0]);
}
search_list_page();

//main page suggetion list
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

//it handles menu section
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

//main page search bar
function m_search_bar_f(){
//  console.log("helloooo");
  
  const search_list_page=document.querySelector(".search_list_page");
  const home_page=document.querySelector(".home_page");
  
  const search_text=document.querySelector(".m_search_text");
  const search_icon=document.querySelector(".m_search_icon");
  search_text.value="";
  const searched_list_space=document.querySelector(".m_searched_list_space");
let s_l_sugg_list=[];
let c_l_l=[];
let s_l_m=[];
let s_l_l=[];
search_text.addEventListener("input",()=>{
   searched_list_space.innerHTML="";
   let value=search_text.value;
   let v_len=value.length;
   const c_list_out=(c_l,valuee)=>{
      let c_len=c_l.length;
      let c_listed=[];
      let c_listed_index=[];
      let c_listed_u=[];
      let c_listed_c=[];
      let c_listed_i=0;
      for(let i=0;i<c_len;i++){
      for(let j=0;j<c_l[i].length;j++){
       let c_len=cars_list[c_l[i][j]].length;
      for(let v=0;v<c_len-(c_len%v_len)-1;v++){
        let sl=cars_list[c_l[i][j]].slice(v,v+v_len);
 if(valuee.toLowerCase()==sl.toLowerCase()){
    //  console.log(`${v} ${v_len} ${sl}`);
  // console.log(`=> ${value} ${sl} ${l[u]}`);
    c_listed[c_listed_i]=cars_list[c_l[i][j]];
      c_listed_index[c_listed_i]=v;
      c_listed_u[c_listed_i]=i;
      c_listed_c[c_listed_i]=0;
      c_listed_i++;
        break;
          }
        } 
        }
      }
      return [c_listed,c_listed_index,c_listed_u,c_listed_c];
   }
   c_l_l=c_list_out(skilled_at,value);
   
   const list_out=(l)=>{
      let len=l.length;
      let listed=[];
      let listed_index=[];
      let listed_u=[];
      let listed_s=[];
      let listed_i=0;
      for(let u=0;u<len;u++){
       let s_len=l[u].length;
     for(let v=0;v<s_len-(s_len%v_len)-1;v++){
          let sl=l[u].slice(v,v+v_len);
    if(value.toLowerCase()==sl.toLowerCase()){
    //  console.log(`${v} ${v_len} ${sl}`);
  // console.log(`=> ${value} ${sl} ${l[u]}`);
      listed[listed_i]=l[u];
      listed_index[listed_i]=v;
      listed_u[listed_i]=u;
      listed_s[listed_i]=1;
      listed_i++;
        break;
          }
        }
      }
      return [listed,listed_index,listed_u,listed_s];
    }
  
   const concat=(pre,post)=>{
      let pp=0;
      let con=[];
      for(let p=0;p<pre.length;p++){
        con[pp]=pre[p];
        pp++;
      }
      for(let p=0;p<post.length;p++){
        con[pp]=post[p];
        pp++;
      }
      return con;
    }
   const e_copy=(arr)=>{
      let d_arr=[];
      let d_i=1;
      d_arr[0]=arr[0];
      for(let a=1;a<arr.length;a++){
        let test=true;
        for(let b=0;b<a;b++){
         if(arr[b]==arr[a]){
           test=false;
           break;
         }
        }
        if(test){
          d_arr[d_i]=arr[a];
          d_i++;
        }
      }
      return d_arr;
    }
   s_l_l= list_out(d_l_name);
    
  const e_copy_cs=(arr_m,arr_f,arr_sign)=>{
      let d_arr_m=[];
      let d_arr_f=[];
      let d_arr_sign=[];
      let d_i=1;
      d_arr_m[0]=arr_m[0];
      d_arr_f[0]=arr_f[0];
      d_arr_sign[0]=arr_sign[0];
      for(let a=1;a<arr_m.length;a++){
        let test=true;
        for(let b=0;b<a;b++){
         if(arr_m[b]==arr_m[a]){
           test=false;
           break;
         }
        }
        if(test){
          d_arr_m[d_i]=arr_m[a];
          d_arr_f[d_i]=arr_f[a];
          d_arr_sign[d_i]=arr_sign[a];
          d_i++;
        }
      }
      return [d_arr_m,d_arr_f,d_arr_sign];
    }
    
  s_l_m=e_copy_cs(concat(c_l_l[0],s_l_l[0]),concat(c_l_l[1],s_l_l[1]),concat(c_l_l[3],s_l_l[3]));
   
   
