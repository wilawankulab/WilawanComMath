import React from "react";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import "../../App.css";





import { useNavigate } from "react-router-dom";


function Index() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/"+page);
  }

  return (
<div>
    <Grid item xs={12} sm={400}>
    <Box bgcolor="secondary.main" color="secondary.contrastText" p={10}>
        
    <center><h1> <p class="font-weight-bold"style={{ marginTop: "15%" }}>COMPUTATIONAL MATHEMATICS</p></h1></center>
        
        
        <center><h9 >"This project is a project about courses. 
                    Computational Mathematics that teachers have taught Is the introduction of various lessons learned And applied until the project came up "</h9>
                    </center>  
                    <br></br>
            <br></br>       
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <center>
       <Button  variant="contained"  onClick={()=>{nextPage("/WilawanCommath/main")}}  >
         <h3>GO TO PROJECT</h3>
         
     </Button> 
      </center>
      
    </Box>
        </Grid>

     
    
        
  
      </div>    
     

     
   


  
  



    );
  
}
export default Index;


