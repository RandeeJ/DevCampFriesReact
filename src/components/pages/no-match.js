import React from "react";
import { Link } from "react-router-dom";

export default function() {
    return (
        <div>
            <h2>
                We're sorry - this page does not exist!
            </h2>

            <Link to="/"> Return Home</Link>
        </div>
    )
}