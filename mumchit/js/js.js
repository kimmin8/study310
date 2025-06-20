$(document).ready(function(){

    // 연결 #############################
    // 메인
    
    $('.mumchit').click(function(){
        $('.main').addClass('on')

        $('header, nav').removeClass('ten')
        $('.M_main').removeClass('under')

        $('.underten, .nav_inner').removeClass('on')
        $('.under').removeClass('on')
        
        $('nav>div').eq(0).css('background-color', '');

        $(window).scrollTop(0)
        $('.nav_icon li').eq(0).find('img').attr('src', 'img/Gnb_Icon1B.png');
        $('.nav_icon li').eq(1).find('img').attr('src', 'img/Gnb_Icon2B.png');
        $('.nav_icon li').eq(2).find('img').attr('src', 'img/Gnb_Icon3B.png');

        if(window.matchMedia('(max-width:430px')){
            $('.M_header').removeClass('under')
        }

        $('.M_nav').css({'left' : ' 100%'})
    })


    // 브랜드 (언더텐)

    $('.ten').click(function(){
        $('header, nav').addClass('ten')
        $('.underten').addClass('on')
        
        $('.main, nav').removeClass('on')

        $(window).scrollTop(0)
        $('.nav_icon li').eq(0).find('img').attr('src', 'img/Gnb_Icon1W.png');
        $('.nav_icon li').eq(1).find('img').attr('src', 'img/Gnb_Icon2W.png');
        $('.nav_icon li').eq(2).find('img').attr('src', 'img/Gnb_Icon3W.png');

        if(window.matchMedia('(max-width:430px')){
            $('.M_header').addClass('under')
            $('.under').addClass('on')
        }
        

        $('.M_nav').css({'left' : ' 100%'})

        
    })

    // 장바구니
    $('.tocart_icon').click(function(){
        $('.tocart').addClass('on')
        $('header, nav').addClass('off')

        $('.main, .underten').removeClass('on')
        $('body').find('.ten').removeClass('ten')

        $(window).scrollTop(0)

        if (window.matchMedia('(max-width: 430px)').matches) {
                // 모바일: 흰색 아이콘
                $('.M_header').addClass('off');
                $('.tocart span').find('img').attr('src', 'img/cartX_W.png');
            } else {
                // PC: 기본 아이콘
                $('.tocart span').find('img').attr('src', 'img/cartX.png');
            }

        
    })

    $('.tocart>h2 img').click(function(){
        $('.tocart').removeClass('on')
        $('header, nav').removeClass('off')


        $('.main').addClass('on')
        $(window).scrollTop(0)

        if(window.matchMedia('(max-width:430px')){
            $('.M_header').removeClass('off')
        }
    })

    // gnb
    let isScrollActive = false;
    $(document).on('mouseenter', '.nav_list li', function () {
        $('nav').addClass('on');
        $('.nav_inner').addClass('on');
    });

    $(document).on('mouseleave', 'nav', function () {
        $('.nav_inner').removeClass('on');
    });

    $(window).scroll(function () {
        
        let sc = $(this).scrollTop();

        if (sc >=  300) {
            if ($('nav').hasClass('ten')) {
                $('nav.ten>div').eq(0).css({'background-color': 'rgba(61, 61, 61, 0.5)'},)
            } else {
                isScrollActive = true;
                $('nav').addClass('on');
            }
        } else {
            isScrollActive = false;
            $('nav').removeClass('on');
        }

        if( sc >= 800 && sc <= 2000 ){
            $('.mdpick>div').addClass('on')
        }else{
            $('.mdpick>div').removeClass('on')
        }

        if(window.matchMedia('(max-width: 430px)').matches){

            if( sc >= 300 && sc <= 900 ){
                        $('.mdpick>div').addClass('on')
                    }else{
                        $('.mdpick>div').removeClass('on')
                    }

            }

        
    });

    $('.nav_list>li').hover(function(){
        let i = $(this).index()

        $('.nav_inner>div').hide()
        $('.nav_inner>div').eq(i).show()
    })

    // 모바일 네비
    $('.M_btn').click(function(){

        $('.M_nav').css({'left' : ' 0%'})
    })
    $('.M_nav p').on('click', function(){

        $('.M_nav').css({'left' : ' 100%'})
    })

    // sns 피드회전
    $('.feed li').on({
    mouseenter: function () {
        $(this).addClass('on');
    },
    mouseleave: function () {
        let $self = $(this);
        setTimeout(function () {
            $self.removeClass('on');
        }, 500);
    }
    });

    //  장바구니 설정 ###################################

    function updateTotalPrice() {
        let totalprice = 0;

        $('.cart_inner li').each(function () {
            let priceText = $(this).find('.price span').eq(1).text();
            let number = parseInt(priceText.replace(/[^0-9]/g, '')) || 0;
            totalprice += number;
        });

        // 1. 총 금액 출력
        $('.total p span').eq(1).find('em').text(totalprice.toLocaleString() + '원');

        // 2. 배송비 계산 (0원이면 배송비 없음)
        let shipping = 0 
        
        if(totalprice > 0 && totalprice < 50000) {
                shipping = 3000;
        }

        $('.total p').eq(1).find('span').text(shipping.toLocaleString() + '원');

        // 3. 결제 금액 = 상품 + 배송비
        let finalTotal = totalprice + shipping;
        $('.tocart > p').eq(0).find('span').text(finalTotal.toLocaleString() + '원');
        }
    

    $('.Cart').click(function () {

    // 수량 증가
    let count = parseInt($('.cart_count').text()) || 0;
        $('.cart_count').text(count + 1)
        $('.total p span').eq(0).find('em').text(count + 1 + '개')

    // 상품 정보 추출
    let name = $(this).closest('li').find('p').first().text()
    let price;
        if (window.matchMedia('(max-width: 430px)').matches) {
            // 모바일일 때
            price = $(this).closest('li').find('em').eq(0).text();
        } else {
            // PC일 때
            price = $(this).closest('li').find('em').eq(1).text();
        }
    let imgSrc = $(this).closest('li').find('img').eq(0).attr('src')

    // li 추가
        $('.cart_inner').append(`
            <li>
                <img src="${imgSrc}" alt="">
                <div>
                    <p class="name">${name}</p>
                    <p class="otp">옵션 없음</p>
                    <p class="price">
                        <span>1</span>
                        <span>${price}</span>
                        <span class="remove">삭제</span>
                    </p>
                </div>
            </li>
        `)
    $('.empty').hide();
    updateTotalPrice()
        

    })

    $(document).on('click', '.remove', function () {

        let count = parseInt($('.cart_count').text()) || 0;

        let zero = Math.max(0, count - 1);
            $('.cart_count').text(zero);
            $('.total p span').eq(0).find('em').text(zero + '개')

            $(this).closest('li').remove();
        
    if ($('.cart_inner li').length === 0) {
            $('.empty').show();
        }

    updateTotalPrice()


    });

    // 모바일 ~430px 

    // 상품 슬라이드

let position = 0;
const liWidth = 190;
const totalSlides = 6; // li 총 개수
const moveWidth = liWidth;
const maxPosition = moveWidth * totalSlides;

setInterval(() => {
  position += moveWidth;

  // 한 번 쭉 돌면 처음으로 되돌림
  if (position >= maxPosition) {
    position = 0;
    $('.M_best>div').find('ul').eq(0).css({ left: '0' });
    $('.M_best>div').find('ul').eq(1).css({ left: '570px' });
    return;
  }

  // 두 ul을 동시에 이동시킴
  $('.M_best>div').find('ul').each(function () {
    let currentLeft = parseInt($(this).css('left')) || 0;
    $(this).stop().animate({ left: `${currentLeft - moveWidth}px` }, 500);
  });

}, 2500);

    let n = 0
    setInterval(function(){
        if(window.matchMedia('(max-width:430px')){
            n++
            if (n == 2 ) n = 0

            $('.news>div>ul').find('li').eq(n-1).css({'left':'0'}).stop().animate({'left':'-100%'},1500)
            $('.news>div>ul').find('li').eq(n).css({'left':'100%'}).stop().animate({'left':'0'},1500)
        }

    },3000)



})