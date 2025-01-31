function x(){
  console.log("inside x")
 
    y();
  }
  function y(){
    console.log("inside y")
    function z(){
      console.log("inside z")
      
    }
    z();

  }
  
  x()