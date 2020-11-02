import React from "react";
import { Col, Row, Input } from "antd";


class GeoData extends React.Component {
    onSearch = () => {

    }

    render() {
        return (
            <div>
                <Row className="geodata-wrapper">
                    <Row>
                        <Col span={6} />
                        <Col span={12}>
                            <Input placeholder="Username" />
                            <Input placeholder="Password" />
                        </Col>
                        <Col span={6} />
                    </Row>
                </Row>


            </div>
        )
    }
}


export default GeoData;
