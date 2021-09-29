import classes from "./Card.module.css";

const Card = (props) => {
  //    props.className allowing us to accept classes from our custom Component,
  //    and className propety can be any name of your choice
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
