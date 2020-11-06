import React from "react";
import { Col, Row, Input } from "antd";


class Login extends React.Component {

    render() {
        return (
            <div className="login-wrapper">
                <Row>
                    <Col span={6} />
                    <Col span={12}>
                        <Input placeholder="Username" />
                        <Input placeholder="Password" />
                    </Col>
                    <Col span={6} />
                </Row>

            </div>
        )
    }
}


export default Login;
