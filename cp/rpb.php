<?php
define("__ROOT__",dirname(__FILE__));
require_once(__ROOT__."/projectconstant.php");
	
$fdz = $_GET['a1'];
$tdz = $_GET['b1'];
$ccdz = $_GET['c1'];

$username = "$serveruser";
$password = "$serverpass";
$hostname = "$servername";	
$dbh = mysql_connect($hostname, $username, $password) 
		or die("Unable to connect to MySQL");
$selected = mysql_select_db($serverdatabase,$dbh) 
		or die("Could not select customer data");
		
		
		
		
		
$query1 = "select * from cdata where ccode='$ccdz'";
$result1=mysql_query($query1);
$row1 = mysql_fetch_array($result1, MYSQL_BOTH);

//$row = mysql_fetch_array($result, MYSQL_BOTH);

$customername=$row1[0];
$customeraddress=$row1[1];
$customerphone=$row1[4];
$customeremail=$row1[2];

		
		
		
		
		
		
		
		//SELECT *,STR_TO_DATE(textdate,'%Y/%m/%d') as realdate FROM table ORDER BY realdate;

$query = "select *,STR_TO_DATE(date,'%d-%m-%Y') as realdate from $ccdz ORDER BY realdate ASC";
$result=mysql_query($query);


$tnum=mysql_num_rows($result);
//$row = mysql_fetch_array($result, MYSQL_BOTH);
//$b=date("d/m/Y",strtotime($a));

$fdy=strtotime($fdz); 
$tdy=strtotime($tdz);


echo "<h4> M/s PRABHNOOR ENTERPRISES <BR/>";
echo "56a KALIA COLONY JALANDHAR<BR/>";
echo "PH . 9915965138 <BR/></H4>";
echo "<h3> THE BILL FOR   :$customername";
echo " <br/>BETWEEN DATES FROM : $fdz TO $tdz </H3>";
echo "<h3><br/>Phone - $customerphone";
echo "<br/>Address - $customeraddress";
echo "<br/>Email - $customeremail </H3>";
 
//echo "TOTAL NUMBER OF C/N SENT BY YOU BETWEEN GIVEN DATES  :  ";
//echo $tnum;
$ambsum=0;
$amcsum=0;
$cswitch=0;

	?>

  
   
    
    <p><table width="200" border="2" style="border-collapse:collapse" summary="BILL FOR GIVEN DATES">
  <caption>
    BILL FOR GIVEN DATES
  </caption>
  <tr bgcolor="#012F60" >
    <th scope="col">CN/NO&nbsp;</th>
    
    <th scope="col">DESTINATION&nbsp;</th>
    <th scope="col">WEIGHT&nbsp;</th>
    <th scope="col">PARCEL OR DOCUMENT&nbsp;</th>
    
    <th scope="col">AMOUNT CHARGED&nbsp;</th>
    <th scope="col">DATE&nbsp;</th>
    <th scope="col">REMARKS&nbsp;</th>
  </tr>
  <?php  while($row = mysql_fetch_array($result))
  {
	  //$fdy=date("d/m/y", strtotime($fdz)); 

		$temp = $row[3];
		
		if($temp <250)
		{
			$temp = "$temp ";
		}
		
		if($temp >=250)
		{
			$temp = "$temp ";
		}
		
	  $chro=strtotime($row[7]);
	  
	  if( $chro>=$fdy && $tdy>=$chro)
	  {
  
  if($cswitch==0)
  {
  ?>
  <tr bgcolor="#FFFFFF">
    <td><?php echo $row[0]; ?>&nbsp;</td>
    
    <td><?php echo $row[2]; ?>&nbsp;</td>
    <td><?php echo $temp; ?>&nbsp;</td>
    <td><?php echo $row[4]; ?>&nbsp;</td>
    
    <td><?php echo $row[6]; ?>&nbsp;</td>
    <td><?php echo $row[7]; ?>&nbsp;</td>
    <td><?php echo $row[8]; ?>&nbsp;</td>
  </tr>
  
  <?php
  $cswitch=1;
  }elseif($cswitch==1)
  {
  ?>
  <tr bgcolor="#2D75BD">
    <td><?php echo $row[0]; ?>&nbsp;</td>
    
    <td><?php echo $row[2]; ?>&nbsp;</td>
    <td><?php echo $temp; ?>&nbsp;</td>
    <td><?php echo $row[4]; ?>&nbsp;</td>
    
    <td><?php echo $row[6]; ?>&nbsp;</td>
    <td><?php echo $row[7]; ?>&nbsp;</td>
    <td><?php echo $row[8]; ?>&nbsp;</td>
  </tr>
  
  <?php
  $cswitch=0;
  }
  
  
  
  
  
  $ambsum =$ambsum + $row[5];
  $amcsum= $amcsum + $row[6];
	  }
  
  
   
  
  }
   ?>
</table>
<?php

  echo "<h3>TOTAL AMOUNT FOR THESE GIVEN DATES IS :  RS ";
  echo $amcsum;
  $samtc = (string)$amcsum;
  
?>

<?php

$nwords = array(  "", "one", "two", "three", "four", "five", "six", 
	      	  "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", 
	      	  "fourteen", "fifteen", "sixteen", "seventeen", "eightteen", 
	     	  "nineteen", "twenty", 30 => "thirty", 40 => "fourty",
                     50 => "fifty", 60 => "sixty", 70 => "seventy", 80 => "eigthy",
                     90 => "ninety" );

function number_to_words ($x)
{
     global $nwords;
     if(!is_numeric($x))
     {
         $w = '#';
     }else if(fmod($x, 1) != 0)
     {
         $w = '#';
     }else{
         if($x < 0)
         {
             $w = 'minus ';
             $x = -$x;
         }else{
             $w = '';
         }
         if($x < 21)
         {
             $w .= $nwords[$x];
         }else if($x < 100)
         {
             $w .= $nwords[10 * floor($x/10)];
             $r = fmod($x, 10);
             if($r > 0)
             {
                 $w .= ' '. $nwords[$r];
             }
         } else if($x < 1000)
         {
		
             	$w .= $nwords[floor($x/100)] .' hundred';
             $r = fmod($x, 100);
             if($r > 0)
             {
                 $w .= ' '. number_to_words($r);
             }
         } else if($x < 1000000)
         {
         	$w .= number_to_words(floor($x/1000)) .' thousand';
             $r = fmod($x, 1000);
             if($r > 0)
             {
                 $w .= ' ';
                 if($r < 100)
                 {
                     $w .= ' ';
                 }
                 $w .= number_to_words($r);
             }
         } else {
             $w .= number_to_words(floor($x/1000000)) .' million';
             $r = fmod($x, 1000000);
             if($r > 0)
             {
                 $w .= ' ';
                 if($r < 100)
                 {
                     $word .= ' ';
                 }
                 $w .= number_to_words($r);
             }
         }
     }
     return $w;
}

$rr=$samtc;
echo "<br/>";
echo strtoupper(number_to_words($rr));
echo " Rupees Only";
echo "<br/><br/>";
//  echo number_to_words($samtc);
  echo "</h3>";
  echo "<br/><br/><br/><br/>";
    echo "STAMP";
  echo "<br/><br/>";
  echo "SIGN";


// demonstration

/*if(isset($_POST['num']))
{
     echo '
      '.htmlspecialchars($_POST['num']).' = '.number_to_words($_POST['num']).'<p>
     <a href="'.$_SERVER['PHP_SELF'].'">try again</a>';
}else{
     echo '
     <form method="post" action="'.$_SERVER['PHP_SELF'].'">
         <input type="text" name="num">
         <input type="submit" value="spell number">
     </form>';
}*/

?>