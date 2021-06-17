var mq = window.matchMedia( "(max-width: 990px)" );
			if (mq.matches) {
				$('#arrowLeft').click(function(){
                    if($("#one").attr('src') == "./images/Photoframe.png"){
                        $("#one").attr('src', "./images/Photoframe1.png");
                        $("#video").css('top', '20vh');
                        $("#video").css('left', '51vh');
                        
                        $("#canvas").css('top', '20vh');
                        $("#canvas").css('left', '51vh');
                        
                
                
                    }
                    else{
                        $("#one").attr('src', "./images/Photoframe.png");
                        $("#video").css('top', '18.6vh');
                        $("#video").css('left', '41vh');
                        
                        $("#canvas").css('top', '18.6vh');
                        $("#canvas").css('left', '41vh');
                        
                    }
                })
                
                $('#arrowRight').click(function(){
                    if($("#one").attr('src') == "./images/Photoframe.png"){
                      $("#one").attr('src', "./images/Photoframe1.png");
                        $("#video").css('top', '20vh');
                        $("#video").css('left', '51vh');
                        
                        $("#canvas").css('top', '20vh');
                        $("#canvas").css('left', '51vh');
                        
                    }
                    else{
                        $("#one").attr('src', "./images/Photoframe.png");
                        $("#video").css('top', '18.6vh');
                        $("#video").css('left', '41vh');
                        
                        $("#canvas").css('top', '18.6vh');
                        $("#canvas").css('left', '41vh');
                    }
                })
			}
			else {
				$('#arrowLeft').click(function(){
                    if($("#one").attr('src') == "./images/Photoframe.png"){
                        $("#one").attr('src', "./images/Photoframe1.png");
                        $("#video").css('top', '20vh');
                        $("#video").css('left', '51vh');
                        
                        $("#canvas").css('top', '20vh');
                        $("#canvas").css('left', '51vh');
                        
                
                
                    }
                    else{
                        $("#one").attr('src', "./images/Photoframe.png");
                        $("#video").css('top', '18.6vh');
                        $("#video").css('left', '41vh');
                        
                        $("#canvas").css('top', '18.6vh');
                        $("#canvas").css('left', '41vh');
                        
                    }
                })
                
                $('#arrowRight').click(function(){
                    if($("#one").attr('src') == "./images/Photoframe.png"){
                      $("#one").attr('src', "./images/Photoframe1.png");
                        $("#video").css('top', '20vh');
                        $("#video").css('left', '51vh');
                        
                        $("#canvas").css('top', '20vh');
                        $("#canvas").css('left', '51vh');
                        
                    }
                    else{
                        $("#one").attr('src', "./images/Photoframe.png");
                        $("#video").css('top', '18.6vh');
                        $("#video").css('left', '41vh');
                        
                        $("#canvas").css('top', '18.6vh');
                        $("#canvas").css('left', '41vh');
                    }
                })
			}



