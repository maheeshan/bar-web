import React from 'react';
import BarMenuItem from "../bar-menu-item/bar-menu-item";
import './menu-page.css'

export type MenuPageProps = {}

export default function MenuPage({}: MenuPageProps) {
  const items = [
    'item1', "item2", "item3", "item1", "item3", "item1", "item3", "item1", "item3", "item1", "item3"
  ]
  return (
    <div className="menu-page section" id={"menu-page"}>
      <h1>Menu Page</h1>
      <div className={"menu-items"}>
        {items.map(item => {
          return (<BarMenuItem key={item}/>)
        })}
      </div>
    </div>
  );
}
