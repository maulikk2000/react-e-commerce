import React, { useState } from "react";
import './directory.styles.scss';
import { ISection } from "../../interface/ISection";
import MenuItem from "../menu-item/menu-item.component";




const initialState = Array<ISection>(
    {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        linkUrl: "shop"
    },
    {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: "shop/jackets"
    },
    {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        linkUrl: "shop/sneakers"
    },
    {
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
        id: 4,
        linkUrl: "shop/womens"
    },
    {
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large",
        id: 5,
        linkUrl: "shop/mens"
    }
);

const Directory = () => {

    const [sections, setsections] = useState(initialState);

    return (
        <>
            {
                sections && (
                    <div className="directory-menu">
                        {sections.map((section, index) => (
                            <MenuItem section={section} key={index} ></MenuItem>
                        ))}
                    </div>)
            }
        </>

    )
}

export default Directory;