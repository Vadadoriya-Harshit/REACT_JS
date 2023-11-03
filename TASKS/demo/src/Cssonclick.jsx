import React, { useState } from 'react';

function NavMenu() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const menuItems = ['Home', 'About', 'Contact us', 'Blog', 'News'];

    return (
        <nav>
            <ul id="ul">
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => handleItemClick(item)}
                        style={{
                            display: 'inline',
                            padding: '20px',
                            cursor: 'pointer',
                            transition: 'background 2s ease, color 2s ease', // Apply the transition here
                            background: selectedItem === item ? 'red' : 'unset',
                            color: selectedItem === item ? 'white' : 'black',
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavMenu;
