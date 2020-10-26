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
import { getIntegration } from "../../functions";

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
  const navigate = useNavigate();
  const classes = useStyles();
  const [result, setresult] = useState("");
  const [a, seta] = useState(0);
  const [b, setb] = useState(3);

  const back = () => {
    navigate("/WilawanCommath/main");
  };

  const generate = () => {
    const data = {
      a: a,
      b: b,
    };
    getIntegration(data).then((res) => {
      setresult(res);
    });
  };

  return (
    <div>
    <Typography align="center">
      <Card className={classes.card}>
        <CardHeader
          title="Chapter 5"
          titleTypographyProps={{ align: "center" }}
          subheaderTypographyProps={{ align: "center" }}
          className={classes.cardHeader}
        />
        <CardContent>
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                value={a}
                label="A value"
                variant="outlined"
                onChange={(e) => seta(e.target.value)}
                color="secondary"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                value={b}
                label="B value"
                variant="outlined"
                onChange={(e) => setb(e.target.value)}
                color="secondary"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                id="outlined-read-only-input"
                label="result"
                value={result === "" ? "" : result}
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
    
    
    <center><h9>
"Find the area under the graph using Simpson's rule."</h9>
                    </center>  
                    <br></br>
                    <br></br>
                    <br></br>

    </div>
  );
}
