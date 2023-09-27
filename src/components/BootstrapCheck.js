import React from 'react';
import {Alert, Breadcrumb, BreadcrumbItem, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
function BootstrapCheck(props) {
    return (
        <div>
                <Breadcrumb>
                    <BreadcrumbItem></BreadcrumbItem>
                </Breadcrumb>
            <Alert variant="primary" dismissible>this is a button</Alert>
            <Button>test button</Button>
        </div>
    );
}

export default BootstrapCheck;