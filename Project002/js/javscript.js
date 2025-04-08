// 제이쿼리 기본설정
$(document).ready(function(){

    // 실행문

    // 헤더 배경 내려오기

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

        
        $('.mtext').addClass('on')
        $('.milk>div').css({'opacity':'1'})
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


//프로덕트 - 초코파이 하우스

let ph = 0;


setInterval(function(){
    ph++;
    if (ph == 2) ph = 0;

$('.housetxt>div p').eq(ph-1).css({'opacity':'1'}).stop().animate({'opacity':'0'},1000)
$('.housetxt>div p').eq(ph).css({'opacity':'0'}).stop().animate({'opacity':'1'},1000)

},3000)

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

})

$('.loginPop>.ci').click(function(e){
    e.preventDefault()

    $('.contents').removeClass('logon')
    $('.gnb').removeClass('gnb_B')
    $('.contents>div').removeClass('on')
    $('.contents>div').eq(0).addClass('on')

})


//프로덕트
$('.gnb li').eq(1).click(function(e){
    e.preventDefault()

    $('.contents>div').removeClass('on')
    $('.contents>div').eq(1).addClass('on')
    $('.gnb').addClass('gnb_B')

})

$('.sell a').click(function(e){
    e.preventDefault()

    $('.contents>div').removeClass('on')
    $('.contents>div').eq(1).addClass('on')
    $('.gnb').addClass('gnb_B')

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

//장바구니

$('.util li').eq(1).click(function(e){
    e.preventDefault()

    $('.cart').css({'opacity':'0'}).stop().animate({'opacity':'1'},400)     

})

// 닫기
$('.cartinner h2 em').click(function(){

    $('.cart').css({'opacity':'1'}).stop().animate({'opacity':'0'},400)     

})



//장바구니 카운트 올리기

let cart = 0;
$('.sell .btn li').click(function(){

    let img = $(this).closest('.sell').find('.cc img').attr('src');
    let txt = $(this).closest('.sell').find('a p b').text();

    cart ++
    $('.util').find('.num').text(cart);
    $('.cartcount>p').eq(1).find('span').text(cart);
    

    //장바구니에 담기
    $('<li><img src="'+img+'" alt=""><div class="cartlist"><div class="list1"><p>'+txt+'</p><div class="num"><span> - </span><span>00</span><span> + </span></div></div><p>가격</p></div><span>삭제</span></li>').appendTo('.innerBox1 ul')
})

$('.pro03 .pro03ho a').eq(1).click(function(e){
    e.preventDefault() 

    cart ++
    $('.util').find('.num').text(cart);  
    $('.cartcount>p').eq(1).find('span').text(cart);


    let proimg = $(this).closest('.pro03img').find('img').attr('src');
    let protxt = $(this).closest('.pro03img').next().text();

    //장바구니에 담기
    $('<li><img src="'+proimg+'" alt=""><div class="cartlist"><div class="list1"><p>'+protxt+'</p><div class="num"><span> - </span><span>00</span><span> + </span></div></div><p>가격</p></div><span>삭제</span></li>').appendTo('.innerBox1 ul')
})

//장바구니 리스트 삭제

$('.innerBox1').on('click', 'li>span', function(){
    $(this).closest('li').remove()
    
    // 삭제시 카운트 내리기
    let uncart = $('.innerBox1 ul li').length;
    
    $('.util').find('.num').text(uncart);  
    $('.cartcount>p').eq(1).find('span').text(uncart);

    cart --;
    $('.util').find('.num').text(cart);
    $('.cartcount>p').eq(1).find('span').text(cart);

})


// 상세페이지 이미지 돌리기

$('.proThumb li').click(function(){
    let thumb = $(this).index();
    if(thumb == 5) thumb = 0; 

    $('.proBig img').eq(thumb-1).css({'left':'0'}).stop().animate({'left':'100%'},800)
    $('.proBig img').eq(thumb).css({'left':'-100%'}).stop().animate({'left':'0'},800)


})

// 상세페이지 개수 올리기

let count = 0;
$('.num span').eq(2).click(function(){
    count++
    $('.num span').eq(1).text(count)
    $('.won span').text(4860 * count)
   
})
//  내리기
$('.num span').eq(0).click(function(){
    count--
    if(count <= -1) count = 0
    $('.num span').eq(1).text(count)
    $('.won span').text(4860 * count)
   
})

//메인 스크롤 클릭시 내려가기

$('.slider i').click(function(){

    $('html').stop().animate({'scrollTop' : 900},800)
})



})//제이쿼리 끝


