import React, { useState } from 'react';

export default function Atmosph() {
    const [region, setRegion] = useState(null)

    const RenderTextField = (props) => {
        const { name, placeholder } = props;
        return (
            <div className="col">
                <label for="exampleFormControlInput1" class="form-label">{name}</label>
                <input type="text" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder={placeholder}/>
            </div>
        )
    }

    return (
        <div className="container card my-2">
            <div className="card-body">
                <label className="card-title form-label" for="exampleFormControlInput1">Atmosph</label>
            <hr />
                <div className="row">
                    <RenderTextField name="City" placeholder="City name"/>
                    <RenderTextField name="Country" placeholder="Country name"/>
                    <div className="col">
                        <select className="form-select form-select-sm">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}