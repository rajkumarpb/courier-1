// JavaScript Document
var sitename="http://127.0.0.1/welcome14/cp/";
function cser()
{
var tempc = document.getElementById("cucd").value;	
	

		if(tempc=="PS")
		{
		alert("PLEASE SELECT CUSTOMER");
		document.getElementById("cucd").focus();
		javascript_abort();
		}



	var url = sitename+"sercust.php?a1="+tempc;
  
   $.ajax({  
             type: "GET", url: sitename+"sercust.php?a1="+tempc, 
			         complete: function(data){  
                  //  $("#downdivforser").html(data.responseText); 
				
				document.getElementById("cn").value=data.responseText;
	            var res1 = document.getElementById("cn").value;
                abc(res1); 
				}  
            
			});  
 

  /*if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  cust1=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  cust1=new ActiveXObject("Microsoft.XMLHTTP");
  }
cust1.onreadystatechange=function()
  {
  if (cust1.readyState==4 && cust1.status==200)
    {
    document.getElementById("cn").value=cust1.responseText;
	var res1 = document.getElementById("cn").value;
    abc(res1);
	
    }
  }

  
cust1.open("GET",url,true);
cust1.send();*/



//*******************************fuction brace
}

//*********************************** fill text start
function abc(str1)
{



var len = str1.length;
var textboxcall=0;
var string="";
var index;
index = str1.indexOf("*");
var x = index;
var ind = 0;




for(x=x+1;x<=len;x++)
{


var check = str1.charAt(x);
												
		
						if(check == "*")
							{
							
							if(ind==0)
							{
							document.getElementById("cn").value=string;
							}
							
							
							if(ind==1)
							{
								
							document.getElementById("ca").value=string;
								
							}
							
							if(ind==2)
							{
							document.getElementById("ce").value=string;
							}
							
							
							if(ind==3)
							{
								document.getElementById("cc").value=string;
								

							}
							 					
														
							
							if(ind==4)
							{
							document.getElementById("cp").value=string;
							
							}
							
							
							if(ind==5)
							{
							document.getElementById("s250").value=string;
							}
							
							
							if(ind==6)
							{
							document.getElementById("s500").value=string;
							}
							
							
							if(ind==7)
							{
							document.getElementById("s1kg").value=string;
							}
							
							
							if(ind==8)
							{
							document.getElementById("sp1kg").value=string;
							}
							
							
							if(ind==9)
							{
							document.getElementById("z250").value=string;
							}
							
							
							if(ind==10)
							{
							document.getElementById("z500").value=string;
							}
							
							
							if(ind==11)
							{
							document.getElementById("z1kg").value=string;
							}
							
							
							if(ind==12)
							{
							document.getElementById("zp1kg").value=string;
							}
							
							if(ind==13)
							{
							document.getElementById("r250").value=string;
							}
							
							
							if(ind==14)
							{
							document.getElementById("r500").value=string;
							}
							
							
							if(ind==15)
							{
							document.getElementById("r1kg").value=string;
							}
							
							
							if(ind==16)
							{
							document.getElementById("rp1kg").value=string;
							}
							
							
							
							string="";
							ind=ind+1;
							
							}
							
							
						if(check != "*" )
							{
							string += check;
							}
}



}

//*********************************************filltext end



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function funavail()
{
var ccx = document.getElementById("cc").value;

if(ccx=="")
 {
	  alert("Please enter Customer Code");
	  document.form1.cc.focus();
 	  javascript_abort();
     }


var dc=/^[a-zA-Z0-9(\s)]+$/; 
	
	if (dc.test(ccx))
		{
		true;
		}
		else
		{
		alert("Only enter Characters and Digits ");
		document.form1.cc.focus();
		javascript_abort();
		}
		
		
		
 var url = sitename+"checkcode.php?a1="+ccx;
  
  

  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  aser2=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  aser2=new ActiveXObject("Microsoft.XMLHTTP");
  }
aser2.onreadystatechange=function()
  {
  if (aser2.readyState==4 && aser2.status==200)
    {
    document.getElementById("tav").value=aser2.responseText;
	var res = aser2.responseText;
	filltext(res);
    }
  }

 
aser2.open("GET",url,true);
aser2.send();


		
}
		

//*******************************************main function brace close

//******************************function fill text start

function filltext(str)
{

var len = str.length;
var textboxcall=0;
var string="";
var index;
index = str.indexOf("*");
var x = index;


for(x=x+1;x<=len;x++)
{

var check = str.charAt(x);
												
		
						if(check == "*")
							{
							document.getElementById("tav").value=string;
								

							}
							
							
						if(check != "*" )
							{
							string += check;
							}





}





//*******************************function fill text end
	
}

function funadd()
{
	

var avail =	document.getElementById("tav").value;
	
	//if(avail == "Not Available" || avail == "")
	//{
	//alert("PLEASE CLICK GET READY FOR EDIT ONCE");
	//document.getElementById("cc").focus();
	//javascript_abort();
	//}

var cnx = document.getElementById("cn").value;
var cax = document.getElementById("ca").value;
var cpx = document.getElementById("cp").value;
var cex = document.getElementById("ce").value;
var ccx = document.getElementById("cc").value;


	if(cnx=="")
 	{
	  alert("Please enter Customer Name");
	  document.form1.cn.focus();
 	  javascript_abort();
     }


	var dc=/^[a-zA-Z0-9(\s)]+$/; 
	
	if (dc.test(cnx))
		{
		true;
		}
		else
		{
		alert("Only enter Characters and Digits ");
		document.form1.cn.focus();
		javascript_abort();
		}
	

	if(cax=="")
 	{
	  alert("Please enter Customer Address");
	  document.form1.ca.focus();
 	  javascript_abort();
     }


	var dc=/^[a-zA-Z0-9(\s)]+$/; 
	
	if (dc.test(cax))
		{
		true;
		}
		else
		{
		alert("Only enter Characters and Digits ");
		document.form1.ca.focus();
		javascript_abort();
		}
	


	if(cpx=="")
 	{
	  alert("Please enter Customer Phone");
	  document.form1.cp.focus();
 	  javascript_abort();
     }
	 
	 
	 
	 var dc=/^[0-9(\s)]+$/; 
	
	if (dc.test(cpx))
		{
		true;
		}
		else
		{
		alert("Only enter Digits ");
		document.form1.cp.focus();
		javascript_abort();
		}
	
	//*************************email check *********************** 
	 if(cex=="")
 	{
	  alert("Please enter Customer Email");
	  document.form1.ce.focus();
 	  javascript_abort();
     }

	var dc=/^[-_.a-z0-9]+@(([-_a-z0-9]+\.)+(ad|ae|aero|af|ag|ai|al|am|an|ao|aq|ar|arpa|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|biz|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|com|coop|cr|cs|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|in|info|int|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mil|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|name|nc|ne|net|nf|ng|ni|nl|no|np|nr|nt|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pro|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)|(([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])\.){3}([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5]))$/
	
	if (dc.test(cex))
		{
		true;
		}
		else
		{
		alert("Only enter valid email address ");
		document.form1.ce.focus();
		javascript_abort();
		}
	

//************************************************************


	if(ccx=="")
 	{
	  alert("Please enter Customer Code");
	  document.form1.cc.focus();
 	  javascript_abort();
     }


	var dc=/^[a-zA-Z0-9(\s)]+$/; 
	
	if (dc.test(ccx))
		{
		true;
		}
		else
		{
		alert("Only enter Characters and Digits ");
		document.form1.cc.focus();
		javascript_abort();
		}
		
//*************************************************

s250x = document.getElementById("s250").value;
s500x = document.getElementById("s500").value;
s1kgx = document.getElementById("s1kg").value;
sp1kgx = document.getElementById("sp1kg").value;
z250x = document.getElementById("z250").value;
z500x = document.getElementById("z500").value;
z1kgx = document.getElementById("z1kg").value;
zp1kgx = document.getElementById("zp1kg").value;
r250x = document.getElementById("r250").value;
r500x = document.getElementById("r500").value;
r1kgx = document.getElementById("r1kg").value;
rp1kgx = document.getElementById("rp1kg").value;
//*************************************************

if(s250x=="")
 	{
	  alert("Please enter rate");
	  document.form1.s250.focus();
 	  javascript_abort();
     }


	var dc=/^[0-9(\s)]+$/; 
	
	if (dc.test(s250x))
		{
		true;
		}
		else
		{
		alert("Only enter Digits ");
		document.form1.s250.focus();
		javascript_abort();
		}
	


	if(s500x=="")
 	{
	  alert("Please enter rate");
	  document.form1.s500.focus();
 	  javascript_abort();
     }


	var dc=/^[0-9(\s)]+$/; 
	
	if (dc.test(s500x))
		{
		true;
		}
		else
		{
		alert("Only enter Digits ");
		document.form1.s500.focus();
		javascript_abort();
		}



	if(s1kgx=="")
 	{
	  alert("Please enter rate");
	  document.form1.s1kg.focus();
 	  javascript_abort();
     }


	var dc=/^[0-9(\s)]+$/; 
	
	if (dc.test(s1kgx))
		{
		true;
		}
		else
		{
		alert("Only enter Digits ");
		document.form1.s1kgx.focus();
		javascript_abort();
		}



	if(sp1kgx=="")
 	{
	  alert("Please enter rate");
	  document.form1.sp1kg.focus();
 	  javascript_abort();
     }


	var dc=/^[0-9(\s)]+$/; 
	
	if (dc.test(sp1kgx))
		{
		true;
		}
		else
		{
		alert("Only enter Digits ");
		document.form1.sp1kg.focus();
		javascript_abort();
		}

//*******************************************************

	if(z250x=="")
 	{
	  alert("Please enter rate");
	  document.form1.z250.focus();
 	  javascript_abort();
     }


	var dc=/^[0-9(\s)]+$/; 
	
	if (dc.test(z250x))
		{
		true;
		}
		else
		{
		alert("Only enter Digits ");
		document.form1.z250.focus();
		javascript_abort();
		}
	


	if(z500x=="")
 	{
	  alert("Please enter rate");
	  document.form1.z500.focus();
 	  javascript_abort();
     }


	var dc=/^[0-9(\s)]+$/; 
	
	if (dc.test(z500x))
		{
		true;
		}
		else
		{
		alert("Only enter Digits ");
		document.form1.z500.focus();
		javascript_abort();
		}



	if(z1kgx=="")
 	{
	  alert("Please enter rate");
	  document.form1.z1kg.focus();
 	  javascript_abort();
     }


	var dc=/^[0-9(\s)]+$/; 
	
	if (dc.test(z1kgx))
		{
		true;
		}
		else
		{
		alert("Only enter Digits ");
		document.form1.z1kgx.focus();
		javascript_abort();
		}



	if(zp1kgx=="")
 	{
	  alert("Please enter rate");
	  document.form1.zp1kg.focus();
 	  javascript_abort();
     }


	var dc=/^[0-9(\s)]+$/; 
	
	if (dc.test(zp1kgx))
		{
		true;
		}
		else
		{
		alert("Only enter Digits ");
		document.form1.zp1kg.focus();
		javascript_abort();
		}

//*************************************************************
	if(r250x=="")
 	{
	  alert("Please enter rate");
	  document.form1.r250.focus();
 	  javascript_abort();
     }



	var dc=/^[0-9(\s)]+$/; 
	
	if (dc.test(r250x))
		{
		true;
		}
		else
		{
		alert("Only enter Digits ");
		document.form1.r250.focus();
		javascript_abort();
		}
	


	if(r500x=="")
 	{
	  alert("Please enter rate");
	  document.form1.r500.focus();
 	  javascript_abort();
     }


	var dc=/^[0-9(\s)]+$/; 
	
	if (dc.test(r500x))
		{
		true;
		}
		else
		{
		alert("Only enter Digits ");
		document.form1.r500.focus();
		javascript_abort();
		}



	if(r1kgx=="")
 	{
	  alert("Please enter rate");
	  document.form1.r1kg.focus();
 	  javascript_abort();
     }


	var dc=/^[0-9(\s)]+$/; 
	
	if (dc.test(r1kgx))
		{
		true;
		}
		else
		{
		alert("Only enter Digits ");
		document.form1.r1kgx.focus();
		javascript_abort();
		}



	if(rp1kgx=="")
 	{
	  alert("Please enter rate");
	  document.form1.rp1kg.focus();
 	  javascript_abort();
     }


	var dc=/^[0-9(\s)]+$/; 
	
	if (dc.test(rp1kgx))
		{
		true;
		}
		else
		{
		alert("Only enter Digits ");
		document.form1.rp1kg.focus();
		javascript_abort();
		}



var r=confirm("HAVE YOU ENTERED DETAILS CORRECT !!!!!!!!! ");
if (r==true)
  {
  alert("You pressed OK!");
  var url = sitename+"updatecust.php?a1="+cnx+"&b1="+cax+"&c1="+cpx+"&d1="+cex+"&e1="+ccx+"&f1="+s250x+"&g1="+s500x+"&h1="+s1kgx+"&i1="+sp1kgx+"&j1="+z250x+"&k1="+z500x+"&l1="+z1kgx+"&m1="+zp1kgx+"&n1="+r250x+"&o1="+r500x+"&p1="+r1kgx+"&q1="+rp1kgx;
  
  
 
  
   $.ajax({  
                type: "GET", url: sitename+"updatecust.php?a1="+cnx+"&b1="+cax+"&c1="+cpx+"&d1="+cex+"&e1="+ccx+"&f1="+s250x+"&g1="+s500x+"&h1="+s1kgx+"&i1="+sp1kgx+"&j1="+z250x+"&k1="+z500x+"&l1="+z1kgx+"&m1="+zp1kgx+"&n1="+r250x+"&o1="+r500x+"&p1="+r1kgx+"&q1="+rp1kgx, 
			         complete: function(data){  
                  //  $("#downdivforser").html(data.responseText); 
		
			 //document.getElementById("mydivcust").innerHTML=data.responseText;
				    var rtn=data.responseText;
					
					 $("#mydivcust").html(data.responseText);   
                
				}  
            
			});  
  
  
  
 /* if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  custadd=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  custadd=new ActiveXObject("Microsoft.XMLHTTP");
  }
custadd.onreadystatechange=function()
  {
  if (custadd.readyState==4 && custadd.status==200)
    {
    document.getElementById("mydivcust").innerHTML=custadd.responseText;
	
    }
  }

 
custadd.open("GET",url,true);
custadd.send(); */


document.getElementById("form1").reset();

}



}



function javascript_abort()
{
   throw new Error('This is not an error. This is just to abort javascript');

}

