import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div className="col-md-5 col-12">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    <div></div>;
  }
}

function dateFormat(comment_date) {
  const date = new Date(comment_date);
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.toLocaleString("en-US", { day: "numeric" });
  const year = date.toLocaleString("en-US", { year: "numeric" });

  return `${month} ${day}, ${year}`;
}

function RenderComments({ comments }) {
  if (comments != null) {
    const comment = comments.map((c) => {
      return (
        <ul key={c.id} className="list-unstyled">
          <li>{c.comment}</li>
          <li>
            -- {c.author} , {dateFormat(c.date)}
          </li>
        </ul>
      );
    });

    return (
      <div className="col-md-5 col-12">
        <h4>Comments</h4>
        {comment}
      </div>
    );
  } else {
    <div></div>;
  }
}

const DishDetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row mb-3">
        <RenderDish dish={props.dish} />
        <RenderComments comments={props.comments} />
      </div>
    </div>
  );
};

export default DishDetail;
