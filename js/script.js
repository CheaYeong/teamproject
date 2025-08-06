const goseong = document.querySelector(".goseong");
const buan = document.querySelector(".buan");
const junju = document.querySelector(".junju");
const etc = document.querySelector(".etc");

const goseong_map = document.querySelector(".gsimg");
const buan_map = document.querySelector(".baimg");
const junju_map = document.querySelector(".jjimg");
const seoul_map = document.querySelector(".slimg");

buan.addEventListener("mouseover",function(){
    goseong_map.style.display="none";
    buan_map.style.display="block";
    junju_map.style.display="none";
    seoul_map.style.display="none";
});

goseong.addEventListener("mouseover",function(){
    goseong_map.style.display="block";
    buan_map.style.display="none";
    junju_map.style.display="none";
    seoul_map.style.display="none";
    
});

junju.addEventListener("mouseover",function(){
    goseong_map.style.display="none";
    buan_map.style.display="none";
    junju_map.style.display="block";
    seoul_map.style.display="none";
    
});

etc.addEventListener("mouseover",function(){
    goseong_map.style.display="none";
    buan_map.style.display="none";
    junju_map.style.display="none";
    seoul_map.style.display="block";
    
});