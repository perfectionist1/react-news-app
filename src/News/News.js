import React from 'react';
import { Button, Card } from 'react-bootstrap';

const News = (props) => {
    //console.log(props.article);
    const {author, title, description, content, urlToImage} = props.article;
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-5">
                    <Card>
                        <Card.Header>{description} </Card.Header>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {content}
                            </Card.Text>
                            <Button variant="primary">See Other News</Button>
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
        </div>
    );
};

export default News;