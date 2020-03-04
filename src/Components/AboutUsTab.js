import React, { Component } from 'react';
import { Row, Col, Nav, Container, Tab, Image } from 'react-bootstrap';
import OurTeam1 from '../assets/4.jpg';
import OurTeam2 from '../assets/5.jpg';
import Donkey from '../assets/delhi slum.jpg';
import Dorothy from '../assets/dorothy-brooke-col.jpg';
import ShelterDog from '../assets/shelterdog.jpg';
import Monkey from '../assets/h4.jpg';
import Dog from '../assets/h1.jpg';
import Fr1 from '../assets/zoo1.jpg';
import Fr2 from '../assets/zoo2.jpg';
import Fr3 from '../assets/zoo3.jpg';
import Fr4 from '../assets/zoo4.jpg';
import Fr5 from '../assets/zoo5.jpg';
import Fr6 from '../assets/zoo6.jpg';
import Fr7 from '../assets/zoo7.jpg';
import Fr8 from '../assets/zoo8.jpg';
import Fr9 from '../assets/zoo9.jpg';
import Fr10 from '../assets/zoo10.jpg';
import Fr11 from '../assets/zoo11.jpg';
import Fr12 from '../assets/zoo12.jpg';


class AboutUsTab extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Our Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">What we Do?</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="thirt">Our Mission</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="four">You can help Us</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="five">Our Family</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9} className="flex-column">
                            <Tab.Content >
                                <Tab.Pane eventKey="first">
                                    <h3 className="first-text">Frank, Clark and Michael with our newly minted little friends</h3>
                                    <img src={OurTeam1} className="img-thumbnail" alt="img"></img>
                                    <img src={OurTeam2} className="img-thumbnail" alt="img"></img>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <h2>The greatness and moral progress of a nation can be measured by how animals are treated in this nation.</h2>
                                    <h2> - Mahatma Gandhi</h2>
                                    <br />
                                    <p>
                                        We believe that animal suffering is preventable and that good animal welfare protects human livelihoods. For 600 million
                                        people in some of the poorest places in the world, 100 million of these animals are the backbone of communities and their
                                        best means of making a living. Without healthy working horses, donkeys and mules, they wouldn’t be able to put food on their
                                        tables, send their children to school or build better futures for themselves and their families.
                                    </p>
                                    <img src={Donkey} className="img-thumbnail" alt="img"></img>
                                    <p>Horses and donkeys collecting rubbish in a New Delhi slum, India</p>
                                    <hr />
                                    <p>
                                        We work with owners, communities and policy makers to bring about lasting improvements to the lives of working animals. Brooke
                                        works hard to deliver significant and lasting change, even in some of the world’s most challenging areas. We use our expertise
                                        to train and support owners of horses, donkeys and mules, local vets, farriers, harness makers and animal traders to improve standards
                                        of care.
                                    </p>
                                    <h3>1934: BROOKE'S BEGINNINGS</h3>
                                    <img src={Dorothy} className="img-thumbnail dorothy" alt="img"></img>
                                   
                                        <p>
                                            On arrival in Egypt in 1930, Dorothy Brooke, the wife of a British cavalry officer, sought out the former war horses that had been
                                            put to work in Cairo and beyond when the conflict ended in 1918. Her pleas in a letter to the editor of the then Morning Post
                                            (now The Telegraph) were heard, and with help from the British public, Dorothy raised enough money to buy back 5,000 of the horses.
                                             She then went on to set up a free veterinary clinic in Cairo in 1934 – the Old War Horse Memorial Hospital – and so Brooke's work began.
                                             In order to sustainably improve equine welfare we recognise the complex interaction between the equine, the equine owning
                                             communities, and the system within which they co-exist. We believe that change to human behaviour needs to happen at all
                                             levels in order achieve transformational change for the equines and the communities that rely on them for their livelihoods.
                                         </p>                                   
                                    <h3>How Our Wildlife Rescue Works</h3>
                                    <p>
                                        Once a rescued marine mammal has been brought to our center, we provide the animal with medical attention and care during its
                                        recuperation period. We operate much like a human or domestic animal hospital in treating our patients. However, marine mammals
                                        have unique adaptations to life at sea that present challenges which require special medical care.
                                        For example, pinnipeds have a thick blubber layer that rejects many suture materials, and surgery is complicated due to their dive
                                        reflex, which causes their heart rate to slow, their breathing to stop, and their blood to pool centrally during anesthesia.
                                        Husbandry is the core of our rehabilitation efforts – this includes nutrition, handling techniques, hygiene and sanitation, housing,
                                         disease prevention, and stress reduction. Volunteers help us with many aspects of our rehabilitation and release efforts, including
                                         much of the day-to-day care of the animals.
                                        We constantly refine our protocols in order to provide the highest level of care possible for the animals while they receive medical
                                        attention and recuperate.
                                        Maintaining the animals' wildness and reducing the stress they experience is an integral part of our work. The animals are not used
                                        to interacting with humans, and we want to be able to eventually return them to their habitat with their instincts and abilities intact.
                                        Our patients include include pinnipeds like California sea lions, northern elephant seals and harbor seals, as well as sea otters,
                                        whales, dolphins, porpoises, and even sea turtles. We may have dozens of patients on site at any given time in various stages of
                                        treatment or rehabilitation.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="thirt">
                                    <h2>Do not leave animals ... I ask you, they are the most devoted and love you no matter who you are or how much money you have.</h2>
                                    <h2> - Elchin Safarli</h2>
                                    <br />
                                    <p><img src={ShelterDog} className="img-thumbnail leftside" alt="img"></img>
                                        Helping Paws Rescue is a volunteer based organization serving the greater Bay Area, dedicated to saving homeless and abandoned dogs
                                        from over crowded animal shelters. We also help dogs from other areas that have compelling situations where they are in danger of
                                        abuse, neglect or euthanasia. Rocket Dog Rescue places dogs into temporary foster homes where they are socialized, spayed/neutered,
                                        vaccinated, and treated for any medical or behavioral conditions limiting their adoptability. RDR actively searches for permanent
                                        homes for its foster dogs by producing and distributing photo-biographic posters, by hosting an actively updated website and by
                                        organizing mobile adoption fairs and special events that provide exposure to potential adopters. Rocket Dog Rescue also provides
                                        assistance to individuals and animal rescue groups fostering dogs in need of permanent new homes.
                                        Founded in 2001, Rocket Dog Rescue’s ultimate goal is to create a world where all companion animals have loving and permanent homes
                                        and where no good natured dogs, no matter what their age, are killed in shelters because they are considered to be surplus or
                                        un-adoptable.
                                    </p><br /><br />
                                    <p>
                                        <i>Helping Paws Rescue is devoted to saving abused and unwanted dogs from euthanasia in high-kill shelters.  While we are a volunteer-based
                                         organization and believe that people can make their own choices in food, we have adopted the following policy:  donor money will only
                                          be used to purchase vegetarian fare.  As well, RDR will highly encourage food donations to adoption and fund-raising events to be
                                          vegetarian.”</i>
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="four">
                                    <h2>If the soul is the ability to love, be faithful and grateful, then animals possess it to a greater extent than many people.</h2>
                                    <h2> - James Herriot</h2><br /><br />
                                    <img src={Monkey} className="img-thumbnail monkey " alt="img"></img><br /><br />
                                    <h3>Contribute to a better world for animals!</h3>
                                    <p>
                                        Here at FOUR PAWS, we rely on donations from kind supporters such as yourself in order to fund our projects focused on animal rescue and welfare.
                                        We have various projects and campaigns such as:
                                    </p>
                                    <ul>
                                        <li>FOUR PAWS Sanctuaries and support for local shelters that accommodate and pro-actively take care of rescued animals.</li>
                                        <li>Emergency Disaster Relief campaigns, such as our recent campaign for the lions in Sudan.</li>
                                        <li>Campaigns for animal rights & welfare issues, such as our campaign against the Dog and Cat Meat Trade Industry in Southeast Asia and our campaign for the bile bears in Vietnam.</li>
                                        <li>Castration & Vaccination programs such as our project in Silk Island for the wellbeing of stray animals.</li>
                                    </ul>
                                    <p>
                                        Additionally, we have many other active projects such as undercover investigations, campaigns against fur and the tiger trade industry. All our campaigns have one thing in
                                        common, which is adhering to our 3 important values: reveal, rescue & protect. Please have a look at our campaign page for our current projects.
                                    </p>
                                    <p>
                                        It is your donation that enables us to actively keep campaigning for animals in need and improving animal welfare standards worldwide. Specifically, you can see how your donation
                                        contributes towards the betterment and welfare of animals below:
                                    </p>
                                    <ul>
                                        <li>€ 10 provides appropriate nutrition for a rescued bear for a day.</li>
                                        <li>€ 35 provides for adequate medical care, vaccination and neutering of a stray.</li>
                                        <li>€ 90 contributes to one week of special milk formula for lion cubs.</li>
                                        <li>A generous donation of € 150 finances all monthly costs of caring and nurturing of an orphaned orangutan.</li>
                                    </ul>
                                    <p>On behalf of the animals, the FOUR PAWS team would like to thank you for making a difference!</p>
                                    <p>Follow us on <a href="https://www.facebook.com/fourpaws.org/">Facebook</a> and sign up for our newsletter to stay up to date on our work!</p><br />
                                    <img src={Dog} className="img-thumbnail monkey " alt="img"></img>
                                </Tab.Pane>

                                <Tab.Pane eventKey="five">
                                    <Row>
                                        <Col xs={6} md={4} className="galary">
                                            <Image src={Fr1} roundedCircle width="100%" />
                                            <h4>Samuel</h4>
                                        </Col>
                                        <Col xs={6} md={4} className="galary">
                                            <Image src={Fr2} roundedCircle width="100%" />
                                            <h4>Misty</h4>
                                        </Col>
                                        <Col xs={6} md={4} className="galary">
                                            <Image src={Fr3} roundedCircle width="100%" />
                                            <h4>Shadow</h4>
                                        </Col>
                                    </Row><br/>

                                    <Row>
                                        <Col xs={6} md={4} className="galary">
                                            <Image src={Fr4} roundedCircle width="100%" />
                                            <h4>Corky</h4>
                                        </Col>
                                        <Col xs={6} md={4} className="galary">
                                            <Image src={Fr5} roundedCircle width="100%" />
                                            <h4>Artie</h4>
                                        </Col>
                                        <Col xs={6} md={4} className="galary">
                                            <Image src={Fr6} roundedCircle width="100%" />
                                            <h4>Barrett</h4>
                                        </Col>
                                    </Row><br/>

                                    <Row>
                                        <Col xs={6} md={4} className="galary">
                                            <Image src={Fr7} roundedCircle width="100%" />
                                            <h4>Artii</h4>
                                        </Col>
                                        <Col xs={6} md={4} className="galary">
                                            <Image src={Fr8} roundedCircle width="100%" />
                                            <h4>Tyson</h4>
                                        </Col>
                                        <Col xs={6} md={4} className="galary">
                                            <Image src={Fr9} roundedCircle width="100%" />
                                            <h4>Fury</h4>
                                        </Col>
                                    </Row><br/>

                                    <Row>
                                        <Col xs={6} md={4} className="galary">
                                            <Image src={Fr10} roundedCircle width="100%" />
                                            <h4>Bernadette</h4>
                                        </Col>
                                        <Col xs={6} md={4} className="galary">
                                            <Image src={Fr11} roundedCircle width="100%" />
                                            <h4>Orsola</h4>
                                        </Col>
                                        <Col xs={6} md={4} className="galary">
                                            <Image src={Fr12} roundedCircle width="100%" />
                                            <h4>Nita</h4>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>

                </Tab.Container>

            </Container>
        );
    }
}

export default AboutUsTab;