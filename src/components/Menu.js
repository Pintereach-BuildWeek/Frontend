import React from 'react';
// import '../css/menu.css';
import { Link } from 'react-router-dom';
import { Drawer, Button, Switch } from 'antd';

// import { articlesArray } from '../data';


export default function Menu(props) {

    const { articles, hideMenu, menuDisplay, showModal, filterMustRead } = props;

    const categories = articles
        .map(article => article.category)
        .reduce((acc, currValue) => {
            acc[currValue] ? acc[currValue]++ : acc[currValue] = 1;
            return acc;
        }, {});

    return (
        <div>
            <Drawer
                title="Menu"
                placement='left'
                closable={true}
                onClose={hideMenu}
                visible={menuDisplay.visible}
            >

                <Button onClick={() => {
                    hideMenu();
                    showModal();
                }}>Add Article</Button>
                <div className='categories'>
                    <h3>Categories</h3>
                    {
                        Object.keys(categories).sort().map(category => {
                            return (
                                <Link to={category}>
                                    <p>{category}: {categories[category]}</p>
                                </Link>
                            );
                        })
                    }
                </div>
                <div className='options'>
                    <h3>Options</h3>
                    <h4>Must Read Only</h4>
                    <Switch defaultUnChecked onChange={filterMustRead} />

                </div>

            </Drawer>
        </div>
    );
}

{/* <div className='apptitle'>
                    <h1>Pintereach</h1>
                    <button onClick={closeMenu}>Close</button>
                </div>
                <button id='add-link' onClick={() => {
                    closeMenu();
                    addLink();
                }}>Add a Link</button>
                <div className='categories'>
                    <h3>Categories</h3>
                    {
                        Object.keys(categories).sort().map(category => {
                            return (
                                <Link to={category}>
                                    <p>{category}: {categories[category]}</p>
                                </Link>
                            );
                        })
                    }
                </div>
                <div className='options'>
                    <h3>Options</h3>
                    <div>
                        <p>Show Must Read only</p>
                        <button>On/Off</button>
                    </div>
                </div> */}