import { makeStyles } from "@material-ui/core";
import ServiceSection from "./serviceSection.component";
import DATA from "../utils/services.data";
const Services = () => {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.heading}> OUR SERVICES </h2>
      {DATA.map((data) => (
        <ServiceSection key={data.id} DATA={data} />
      ))}
    </div>
  );
};

export default Services;

const useStyles = makeStyles((theme) => ({
  heading: {
    color: "rgba(219,22,47)",
    textAlign: "center",
    fontWeight: "1800",
    fontSize: "4rem",
    fontFamily: "system-ui",
  },
}));
