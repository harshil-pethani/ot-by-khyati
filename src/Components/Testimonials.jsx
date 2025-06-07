import Carousel from 'react-bootstrap/Carousel';
import { Element } from 'react-scroll';

const Testimonials = () => {
    return (
        <Element name="testimonials" className="testimonial-component">
            <h1 className="testimonial-title">What People Says</h1>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <div className="carouselSlide">
                        <br /><br />
                        <h1 className='title'>
                            The best pediatric care in town!
                        </h1>
                        <p className="description">
                            Dr. Emily Johnson has been a blessing for our family! She is not only highly knowledgeable but also incredibly gentle and patient with my little one. My son used to dread doctor visits, but now he looks forward to seeing Dr. Johnson. Highly recommend her to all parents!
                        </p>
                        <h1 className='author'>
                            — Emily R., mother of an 8-year-old
                        </h1>
                        <br /><br />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carouselSlide">
                        <br /><br />
                        <h1 className='title'>
                            A doctor who truly cares!
                        </h1>
                        <p className="description">
                            We’ve been visiting Dr. Ryan Matthews for over two years now, and I can’t express how grateful I am for his care. He takes the time to explain everything and ensures that both parents and kids are comfortable. He truly goes above and beyond!
                        </p>
                        <h1 className="author">
                            — Priya M., mother of a 1-year-old
                        </h1>
                        <br /><br />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carouselSlide">
                        <br /><br />
                        <h1 className='title'>
                            No more fear of doctor visits!
                        </h1>
                        <p className="description">
                            Dr. Sophia Carter is the best! She’s always so kind, and her staff is incredibly friendly. My daughter had a fear of needles, but Dr. Carter handled it so skillfully that now she isn’t scared anymore. Thank you, Dr. Carter!
                        </p>
                        <h1 className="author">
                            — Jonathan L., father of 3-year-old twins
                        </h1>
                        <br /><br />
                    </div>
                </Carousel.Item>
            </Carousel>
        </Element>
    )
}

export default Testimonials
