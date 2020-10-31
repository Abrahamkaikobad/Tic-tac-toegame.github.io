    var sign="X";
    var c=1;

    function select(num)
        {
            var cell = document.getElementById("box"+num);
                    if(cell.innerText=="")
                    {
                        cell.innerHTML=sign;
                        c++;
                        if(c%2==0)
                        {
                            sign="0";
                        }
                        else
                        {
                            sign="X";
                        }
                    
                   }
                   if(winner())
                   {
                       alert("You Won. Congrats!!!");
                   }
                   else if(draw())
                   {
                       alert("Match Draw.Try Again!!!");
                   }
                   
        }
       
 function winner()
        {
            var n1,n2,n3,n4,n5,n6,n7,n8,n9;
            n1=document.getElementById('box1').innerHTML;
            n2=document.getElementById('box2').innerHTML;
            n3=document.getElementById('box3').innerHTML;
            n4=document.getElementById('box4').innerHTML;
            n5=document.getElementById('box5').innerHTML;
            n6=document.getElementById('box6').innerHTML;
            n7=document.getElementById('box7').innerHTML;
            n8=document.getElementById('box8').innerHTML;
            n9=document.getElementById('box9').innerHTML;
            if(n1!=""&& n2!="" && n3!="" && n1==n2 && n2==n3||n4!=""&& n5!="" && n6!="" && n4==n5 && n5==n6||n7!=""&& n8!="" && n9!="" && n7==n8 && n8==n9||n1!=""&& n4!="" && n7!="" && n1==n4 && n4==n7||n2!=""&& n5!="" && n8!="" && n2==n5 && n5==n8||n3!=""&& n6!="" && n9!="" && n3==n6 && n6==n9||n1!=""&& n5!="" && n9!="" && n1==n5 && n5==n9||n3!=""&& n5!="" && n7!="" && n3==n5 && n5==n7)
            {
                return true;
            }
            
        }
  function draw()
  {
      
    var n1,n2,n3,n4,n5,n6,n7,n8,n9;
            n1=document.getElementById('box1').innerHTML;
            n2=document.getElementById('box2').innerHTML;
            n3=document.getElementById('box3').innerHTML;
            n4=document.getElementById('box4').innerHTML;
            n5=document.getElementById('box5').innerHTML;
            n6=document.getElementById('box6').innerHTML;
            n7=document.getElementById('box7').innerHTML;
            n8=document.getElementById('box8').innerHTML;
            n9=document.getElementById('box9').innerHTML;
            if(n1!="" &&n2!="" &&n3!="" &&n4!="" &&n5!="" &&n6!="" &&n7!="" &&n8!="" &&n9!="" )
            {
                return true;
            }
  }
     function reagain()
        { var i;
            for(i=1;i<=9;i++)
            {
                document.getElementById("box"+i).innerHTML="";
            }
        }
 
