import React from "react";
import { Button, Row, Col } from "antd";
import "./visitRecord.css"


class VisitRecord extends React.Component {

    render() {
        return (
            <div className="visit-record-wrapper">
                <Row>
                    <h3 className="page-title"> Visit Record </h3>
                </Row>

                <Button className="add-visit-record-button" type="primary"> Add Visit Record </Button>
            </div>
        )
    }
}


export default VisitRecord;
