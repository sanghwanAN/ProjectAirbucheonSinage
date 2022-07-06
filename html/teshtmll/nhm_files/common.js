//반응형 resize
var isWeb;
var isTabl;
var isMobile;
var isMgnb = false;

$(window).load(function(){
	$(window).resize(function(){
		$('.errorPage').height($(window).height());
		$('.readyPage').height($(window).height());
		$(".mSrchDiv").css('height', $('.mMenuArea').height());
		$(".mMenuArea .gnbArea").height($(window).height() - 143); //2018-10-22 추가

		var ths_width_sum = 0;			
		$(".tab-head .swiper-slide").each(function(q){
			ths_width_sum += jQuery(this, q).outerWidth(true);
		});

		if(jQuery(window).width() > 1015){ //웹
			isWeb = true;
			isTabl = false;
			isMobile = false;
		
			if(isMgnb == true){
				$(".mMenuArea").css('right', '-100%');
				$(".blackBg").stop().fadeOut(0);
				$("#wrap").css('height', '');
				$(".mMenuArea").css('height', '');
				isMgnb = false;
			};
			
			//브랜드소개 탭 정렬
			if(ths_width_sum >= 980){
				$(".tab-head .swiper-wrapper").css('display', '');
			}else{
				$(".tab-head .swiper-wrapper").css('display', 'table');
			}

			//팝업 길이
			$("#couponPop.lyPop-wrap .lyPop .scrollbox").css('height', 543 - $(".lyPop .couponTop").height() - 30);

		}else if(741 < jQuery(window).width() && jQuery(window).width() <= 983){ //태블릿
			isWeb = false;
			isTabl = true;
			isMobile = false;

			//브랜드소개 탭 정렬
			if(ths_width_sum >= $(".tab-head").width()){
				$(".tab-head .swiper-wrapper").css('display', '');
			}else{
				$(".tab-head .swiper-wrapper").css('display', 'table');
			}

			//팝업 길이
			$("#couponPop.lyPop-wrap .lyPop .scrollbox").css('height', $(window).height() - $(".lyPop .couponTop").height() - 90);


		}else if(741 >= jQuery(window).width()){ //모바일
			isWeb = false;
			isTabl = false;
			isMobile = true;

			//브랜드소개 탭 정렬
			if(ths_width_sum >= $(".tab-head").width()){
				$(".tab-head .swiper-wrapper").css('display', '');
			}else{
				$(".tab-head .swiper-wrapper").css('display', 'table');
			}

			//팝업 길이
			$("#couponPop.lyPop-wrap .lyPop .scrollbox").css('height', $(window).height() - $(".lyPop .couponTop").height() - 90);
		}
	});$(window).resize();

	//alert팝업
	if(isWeb == true && isTabl == false && isMobile == false){
		/* 2018-08-21 팝업 */
		$(".alertPopBt").click(function(){
			$(".alert-wrap.loginAlert").stop().fadeIn(350);
		});

		$(".alert-wrap.loginAlert").find(".cancelBt").click(function(){
			$(".alert-wrap.loginAlert").stop().fadeOut(350);
		});

		$(".popOpen1").click(function(){
			$(".alert-wrap.loginAlert2").stop().fadeIn(350);
		});

		$(".alert-wrap.loginAlert2").find(".cancelBt").click(function(){
			$(".alert-wrap.loginAlert2").stop().fadeOut(350);
		});

		$(".popOpen2").click(function(){
			$(".alert-wrap.loginConfirm").stop().fadeIn(350);
		});

		$(".alert-wrap.loginConfirm").find(".cancelBt").click(function(){
			$(".alert-wrap.loginConfirm").stop().fadeOut(350);
		});


		$(".alert-wrap.normal").find(".cancelBt").click(function(){
			$(".alert-wrap.normal").stop().fadeOut(350);
		});
		/* 2018-08-21 팝업 */

		//통신사인증 팝업 인증번호 요청
		var curConCheck = 0;
		$('.lyPop .pressDiv .confirmCheckBt').click(function(){
			if(curConCheck == 0){
				$('.lyPop .pressDiv .confirmDiv').show();
				$('.lyPop .pressDiv .confirmDiv input').focus();
				$('.lyPop .pressDiv .alertTxt').show();
				$(this).text('인증');

				curConCheck = 1;
			}else if(curConCheck == 1){
				$(".alert-wrap").stop().fadeIn(350);
			}
		});
	}else if(isWeb == false && isTabl == true && isMobile == false){
		$(".alert-wrap.normal .alertPop").each(function(q){
			$(".alert-wrap.normal .alertPop").eq(q).css('top', -($(this).height()+50));
			TweenMax.to($(".alert-wrap.normal .alertPop"), 1.2, {top:0, ease:Power3.easeOut});

			if($(this).children("div").hasClass("alertClose") == false){
				TweenMax.to($(this), 1.2, {top:-($(this).height()+50), delay:3, ease:Power3.easeOut, onComplete:function(){
					$(".alert-wrap.normal").eq(q).css('display', 'none');
				}});
			}else{
				$(this).find(".cancelBt").click(function(){
					TweenMax.to($(this).parent().parent(".alertPop"), 1.2, {top:-($(this).parent().parent(".alertPop").height()+5), ease:Power3.easeOut, onComplete:function(){
						$(".alert-wrap.normal").eq(q).css('display', 'none');
					}});	
				});
			}
		});

		/* 2018-08-21 팝업 */
		$(".alertPopBt").click(function(){
			$(".alert-wrap.loginAlert").css('display', 'block');
			$(".alert-wrap.loginAlert .alertPop").css('top', -($(".alert-wrap.loginAlert .alertPop").height()+50));
			TweenMax.to($(".alert-wrap.loginAlert .alertPop"), 1.2, {top:0, ease:Power3.easeOut});
		});

		$(".alert-wrap.loginAlert").find(".cancelBt").click(function(){
			TweenMax.to($(".alert-wrap.loginAlert .alertPop"), 1.2, {top:-($(".alert-wrap.loginAlert .alertPop").height()+50), ease:Power3.easeOut, onComplete:function(){
				$(".alert-wrap.loginAlert").css('display', 'none');
			}});
		});

		$(".popOpen1").click(function(){
			$(".alert-wrap.loginAlert2").css('display', 'block');
			$(".alert-wrap.loginAlert2 .alertPop").css('top', -($(".alert-wrap.loginAlert2 .alertPop").height()+50));
			TweenMax.to($(".alert-wrap.loginAlert2 .alertPop"), 1.2, {top:0, ease:Power3.easeOut});
		});

		$(".alert-wrap.loginAlert2").find(".cancelBt").click(function(){
			TweenMax.to($(".alert-wrap.loginAlert2 .alertPop"), 1.2, {top:-($(".alert-wrap.loginAlert2 .alertPop").height()+50), ease:Power3.easeOut, onComplete:function(){
				$(".alert-wrap.loginAlert2").css('display', 'none');
			}});
		});

		$(".popOpen2").click(function(){
			$(".alert-wrap.loginConfirm").css('display', 'block');
			$(".alert-wrap.loginConfirm .alertPop").css('top', -($(".alert-wrap.loginConfirm .alertPop").height()+50));
			TweenMax.to($(".alert-wrap.loginConfirm .alertPop"), 1.2, {top:0, ease:Power3.easeOut});
		});

		$(".alert-wrap.loginConfirm").find(".cancelBt").click(function(){
			TweenMax.to($(".alert-wrap.loginConfirm .alertPop"), 1.2, {top:-($(".alert-wrap.loginConfirm .alertPop").height()+50), ease:Power3.easeOut, onComplete:function(){
				$(".alert-wrap.loginConfirm").css('display', 'none');
			}});
		});
		/* 2018-08-21 팝업 */

		//통신사인증 팝업 인증번호 요청
		var curConCheck = 0;
		$('.lyPop .pressDiv .confirmCheckBt').click(function(){
			if(curConCheck == 0){
				$('.lyPop .pressDiv .confirmDiv').show();
				$('.lyPop .pressDiv .confirmDiv input').focus();
				$('.lyPop .pressDiv .alertTxt').show();
				$(this).text('인증');

				curConCheck = 1;
			}else if(curConCheck == 1){
				$(".alert-wrap.loginAlert").css('display', 'block');
				$(".alert-wrap.loginAlert .alertPop").css('top', -($(".alert-wrap.loginAlert .alertPop").height()+50));
				TweenMax.to($(".alert-wrap.loginAlert .alertPop"), 1.2, {top:0, ease:Power3.easeOut});
			}
		});
	}else if(isWeb == false && isTabl == false && isMobile == true){
		$(".alert-wrap.normal .alertPop").each(function(q){
			$(".alert-wrap.normal .alertPop").eq(q).css('top', -($(this).height()+50));
			TweenMax.to($(".alert-wrap.normal .alertPop"), 1.2, {top:0, ease:Power3.easeOut});

			if($(this).children("div").hasClass("alertClose") == false){
				TweenMax.to($(this), 1.2, {top:-($(this).height()+50), delay:3, ease:Power3.easeOut, onComplete:function(){
					$(".alert-wrap.normal").eq(q).css('display', 'none');
				}});
			}else{
				$(this).find(".cancelBt").click(function(){
					TweenMax.to($(this).parent().parent(".alertPop"), 1.2, {top:-($(this).parent().parent(".alertPop").height()+5), ease:Power3.easeOut, onComplete:function(){
						$(".alert-wrap.normal").eq(q).css('display', 'none');
					}});	
				});
			}
		});

		/* 2018-08-21 팝업 */
		$(".alertPopBt").click(function(){
			$(".alert-wrap.loginAlert").css('display', 'block');
			$(".alert-wrap.loginAlert .alertPop").css('top', -($(".alert-wrap.loginAlert .alertPop").height()+50));
			TweenMax.to($(".alert-wrap.loginAlert .alertPop"), 1.2, {top:0, ease:Power3.easeOut});
		});

		$(".alert-wrap.loginAlert").find(".cancelBt").click(function(){
			TweenMax.to($(".alert-wrap.loginAlert .alertPop"), 1.2, {top:-($(".alert-wrap.loginAlert .alertPop").height()+50), ease:Power3.easeOut, onComplete:function(){
				$(".alert-wrap.loginAlert").css('display', 'none');
			}});
		});

		$(".popOpen1").click(function(){
			$(".alert-wrap.loginAlert2").css('display', 'block');
			$(".alert-wrap.loginAlert2 .alertPop").css('top', -($(".alert-wrap.loginAlert2 .alertPop").height()+50));
			TweenMax.to($(".alert-wrap.loginAlert2 .alertPop"), 1.2, {top:0, ease:Power3.easeOut});
		});

		$(".alert-wrap.loginAlert2").find(".cancelBt").click(function(){
			TweenMax.to($(".alert-wrap.loginAlert2 .alertPop"), 1.2, {top:-($(".alert-wrap.loginAlert2 .alertPop").height()+50), ease:Power3.easeOut, onComplete:function(){
				$(".alert-wrap.loginAlert2").css('display', 'none');
			}});
		});

		$(".popOpen2").click(function(){
			$(".alert-wrap.loginConfirm").css('display', 'block');
			$(".alert-wrap.loginConfirm .alertPop").css('top', -($(".alert-wrap.loginConfirm .alertPop").height()+50));
			TweenMax.to($(".alert-wrap.loginConfirm .alertPop"), 1.2, {top:0, ease:Power3.easeOut});
		});

		$(".alert-wrap.loginConfirm").find(".cancelBt").click(function(){
			TweenMax.to($(".alert-wrap.loginConfirm .alertPop"), 1.2, {top:-($(".alert-wrap.loginConfirm .alertPop").height()+50), ease:Power3.easeOut, onComplete:function(){
				$(".alert-wrap.loginConfirm").css('display', 'none');
			}});
		});
		/* 2018-08-21 팝업 */

		//통신사인증 팝업 인증번호 요청
		var curConCheck = 0;
		$('.lyPop .pressDiv .confirmCheckBt').click(function(){
			if(curConCheck == 0){
				$('.lyPop .pressDiv .confirmDiv').show();
				$('.lyPop .pressDiv .confirmDiv input').focus();
				$('.lyPop .pressDiv .alertTxt').show();
				$(this).text('인증');

				curConCheck = 1;
			}else if(curConCheck == 1){
				$(".alert-wrap.loginAlert").css('display', 'block');
				$(".alert-wrap.loginAlert .alertPop").css('top', -($(".alert-wrap.loginAlert .alertPop").height()+50));
				TweenMax.to($(".alert-wrap.loginAlert .alertPop"), 1.2, {top:0, ease:Power3.easeOut});
			}
		});
	}
});

$(function(){
	$(window).resize(function(){
		//$('.errorPage').height($(window).height());

		var ths_width_sum = 0;			
		$(".tab-head .swiper-slide").each(function(q){
			ths_width_sum += jQuery(this, q).outerWidth(true);
		});

		if(jQuery(window).width() > 1015){ //웹
			isWeb = true;
			isTabl = false;
			isMobile = false;
		
			if(isMgnb == true){
				$(".mMenuArea").css('right', '-100%');
				$(".blackBg").stop().fadeOut(0);
				$("#wrap").css('height', '');
				$(".mMenuArea").css('height', '');
				isMgnb = false;
			};
			
			//브랜드소개 탭 정렬
			if(ths_width_sum >= 980){
				$(".tab-head .swiper-wrapper").css('display', '');
			}else{
				$(".tab-head .swiper-wrapper").css('display', 'table');
			}

			//팝업 길이
			$("#couponPop.lyPop-wrap .lyPop .scrollbox").css('height', 543 - $(".lyPop .couponTop").height() - 30);

		}else if(741 < jQuery(window).width() && jQuery(window).width() <= 983){ //태블릿
			isWeb = false;
			isTabl = true;
			isMobile = false;

			//브랜드소개 탭 정렬
			if(ths_width_sum >= $(".tab-head").width()){
				$(".tab-head .swiper-wrapper").css('display', '');
			}else{
				$(".tab-head .swiper-wrapper").css('display', 'table');
			}

			//팝업 길이
			$("#couponPop.lyPop-wrap .lyPop .scrollbox").css('height', $(window).height() - $(".lyPop .couponTop").height() - 90);


		}else if(741 >= jQuery(window).width()){ //모바일
			isWeb = false;
			isTabl = false;
			isMobile = true;

			//브랜드소개 탭 정렬
			if(ths_width_sum >= $(".tab-head").width()){
				$(".tab-head .swiper-wrapper").css('display', '');
			}else{
				$(".tab-head .swiper-wrapper").css('display', 'table');
			}

			//팝업 길이
			$("#couponPop.lyPop-wrap .lyPop .scrollbox").css('height', $(window).height() - $(".lyPop .couponTop").height() - 90);
		}
	});$(window).resize();	

	//alert팝업
	if(isWeb == false && isTabl == true && isMobile == false){
		$(".alert-wrap.normal .alertPop").each(function(q){
			$(".alert-wrap.normal .alertPop").eq(q).css('top', -($(this).height()+50));
			TweenMax.to($(".alert-wrap.normal .alertPop"), 1.2, {top:0, ease:Power3.easeOut});

			if($(this).children("div").hasClass("alertClose") == false){
				TweenMax.to($(this), 1.2, {top:-($(this).height()+50), delay:3, ease:Power3.easeOut, onComplete:function(){
					$(".alert-wrap.normal").eq(q).css('display', 'none');
				}});
			}else{
				$(this).find(".cancelBt").click(function(){
					TweenMax.to($(this).parent().parent(".alertPop"), 1.2, {top:-($(this).parent().parent(".alertPop").height()+5), ease:Power3.easeOut, onComplete:function(){
						$(".alert-wrap.normal").eq(q).css('display', 'none');
					}});	
				});
			}
		});
	}else if(isWeb == false && isTabl == false && isMobile == true){
		$(".alert-wrap.normal .alertPop").each(function(q){
			$(".alert-wrap.normal .alertPop").eq(q).css('top', -($(this).height()+50));
			TweenMax.to($(".alert-wrap.normal .alertPop"), 1.2, {top:0, ease:Power3.easeOut});

			if($(this).children("div").hasClass("alertClose") == false){
				TweenMax.to($(this), 1.2, {top:-($(this).height()+50), delay:3, ease:Power3.easeOut, onComplete:function(){
					$(".alert-wrap.normal").eq(q).css('display', 'none');
				}});
			}else{
				$(this).find(".cancelBt").click(function(){
					TweenMax.to($(this).parent().parent(".alertPop"), 1.2, {top:-($(this).parent().parent(".alertPop").height()+5), ease:Power3.easeOut, onComplete:function(){
						$(".alert-wrap.normal").eq(q).css('display', 'none');
					}});	
				});
			}
		});
	}

	//익스9
	$('input, textarea').placeholder();

	// 헤더 검색버튼 클릭 시
	var isSrchOn = false;
	var srchOpen = false;
	$("#header .gnbSrchBt").click(function(){
		if(srchOpen == false){
			if(!$(this).hasClass("on")){
				srchOpen = true;
				$(this).addClass("on");
				$(this).text("검색 닫기");//02-11 추가
				$(".mSrchDiv").css('height', $('.mMenuArea').height());
				$("#header .gnbSrchDiv").stop().slideDown(300, function(){
					srchOpen = false;
				});
				$(".gnb-container .gnb-one").css({"cursor": "default"} );
				isSrchOn = true;
				if($("#wrap").hasClass("main") == true){
					$(".main #header").css('border-bottom', '1px solid #e1e1e1');
				}
			}else{
				srchOpen = true;
				$(this).removeClass("on");
				$(this).text("검색하기");//02-11 추가
				$("#header .gnbSrchDiv").stop().slideUp(300, function(){
					srchOpen = false;
				});
				$(".gnb-container .gnb-one").css({"cursor": "pointer"});
				$("#header .gnb-two-container").css('height', '')
				$("#header .gnb-bg").css('height', '')
				isSrchOn = false;
			}
		}
	});
	$("#header").focusin(function(){
		$(this).find(".gnb-two-container").css('height', '400px')
		$(this).find(".gnb-bg").css('height', '400px')
	});
	$("#header").focusout(function(){
		$(this).find(".gnb-two-container").css('height', '')
		$(this).find(".gnb-bg").css('height', '')
	});

	//선물 회원조회 클릭
	$(".giftMemList").click(function(){
		if($(".charge-box1 .box > .input-area input").val().length > 0 && $(".charge-box1 .box .phoneSelect .input-area input").val().length > 0)	{
			$(".charge-box1 .box .dimdBg").fadeIn("350");
			$(".giftMemList").text("회원변경")
		}
	})

	//모바일GNB
	var mGnbOne = -1;
	var mGnbTwo = -1;
	var isGnbMove = false;
	$(".mMenuArea .gnbArea .oneD > a").each(function(q){
		if($(this).hasClass("on"))
		{
			mGnbOne = q;
		}
		$(this).click(function(){
			if(mGnbOne != q){
				if(isGnbMove == false){
					isGnbMove = true;
					$(".mMenuArea .gnbArea .oneD").eq(mGnbOne).removeClass("on");
					$(".mMenuArea .gnbArea .oneD").eq(mGnbOne).find(".twoD").stop().slideUp(300);
					mGnbOne = q;
					$(".mMenuArea .gnbArea .oneD").eq(mGnbOne).addClass("on");
					if($(".mMenuArea .gnbArea .oneD").find("a").length > 0)
					{
						$(".mMenuArea .gnbArea .oneD").eq(mGnbOne).find(".twoD").stop().slideDown(300, function(){
							isGnbMove = false;
						});
					};
				};
			}else if(mGnbOne == q){
				if(isGnbMove == false){
					isGnbMove = true;
					$(".mMenuArea .gnbArea .oneD").eq(mGnbOne).removeClass("on");
					$(".mMenuArea .gnbArea .oneD").eq(mGnbOne).find(".twoD").stop().slideUp(300, function(){
						isGnbMove = false;
					});
					mGnbOne = -1;
				};
			};
		});
	});

	$(".mMenuArea .gnbArea .twoD a").each(function(q){
		if($(this).hasClass("on"))
		{
			mGnbTwo = q;
		}
		$(this).click(function(){
			if(mGnbTwo != q){
				$(".mMenuArea .gnbArea .twoD a").eq(mGnbTwo).removeClass("on");
				mGnbTwo = q;
				$(".mMenuArea .gnbArea .twoD a").eq(mGnbTwo).addClass("on");
			}else if(mGnbTwo == q){
				$(".mMenuArea .gnbArea .twoD a").eq(mGnbTwo).removeClass("on");
				mGnbTwo = -1;
			}
		});
	});

	$(".mHeader .menuBtn").click(function(){
		if(isMgnb == false){		
			TweenMax.to($(".mMenuArea"), .8, {right:0, ease:Power3.easeOut});
			$(".blackBg").stop().fadeIn(300);
			$("#wrap").css('height', '100%'); //2018-10-22 window().height에서 100%로 수정
			$(".mMenuArea").css('height', '100%'); //2018-10-22 window().height에서 100%로 수정
			isMgnb = true;
		}
	});
	$(".mMenuArea .top .closeBt").click(function(){
		if(isMgnb == true){
			TweenMax.to($(".mMenuArea"), .8, {right:'-100%', ease:Power3.easeOut});
			$(".blackBg").stop().fadeOut(300);
			$("#wrap").css('height', '');
			$(".mMenuArea").css('height', '');
			isMgnb = false;
		}
	});

	// 모바일 해더 검색
	$(".mMenuArea .top .srchBt").click(function(){
		$(".mSrchDiv").css("display", "block");
		TweenMax.to($(".mSrchDiv"), .8, {top:0, ease:Power3.easeOut});
	});
	$(".mSrchDiv .closeSrchBt").click(function(){
		TweenMax.to($(".mSrchDiv"), 1.2, {top:'-100%', ease:Power3.easeInOut, onComplete:function(){
			$(".mSrchDiv").css("display", "none");
		}});
	});

	// LNB 클릭 시
	var moveLnb = false;
	$(".breadcrumbs > div > a").click(function(){
		if(!$(this).hasClass("on")){
			if(moveLnb == false){
				moveLnb = true;
				$(".breadcrumbs > div > a").removeClass("on");
				$(".breadcrumbs > div > div").css("z-index", "0").slideUp(300);
				$(this).addClass("on");
				$(this).next().css("z-index", "15").slideDown(300, function(){
					moveLnb = false;	
				});
			}
		}else{
			if(moveLnb == false){
				moveLnb = true;
				$(this).removeClass("on");
				$(this).next().css("z-index", "2").slideUp(300, function(){
					moveLnb = false;	
				});
			}
		}
	});

	// 영역 밖 클릭 시 이벤트
	$(document).click(function(e){
		if($(".pathDiv .breadcrumbs").has(e.target).length === 0){
			$(".pathDiv .breadcrumbs > div > a").removeClass("on");
			$(".pathDiv").find(".moreMenu").slideUp(200);
		}
	});
	$('.swiper-wrapper').children().eq(0).children().attr("title", "선택 됨");//02-20 접근성 추가
	//탭버튼 클릭 시
	var curTab = 0;
	$(".tab-body .cont").eq(curTab).show();
	$(".tab-head .swiper-slide a").each(function(q){
		$(this).click(function(){
			if(curTab != q){
				$('.swiper-wrapper').children().eq(0).children().attr("title", "");//02-20 접근성 추가
				$(".tab-head .swiper-slide").eq(curTab).removeClass("on").children().attr("title", "");//02-20 접근성 수정
				$(".tab-body .cont").eq(curTab).hide();
				curTab = q;
				$(".tab-head .swiper-slide").eq(curTab).addClass("on").children().attr("title", "선택 됨");//02-20 접근성 수정
				$(".tab-body .cont").eq(curTab).show();
			};
		});
	});
	
	
	//IE9 이 아니면
	if(!(navigator.userAgent.indexOf("MSIE 9.0")>0)){	
		
		//탭스와이퍼
		var swiper1 = new Swiper('.tab-head.swiper-container', {
			slidesPerView: 'auto',
			freeMode: true,
			spaceBetween: 0,
			hashnav: true,
			hashnavWatchState: true
		});
	
		//모바일 lnb스와이퍼
		var swiper3 = new Swiper('.mLnb.swiper-container', {
			slidesPerView: 'auto',
			freeMode: true,
			spaceBetween: 0,
			hashnav: true,
			hashnavWatchState: true
		});
	}
	
	// 검색영역 셀렉트 클릭 시 2018-10-15 수정
	var moveSelect = false;
	$(".select-area > a").click(function(){
		if(!$(this).hasClass("on")){
			if(moveSelect == false){
				moveSelect = true;
				//$('.select-area').height($('.select-area > div').height() + $('.select-area > a').height());
				$(".select-area > a").removeClass("on");
				$(".select-area > div").slideUp(300);
				$(".select-area").css("z-index", 10);
				$(this).addClass("on");
				$(this).parent().css("z-index", 11);
				$(this).next().stop().slideDown(300, function(){
					moveSelect = false;
				});
			}
		}else{
			if(moveSelect == false){
				moveSelect = true;
				$(this).removeClass("on");
				$(this).next().slideUp(300, function(){
					$(this).parent().css("z-index", 10);
					moveSelect = false;
				});
			}
		};
	});
	$(".select-area > div a").click(function(){
		var selTxt = $(this).text();
		$(this).siblings(".active").removeClass("active");
		$(this).addClass("active");
		if(!$(".select-area").hasClass('long-st')){
			$(this).parent().siblings("a").text(selTxt).removeClass("on");
			$(this).parent().slideUp(300);
		}else{
			$(this).parent().parent().siblings("a").text(selTxt).removeClass("on");
			$(this).parent().parent().slideUp(300);
		}
	});
	/*
	$(".select-area > div").find("div > a:last-child").focusout(function(){
		$(this).parent().parent().parent().children("a").removeClass("on");
		$(this).parent().parent().parent().children("div").delay(100).slideUp(300);
	});
	*/

	//인풋 입력시 삭제버튼
	$("input").each(function(q){
		$(this).keyup(function(){
			if($(this).val().length > 1){
				$(this).next(".inputXbt").css('display', 'block');
			}else{
				$(this).next(".inputXbt").css('display', 'none');
			}
		});

		// 삭제 버튼 클릭 시
		$(this).next('.inputXbt').click(function(){
			$(this).parent().find('input').val('');	
			$(this).css('display', 'none');
		});
		
			$(this).focusin(function(){
				//$(this).parent().css('border', '2px solid #23b8bc').css('z-index', '10');
				//$(".gnbSrchDiv .input-area").css('border', '0px solid #23b8bc');
				$(this).parent().css('background', '#1c9296').css('z-index', '10');
				$(this).css('background', '#1c9296').css('color', '#fff');
				$(this).siblings(".new209_tit").css('color', '#fff');
				$(this).siblings(".r-area").css('color', '#fff'); /* 2020-02-05 추가 */
				$(this).siblings(".new209_txt").addClass('on');
				//$(".gnbSrchDiv .input-area").css('background', '#1c9296'); 2020-02-04 삭제
				$(".time").css({color:'#fff',background:'transparents'}); /*2020-02-04*/
				$(this).parent(".radioBox , .check").css('background', 'transparent').css('z-index', '10');			
			});
			$(this).focusout(function(){
				//$(this).parent().css('border', '1px solid #e1e1e1').css('z-index', '');
				//$(".gnbSrchDiv .input-area").css('border', '0px solid #23b8bc');
				$(this).parent().css('background', '#fff').css('z-index', '10');
				$(this).css('background', '#fff').css('color', '#666');
				$(this).siblings(".new209_tit").css('color', '#666');
				$(this).siblings(".r-area").css('color', '#666'); /* 2020-02-05 추가 */
				$(this).siblings(".new209_txt").removeClass('on');
				//$(".gnbSrchDiv .input-area").css('background', '#fff'); 2020-02-04 삭제
				$(".time").css({color:'#111',background:'#fff'});
				$(this).parent(".radioBox , .check").css('background', 'transparent').css('z-index', '10');	
				 
			});
	});
	
	/*2020-02-04 추가 검색영역 수정*/
	$('.gnbSrchDiv .input-area input').focusin(function(){
		$(this).css({'color':'#111','background':'#fff'}); //2020-02-14 수정
		$(this).parent().css('background', 'url(/common/web/img/gnb_srch_bg.png)');
	});

	/*2020-02-04 추가 검색영역 수정*/
	$('.gnbSrchDiv .input-area input').focusout(function(){
		$(this).parent().css('background', 'url(/common/web/img/gnb_srch_bg.png)');
	});
	
	/*2020-02-04 추가 검색영역 수정*/
	$('.gnbSrchDiv .input-area .srchBt').on('click', function(){
		$(this).parent().css('background','#fff');
		$(this).parent().css('background', 'url(/common/web/img/gnb_srch_bg.png)');
	});
	
	/*2020-02-14 추가 검색영역 수정(mobile)*/
	$('.mSrchDiv .input-area').focusin(function(){
		$(this).css({'color':'#111','background-image':'url(/common/web/img/gnb_srch_bg.png)','background-repeat':'no-repeat', 'background-size':'100%','background-color':'#fff'});
	});
	
	$('.mSrchDiv .input-area input').focusin(function(){
		$(this).css({'color':'#111','background-color':'transparent'});		
	});	
	
	$('.mSrchDiv .input-area').focusout(function(){
		$(this).css({'color':'#111','background-image':'url(/common/web/img/gnb_srch_bg.png)','background-repeat':'no-repeat', 'background-size':'100%'});
	});	
	
	$('.mSrchDiv .input-area input').focusout(function(){
		$(this).css('background-color','transparent');
	});	
	/*//2020-02-14 추가 검색영역 수정(mobile)*/
	
	
	$('.confirmDiv .input-area').focusin(function(){
		$(".time").css({color:'#fff',background:'#1c9296'});
	});

	$('.confirmDiv .input-area').focusout(function(){
		$(".time").css({color:'#111',background:'#fff'});
	});	
	
	
	/* 통신사 인증 타이머 인풋 박스  */
	$('.lyPop.lyPop_tel2019 .pressDiv .confirmDiv .input-area input').css('width','95%');
	
	
	var infocus = $(".input-area input");
	
	
	$(infocus).focus(function(){
		$(this).addClass('on');
	
	});

	$(infocus).focusout(function(){
		$(this).removeClass('on')
		
	});
		
	

	var inputAreaInterval, inputAreaTime = 201;
	$(".input-area").each(function(){
		if($(this).find("input").val() != "") {
			$(this).find(".inputXbt").css('display', 'block');
		};

		$(this).find(".inputXbt").click(function(){
			$(this).parent().find("input").val('');	
			$(this).css('display', 'none');
		});

		/*
		$(this).find(".inputXbt").focus(function(){
			$(this).trigger("blur");
			//$(this).css('display', 'none');
		});
		*/
		$(this).find("input").focusin(function(){
			if($(this).val().length > 0){
				$(this).next(".inputXbt").css('display', 'block');
			}else{
				$(this).next(".inputXbt").css('display', 'none');
			}
		});
		/*
		$(this).find("input").focusout(function(){
			var THIS = $(this);
			clearInterval(inputAreaInterval);
			inputAreaInterval = setInterval(function(){
				console.log(THIS);
				THIS.next(".inputXbt").css('display', 'none');
				clearInterval(inputAreaInterval);
			}, inputAreaTime);
		});
		*/
	});

	$(".scInput input").click(function(){
		$("html body").animate({scrollTop:87},1000);
	});
	
	// 통신사인증 알뜰폰 클릭시 
	$(".lyPop-wrap .lyPop .pressDiv .radioInput .radioBox").each(function(index){
		$(this).click(function(){
			if(!$(this).hasClass("on")){
				$(".lyPop-wrap .lyPop .pressDiv .radioInput .radioBox").removeClass("on");
				$(".lyPop-wrap .lyPop .pressDiv .radioInput .radioBox").find("input").attr("checked",false);
				$(this).addClass("on");
				$(this).find("input").attr("checked",true)
			}
			if(!$(".lyPop-wrap .lyPop .pressDiv .radioInput .radioBox").eq(3).hasClass("on")){ //알뜰폰일때
				$(".frugalSelect").css("display", "none");
			}else{
				$(".frugalSelect").css("display", "block");
			}
		});
	});

	//FAQ
	$(".faq-accodian .list a").each(function(index){
		$(this).on("click", function(){
			if(!$(this).parent().hasClass("on")) {
				$(this).parent().addClass("on");
				$(this).parent().find(".s-con").stop(true, true).slideDown(200);
			} else {
				$(this).parent().removeClass("on");
				$(this).parent().find(".s-con").stop(true, true).slideUp(200);
			}
		});
	});

	//정보수정 변경버튼
	var moveChg = false;
	$(".writeType1 ul li .right .changeBt").each(function(index){
		var openModi = false;
		$(this).on("click", function(){
			if($(this).hasClass("on") == false){
				if(moveChg == false){
					moveChg = true;
					$(this).addClass("on");
					$(this).parent().next(".changeBox").stop().slideDown(300, function(){
						$(this).css('overflow','visible');
						moveChg = false;
					});
				}
			}else{
				if(moveChg == false){
					moveChg = true;
					$(this).removeClass("on");
					$(this).parent().next(".changeBox").stop().slideUp(300, function(){
						$(this).css('overflow','hidden');
						moveChg = false;
					});
				}
			}
		});
	});
	$(".passBt").click(function(){
		if($(this).hasClass("on") == false){
			$(this).text("변경");
		}else{
			$(this).text("취소");
		}
	});

	//회원가입 약관
	var curTerms = -1;
	var accorMove = false;

	$('.termsDiv').each(function(i){
		$('.termsDiv').eq(i).find('.list').each(function(q){
			$('.termsDiv').eq(i).find('.list').eq(q).find('.showBt').click(function(){
				if(!accorMove){
					if(curTerms != q){
						accorMove = true;
						$('.termsDiv').eq(i).find('.list').eq(curTerms).find('.termsTxt').stop(true, true).slideUp(400);
						curTerms = q;
						$('.termsDiv').eq(i).find('.list').eq(curTerms).find('.termsTxt').stop(true, true).slideDown(400, function(){
							accorMove = false;
						});
					}else{
						accorMove = true;
						$('.termsDiv').eq(i).find('.list').eq(curTerms).find('.termsTxt').stop(true, true).slideUp(400, function(){
							accorMove = false;
						});
						curTerms = -1;
					}
				}
			});
		});
	});

	//매장찾기
	var curStoreMap = -1;
	var accorMove2 = false;
	$('.brandStoreSrch').each(function(i){
		$('.brandStoreSrch').eq(i).find('.list').each(function(q){
			$('.brandStoreSrch').eq(i).find('.list').eq(q).find('.mapBt').click(function(){
				if(!accorMove2){
					if(curStoreMap != q){
						accorMove2 = true;
						$('.brandStoreSrch').eq(i).find('.list').eq(curStoreMap).find('.storeMap').stop(true, true).slideUp(400);
						$('.brandStoreSrch').eq(i).find('.mapBt').removeClass('on');
						$('.brandStoreSrch').eq(i).find('.mapBt').find("span").text("지도보기")
						curStoreMap = q;
						$('.brandStoreSrch').eq(i).find('.list').eq(curStoreMap).find('.storeMap').stop(true, true).slideDown(400, function(){
							accorMove2 = false;
						});
						$(this).addClass('on');
						$('.brandStoreSrch').eq(i).find('.list').eq(curStoreMap).find('.mapBt').find("span").text("지도닫기")
					}else{
						accorMove2 = true;
						$('.brandStoreSrch').eq(i).find('.list').eq(curStoreMap).find('.storeMap').stop(true, true).slideUp(400, function(){
							accorMove2 = false;
						});
						$(this).removeClass('on');
						$('.brandStoreSrch').eq(i).find('.list').eq(curStoreMap).find('.mapBt').find("span").text("지도보기")
						curStoreMap = -1;
					}
				}
			});
		});
	});

	//회원가입 약관 모두 동의
	var curAllCheck = false;
	var curSingleCheck = false;
	var curReadOk = false;
	$(".allCheckBt").click(function(){
		if(curAllCheck == false){
			$(this).addClass("on");
			$(".check input").prop("checked", true).change();
			curAllCheck = true;
		}else if(curAllCheck == true){
			$(this).removeClass("on");
			if ( !curSingleCheck )
			{
				$(".check input").prop("checked", false).change();
			}
			curAllCheck = false;
		}
		curSingleCheck = false;
	});
	$(".check input").on("click", function(){
		var cbxCnt = $(".check input").length;

		if ( $(".check input:checked").length == cbxCnt )
		{
			curAllCheck = false;
			$(".allCheckBt").trigger("click");
		}
		else
		{
			if ( curAllCheck )
			{
				curSingleCheck = true;
				$(".allCheckBt").trigger("click");
			}
		}
	});

	//포인트충전 아코디안
	$(".charge-history .slide-head").on("click", function(){
		if(!$(this).hasClass("on")) {
			$(this).addClass("on");
			$(this).next().stop(true, true).slideDown(300);
		} else {
			$(this).removeClass("on");
			$(this).next().stop(true, true).slideUp(300);
		}
	});


	// 시너지코드 확인 버튼 클릭 시
	$('.synergyInput .confirmBt.darkGray').on('click', function(){
		if(!$(this).hasClass('on')){
			$('.synergyInput .code-result').show();			
			$(this).addClass('on');
		}
	});

	// 2018-10-30 시너지 코드 선택 시 input에 값 채움
	/*var choTxt;
	$('#synergy-sch-pop .sch-result a').each(function(q){
		$(this).on('click', function(){
			$(".lyPop-wrap").stop().fadeOut(300);
			$("#wrap").css('height', '');
			choTxt = $(this).find('div:last-child p:last-child').html();
			$('.synergyInput .input-area.type2 input').val(choTxt);
		});
	});*/
	

	// 스크롤
	/*
	if($(".scrollbox").size() != 0){
		$(".scrollbox").mCustomScrollbar({
			scrollInertia:50,
			advanced:{
				updateOnContentResize: true,
				autoScrollOnFocus: false
			}
		});	
	}; 
	*/

	//나의nh_카드등록팝업 아코디안
	$(".cardDiv .card-accodian a").each(function(index){
		$(this).on("click", function(){
			if(!$(this).hasClass("on")) {
				$(this).addClass("on");
				$(this).parent().find(".cardCon").stop(true, true).slideDown(300);
			} else {
				$(this).removeClass("on");
				$(this).parent().find(".cardCon").stop(true, true).slideUp(300);
			}
		});
	});

	// 나의 카드현황 추천카드 더 보기 2018-10-12 추가
	$('.moreBt.viewCard').click(function(){
		console.log(1);
		$(this).hide();
		$('.recoCardDiv .recoCardList a:gt(3)').show()
	});

	//포인트전환 이용약관
	$(".change-cont2 .pryAgree a").each(function(index){
		$(this).on("click", function(){
			if(!$(this).hasClass("on")) {
				$(this).addClass("on");
				$(this).parent().next(".pryAgreeBody").stop(true, true).slideDown(300);
			} else {
				$(this).removeClass("on");
				$(this).parent().next(".pryAgreeBody").stop(true, true).slideUp(300);
			}
		});
	});

	//선보이다_쿠폰리스트 팝업
	$(".myCouponList a").click(function(){
		$("#couponPop").stop().fadeIn(300);
		if(isWeb == true && isTabl == false && isMobile == false){
			/*
			jQuery(document).on("mousewheel DOMMouseScroll", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			*/
			//$("#wrap").css('height', $(window).height());
		}
	});

	//새롭게_브랜드소개 팝업
	$(".brandDiv .brandBt").click(function(){
		$("#brandPop").stop().fadeIn(300);
		if(isWeb == true && isTabl == false && isMobile == false){
			/*
			jQuery(document).on("mousewheel DOMMouseScroll", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			*/
			//$("#wrap").css('height', $(window).height());
		}
	});

	//아이디찾기_통신사인증 팝업
	$(".complete4 .btnBox .yellowBt").click(function(){
		$("#accreditPop").stop().fadeIn(300);
		if(isWeb == true && isTabl == false && isMobile == false){
			/*
			jQuery(document).on("mousewheel DOMMouseScroll", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			*/
			//$("#wrap").css('height', $(window).height());
		}
	});
	
	//나의nh_멤버십 등급 안내팝업
	$(".myNhmH .warnIconBt").click(function(){
		$("#mynhp-lypop").stop().fadeIn(300);
		if(isWeb == true && isTabl == false && isMobile == false){
			/*
			jQuery(document).on("mousewheel DOMMouseScroll", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			*/
			//$("#wrap").css('height', $(window).height());
		}
	});

	//나의nh_사용만료 쿠폰팝업
	$(".completePopBt").click(function(){
		$("#complete-lypop").stop().fadeIn(300);
		if(isWeb == true && isTabl == false && isMobile == false){
			/*
			jQuery(document).on("mousewheel DOMMouseScroll", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			*/
			//$("#wrap").css('height', $(window).height());
		}
	});

	//나의nh_포인트 소멸예정팝업
	$(".myPoint .top .scheduleBt").click(function(){
		$("#schedule-lypop").stop().fadeIn(300);
		if(isWeb == true && isTabl == false && isMobile == false){
			/*
			jQuery(document).on("mousewheel DOMMouseScroll", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			*/
			//$("#wrap").css('height', $(window).height());
		}
	});

	//나의nh_멤버십 카드 등록팝업
	$(".myPoint .cardPopBt").click(function(){
		$("#card-lypop").stop().fadeIn(300);
		if(isWeb == true && isTabl == false && isMobile == false){
			/*
			jQuery(document).on("mousewheel DOMMouseScroll", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			*/
			//$("#wrap").css('height', $(window).height());
		}
	});

	//나의nh_멤버십카드 비밀번호 변경 팝업
	$(".myCardList .registId .underlineBt").click(function(){
		$("#memPass-lypop").stop().fadeIn(300);
		if(isWeb == true && isTabl == false && isMobile == false){
			/*
			jQuery(document).on("mousewheel DOMMouseScroll", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			*/
			//$("#wrap").css('height', $(window).height());
		}
		$("#memPass-lypop .lyPop").attr("tabindex", "0").focus();
	});

	//나의nh_나의 카드현황 비밀번호 입력팝업
	$(".myPoint .curMyCard li .bts a").click(function(){
		$("#pass-lypop").stop().fadeIn(300);
		if(isWeb == true && isTabl == false && isMobile == false){
			/*
			jQuery(document).on("mousewheel DOMMouseScroll", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			*/
			//$("#wrap").css('height', $(window).height());
		}
	});

	//나의nh_나의 카드현황 분실신고팝업
	$(".myPoint .top .missingInfo").click(function(){
		$("#lost-lypop").stop().fadeIn(300);
		$("#lost-lypop .lyPop").attr("tabindex", "0").focus();
		if(isWeb == true && isTabl == false && isMobile == false){
			/*
			jQuery(document).on("mousewheel DOMMouseScroll", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			*/
			//$("#wrap").css('height', $(window).height());
		}
	});

	//포인트 기부 안내 팝업
	$(".pointRequInfo").click(function(){
		$("#pointRequInfo-lypop").stop().fadeIn(300);
		$("#pointRequInfo-lypop .lyPop").attr("tabindex", "0").focus();
		if(isWeb == true && isTabl == false && isMobile == false){
			/*
			jQuery(document).on("mousewheel DOMMouseScroll", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			*/
			//$("#wrap").css('height', $(window).height());
		}
	});

	//회원탈회 팝업
	$(".outPopBt").click(function(){
		$("#dropOut-lypop").stop().fadeIn(300);
		if(isWeb == true && isTabl == false && isMobile == false){
			/*
			jQuery(document).on("mousewheel DOMMouseScroll", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			*/
			//$("#wrap").css('height', $(window).height());
		}
	});

	// 선물 회원조회 팝업
	$(".giftMemList").click(function(){
		$("#giftMemList-lypop").stop().fadeIn(300);
		if(isWeb == true && isTabl == false && isMobile == false){
			/*
			jQuery(document).on("mousewheel DOMMouseScroll", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			*/
			//$("#wrap").css('height', $(window).height());
		}
	});

	// 이벤트 당첨팝업
	$(".winPopBt").click(function(){
		$("#eventWin-lypop").stop().fadeIn(300);
		if(isWeb == true && isTabl == false && isMobile == false){
			/*
			jQuery(document).on("mousewheel DOMMouseScroll", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			*/
			//$("#wrap").css('height', $(window).height());
		}
	});

	// 회원가입 인증불가안내팝업
	$(".idPopBt").click(function(){
		$("#id-srchPop").stop().fadeIn(300);
		if(isWeb == true && isTabl == false && isMobile == false){
			/*
			jQuery(document).on("mousewheel DOMMouseScroll", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			*/
			//$("#wrap").css('height', $(window).height());
		}
	});

	//통신사팝업
	$(".accreditPopBt").eq(0).click(function(){
		$("#accreditPop").stop().fadeIn(300);
		if(isWeb == true && isTabl == false && isMobile == false){
			/*
			jQuery(document).on("mousewheel DOMMouseScroll", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			*/
			//$("#wrap").css('height', $(window).height());
		}
	});
	
	// 비밀번호찾기 통신사안내(팝업)
	$(".passPopBt").click(function(){
		$("#Pass-srchPop").stop().fadeIn(300);
		if(isWeb == true && isTabl == false && isMobile == false){
			/*
			jQuery(document).on("mousewheel DOMMouseScroll", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			*/
			//$("#wrap").css('height', $(window).height());
		}
	});

	// 회원탈회 불가 (팝업)
	$(".myInfoRevise .termsDiv.accTerms .list:last .topDiv .radioBox input").click(function(){
		$("#cantLeave-lypop").stop().fadeIn(300);
		if(isWeb == true && isTabl == false && isMobile == false){
			/*
			jQuery(document).on("mousewheel DOMMouseScroll", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			*/
			//$("#wrap").css('height', $(window).height());
		}
	});

	// 2018-10-29 시너지코드 검색 (팝업)
	$(".synergyInput .confirmBt.schBtn").click(function(){
		$("#synergy-sch-pop").stop().fadeIn(300);
		if(isWeb == true && isTabl == false && isMobile == false){
			/*
			jQuery(document).on("mousewheel DOMMouseScroll", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			*/
			//$("#wrap").css('height', $(window).height());
		}
	});

	//제휴사전환_레일포인트 세부 유의사항 팝업 2020-09-02 조혜진
	$(".railpointInfo").click(function(){
		$("#railpointInfo-lypop").stop().fadeIn(300);
		$("#railpointInfo-lypop .lyPop").attr("tabindex", "0").focus();
		if(isWeb == true && isTabl == false && isMobile == false){
		}
	});
	
	//제휴사전환_레일포인트 세부 유의사항 팝업 2020-09-02 조혜진
	$(".railpointInfo1").click(function(){
		$("#railpointInfo1-lypop").stop().fadeIn(300);
		$("#railpointInfo1-lypop .lyPop").attr("tabindex", "0").focus();
		if(isWeb == true && isTabl == false && isMobile == false){
		}
	});
	
	//제휴사전환_개인정보 제3자 이용동의  팝업 2020-09-02 조혜진
	$(".cooppointInfo").click(function(){
		$("#cooppointInfo-lypop").stop().fadeIn(300);
		$("#cooppointInfo-lypop .lyPop").attr("tabindex", "0").focus();
		if(isWeb == true && isTabl == false && isMobile == false){
		}
	});
	

	//제휴사전환_개인정보 제3자 이용동의  팝업2 2020-12-07 조혜진
	$(".cooppointInfo1").click(function(){
		$("#cooppointInfo1-lypop").stop().fadeIn(300);
		$("#cooppointInfo1-lypop .lyPop").attr("tabindex", "0").focus();
		if(isWeb == true && isTabl == false && isMobile == false){
		}
	});
	
	//제휴사전환_동의 전 알림  팝업 2020-09-02 조혜진
	$(".cooppointAgree").click(function(){
		$("#cooppointAgree-lypop").stop().fadeIn(300);
		$("#cooppointAgree-lypop .alertPop").attr("tabindex", "0").focus();
		if(isWeb == true && isTabl == false && isMobile == false){
		}
	});
	
	//제휴사전환_포인트 전환 알림  팝업 2020-09-02 조혜진
	$(".cooppointTrans1").click(function(){
		$("#cooppointTrans1-lypop").stop().fadeIn(300);
		$("#cooppointTrans1-lypop .alertPop").attr("tabindex", "0").focus();
		if(isWeb == true && isTabl == false && isMobile == false){
		}
	});
	
	//제휴사전환_포인트 전환 완료  팝업 2020-09-02 조혜진
	$(".cooppointTrans2").click(function(){
		$("#cooppointTrans2-lypop").stop().fadeIn(300);
		$("#cooppointTrans2-lypop .alertPop").attr("tabindex", "0").focus();
		if(isWeb == true && isTabl == false && isMobile == false){
		}
	});
	
	//제휴사전환_포인트 전환 가능시간 알림  팝업 2020-09-02 조혜진
	$(".cooppointTrans3").click(function(){
		$("#cooppointTrans3-lypop").stop().fadeIn(300);
		$("#cooppointTrans3-lypop .alertPop").attr("tabindex", "0").focus();
		if(isWeb == true && isTabl == false && isMobile == false){
		}
	});

	// 팝업 닫기 (확인 버튼)
	$(".lyPop-wrap .lyPop .close-btn").click(function(){
		$(".lyPop-wrap").stop().fadeOut(300);
		/*jQuery(document).off("mousewheel DOMMouseScroll");*/
		$("#wrap").css('height', '');
	});

	// 나의 포인트 기간검색
	var curPesrchSrch = false;
	$('.tab2 .swiper-slide').each(function(q){
		$(this).click(function(){
			$('.tab2 .swiper-slide').removeClass('on');
			$(this).addClass('on');
			if(q==4){
				$('.pesrchDiv').show();
				curPesrchSrch = true;
			}else{
				$('.pesrchDiv').hide();
				curPesrchSrch = false;
			}
		});
	});

	//check tab
	$(".checkTab a").each(function(q){
		$(this).click(function(){
			if($(this).hasClass("on") == false){
				$(".checkTab a").removeClass("on")
				$(this).addClass("on")
			}
		})
	});

	//결제수단 선택
	var curPayWay = -1;
	$(".charge-box1 .box .paywayDiv a").each(function(q){
		$(this).click(function(){
			if(curPayWay != q){
				$(".charge-box1 .box .paywayDiv a").eq(curPayWay).removeClass("on");
				curPayWay = q;
				$(".charge-box1 .box .paywayDiv a").eq(curPayWay).addClass("on");
			}
		})
	})

	//nhpoint 기부선택
	$(".charge-box1 .box .requSel .radioBox input").each(function(q){
		$(this).click(function(){
			if(q==0){
				$(".charge-box1.requ .box").find(".radioTab1").css("display", "block");
				$(".charge-box1.requ .box").find(".radioTab2").css("display", "none");
			}else if(q==1){
				$(".charge-box1.requ .box").find(".radioTab1").css("display", "none");
				$(".charge-box1.requ .box").find(".radioTab2").css("display", "block");

				$(".charge-box1.requ .box").find(".radioTab2 a").each(function(q){
					$(this).click(function(){
						if(curPayWay != q){
							$(".charge-box1.requ .box").find(".radioTab2 a").eq(curPayWay).removeClass("on");
							curPayWay = q;
							$(".charge-box1.requ .box").find(".radioTab2 a").eq(curPayWay).addClass("on");
						}
					})
				})
			}
		})
	});

	//설정/미설정 버튼
	$(".setUpBtn").each(function(q){
		$(this).click(function(){
			if($(this).hasClass("on") == false){
				$(this).addClass("on");
				$(this).find("strong").text("설정");
			}else{
				$(this).removeClass("on");
				$(this).find("strong").text("미설정");
			}
		})
	})

	//회원가입 인증번호 요청
	$('.memberJoin .btnBox .confirmCheckBt').click(function(){
		if(curConCheck == 0){
			$('.memberJoin .confirmDiv').css("display", "inline-block");
			$('.memberJoin .confirmDiv input').focus();
			$('.memberJoin .joinAlert').show();
			$('.memberJoin .btnBox .confirmCheckBt').text('인증');
		}
	});	

	//나의 카드현황 인증번호 요청
	$('.myCardList .registId .confirmCheckBt').click(function(){
		$(this).removeClass("grayBt")
		$('.myCardList .registId .confirmDiv').show();
		$('.myCardList .registId .confirmDiv input').focus();
		$('.myCardList .registId .alertTxt').show();
		$(this).addClass("yellowBt")
		$(this).text('인증');
	});
	
	//제휴사전환
	$(".allyOkBt").click(function(){
		$(this).text("전환 가능 포인트");
	});


	// 2018-09-06 선물하기 팝업 추가
	/*$(".change-cont2 .btn-yellow").click(function(){
		$("#present-lypop").stop().fadeIn(300);
		if(isWeb == true && isTabl == false && isMobile == false){
			
			jQuery(document).on("mousewheel DOMMouseScroll", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			
			//$("#wrap").css('height', $(window).height());
		}
	});
	*/

    //카드 인증 추가 관련 20190906
	$(".accreditDiv.fixed_card .joinAlert2").each(function(index){
		$(this).on("click", function(){
			if(!$(this).hasClass("on")) {
				$(this).addClass("on");
				$(this).parent().find(".card_info_detail").stop(true, true).slideDown(300);
			} else {
				$(this).removeClass("on");
				$(this).parent().find(".card_info_detail").stop(true, true).slideUp(300);
			}
		});
	});
	
	

	/*toggle 추가 2020-07-28 조혜진*/
	$(".toggle_com").click(function(){
		$('.toggle_com a').toggleClass('on');
		$('.toggle_detail').toggle();
	});
});

function lypop_open(popName, THIS)
{
	var $this = $(THIS);
	var $pop = $(popName);
	$pop.stop(true, true).fadeIn(400);
	$pop.focus();
	//$pop.attr("tabindex", 0).show().focus();

	var $close = $(popName).find(".close-btn");
	$close.on("click", function(){
		$pop.stop(true, true).fadeOut(400);
		$this.focus();
	});

	//$("#wrap").css('height', $(window).height());
}