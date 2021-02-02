import { makeStyles } from "@material-ui/core";
import "../styles/serviceSection.styles.scss";

const ServiceSection = ({ DATA }) => {
  const classes = useStyles();
  return (
    <div className="section-container">
      <div className="section">
        <div className={DATA.id % 2 === 0 ? "right" : "left"}>
          <img src={DATA.imageUrl} alt="logo" className={classes.svg} />
        </div>
        <div className={DATA.id % 2 === 0 ? "left" : "right"}>
          <h6 className={classes.subheading}>{DATA.heading}</h6>
          <p className={classes.description}>{DATA.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

const useStyles = makeStyles({
  svg: {
    maxWidth: "100%",
    maxHeight: "300px",
  },
  subheading: {
    textAlign: "center",
    fontWeight: "2000",
    fontSize: "2.3rem",
    fontFamily: "system-ui",
  },
  description: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "1.2rem",
    padding: "5px 10px",
  },
});
