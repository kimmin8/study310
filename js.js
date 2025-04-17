$(document).ready(function(){

    
    // 페이지 연결
    // 메인
    $('nav li').eq(0).click(function(){
        $('nav li').eq(1).css({'font-weight':'normal'})
        $('nav li').eq(2).css({'font-weight':'normal'})
                
        $('nav>span').css({'left':'5px'})

        
        $('section').removeClass('on')
        $('section').find('.on').removeClass('on')
        $('nav').removeClass('on')

        $('.main').addClass('on')

        $('.scroll').css({'opacity': '1'}).removeClass('on');

        setTimeout(function(){
            $('.bgtxt').addClass('on')
            $('.scroll').addClass('on')
        },500)
    
        setTimeout(function(){        
            $('.logo').addClass('on')
            $('.main>p').addClass('on')
    
        },1000)
    
        $('.logo li').mouseenter(function(){
            $(this).css({'margin-top':'-10px'})
        })
        $('.logo li').mouseleave(function(){
            $(this).css({'margin-top':'0px'})
        })
    
        let mnav = false;
        $('.main').off('wheel').on('wheel', function(e){
            if (!mnav && e.originalEvent.deltaY > 0) {
                mnav = true;
        
                $('.mainnav').css({'bottom': '100px'});
                $('.scroll').css({'opacity':'0'})
            }
            else if (mnav && e.originalEvent.deltaY < 0) {
                mnav = false;
                $('.mainnav').css({'bottom': '-100%'});
                $('.scroll').css({'opacity':'1'})
            }
        });
        
        $('.main').on('wheel', function(e){
        if (!mnav && e.originalEvent.deltaY > 0) {
            mnav = true;
    
            $('.mainnav').css({'bottom': '100px'});
            $('.scroll').css({'opacity':'0'})
        }
        else if (mnav && e.originalEvent.deltaY < 0) {
            mnav = false;
            $('.mainnav').css({'bottom': '-100%'});
            $('.scroll').css({'opacity':'1'})
        }
    });

        
    })

    // 프로필
    $('.mainnav p').eq(0).click(function(){

        $('.main').find('.on').removeClass('on')
        $('.works').find('.on').removeClass('on')

        
        $('nav').addClass('on')
        $('.profile').addClass('on')

        if($('.profile').hasClass('on')) {
            $('nav li').eq(1).css({'font-weight':'bold'})
            $('nav>span').css({'left':'153px'})
            $('.mainnav').css({'bottom':'-100%'})

            setTimeout(function(){
                $('.profile>.bg').addClass('on')
            },500)

            setTimeout(function(){
                $('.profile>.title').addClass('on')
            },800)
            setTimeout(function(){
                $('.profile>.inner').addClass('on')
            },1500)
               
        }

    })

    $('nav li').eq(1).click(function(){
        $('nav li').eq(0).css({'font-weight':'normal'})
        $('nav li').eq(2).css({'font-weight':'normal'})
        
        $('nav li').eq(1).css({'font-weight':'bold'})        
        $('nav>span').css({'left':'153px'})

        $('.main').find('.on').removeClass('on')
        $('.works').find('.on').removeClass('on')

        $('.profile').addClass('on')

        if($('.profile').hasClass('on')) {
            $('.mainnav').css({'bottom':'-100%'})

            setTimeout(function(){
                $('.profile>.bg').addClass('on')
            },500)

            setTimeout(function(){
                $('.profile>.title').addClass('on')
            },800)
            setTimeout(function(){
                $('.profile>.inner').addClass('on')
            },1500)
               
        }

        
        
        
    })

    // 웍스
    $('.mainnav p').eq(1).click(function(){

        $('.main').removeClass('on')
        $('.profile').removeClass('on')
        $('.main').find('.on').removeClass('on')
        $('.profile').find('.on').removeClass('on')        

        $('nav').addClass('on')
        $('.works').addClass('on')

        if($('.works').hasClass('on')){
            $('nav li').eq(2).css({'font-weight':'bold'})        
            $('nav>span').css({'left':'315px'})
            
            $('.mainnav').css({'bottom':'-100%'})

            setTimeout(function(){
                $('.works>.bg').addClass('on')
            },500)

            setTimeout(function(){
                $('.works>.title').addClass('on')
            },800)
            setTimeout(function(){
                $('.works>.inner').addClass('on')
            },1500)
            setTimeout(function(){
                $('.works>.inner>div:nth-child(1)>div>img').addClass('on')
                $('.works>.inner>div:nth-child(3)>div>img').addClass('on')
                $('.works>.inner>div:nth-child(5)>div>img').addClass('on')
            },2500)


        }

    })

    $('nav li').eq(2).click(function(){
        
        $('.main').removeClass('on')
        $('.profile').removeClass('on')
        $('.main').find('.on').removeClass('on')
        $('.profile').find('.on').removeClass('on')        

        $('nav').addClass('on')
        $('.works').addClass('on')

        if($('.works').hasClass('on')){
            $('nav li').eq(0).css({'font-weight':'normal'})
            $('nav li').eq(1).css({'font-weight':'normal'})


            $('nav li').eq(2).css({'font-weight':'bold'})
            $('nav>span').css({'left':'315px'})

            $('.mainnav').css({'bottom':'-100%'})

            setTimeout(function(){
                $('.works>.bg').addClass('on')
            },500)

            setTimeout(function(){
                $('.works>.title').addClass('on')
            },800)
            setTimeout(function(){
                $('.works>.inner').addClass('on')
            },1500)
            setTimeout(function(){
                $('.works>.inner>div:nth-child(1)>div>img').addClass('on')
                $('.works>.inner>div:nth-child(3)>div>img').addClass('on')
                $('.works>.inner>div:nth-child(5)>div>img').addClass('on')
            },2500)


        }
        

    })

    // 메인

    
    setTimeout(function(){
        $('.bgtxt').addClass('on')
        $('.scroll').addClass('on')
    },500)

    setTimeout(function(){        
        $('.logo').addClass('on')
        $('.main>p').addClass('on')

    },1000)

    $('.logo li').mouseenter(function(){
        $(this).css({'margin-top':'-10px'})
    })
    $('.logo li').mouseleave(function(){
        $(this).css({'margin-top':'0px'})
    })

    let mnav = false;
$('.main').on('wheel', function(e){
    if (!mnav && e.originalEvent.deltaY > 0) {
        mnav = true;

        $('.mainnav').css({'bottom': '100px'});
        $('.scroll').css({'opacity':'0'})
    }
    else if (mnav && e.originalEvent.deltaY < 0) {
        mnav = false;
        $('.mainnav').css({'bottom': '-100%'});
        $('.scroll').css({'opacity':'1'})
    }
});



})