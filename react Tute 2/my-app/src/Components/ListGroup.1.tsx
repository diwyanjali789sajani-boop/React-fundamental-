import React, { useState } from 'react';

function ListGroup({ heading, items, onItemClick }) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return (
        <>
            <h3>{heading}</h3>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={`list-group-item ${selectedIndex === index ? 'active' : ''}`}
                        onClick={() => {
                            setSelectedIndex(index);
                            onItemClick?.(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}
