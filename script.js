const span1 = docuement.querySelector("main h2 span");

const txtArr = ['Front-End Developer','Back-End Developer', 'student studying CS Field'];

let index=0;
let currentTxt=txtArr[index].split("");

function writeTxt(){ 
    spanEl.textContent  += currentTxt.shift(); 
    if(currentTxt.length !== 0){
       setTimeout(writeTxt, Math.floor(Math.random() * 100));
    }else{
      currentTxt = spanEl.textContent.split("");
      setTimeout(deleteTxt, 3000);
    }
  }
  
  function deleteTxt(){
    currentTxt.pop(); 
    spanEl.textContent = currentTxt.join(""); 
    if(currentTxt.length !== 0){ 
      setTimeout(deleteTxt, Math.floor(Math.random() * 100))
    }else{ 
      index = (index + 1) % txtArr.length;
      currentTxt = txtArr[index].split("");
      writeTxt();
    }
  }
  
  writeTxt();


  (function(){
    const spanEl = document.querySelector("main h2 span");
    const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
    let index = 0;
    let currentTxt = txtArr[index].split("");
    function writeTxt(){
      spanEl.textContent  += currentTxt.shift(); 
      if(currentTxt.length !== 0){ 
        setTimeout(writeTxt, Math.floor(Math.random() * 100));
      }else{
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt, 3000);
      }
    }
    function deleteTxt(){
      currentTxt.pop();
      spanEl.textContent = currentTxt.join("");
      if(currentTxt.length !== 0){
        setTimeout(deleteTxt, Math.floor(Math.random() * 100))
      }else{
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
      }
    }
    writeTxt();
  })();


const headerE1 = document.querySelector("header");
window.addEventListener('scroll', function(){
    requestAnimationFrame(scrollCheck);
});
function scrollCheck(){
  let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
  if(browerScrollY > 0){
    headerE1.classList.add("active");
  }else{
    headerE1.classList.remove("active");
  }
}

const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
  const browerScrollY = window.pageYOffset;
  if(browerScrollY > 0){
    headerEl.classList.add("active");
  }else{
    headerEl.classList.remove("active");
  }
});

const animationMove = function(selector){
    // ① selector 매개변로 이동할 대상 요소 노드 가져오기
    const targetEl = document.querySelector(selector);
    // ② 현재 브라우저의 스크롤 정보(y 값)
    const browserScrollY = window.pageYOffset;
    // ③ 이동할 대상의 위치(y 값)
    const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY;
    // ④ 스크롤 이동
    window.scrollTo({ top: targetScorllY, behavior: 'smooth' });
  };
  // 스크롤 이벤트 연결하기
  const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']"); 
  for(let i = 0; i < scollMoveEl.length; i++){
    scollMoveEl[i].addEventListener('click', function(e){
      const target = this.dataset.target;
      animationMove(target);
    });
  }
  