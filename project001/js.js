$(document).ready(function(){

    //메인

    let mainOnce = false;

    $('header').on('wheel', function(event){
        event.preventDefault;

        const delta = event.originalEvent.deltaY;
        const scrlloTop = $(window).scrollTop();
        const vh = $(window).height();

        if (!mainOnce && scrlloTop < 10  && delta > 0){
            mainOnce = true;

            $('html, body').stop().animate({scrollTop : vh}, 1400, 'easeOutBounce')

        }

        if(window.matchMedia('(max-width: 843px)').matches) mainOnce = false;

    })


    // 업체소개

    $('.floor li').eq(0).click(function(){

        $('.intro').css({'background-image': 'url(img/aquariumbg1.jpg)'})
    })
    $('.floor li').eq(1).click(function(){

        $('.intro').css({'background-image': 'url(img/aquariumbg2.jpg)'})
    })
    $('.floor li').eq(2).click(function(){

        $('.intro').css({'background-image': 'url(img/aquariumbg3.jpg)'})
    })
    $('.floor li').eq(3).click(function(){

        $('.intro').css({'background-image': 'url(img/aquariumbg4.jpg)'})
    })


    // 체험프로그램
    
    let p = 0;
    const slideLen = $('.listBox li').length;

    setInterval(function(){        
        if(window.matchMedia('(max-width: 843px)').matches) {
            let next = (p + 1) % slideLen;

                
                $('.listBox li').eq(p)
                .css({ 'left': '0' }).stop().animate({ 'left': '-100%' }, 1200);

                
                $('.listBox li').eq(next)
                .css({ 'left': '100%' }).stop().animate({ 'left': '0' }, 1200);

                p = next;
            }
            }, 5000);
          
    const galley = $('.photoG li').length;
    setInterval(function(){        
        if(window.matchMedia('(max-width: 843px)').matches) {
            let next = (p + 1) % galley;

                
                $('.photoG li').eq(p)
                .css({ 'left': '0' }).stop().animate({ 'left': '-100%' }, 1200);

                
                $('.photoG li').eq(next)
                .css({ 'left': '100%' }).stop().animate({ 'left': '0' }, 1200);

                p = next;
            }
            }, 3600);
    


    // 예약
    $( "#datepicker" ).datepicker({


        dateFormat:'yy년 mm월 dd일',
        onSelect:function(dateText, inst){
        $('.day span').text(dateText)
        $('.reserok span').text(dateText)
    
        }
    });

    const priceList = {
        '성인' : 23000,
        '청소년' : 18000,
        '어린이/경로': 15000,
        '장애인' : 12000
    }

    $('.menu input[type="number"]').on('input',function(){

        let total = 0;
        $('.reser01').empty();        

        $('.menu ul li').each(function(){
            const label = $(this).clone().children().remove().end().text().trim()
            const count = parseInt($(this).find('input').val()) || 0; 
            const price = priceList[label]

            if (count > 0 && price) {
                const itemTotal = count * price;

                total += itemTotal

                $('.reser01').append(`
                <ul>
                    <li>${label}</li>
                    <li><span>${count}</span></li>
                    <li>${itemTotal.toLocaleString()}원</li>
                </ul>     `
                )
            }
        })

        $('.reser02 p').text(total.toLocaleString() + '원');
    })

    $('.btn>p').click(function(){        
        $('.reserok').addClass('on')
    })
    $('.reserok p').eq(1).click(function(){        
        $('.reserok').removeClass('on')
    })


    // 공지사항 , 질문답

    $('.borad .title li').eq(0).click(function(){
        $(this).css({'font-size': '38px','color':'#093888','font-weight': 'bold'})
        $(this).next().css({'font-size': '30px','color':'#606060','font-weight': 'nimal'})

        $('.notice').css({'display':'block'})
        $('.notice02').css({'display':'none'})

        if(window.matchMedia('(max-width: 402px)').matches) {
        $(this).css({'font-size': '30px','color':'#093888','font-weight': 'bold'})
        $(this).next().css({'font-size': '25px','color':'#606060','font-weight': 'nimal'})

        $('.notice').css({'display':'block'})
        $('.notice02').css({'display':'none'})
        }
    })
    $('.borad .title li').eq(1).click(function(){
        if(window.matchMedia('(max-width: 402px)').matches) {
        $(this).css({'font-size': '30px','color':'#093888','font-weight': 'bold'})
        $(this).prev().css({'font-size': '25px','color':'#606060','font-weight': 'nimal'})

        $('.notice02').css({'display':'block'})
        $('.notice').css({'display':'none'})

        }
        $(this).css({'font-size': '38px','color':'#093888','font-weight': 'bold'})
        $(this).prev().css({'font-size': '30px','color':'#606060','font-weight': 'nimal'})

        $('.notice02').css({'display':'block'})
        $('.notice').css({'display':'none'})
    })
})