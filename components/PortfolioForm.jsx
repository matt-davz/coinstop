import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPortfolio } from "../redux/portfolioSlice";

const PortfolioForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPortfolio({ name, description, image }));
        setName("");
        setDescription("");
        setImage("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Description:
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                Image:
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
            </label>
            <button type="submit">Add Portfolio</button>
        </form>
    );
};

export default PortfolioForm;
