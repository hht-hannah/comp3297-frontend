import React from "react";
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import "./header.css";


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 'home',
        };
    }


    handleClick = (e) => {
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <div className="header">

                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                    <div className="header-title"> HotZone </div>
                    <Menu.Item key="home">
                        <Link to="/">Home </Link>
                    </Menu.Item>
                    <Menu.Item key="patient" >Patient</Menu.Item>
                    <Menu.Item key="virus" >Virus</Menu.Item>
                    <Menu.Item key="case" >Case</Menu.Item>
                    <Menu.Item key="visit-record" >
                        <Link to="/visitrecord">Visit Record</Link>
                    </Menu.Item>
                    <Menu.Item key="location" >
                        <Link to="/location">Location </Link>
                    </Menu.Item>
                </Menu>

            </div>
        )
    }

}

export default Header