import React, { Component } from 'react';

import { s3BucketName } from './../config.json'

class menusSection extends Component {
    state = {
        images: [
            {
                image: s3BucketName + '1.jpg',
                description: 'Polas ceil view'
            }, {
                image: s3BucketName + '2.jpg',
                description: 'Polas top view'
            }, {
                image: s3BucketName + '3.jpg',
                description: 'Cycling man architecture'
            }, {
                image: s3BucketName + '4.jpg',
                description: 'Polas top road view dining'
            }, {
                image: s3BucketName + '5.jpg',
                description: 'Colourful cups'
            }, {
                image: s3BucketName + '6.jpg',
                description: 'Polas ship themed house'
            }, {
                image: s3BucketName + '7.jpg',
                description: 'Lemon tea'
            }, {
                image: s3BucketName + '8.jpg',
                description: 'Sizzling brownie'
            }, {
                image: s3BucketName + '9.jpg',
                description: 'Dhaba Cafe'
            }, {
                image: s3BucketName + '10.jpg',
                description: 'Nirvana'
            }, {
                image: s3BucketName + '11.jpg',
                description: 'Taste of Rajwada'
            }, {
                image: s3BucketName + '12.jpg',
                description: 'Thancos natural icecream'
            }, {
                image: s3BucketName + '13.jpg',
                description: 'U.S. Pizza'
            }, {
                image: s3BucketName + '14.jpg',
                description: 'Ship themed room inner view'
            }, {
                image: s3BucketName + '15.jpg',
                description: 'Pola view from roof'
            }, {
                image: s3BucketName + '16.jpg',
                description: 'U.S. Pizza'
            }, {
                image: s3BucketName + '17.jpg',
                description: 'Oreo icecreame'
            }, {
                image: s3BucketName + '18.jpg',
                description: 'U.S. Pizza'
            }, {
                image: s3BucketName + '19.jpg',
                description: 'Polas seating arrangement'
            }, {
                image: s3BucketName + '20.jpg',
                description: 'Product show at Polas'
            }, {
                image: s3BucketName + '21.jpg',
                description: 'Ship themed house'
            }, {
                image: s3BucketName + '22.jpg',
                description: 'Empty space for parties'
            },
        ],
    }

    getRandomImage() {
        const arr = this.state.images;
        const randomIndex = Math.floor(Math.random() * arr.length);

        return arr[randomIndex];
    }

    render() {
        const img1 = this.getRandomImage(), img2 = this.getRandomImage(), img3 = this.getRandomImage(), img4 = this.getRandomImage(), img5 = this.getRandomImage(), 
        img6 = this.getRandomImage(), img7 = this.getRandomImage(), img8 = this.getRandomImage();

        return ( 
            <React.Fragment>
                <section className="section-menus" id="gallery">
                    <ul className="menus-showcase">
                        <li>
                            <figure className="menu-photo">
                                <img src={img1.image} alt={img1.description} />
                            </figure>
                        </li>
                        <li>
                            <figure className="menu-photo">
                                <img src={img2.image} alt={img2.description} />
                            </figure>
                        </li>
                        <li>
                            <figure className="menu-photo">
                                <img src={img3.image} alt={img3.description} />
                            </figure>
                        </li>
                        <li>
                            <figure className="menu-photo">
                                <img src={img4.image} alt={img4.description} />
                            </figure>
                        </li>
                    </ul>
                    <ul className="menus-showcase">
                        <li>
                            <figure className="menu-photo">
                                <img src={img5.image} alt={img5.description} />
                            </figure>
                        </li>
                        <li>
                            <figure className="menu-photo">
                                <img src={img6.image} alt={img6.description} />
                            </figure>
                        </li>
                        <li>
                            <figure className="menu-photo">
                                <img src={img7.image} alt={img7.description} />
                            </figure>
                        </li>
                        <li>
                            <figure className="menu-photo">
                                <img src={img8.image} alt={img8.description} />
                            </figure>
                        </li>
                    </ul>
                </section>
            </React.Fragment>
        );
    }
}
 
export default menusSection;