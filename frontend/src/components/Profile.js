import {
  Container,
  Card,
  Typography,
  CardContent,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  root: {
    height: 275,
    width: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const arr39 = [
  190901, 190902, 190903, 190904, 190905, 190906, 190907, 190908, 190909,
  190910, 190911, 190912, 190913, 190914, 190915, 190916, 190917, 190918,
  190919, 190921, 190922, 190923, 190925, 190926, 190927, 190928, 190930,
  190931, 190932, 190933, 190934, 190935, 190936, 190937, 190938, 190939,
  190940, 190941, 190942, 190943, 180915, 180927,
];

let groupObj = {};
let temparr = [];
let mainGroupingArray = [];
let groupNumber = 1;
let count = 0;

for (let i = 0; i < 42; i++) {
  temparr.push(arr39[i]);
  count++;

  if (count === 5) {
    groupObj[`Group ${groupNumber}`] = temparr;
    mainGroupingArray.push(temparr);
    temparr = [];
    count = 0;
    groupNumber = groupNumber + 1;
  } else if (i === 41 && count !== 5) {
    groupObj[`Group ${groupNumber}`] = temparr;
    mainGroupingArray.push(temparr);
    temparr = [];
    count = 0;
    groupNumber = groupNumber + 1;
  }
}
let generateList = [];
let skipList = [190907, 190908, 190911];

for (let j = 0; j < 42; j++) {
  if (j !== 0 && j <= 9 && j > 9) {
    generateList.push(parseInt(`190901`));
  } else if (j <= 9 && j != 0) {
    generateList.push(parseInt(`19090${j}`));
  } else if (j > 9) {
    generateList.push(parseInt(`1909${j}`));
  }
}

// console.log(generateList);
const updatedList = generateList.filter((item) => !skipList.includes(item));
console.log("up", updatedList);

const Profile = () => {
  const classes = useStyles();
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Grid spacing={3} style={{ flexGrow: 1 }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            {mainGroupingArray.map((array, index) => (
              <Grid>
                <Card className={classes.root} variant="outlined">
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Group {index + 1}
                    </Typography>

                    {array.map((item, index) => (
                      <Typography variant="b" component="h4" key={index}>
                        {item}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Profile;
