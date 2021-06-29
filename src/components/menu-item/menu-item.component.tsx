import React, { FC } from "react";
import './menu-item.styles.scss';
import { ISection } from "../../interface/ISection";

interface IMenuItemProps {
    section: ISection;
}


const MenuItem: FC<IMenuItemProps> = ({ section }) => {
    // return <></>
    return (
        <div className={`${section.size} menu-item`}>
            <div className='background-image' style={{ backgroundImage: `url(${section.imageUrl})` }}></div>
            <div className='content'>
                <h1 className='title'>{section.title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;
