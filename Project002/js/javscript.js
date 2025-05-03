// 제이쿼리 기본설정
$(document).ready(function(){

    // 실행문

    // 헤더 배경 내려오기

let counting = false;
$(window).scroll(function(){

    let sc = $(this).scrollTop()
    console.log(sc);

    let storytop = $('.story50th').offset().top

    if (sc >= storytop - 300){

        $('.header').addClass('fixed')
    }else{
        $('.header').removeClass('fixed')
    }

    if (sc >= storytop + 600 && sc <= storytop + 1800){
    
        $('.mtext').addClass('on');
        $('.milk>div').css({'opacity':'1'});

        if (!counting) {
            counting = true;

            let count = 100000000;
            let terget = 30000000000;
            let speed = 10;


            function countUp(){
                let counter = setInterval(function(){
                    if(count >= terget){
                        clearInterval(counter);
                    } else {
                        count += 100000000; 
                        $('.world2 div').eq(2).find('span').text(count.toLocaleString() + '개');
                    }
                }, speed);
            }

            countUp();
        }
                
    }else{

        $('.mtext').removeClass('on')
        $('.milk>div').css({'opacity':'0'})
    }

})

//초코파이 배너
let bi = 0;

setInterval(function(){
    bi++;

    if (bi==4) bi = 0

    $('.banner li').eq(bi-1).css({'left':'0'}).stop().animate({'left':'-100%'},1500)
    $('.banner li').eq(bi).css({'left':'100%'}).stop().animate({'left':'0'},1500)
},6000)


//프로덕트

let ph = 0;


setInterval(function(){
    ph++;
    if (ph == 2) ph = 0;

$('.housetxt>div p').eq(ph-1).css({'opacity':'1'}).stop().animate({'opacity':'0'},1000)
$('.housetxt>div p').eq(ph).css({'opacity':'0'}).stop().animate({'opacity':'1'},1000)

},3000)
 // - 초코파이 하우스
setInterval(function(){
    ph++;
    if (ph == 2) ph = 0;

$('.houseimg img').eq(ph-1).css({'left':'0'}).stop().animate({'left':'-100%'},1000)
$('.houseimg img').eq(ph).css({'left':'100%'}).stop().animate({'left':'0'},1000)

},3000)

// ##################################### 페이지 연결 #####################################

//메인
$('.gnb li').eq(0).click(function(e){
    e.preventDefault()

    $('.contents>div').removeClass('on')
    $('.gnb').removeClass('gnb_B')
    $('.contents>div').eq(0).addClass('on')

    $(window).scrollTop(0)

})

$('.loginPop>.ci').click(function(e){
    e.preventDefault()

    $('.contents').removeClass('logon')
    $('.gnb').removeClass('gnb_B')
    $('.contents>div').removeClass('on')
    $('.cart').removeClass('on') 
    $('.contents>div').eq(0).addClass('on')

    $(window).scrollTop(0)
     

})


//프로덕트
$('.gnb li').eq(1).click(function(e){
    e.preventDefault()

    $('.contents>div').removeClass('on')
    $('.contents>div').eq(1).addClass('on')
    $('.gnb').addClass('gnb_B')

    $(window).scrollTop(0)

    if($('.contents>div').eq(1).hasClass('on')){
        // 상품이미지 슬라이드
            let proc = 0;
            setInterval(function(){
                proc++;
                if (ph == 4) ph = 0;
            
            $('.proBig img').eq(proc-1).css({'left':'0'}).stop().animate({'left':'100%'},1000)
            $('.proBig img').eq(proc).css({'left':'-100%'}).stop().animate({'left':'0'},1000)
            
            },3000)
            
            $('.proThumb li').click(function(){
                let thumb = $(this).index();
                if(thumb == 4) thumb = 0; 
            
                $('.proBig img').eq(thumb-1).css({'left':'0'}).stop().animate({'left':'100%'},800)
                $('.proBig img').eq(thumb).css({'left':'-100%'}).stop().animate({'left':'0'},800)
            
            
            })
            }

})

$('.sell a').click(function(e){
    e.preventDefault()

    $('.contents>div').removeClass('on')
    $('.contents>div').eq(1).addClass('on')
    $('.gnb').addClass('gnb_B')

    $(window).scrollTop(0)

    if($('.contents>div').eq(1).hasClass('on')){
        // 상품이미지 슬라이드
            let proc = 0;
            setInterval(function(){
                proc++;
                if (ph == 4) ph = 0;
            
            $('.proBig img').eq(proc-1).css({'left':'0'}).stop().animate({'left':'100%'},1000)
            $('.proBig img').eq(proc).css({'left':'-100%'}).stop().animate({'left':'0'},1000)
            
            },3000)
            
            $('.proThumb li').click(function(){
                let thumb = $(this).index();
                if(thumb == 4) thumb = 0; 
            
                $('.proBig img').eq(thumb-1).css({'left':'0'}).stop().animate({'left':'100%'},800)
                $('.proBig img').eq(thumb).css({'left':'-100%'}).stop().animate({'left':'0'},800)
            
            
            })
            }

})

//로그인

$('.cartbtn p').click(function(e){
    e.preventDefault()

    $('.contents>div').removeClass('on')
    $('.gnb').removeClass('gnb_B')
    $('.contents').addClass('logon')
    $('.contents>div').eq(2).addClass('on')

})

$('.util li').eq(0).click(function(e){
    e.preventDefault()
    
    $('.contents>div').removeClass('on')
    $('.gnb').removeClass('gnb_B')
    $('.contents').addClass('logon')
    $('.contents>div').eq(2).addClass('on')    

})

$('.btn li').eq(1).click(function(){
    
    $('.contents>div').removeClass('on')
    $('.gnb').removeClass('gnb_B')
    $('.contents').addClass('logon')
    $('.contents>div').eq(2).addClass('on')    

})

//장바구니 열기

$('.util li').eq(1).click(function(e){
    e.preventDefault()

    $('.cart').addClass('on')     

})

// 장바구니 닫기
$('.cartinner h2 em').click(function(){

    $('.cart').removeClass('on')  

})


// 장바구니
const pie = {
    '초코파이 情': 4860,
    '초코파이 情 바나나': 4860,
    '초코파이 情 딸기': 4860,
    '초코파이 情 수박': 4860
};

let cartCount = 0;
let totalPrice = 0;

$('.add-to-cart').click(function () {
    const parent = $(this).closest('.sell');
    const img = parent.find('.cc img').attr('src');
    const name = parent.find('p b').text().trim();
    const price = pie[name] || 0;
    const count = 1;

    // 장바구니 UI 추가
    $('.innerBox1 ul').append(`
        <li>
            <img src="${img}" alt="">
            <div class="cartlist">
                <div class="list1">
                    <p>${name}</p>
                    <div class="num">
                        <span class="minus"> - </span>
                        <span class="quantity">${count}</span>
                        <span class="plus"> + </span>
                    </div>
                </div>
                <p class="itemPrice">${price.toLocaleString()}원</p>
            </div>
            <span class="delete">삭제</span>
        </li>
    `);

    // 수량 및 총 금액 업데이트
    cartCount += 1;
    totalPrice += price;

    $('.util .num').text(cartCount);
    $('.cartcount p span').text(cartCount);
    $('.cartwon p span').text(totalPrice.toLocaleString());
});

// 장바구니 삭제
$('.innerBox1').on('click', '.delete', function () {
    const li = $(this).closest('li');
    const priceText = li.find('.itemPrice').text().replace('원', '').replace(/,/g, '');
    const count = parseInt(li.find('.quantity').text());

    totalPrice -= parseInt(priceText) * count;
    cartCount -= count;

    li.remove();

    $('.util .num').text(cartCount);
    $('.cartcount p span').text(cartCount);
    $('.cartwon p span').text(totalPrice.toLocaleString());
});

// 상품 수량 증가
$('.cart').on('click', '.plus', function () {
    const li = $(this).closest('li');
    const quantitySpan = li.find('.quantity');
    let count = parseInt(quantitySpan.text());
  
    count++;
    quantitySpan.text(count);
  
    const priceText = li.find('p').eq(1).text().replace(/[^0-9]/g, '');
    const price = parseInt(priceText);
  
    cartCount++;
    totalPrice += price;
  
    $('.util .num').text(cartCount);
    $('.cartcount p span').text(cartCount);
    $('.cartwon p span').text(totalPrice.toLocaleString());
  });
  
  
  // 상품 수량 삭제
  $('.cart').on('click', '.minus', function () {
    const li = $(this).closest('li');
    const quantitySpan = li.find('.quantity');
    let count = parseInt(quantitySpan.text());
  
    if (count > 1) {
      count--;
      quantitySpan.text(count);
  
      const priceText = li.find('p').eq(1).text().replace(/[^0-9]/g, '');
      const price = parseInt(priceText);
  
      cartCount--;
      totalPrice -= price;
  
      $('.util .num').text(cartCount);
      $('.cartcount p span').text(cartCount);
      $('.cartwon p span').text(totalPrice.toLocaleString());
    }
  });

// 상세페이지 이미지 돌리기

$('.proThumb li').click(function(){
    let thumb = $(this).index();
    if(thumb == 4) thumb = 0; 

    $('.proBig img').eq(thumb-1).css({'left':'0'}).stop().animate({'left':'100%'},800)
    $('.proBig img').eq(thumb).css({'left':'-100%'}).stop().animate({'left':'0'},800)


})

// 상세페이지 개수 올리기

let count = 0;
$('.num span').eq(2).click(function(){
    count++
    $('.num span').eq(1).text(count)
    $('.won span').text((4860 * count).toLocaleString())
   
})
//  내리기
$('.num span').eq(0).click(function(){
    count--
    if(count <= -1) count = 0
    $('.num span').eq(1).text(count)
    $('.won span').text((4860 * count).toLocaleString())
   
})

//관련 상품 담기

$('.addcart').click(function (e) {
    e.preventDefault(); 

    const parent = $(this).closest('li');
    const img = parent.find('img').attr('src');
    const name = parent.find('p').text().trim();
    const price = pie[name] || 0;
    const count = 1;

    // 장바구니에 추가
    $('.innerBox1 ul').append(`
        <li>
            <img src="${img}" alt="">
            <div class="cartlist">
                <div class="list1">
                    <p>${name}</p>
                    <div class="num">
                        <span class="minus"> - </span>
                        <span class="quantity">${count}</span>
                        <span class="plus"> + </span>
                    </div>
                </div>
                <p class="itemPrice">${price.toLocaleString()}원</p>
            </div>
            <span class="delete">삭제</span>
        </li>
    `);

    cartCount += 1;
    totalPrice += price;

    $('.util .num').text(cartCount);
    $('.cartcount p span').text(cartCount);
    $('.cartwon p span').text(totalPrice.toLocaleString());
});

//메인 스크롤 클릭시 내려가기

$('.slider i').click(function(){
    $('html').stop().animate({'scrollTop' : 900},800)
})



})//제이쿼리 끝


