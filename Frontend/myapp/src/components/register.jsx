import React, { useState } from "react";
import UserImage from './img/user.png';
import Joi, { ref } from 'joi-browser';

// const BaseJoi = require('joi')
// const ImageExtension = require('joi-image-extension')
// const Joi = BaseJoi.extend(ImageExtension)

const Register = () => {
    const [user, setUser] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        state: "",
        city: "",
        gender: "",
        profession: "",
        profileImage: UserImage

    });

    const [errors, setErrors] = useState();

    const schema = Joi.object({
        username: Joi.string().required(),
        name: Joi.string().required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),
        password: Joi.string()
            .regex(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .required(),
        passwordConfirmation: Joi.ref("password"),
        state: Joi.string().required(),
        city: Joi.string().required(),
        gender: Joi.string().required(),
        profession: Joi.string().required(),
        profileImage: Joi.string()
    })

    const handleChange = (event) => {
        console.log(event.target.name + " : " + event.target.value);
        let tempUser = { ...user };
        tempUser[event.target.name] = event.target.value;
        setUser(tempUser);
    }

    // Step3: function to validate user/form data w.r.t schema
    const validate = () => {
        const errors = {}; //object type local variable
        const result = Joi.validate(user, schema, {
            //errors will come one by one
            abortEarly: true,
        });
        //console.log(result);
        // setting error messages to error properties
        // ex: errors[username] = "username is required";
        // ex: errors[password] = "password is required";
        if (result.error !== null)
            //console.log(errors);
            for (let item of result.error.details) {
                errors[item.path[0]] = item.message;
            }
        console.log(Object.keys(errors));
        return Object.keys(errors).length === 0 ? null : errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validate());
        console.log(user);
        console.log("Data taken.");
    }


    return (
        <div className="container w-50 my-3 border border-2 border-dark-subtle rounded">
            <p className="h3 mt-3 mb-4 ">Register</p>
            <form onSubmit={handleSubmit} action="">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input name="username" value={user.username} onChange={handleChange} id="username" type="text" className="form-control" />
                    {errors && errors.username && <small className="text-danger">{errors.username}</small>}
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input name="name" value={user.name} onChange={handleChange} id="name" type="text" className="form-control" />
                    {errors && errors.name && <small className="text-danger">{errors.name}</small>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input name="email" value={user.email} onChange={handleChange} id="email" type="email" className="form-control" />
                    {errors && errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Enter a password</label>
                    <input name="password" value={user.password} onChange={handleChange} id="password" type="password" className="form-control" />
                    {errors && errors.password && <small className="text-danger">{errors.password}</small>}
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordConfirmation" className="form-label">Re-enter the password</label>
                    <input name="passwordConfirmation" value={user.passwordConfirmation} onChange={handleChange} id="passwordConfirmation" type="password" className="form-control" />
                    {errors && errors.passwordConfirmation && <small className="text-danger">{errors.passwordConfirmation}</small>}
                </div>
                <div className="mb-3">
                    <label className="form-label">State</label>
                    <select name="state" value={user.state} onChange={handleChange} className="form-select">
                        <option value="">Select Option</option>
                        <option value={"Jharkhand"}>Jharkhand</option>
                        <option value={"Karnataka"}>Karnataka</option>
                        <option value={"Uttar Pradash"}>Uttar Pradash</option>
                    </select>
                    {errors && errors.state && <small className="text-danger">{errors.state}</small>}
                </div>
                <div className="mb-3">
                    <label className="form-label">City</label>
                    <select name="city" value={user.city} onChange={handleChange} className="form-select">
                        <option value="">Select Option</option>
                        <option value={"City1"}>City1</option>
                        <option value={"City2"}>City2</option>
                        <option value={"City3"}>City3</option>
                    </select>
                    {errors && errors.city && <small className="text-danger">{errors.city}</small>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <select name="gender" value={user.gender} onChange={handleChange} className="form-select">
                        <option value="">Select Option</option>
                        <option value={"Male"}>Male</option>
                        <option value={"Female"}>Female</option>
                        <option value={"Other"}>Other</option>
                    </select>
                    {errors && errors.gender && <small className="text-danger">{errors.gender}</small>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Profession</label>
                    <select name="profession" value={user.profession} onChange={handleChange} className="form-select">
                        <option value="">Select Option</option>
                        <option value={"Software Developer"}>Software Developer</option>
                        <option value={"Manager"}>Manager</option>
                        <option value={"Businessman"}>Businessman</option>
                    </select>
                    {errors && errors.profession && <small className="text-danger">{errors.profession}</small>}
                </div>
                <div className="mb-3 ">
                    <label htmlFor="profileImage" className="form-label">Select Profile Image</label>
                    <input name="profileImage" src={user.profileImage} onChange={handleChange} id="profileImage" type="file" className="form-control w-100 h-25" accept="image/*" />
                    {errors && errors.profileImage && <small className="text-danger">{errors.profileImage}</small>}
                </div>

                <div className="mt-4 mb-3 d-grid gap-2 ">
                    <input type="submit" className="btn btn-secondary block" />
                </div>

            </form>

        </div>
    );
}

export default Register;