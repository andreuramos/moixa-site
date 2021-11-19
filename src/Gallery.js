import {Component} from "react";
import "./Gallery.css";
import {Carousel} from "react-bootstrap";

export default class Gallery extends Component {
    render() {
        return (
            <section>
                <Carousel>
                    <Carousel.Item className="w-100">
                        <img
                            className="d-block w-100"
                            src="home-picture-1.JPG"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="w-100">
                        <img
                            className="d-block w-100"
                            src="home-picture-2.JPG"
                        />
                    </Carousel.Item>
                </Carousel>
            </section>
        )
    }
}
