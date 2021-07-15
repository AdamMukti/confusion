import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
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

  dateFormat(comment_date) {
    const date = new Date(comment_date);
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.toLocaleString("en-US", { day: "numeric" });
    const year = date.toLocaleString("en-US", { year: "numeric" });

    return `${month} ${day}, ${year}`;
  }

  renderComment(comments) {
    if (comments != null) {
      const comment = comments.comments.map((c) => {
        return (
          <ul key={c.id} className="list-unstyled">
            <li>{c.comment}</li>
            <li>
              -- {c.author} , {this.dateFormat(c.date)}
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
  render() {
    return (
      <div className="row">
        {this.renderDish(this.props.dishDetail)}
        {this.renderComment(this.props.dishDetail)}
      </div>
    );
  }
}

export default DishDetail;
