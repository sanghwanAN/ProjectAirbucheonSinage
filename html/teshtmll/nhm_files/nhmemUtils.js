/**
 * <pre>
 * 프로젝트명  : 범농협 통합멤버십 시스템
 * 파일명      : nhmemUtils.js
 * 작성일      : 2018. 5. 21.
 * 작성자      :  PI180072 유영남
 * 설명        : 공통유틸관련 js
 * 수정내역(수정일 수정자 - 수정내용)
 * -------------------------------------------------------------------------
 * 2018. 5. 21. 유영남 - 최초생성
 * 2022. 02. 24. 손병철 - email 정규식 _.- 3가지 특수문자 위치에 상관없이 들어가도록 수정
 * </pre>
 * 
 */ 
var textReg = /[a-zA-Z]+/;
var numberReg = /[0-9]+/; // 숫자가 포함되면 true
var numberReg2 = /^[0-9]*$/; // 숫자만 있어야 true
var specialCharReg = /[!"#\$%&\'\(\)\*\+,\-\.\/:;<=>?@\[\]\^\_\`\{\}\|~\\]+/;
//var emailReg = /^[A-Za-z0-9]{1}[A-Za-z0-9\_.-]*([A-Za-z0-9]{1})@[a-z\d-]+(\.[a-z]{2,6}){1,2}$/;
var emailReg = /^[A-Za-z0-9\_.-]*@[a-z\d-]+(\.[a-z]{2,6}){1,2}$/;

function isNumber( value)
{
	if( !$.trim( value))
	{
		return false;
	}
	else
	{
		return /^[0-9]*$/.test( value);
	}
}

function isValidationId( value)
{
	// 아이디에서 숫자를 제거
	var tmp1 = value.replace( /[0-9]/g, "");
	
	// 아이디에서 영문자,숫자 모두 제거
	var tmp2 = value.replace( /[a-zA-Z]/g, "").replace( /[0-9]/g, "");
	
	// 1. 아이디 미입력 케이스
	if( !$.trim( value))
	{
		return "아이디를 입력해주세요.";
	}
	// 2. 아이디 길이 8~16이 아닌 케이스
	else if ( value.length < 8 || value.length > 16)
	{
		return "아이디는 8자리 ~ 16자의 영문, 숫자만 가능합니다.";
	}
	// 3. 숫자를 제거했는데 빈값이면 숫자로만 된 아이디, 문자/숫자를 제거했는데 빈값이 아니면 특수문자가 포함된 아이디
	else if ( tmp1 == "" || tmp2 != "")
	{
		return "아이디는 8자리 ~ 16자의 영문, 숫자만 가능합니다.";
	}
	
	return "";
}



function isValidationPw( value, pwBanChar)
{
	// 1. 비밀번호 미입력 케이스
	if( !$.trim( value))
	{
		return "비밀번호를 입력해주세요.";
	}
	// 2. 비밀번호 길이 8~16이 아닌 케이스
	else if ( value.length < 8 || value.length > 16)
	{
		return "비밀번호는 8자리 ~ 16자리로 입력해주세요.";
	}
	// 3. 영문자, 숫자, 특수문자 모두 포함됐는지 체크
	else if( !( textReg.test( value)) ||
			!( numberReg.test( value)) ||
			!( specialCharReg.test( value))) 
	{
		return "비밀번호는 영문, 숫자, 특수문자를 포함해주세요.";
	}
	
	
	// 4. 동일한 문자 3자리연속 사용불가 체크 
	var bIsCheck = true;
	for( var i = 2; i < value.length; i++)
	{
		if( value.substr( i - 2, 1) == value.substr( i, 1) && value.substr( i - 1, 1) ==  value.substr( i, 1))
		{
			bIsCheck = false;
			return "비밀번호는 동일한 문자를 3자리 연속으로 사용 할 수 없습니다.";
		}
		
	}
	if( !bIsCheck)
	{
		return "비밀번호는 동일한 문자를 3자리 연속으로 사용 할 수 없습니다.";
	}
	
	// 5. 패스워드 금지문자 체크
	if(pwBanChar != null && pwBanChar.trim() != "" 
		&& pwBanChar != "99") {
		var pwBanChar2 = pwBanChar.replace(/,/g ,"").replace(/ /g ,"");
		var pwBanCharReg = new RegExp("[" + pwBanChar2 +"]+", "g");
		
		if(pwBanCharReg.test( value)) {
			return pwBanChar2 + " 특수문자는 입력이 제한 됩니다.";
		}
	}

	
	return "";
}

function isValidationPntUgCnfNo( value)
{
	// 1. 비밀번호 미입력 케이스
	if( !$.trim( value))
	{
		return "포인트 사용 확인번호를 입력해주세요.";
	}
	// 2. 비밀번호 길이 6~10이 아닌 케이스
	else if ( value.length < 6 || value.length > 10)
	{
		return "포인트 사용 확인번호는 6자리 ~ 10자리로 입력해주세요.";
	}
	// 3. 숫자만 있는지 체크
	else if( !numberReg2.test( value)) 
	{
		return "숫자만 입력 할 수 있습니다.";
	}
	
	
	return "";
}


function isValidationEmail( value)
{
	// 1. 이메일 미입력 케이스
	if( !$.trim( value))
	{
		return "이메일을 입력해주세요.";
	}
	// 2. 이메일 형식 체크
	else if( !emailReg.test( value)) 
	{
		return "이메일이 올바르지 않습니다.\n이메일을 확인해주세요.";
	}
	
	return "";
}


var nTimeValue;
var timerInterval;

function startTimer( timerId)
{
	nTimeValue = 180;
	clearInterval( timerInterval);
	timer( timerId);
	timerInterval = setInterval( "timer('" + timerId + "')", 1000);
}


function timer( timerId)
{
	var minute = Math.floor( nTimeValue / 60);
	var second = Math.floor( nTimeValue % 60);
	minute = minute / 10 < 1 ? "0" + minute : minute;
	second = second / 10 < 1 ? "0" + second : second;
	
	$("#" + timerId).text( minute + ":" + second);
	
	if( nTimeValue <= 0)
	{
		clearInterval( timerInterval);
	}
	nTimeValue--;
}


function submitAjax( url, type, async, param)
{
	return $.ajax({
		url      : url
      , type   : type
      , async : async
      //, data	 : param
      , data	 : VestAjax(typeof(param)=='object'?$.param(param):param)
      , error	 :function( data)
      {
    	  //alert("시스템 오류가 발생했습니다.");
    	  //세션만료 시 오류 메시지 및 이동페이지 처리 추가 by 송준희 20200218
    	  setTimeout(function() {
    		  try{
      			if( data.status != undefined && data.status != 'undefined' && (data.status == 401 || data.status == '401')) {
      				alert('세션이 만료되었습니다. 다시 시도하여 주십시요.');
      		  		$("#divAlert").attr("href", "/"); //메인화면으로 이동
      		  		return;
      			} else {
      				alert('통신장애 등으로 시스템 오류가 발생했습니다. 잠시 후 다시 시도하여 주십시요.');
      				return;
      			}
      		}catch(e){
      			alert("시스템 오류가 발생했습니다.");
      			return;
      		}
          }, 300);
      }
	});
}


function submitForm( elementId)
{
	$("#" + elementId).submit();
}

function submitForm(elementId,method,action)
{
//	$("#"+elementId).attr("method",method).attr("action",action).submit();
	var _form = $("#"+elementId).attr("method",method).attr("action",action);
	VestSubmit(_form[0]);
}

/**
 * 쿠키 유효시간 설정
 * @param name
 * @param value
 * @param expireDate
 */
function setCookie(name,value,expireDate)
{
	var toDate = new Date();
	toDate.setDate(toDate.getDate() + expireDate);
	document.cookie = name+"="+escape(value)+";path=/;expires="+toDate.toGMTString()+";";
}
/**
 * 쿠키정보 가져오기
 */
function getCookie(name)
{
	var cName = name+"=";
	var x = 0;
	var endOfCookie="";
	while(x <= document.cookie.length)
	{
		var y=(x+cName.length);
		if(document.cookie.substring(x,y) == cName)
		{
		  if((endOfCookie = document.cookie.indexOf(";",y)) == -1)
			  endOfCookie = document.cookie.length;
          return unescape(document.cookie.substring(y,endOfCookie));
			
		}
		x = document.cookie.indexOf("",x) + 1;
		if(x == 0)
			break;
		
	}
	return "";
}

function lpad(value, length, padValue){
	while(value.length < length){
		value = padValue + value;
	}
	return value;
}

function getParamInfo(formId){
	var formData = $("#"+formId).serializeArray();
	var formData1 = JSON.stringify(formData);
	var paramData = JSON.parse(formData1);
	return paramData;
}

function validationNumber( obj)
{
	var number = $(obj).val().replace(/[^0-9]/g, '');
	var maxlength = $(obj).attr("maxlength");
	if( maxlength != null && maxlength > 0)
	{
		number = number.substr(0, maxlength);
	}
	$(obj).val(number);
}

function validationIntgMbId( obj)
{
	var value = $(obj).val().replace(/[^0-9a-zA-Z]/g, '');
	$(obj).val(value);
}

function validationName( obj)
{
	var value = $(obj).val().replace(/[^ㄱ-힣a-zA-Z]/g, '');
	$(obj).val(value);
}

/**
 * 오늘 하루 그만 보기
 */
function popTodayClose(){
	setCookie('notToday','Y',1);
	$("#main-lypop").hide('fade');
}