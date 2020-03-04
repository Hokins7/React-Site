import React, { Component } from 'react';
import RRC from '../assets/wrr_logo_green340x340.png';
import ARC from '../assets/s8009nj6oulzia7j.jpeg';
import WRR from '../assets/animal-rescue.jpg';
import Rescue1 from '../assets/animal-rescue2.jpg';
import Rescue2 from '../assets/animal-rescue3.jpg';
import Rescue3 from '../assets/animal-rescue4.jpg';

class HomeContent extends Component {
    render() {
        return (
            <div className="container">
                <div class="row MainAbout">
                    <div class="col-lg-4">
                        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src={RRC} alt="img" />
                        <h2>Rescue & Rehab Center for Pets</h2>
                        <p>We are managing the word largest and longest observational study into feeding dogs and cats a raw food diet.</p>
                        <p><a class="btn btn-secondary" href="https://llprf.org/" role="button">More details</a></p>
                    </div>
                    <div class="col-lg-4">
                    <img class="bd-placeholder-img rounded-circle" width="140" height="140" src={ARC} alt="img"/>
                        <h2>Animal Rescue Charity</h2>
                        <p>We work in some of the most challenging areas of the world to relieve immediate suffering and create lasting change.  Find out more about Brooke's history here.</p>
                        <p><a class="btn btn-secondary" href="https://www.thebrooke.org/" role="button">More details</a></p>
                    </div>
                    <div class="col-lg-4">
                    <img class="bd-placeholder-img rounded-circle" width="140" height="140" src={WRR} alt="img"/>
                        <h2>Wildlife Rescue and Release</h2>
                        <p>We are guided and inspired by a shared vision of a healthy ocean for marine mammals and humans alike</p>
                        <p><a class="btn btn-secondary" href="https://www.marinemammalcenter.org/" role="button">More details</a></p>
                    </div>
                </div><hr className="hr"/>

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading">We rescue pets from shelters facing euthanasia. <span class="text-muted">We apply ONLY natural healing modalities and strategies.</span></h2>
                        <p class="lead">By using natural modalities, we are confident that we can save many animals with a severely compromised immune system. When these animals are put on conventional treatment plans, the outcome is in many cases not promising. The side effects of the medication further compromise their immune system. That leaves them vulnerable to pathogens they cannot fight. </p>
                    </div>
                    <div class="col-md-5">
                        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={Rescue1} alt="img"/>
                    </div>
                </div><hr className="hr" />

                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading">We work with owners, communities and policy makers. <span class="text-muted">We use our expertise to train and support owners of horses, donkeys and mules.</span></h2>
                        <p class="lead">We believe that animal suffering is preventable and that good animal welfare protects human livelihoods. For 600 million people in some of the poorest places in the world, 100 million of these animals are the backbone of communities and their best means of making a living. Without healthy working horses, donkeys and mules, they wouldn’t be able to put food on their tables, send their children to school or build better futures for themselves and their families.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={Rescue2} alt="img"/>
                    </div>
                </div><hr className="hr"/>

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading">To advance our mission, we focus our work in three key program areas: <span class="text-muted">Animal Care, Scientific Research, Education</span></h2>
                        <p class="lead">The ocean is in trouble. From the depletion of fish stocks to increasing ocean temperatures, human activity threatens marine ecosystems that are vital to the health of our ocean and all life on earth.</p>
                    </div>
                    <div class="col-md-5">
                    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={Rescue3} alt="img"/>
                    </div>
                </div><hr className="hr"/>

            </div>
        );
    }
}

export default HomeContent;