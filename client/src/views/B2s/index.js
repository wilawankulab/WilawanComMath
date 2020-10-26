import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { getB2s } from "../../functions";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },

  card: {
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    marginTop: theme.spacing(10),
  },
}));

export default function Page() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [bit2string, setBit2string] = useState(11011);
  const [result, setResult] = useState("");
  const generate = () => {
    getB2s(bit2string).then((res) => {
      setResult(res);
    });
  };

  const back = () => {
    navigate("/WilawanCommath/main");
  };

  return (
    <div>
    
                    
    
    <Typography align="center">
      <Card className={classes.card}>
        <CardHeader
          title="Chapter 1"
          titleTypographyProps={{ align: "center" }}
          subheaderTypographyProps={{ align: "center" }}
          className={classes.cardHeader}
        />
     
        <CardContent>
          
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                 id="outlined-secondary"
                value={bit2string}
                label="Enter a binary number"
                variant="outlined"
                color="secondary"
                onChange={(e) => setBit2string(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TextField
                    id="outlined-secondary"
                    label="result"
                    value={result===""?"":result}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  color="secondary"
                />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container spacing={5} alignItems="flex-end">
            <Grid item xs={12} sm={6} md={6}>
              <Button
                onClick={generate}
                fullWidth
                variant="contained"
                color="secondary"
              >
                calculate
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Button
                onClick={back}
                fullWidth
                variant="outlined"
                color="secondary"
              >
                
                back
              </Button>
            </Grid>
          </Grid>
          
        </CardActions>
        
      </Card>
      
    </Typography>
    <br></br>
    <br></br>
    <br></br>
    <center><h9 >"Convert numbers from binary numbers using IEEE single precision format"</h9>
                    </center>  
    </div>
    
 
  );
}
