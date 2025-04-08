$(document).ready(function(){

    // 인트로
    
        let i = 0
        setInterval(function(){
        i++
        if(i == 3) i = 0;
    
        $('.inBg li').eq(i-1).css({'opacity':'1'}).stop().animate({'opacity':'0'},1500)
        $('.inBg li').eq(i).css({'opacity':'0'}).stop().animate({'opacity':'1'},1500)
        },4000)
    
    
        // 페이지 이동
           
        $('.Wnav li').eq(0).click(function(e){
            e.preventDefault()
    
                $('.wrap').removeClass('on')
                $('.wrap article').removeClass('on')
                $('.wrap article').find('.on').removeClass('on')
    
                $('.intro').removeClass('on')
        })
    
        // 영화소개
    
        $('nav li').eq(0).click(function(e){
            e.preventDefault()
    
                $('intro').css({'display':'none'})
                $('.wrap article').removeClass('on')
                $('.wrap article').find('.on').removeClass('on')
                $('.intro').addClass('on')
    
                $('.wrap').addClass('on')
                $('.wrap article').eq(0).addClass('on')

                
       
        if($('.wrap article').eq(0).hasClass('on')){
            setTimeout(function(){
            $('.motxt h2').addClass('on')
                },1000);
            
            setTimeout(function(){
            $('.motxt p').addClass('on')
                },1100);
    
            let i = 0
            setInterval(function(){
            i++
            if(i == 3) i = 0;
    
                $('.mobg li').eq(i-1).css({'opacity':'0.7'}).stop().animate({'opacity':'0'},800)
                $('.mobg li').eq(i).css({'opacity':'0'}).stop().animate({'opacity':'0.7'},800)
                },3000)
    
    
            }
    
            })
        $('.Wnav li').eq(1).click(function(e){
            e.preventDefault()
            
                $('.wrap article').removeClass('on')
                $('.wrap article').find('.on').removeClass('on')
                $('.intro').addClass('on')
    
                $('.wrap').addClass('on')
                $('.wrap article').eq(0).addClass('on')
                
       
        if($('.wrap article').eq(0).hasClass('on')){
            setTimeout(function(){
            $('.motxt h2').addClass('on')
                },1000);
                    
            setTimeout(function(){
            $('.motxt p').addClass('on')
                },1100);
            
            let i = 0
            setInterval(function(){
            i++
            if(i == 3) i = 0;
            
                $('.mobg li').eq(i-1).css({'opacity':'0.7'}).stop().animate({'opacity':'0'},2000)
                $('.mobg li').eq(i).css({'opacity':'0'}).stop().animate({'opacity':'0.7'},2000)
                },6000)
            
            
            }
    
        })
    
        // 프로필
        $('nav li').eq(1).click(function(e){
            e.preventDefault()
    
                $('.wrap article').removeClass('on')
                $('.wrap article').find('.on').removeClass('on')
                $('.intro').addClass('on')
    
                $('.wrap').addClass('on')
                $('.wrap article').eq(1).addClass('on')
    
                if($('.wrap article').eq(1).hasClass('on')){
    
                    $('.proList').addClass('on')
                }
            })
    
            //마이클

            $('.proList li').eq(0).click(function(){
                $('.proList').removeClass('on')              
    
                $('.profile_M').addClass('on')
                $('.return').addClass('on')
                   
                setTimeout(function () {
                    $('.profile_M > p em').stop().animate({'top': '0'}, 800, function () {
                        setTimeout(function () {
                            $('.profile_M > p').fadeOut(1000);
                        }, 1000);
                
                        setTimeout(function () {
                            $('.profile_M>div').addClass('on'); 
                            $('.profile_M .name').addClass('on');
                
                            setTimeout(function () {
                                $('.profile_M .vid').stop().animate({'right': '0'}, 1500);
                            }, 2500);
                        }, 2000);
                    });

                    let m = 0
                    setInterval(function(){
                    m++
                    if(m == 4) m = 0;
                
                    $('.profile_M .img li').eq(m-1).css({'right':'0'}).stop().animate({'right':'-100%'},1000)
                    $('.profile_M .img li').eq(m).css({'rigth':'100%'}).stop().animate({'right':'0'},1000)
                    },4000)


                }, 800);
                
                
            })

            //로리
            $('.proList li').eq(1).click(function(){
                $('.proList').removeClass('on')              
    
                $('.profile_L').addClass('on')
                $('.return').addClass('on')


                setTimeout(function () {
                    $('.profile_L > p em').stop().animate({'top': '0'}, 800, function () {
                        setTimeout(function () {
                            $('.profile_L > p').fadeOut(1000);
                        }, 1000);
                
                        setTimeout(function () {
                            $('.profile_L>div').addClass('on'); 
                            $('.profile_L .name').addClass('on');
                
                            setTimeout(function () {
                                $('.profile_L .vid').stop().animate({'left': '0'}, 1500);
                            }, 2500);
                        }, 2000);
                    });

                    let l = 0
                    setInterval(function(){
                    l++
                    if(l == 4) l = 0;
                
                    $('.profile_L .img li').eq(l-1).css({'left':'0'}).stop().animate({'left':'-100%'},1000)
                    $('.profile_L .img li').eq(l).css({'left':'100%'}).stop().animate({'left':'0'},1000)
                    },4000)


                }, 800);
                
            })

            $('.return').click(function(){
              
                $('.profile_L').removeClass('on')
                $('.return').removeClass('on')
                $('.profile_L').find('.on').removeClass('on')
                $('.profile_M').find('.on').removeClass('on')
                $('.proList').addClass('on')         

            })            
    


        $('.Wnav li').eq(2).click(function(e){
            e.preventDefault()
        
                $('.wrap article').removeClass('on')
                $('.wrap article').find('.on').removeClass('on')
                $('.intro').addClass('on')
    
                $('.wrap').addClass('on')
                $('.wrap article').eq(1).addClass('on')
    
                if($('.wrap article').eq(1).hasClass('on')){
    
                    $('.proList').addClass('on')
                }
            })
        
            //마이클
    
            $('.proList li').eq(0).click(function(){
                $('.proList').removeClass('on')              
        
                $('.profile_M').addClass('on')
                $('.return').addClass('on')
    
    
                setTimeout(function () {
                    $('.profile_M > p em').stop().animate({'top': '0'}, 800, function () {
                        setTimeout(function () {
                            $('.profile_M > p').fadeOut(1000);
                        }, 1000);
                    
                        setTimeout(function () {
                            $('.profile_M>div').addClass('on'); 
                            $('.profile_M .name').addClass('on');
                    
                            setTimeout(function () {
                                $('.profile_M .vid').stop().animate({'right': '0'}, 800,
                                function(){
                                    $('.profile_M>div').find('p').stop().animate({'right':'30px'},1500)

                                });
                            }, 2500);
                        }, 2000);
                    });

                    $('.profile_M .vid').mouseenter(function(){
                        let vid = $(this).find('video').get(0); 
                        vid.play()

                        $(this).find('video').prop('muted',false)
                        $(this).css({'right':'200px','top':'52%','transform':'scale(2)'})
                        $('.profile_M>div').find('p').stop().animate({'right':'-330px'},1500)
                    })

                    $('.profile_M .vid').mouseleave(function(){
                        let vid = $(this).find('video').get(0);
                        vid.pause()//정지
                        vid.currentTime = 0

                        $(this).find('video').prop('muted',true)
                        $(this).css({'right':'0px','transform':'scale(1)'})
                        $('.profile_M>div').find('p').stop().animate({'right':'30px'},1500)
                    })
    
                    let m = 0
                    setInterval(function(){
                    m++
                    if(m == 4) m = 0;
                    
                    $('.profile_M .img li').eq(m-1).css({'right':'0'}).stop().animate({'right':'-100%'},1000)
                    $('.profile_M .img li').eq(m).css({'rigth':'100%'}).stop().animate({'right':'0'},1000)
                    },4000)
    
    
                }, 800);
                    
            })
    
            //로리
            $('.proList li').eq(1).click(function(){
                $('.proList').removeClass('on')              
        
                $('.profile_L').addClass('on')
                $('.return').addClass('on')
    
    
                setTimeout(function () {
                    $('.profile_L > p em').stop().animate({'top': '0'}, 800, function () {
                        setTimeout(function () {
                            $('.profile_L > p').fadeOut(1000);
                        }, 1000);
                    
                        setTimeout(function () {
                            $('.profile_L>div').addClass('on'); 
                            $('.profile_L .name').addClass('on');
                    
                            setTimeout(function () {
                                $('.profile_L .vid').stop().animate({'left': '0'}, 800,
                                    function(){
                                    $('.profile_L>div').find('p').stop().animate({'left':'30px'},1500)

                                });
                            }, 2000);
                        }, 2000);
                    });

                    $('.profile_L .vid').mouseenter(function(){
                        let vid = $(this).find('video').get(0); 
                        vid.play()

                        $(this).find('video').prop('muted',false)
                        $(this).css({'left':'200px','top':'52%','transform':'scale(2)'})
                        $('.profile_L>div').find('p').stop().animate({'left':'-330px'},1500)
                    })

                    $('.profile_L .vid').mouseleave(function(){
                        let vid = $(this).find('video').get(0);
                        vid.pause()//정지
                        vid.currentTime = 0

                        $(this).find('video').prop('muted',true)
                        $(this).css({'left':'0px','transform':'scale(1)'})
                        $('.profile_L>div').find('p').stop().animate({'left':'30px'},1500)
                    })
    
                    let l = 0
                    setInterval(function(){
                    l++
                    if(l == 4) l = 0;
                    
                    $('.profile_L .img li').eq(l-1).css({'left':'0'}).stop().animate({'left':'-100%'},1000)
                    $('.profile_L .img li').eq(l).css({'left':'100%'}).stop().animate({'left':'0'},1000)
                    },4000)
    
    
                }, 800);
                    
            })
    
    
        //갤러리
        $('nav li').eq(2).click(function(e){
            e.preventDefault()
        
                $('.wrap article').removeClass('on')
                $('.wrap article').find('.on').removeClass('on')
                $('.intro').addClass('on')
    
                $('.wrap').addClass('on')
                $('.wrap article').eq(2).addClass('on')
            })
        $('.Wnav li').eq(3).click(function(e){
            e.preventDefault()
        
                $('.wrap article').removeClass('on')
                $('.wrap article').find('.on').removeClass('on')
                $('.intro').addClass('on')
    
                $('.wrap').addClass('on')
                $('.wrap article').eq(2).addClass('on')
            })
    
            $('.Gtxt p').find('img').click(function () {
                $('.wrap article').eq(2).find('ul').toggleClass('on')
            });
    
        //비디오
        $('nav li').eq(3).click(function(e){
            e.preventDefault()
    
                $('.wrap article').removeClass('on')
                $('.wrap article').find('.on').removeClass('on')
                $('.intro').addClass('on')
    
                $('.wrap').addClass('on')
                $('.wrap article').eq(3).addClass('on')
            })            
    
        $('.Wnav li').eq(4).click(function(e){
            e.preventDefault()
    
                $('.wrap article').removeClass('on')
                $('.wrap article').find('.on').removeClass('on')
                $('.intro').addClass('on')
    
                $('.wrap').addClass('on')
                $('.wrap article').eq(3).addClass('on')
            })
            
            
            //썸네일 클릭
            $('.listImg li').click(function(){
                let sumb = $(this).index()

                //영상
                $('.vidcon li').css({'display':'none'})
                $('.vidcon li').eq(sumb).css({'display':'block'})

            })

            //좌,우


            let mo = 0;
            const imli = 420;
            const max = 2

            $('.arrow div').eq(0).click(function(){
                if (mo > 0){
                    mo--;
                    $('.listImg ul').stop().animate({'left' : -mo * imli + 'px'},1200)
                }

            })
            $('.arrow div').eq(1).click(function(){
                if (mo < max){
                    mo++;
                    $('.listImg ul').stop().animate({'left' : -mo * imli + 'px'},1200)
                }

            })

    
        //킬카운트
        $('nav li').eq(4).click(function(e){
            e.preventDefault()
        
                $('.wrap article').removeClass('on')
                $('.wrap article').find('.on').removeClass('on')
                $('.intro').addClass('on')
    
                $('.wrap').addClass('on')
                $('.wrap article').eq(4).addClass('on')

                //이미지
                let k = 0
                setInterval(function(){
                k++;
                if(k == 7) k = 0;
                
                    $('.killSid li').eq(k-1).css({'top':'0'}).stop().animate({'top':'100%'},800)
                    $('.killSid li').eq(k).css({'top':'-100%'}).stop().animate({'top':'0'},800)
                    },3000)
                    

                // 카운트
                let count = 0;
                let terget = 161;
                let speed = 50;

                function countUp(){
                    let counter = setInterval(function(){
                        if(count >= terget){
                            clearInterval(counter);
                        }else if(count == 5){
                            count++
                            $('.countTitle li').eq(0).css({'opacity':'0'})
                            $('.countTitle li').eq(1).css({'opacity':'1'})
                        }else if(count == 15){
                            count++
                            $('.countTitle li').eq(1).css({'opacity':'0'})
                            $('.countTitle li').eq(2).css({'opacity':'1'})
                        }else if(count == 34){
                            count++
                            $('.countTitle li').eq(2).css({'opacity':'0'})
                            $('.countTitle li').eq(3).css({'opacity':'1'})
                            $('.kill').css({'color':'#ecd3b8'}) 

                        }else if(count == 46){
                            count++
                            $('.countTitle li').eq(3).css({'opacity':'0'})
                            $('.countTitle li').eq(4).css({'opacity':'1'})                                                       
                            
                        }else if(count == 63){
                            count++
                            $('.countTitle li').eq(4).css({'opacity':'0'})
                            $('.countTitle li').eq(5).css({'opacity':'1'})

                        }else if(count == 70){
                            count++
                            $('.countTitle li').eq(5).css({'opacity':'0'})
                            $('.countTitle li').eq(6).css({'opacity':'1'})

                        }else if(count == 80){
                            count++
                            $('.countTitle li').eq(6).css({'opacity':'0'})
                            $('.countTitle li').eq(7).css({'opacity':'1'})
                            $('.kill').css({'color':'#f0bc85'})

                        }else if(count == 95){
                            count++
                            $('.countTitle li').eq(7).css({'opacity':'0'})
                            $('.countTitle li').eq(8).css({'opacity':'1'})

                        }else if(count == 114){
                            count++
                            $('.countTitle li').eq(8).css({'opacity':'0'})
                            $('.countTitle li').eq(9).css({'opacity':'1'})
                            $('.kill').css({'color':'#ec9b45'})
                            
                        }else if(count == 130){
                            count++
                            $('.countTitle li').eq(9).css({'opacity':'0'})
                            $('.countTitle li').eq(10).css({'opacity':'1'})                            

                        }else if(count == 158){
                            count++
                            $('.countTitle li').eq(10).css({'opacity':'0'})
                            $('.countTitle li').eq(11).css({'opacity':'1'})
                        }else if(count == 161){
                            count++
                            $('.countTitle li').eq(11).css({'opacity':'0'})
                            $('.countTitle li').eq(12).css({'opacity':'1'})
                            $('.kill').css({'color':'#EC7900'})
                        }else {
                            count++
                            $('.kill').text(count)
                        }
                    },speed)

                }

                countUp();

                
            })
        $('.Wnav li').eq(5).click(function(e){
            e.preventDefault()
        
                $('.wrap article').removeClass('on')
                $('.wrap article').find('.on').removeClass('on')
                $('.intro').addClass('on')
    
                $('.wrap').addClass('on')
                $('.wrap article').eq(4).addClass('on')

                let k = 0
                setInterval(function(){
                k++;
                if(k == 7) k = 0;
                
                    $('.killSid li').eq(k-1).css({'top':'0'}).stop().animate({'top':'100%'},1000)
                    $('.killSid li').eq(k).css({'top':'-100%'}).stop().animate({'top':'0'},1000)
                    },4000)

                    // 카운트
                let count = 0;
                let terget = 161;
                let speed = 50;

                function countUp(){
                    let counter = setInterval(function(){
                        if(count >= terget){
                            clearInterval(counter);
                        }else if(count == 5){
                            count++
                            $('.countTitle li').eq(0).css({'opacity':'0'})
                            $('.countTitle li').eq(1).css({'opacity':'1'})
                        }else if(count == 15){
                            count++
                            $('.countTitle li').eq(1).css({'opacity':'0'})
                            $('.countTitle li').eq(2).css({'opacity':'1'})
                        }else if(count == 34){
                            count++
                            $('.countTitle li').eq(2).css({'opacity':'0'})
                            $('.countTitle li').eq(3).css({'opacity':'1'})
                            $('.kill').css({'color':'#ecd3b8'}) 

                        }else if(count == 46){
                            count++
                            $('.countTitle li').eq(3).css({'opacity':'0'})
                            $('.countTitle li').eq(4).css({'opacity':'1'})                                                       
                            
                        }else if(count == 63){
                            count++
                            $('.countTitle li').eq(4).css({'opacity':'0'})
                            $('.countTitle li').eq(5).css({'opacity':'1'})

                        }else if(count == 70){
                            count++
                            $('.countTitle li').eq(5).css({'opacity':'0'})
                            $('.countTitle li').eq(6).css({'opacity':'1'})

                        }else if(count == 80){
                            count++
                            $('.countTitle li').eq(6).css({'opacity':'0'})
                            $('.countTitle li').eq(7).css({'opacity':'1'})
                            $('.kill').css({'color':'#f0bc85'})

                        }else if(count == 95){
                            count++
                            $('.countTitle li').eq(7).css({'opacity':'0'})
                            $('.countTitle li').eq(8).css({'opacity':'1'})

                        }else if(count == 114){
                            count++
                            $('.countTitle li').eq(8).css({'opacity':'0'})
                            $('.countTitle li').eq(9).css({'opacity':'1'})
                            $('.kill').css({'color':'#ec9b45'})
                            
                        }else if(count == 130){
                            count++
                            $('.countTitle li').eq(9).css({'opacity':'0'})
                            $('.countTitle li').eq(10).css({'opacity':'1'})                            

                        }else if(count == 158){
                            count++
                            $('.countTitle li').eq(10).css({'opacity':'0'})
                            $('.countTitle li').eq(11).css({'opacity':'1'})
                        }else if(count == 161){
                            count++
                            $('.countTitle li').eq(11).css({'opacity':'0'})
                            $('.countTitle li').eq(12).css({'opacity':'1'})
                            $('.kill').css({'color':'#EC7900'})
                        }else {
                            count++
                            $('.kill').text(count)
                        }
                    },speed)

                }

                countUp();

                
            })   


                




        // Wnav 활성화
        let b = 0;
        $('.btn').click(function(){        
            b++
            if(b>=2) b=0;
            if(b==1){
            $(this).addClass('on')
            $('.Wnav').addClass('on')
            $('.return').removeClass('on')

                }else if(b==0){
                    
                    $(this).removeClass('on')
                    $('.Wnav').removeClass('on')
    
                }
        })
    
        $('.Wnav li').click(function(){
            $('.Wnav').removeClass('on')
            $('.btn').removeClass('on')
        })
    
    
    
    
    })