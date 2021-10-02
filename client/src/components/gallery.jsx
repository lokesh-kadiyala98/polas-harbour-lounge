import React, { Component } from 'react';

import { s3BucketName } from './../config.json'

class menusSection extends Component {

    constructor() {
        super()

        this.images = []
    }

    state = {
        images: [
            {
                image: `${s3BucketName}/1.jpg`,
                description: 'Polas ceil view',
                selected: false
            }, {
                image: `${s3BucketName}/2.jpg`,
                description: 'Polas top view',
                selected: false
            }, {
                image: `${s3BucketName}/3.jpg`,
                description: 'Cycling man architecture',
                selected: false
            }, {
                image: `${s3BucketName}/4.jpg`,
                description: 'Polas top road view dining',
                selected: false
            }, {
                image: `${s3BucketName}/5.jpg`,
                description: 'Colourful cups',
                selected: false
            }, {
                image: `${s3BucketName}/6.jpg`,
                description: 'Polas ship themed house',
                selected: false
            }, {
                image: `${s3BucketName}/7.jpg`,
                description: 'Lemon tea',
                selected: false
            }, {
                image: `${s3BucketName}/8.jpg`,
                description: 'Sizzling brownie',
                selected: false
            }, {
                image: `${s3BucketName}/9.jpg`,
                description: 'Dhaba Cafe',
                selected: false
            }, {
                image: `${s3BucketName}/10.jpg`,
                description: 'Nirvana',
                selected: false
            }, {
                image: `${s3BucketName}/11.jpg`,
                description: 'Taste of Rajwada',
                selected: false
            }, {
                image: `${s3BucketName}/12.jpg`,
                description: 'Thancos natural icecream',
                selected: false
            }, {
                image: `${s3BucketName}/13.jpg`,
                description: 'U.S. Pizza',
                selected: false
            }, {
                image: `${s3BucketName}/14.jpg`,
                description: 'Ship themed room inner view',
                selected: false
            }, {
                image: `${s3BucketName}/15.jpg`,
                description: 'Pola view from roof',
                selected: false
            }, {
                image: `${s3BucketName}/16.jpg`,
                description: 'U.S. Pizza',
                selected: false
            }, {
                image: `${s3BucketName}/17.jpg`,
                description: 'Oreo icecreame',
                selected: false
            }, {
                image: `${s3BucketName}/18.jpg`,
                description: 'U.S. Pizza',
                selected: false
            }, {
                image: `${s3BucketName}/19.jpg`,
                description: 'Polas seating arrangement',
                selected: false
            }, {
                image: `${s3BucketName}/20.jpg`,
                description: 'Product show at Polas',
                selected: false
            }, {
                image: `${s3BucketName}/21.jpg`,
                description: 'Ship themed house',
                selected: false
            }, {
                image: `${s3BucketName}/22.jpg`,
                description: 'Empty space for parties',
                selected: false
            },
        ],
    }

    componentDidMount() {
        const images = JSON.parse(JSON.stringify(this.state.images))

        for(let i=0; i<8; i++) {
            let randomIndex = this.getRandomIndex()
            
            while (images[randomIndex].selected) {
                randomIndex = this.getRandomIndex()
            }

            this.images[i] = images[randomIndex]

            images[randomIndex].selected = true
            this.setState({ images })
        }

    }

    getRandomIndex() {
        const { images } = this.state
        
        const randomIndex = Math.floor(Math.random() * images.length)

        return randomIndex
    }

    render() {
        return ( 
            <section className="section-menus" id="gallery">
                <ul className="menus-showcase">
                    {this.images.map((img, key) =>
                        <li key={key}>
                            <figure className="menu-photo">
                                <img src={img.image} alt={img.description} />
                            </figure>
                        </li>
                    )}
                    
                </ul>
            </section>
        );
    }
}
 
export default menusSection;