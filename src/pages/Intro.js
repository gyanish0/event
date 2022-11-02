import React from 'react'
import food from '../img/food.jpg'
import wed from '../img/wed.jpg'
import bgHome from '../img/event.jpg'
import engagement from '../img/engagement_ceremony.jpg'

const Intro = () => {
    return (
        <div class="row mt-5">
            <div class="col-sm-6 mt-5">
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">Birthday party</h1>
                        <img class="logo img-fluid" src={food} />
                        <a href="#" class="btn btn-primary mt-2">Call Now</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 mt-5">
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">wedding planner </h1>
                        <img class="logo img-fluid" src={wed} />
                        <a href="#" class="btn btn-primary mt-2">Call Now</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 mt-5">
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">Event Organisers</h1>
                        <img class="logo img-fluid" src={bgHome} />
                        <a href="#" class="btn btn-primary mt-2">Call Now</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 mt-5">
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">engagement party</h1>
                        <img class="logo img-fluid" src={engagement} />
                        <a href="#" class="btn btn-primary mt-2">Call Now</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 mt-5">
                <iframe frameBorder="0" style={{ width: "100%", height: "100%"}} 
                src="https://www.google.com/maps/embed/v1/place?q=40.7127837,-74.0059413&amp;key=AIzaSyCc3zoz5TZaG3w2oF7IeR-fhxNXi8uywNk">
            </iframe>
            </div>
            <div class="col-sm-6 mt-5">
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">Address</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla nobis exercitationem qui dignissimos hic suscipit illum numquam cupiditate voluptates, in non quidem eaque doloribus quas officia! Odio sit eum eius.</p>
                         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla nobis exercitationem qui dignissimos hic suscipit illum numquam cupiditate voluptates, in non quidem eaque doloribus quas officia! Odio sit eum eius.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla nobis exercitationem qui dignissimos hic suscipit illum numquam cupiditate voluptates, in non quidem eaque doloribus quas officia! Odio sit eum eius.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Intro