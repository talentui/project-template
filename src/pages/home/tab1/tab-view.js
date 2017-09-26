import React from "react";
import { Link } from "react-router-dom";
export default function Tab1(props) {
    return <div>
        <div>tab1</div>
        <div>
            <div>
                <Link to='/home/~/tab1/tab3'>Tab3</Link>
                <Link to='/home/~/tab1/tab4'>Tab4</Link>
            </div>
            <div>{props.children}</div>
        </div>
    </div>;
}
