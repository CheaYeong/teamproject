window.addEventListener('scroll', function(scr){
  const nav = document.querySelector('header');
  const footer = document.querySelector('.black');

  const scrollY = window.scrollY || window.pageYOffset;
  const navH = nav.offsetHeight;
  const navPadding = 10;
  
  const foot = footer.getBoundingClientRect();
  const footheight = scrollY + foot.top;  

  if (scrollY + navPadding + navH > footheight) {
    nav.style.position = 'absolute';
    nav.style.top = (footheight - navH - 3) + 'px';
  } else {
    nav.style.position = 'fixed';
    nav.style.top = '0';
  }  
})




// window.addEventListener('scroll', () => {
//   const nav = document.getElementById('sideNav');    // 고정된 nav 요소 id
//   const footer = document.querySelector('footer');   // footer 요소 선택

//   const scrollY = window.scrollY || window.pageYOffset;  // 현재 문서 기준 스크롤 위치
//   const navHeight = nav.offsetHeight;                     // nav 높이
//   const navTopOffset = 20;                                // CSS에서 fixed 상태일 때 nav top 값(px)

//   // footer의 뷰포트 기준 위치 + 스크롤 위치 = 문서 기준 footer 상단 위치
//   const footerRect = footer.getBoundingClientRect();
//   const footerTopInPage = scrollY + footerRect.top;

//   // nav 바닥 위치가 footer 상단 위치보다 내려가면 (겹침 방지)
//   if (scrollY + navTopOffset + navHeight > footerTopInPage) {
//     // nav를 absolute로 바꾸고 footer 바로 위에 위치시킴
//     nav.style.position = 'absolute';
//     nav.style.top = (footerTopInPage - navHeight) + 'px';
//   } else {
//     // nav는 다시 fixed 상태 유지
//     nav.style.position = 'fixed';
//     nav.style.top = navTopOffset + 'px';
//   }
// });


// scrollY : 문서 전체 기준 현재 스크롤 위치

// footerRect.top : viewport 기준 footer 상단 위치

// footerTopInPage : 문서 전체 기준 footer 상단 위치 계산

// nav의 고정 위치 기준(top: 20px)과 높이를 더한 값이 footer 위치보다 커지면 nav를 absolute로 바꿔서 footer 위에 멈추게 함

// 그렇지 않으면 nav를 fixed 상태로 유지하여 스크롤 따라 움직이게 함