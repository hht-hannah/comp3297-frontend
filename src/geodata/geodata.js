import React from "react";
import { message, Col, Row, Input, List, Button } from "antd";
import { searchGeodata, addGeodata } from '../service/service';
import './geodata.css';

const { Search } = Input;

class GeoData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: "",
            searchResult: [],
        }
    }

    onSearch = async () => {
        if (this.state.inputValue === "") {
            message.error('Please input the place you want to search.');
            return;
        }
        let result = await searchGeodata(this.state.inputValue);
        this.setState({
            searchResult: result.data
        })
    }

    addGeodata = async (value) => {
        let res = await addGeodata(value);
        console.log(res)
        if (res.status === 201) {
            message.success('The selected location has been added.')
            this.setState({
                inputValue: "",
                searchResult: [],
            })
        }
    }

    setInputValue = (value) => {
        this.setState({
            inputValue: value
        })
    }

    render() {
        return (
            <div>
                <Row className="geodata-wrapper">
                    <Col span={6} />
                    <Col span={12}>
                        <Search
                            value={this.state.inputValue}
                            onChange={(e) => this.setInputValue(e.target.value)}
                            placeholder="Type the place you want to search"
                            allowClear
                            enterButton="Search"
                            size="large"
                            onSearch={this.onSearch}
                        />
                    </Col>
                    <Col span={6} />
                </Row>
                <Row>
                    <Col span={4}></Col>
                    <Col span={16}>
                        <List
                            header={<div className="search-result-header">Search Result</div>}
                            pagination={{
                                pageSize: 6,
                            }}
                            bordered
                            dataSource={this.state.searchResult}
                            renderItem={item => (
                                <List.Item
                                    className="search-result-item"
                                    actions={[
                                        <Button onClick={() => {
                                            this.addGeodata(item)
                                        }}>select
                                </Button>
                                    ]}>
                                    <div>
                                        <Row className="search-result-item-name">{item.nameEN} - {item.nameZH} </Row>
                                        <Row className="search-result-item-addressEN">{item.addressEN} </Row>
                                        <Row className="search-result-item-addressZH">{item.addressZH} </Row>
                                        <Row className="search-result-item-xy">x: {item.x}  y: {item.y} </Row>
                                    </div>
                                </List.Item>
                            )}
                        />
                    </Col>
                    <Col span={4}></Col>

                </Row>


            </div>
        )
    }
}


export default GeoData;
