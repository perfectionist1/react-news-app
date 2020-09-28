import React from 'react';
import { Button, Card, Jumbotron } from 'react-bootstrap';

const Header = () => {
    return (
        <Jumbotron>
            <Card>
                <Card.Header>All News Headlines Over Here</Card.Header>
                <Card.Body>
                    <Card.Title>Special News</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">See Other News</Button>
                </Card.Body>
            </Card>
        </Jumbotron>
    );
};

export default Header;