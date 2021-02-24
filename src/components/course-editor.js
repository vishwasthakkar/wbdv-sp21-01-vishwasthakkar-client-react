import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                               role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1"
                               aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    {/*<form className="d-flex">*/}
                        {/*<input className="form-control me-2" type="search" placeholder="Search"*/}
                               {/*aria-label="Search"/>*/}
                            {/*<button className="btn btn-outline-success" type="submit">Search</button>*/}
                    {/*</form>*/}
                </div>
            </div>
        </nav>
    </div>

    {/*<div>*/}
        {/*<nav className="navbar navbar-expand-lg navbar-dark bg-dark">*/}
            {/*<div className="container">*/}
                {/*<a href="#">*/}
                    {/*<i className="fa fa-arrow-left fa-lg nav-icon-margins"*/}
                       {/*onClick={() => history.goBack()}>*/}
                        {/*&nbsp;*/}
                    {/*</i>*/}
                {/*</a>*/}
                {/*<a className="navbar-brand nav-icon-margins mr-4"*/}
                   {/*href="#">CS5610 - WebDev*/}
                {/*</a>*/}
                {/*<ul className="navbar-nav">*/}
                    {/*<li className="nav-item nav-tab-margins">*/}
                        {/*<a className="nav-link" href="#">Build<span*/}
                            {/*className="sr-only">(current)</span></a>*/}
                    {/*</li>*/}
                    {/*<li className="nav-item active nav-tab-margins">*/}
                        {/*<a className="nav-link" href="#">Pages</a>*/}
                    {/*</li>*/}
                    {/*<li className="nav-item nav-tab-margins">*/}
                        {/*<a className="nav-link" href="#">Theme</a>*/}
                    {/*</li>*/}
                    {/*<li className="nav-item nav-tab-margins">*/}
                        {/*<a className="nav-link" href="#">Store</a>*/}
                    {/*</li>*/}
                    {/*<li className="nav-item nav-tab-margins">*/}
                        {/*<a className="nav-link" href="#">Apps</a>*/}
                    {/*</li>*/}
                    {/*<li className="nav-item nav-tab-margins">*/}
                        {/*<a className="nav-link" href="#">Settings</a>*/}
                    {/*</li>*/}
                    {/*<li className="nav-item nav-tab-margins">*/}
                        {/*<a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">*/}
                            {/*<i className="fa fa-plus"></i>*/}
                        {/*</a>*/}
                    {/*</li>*/}
                {/*</ul>*/}
            {/*</div>*/}
        {/*</nav>*/}

        {/*<div className="container">*/}

            {/*<div className="row">*/}
                {/*<div className="col-4">*/}

                    {/*<ul className="list-group"*/}
                        {/*style={{backgroundColor: '#2c2c2c', paddingBottom: '300px'}}>*/}
                        {/*<li className="list-group-item active list-padding-top list-group-item-dark">*/}
                            {/*Module 1 - jQuery*/}
                            {/*<i className="pull-right fa fa-times fa-lg"></i>*/}
                        {/*</li>*/}
                        {/*<li className="list-group-item list-padding list-group-item-dark">*/}
                            {/*Module 2 - React*/}
                            {/*<i className="pull-right fa fa-times fa-lg"></i>*/}
                        {/*</li>*/}
                        {/*<li className="list-group-item list-padding list-group-item-dark">*/}
                            {/*Module 3 - Redux*/}
                            {/*<i className="pull-right fa fa-times fa-lg"></i>*/}
                        {/*</li>*/}
                        {/*<li className="list-group-item list-padding list-group-item-dark">*/}
                            {/*Module 4 - Native*/}
                            {/*<i className="pull-right fa fa-times fa-lg"></i>*/}
                        {/*</li>*/}
                        {/*<li className="list-group-item list-padding list-group-item-dark">*/}
                            {/*Module 5 - Angular*/}
                            {/*<i className="pull-right fa fa-times fa-lg"></i>*/}
                        {/*</li>*/}
                        {/*<li className="list-group-item list-padding list-group-item-dark">*/}
                            {/*Module 6 - Node*/}
                            {/*<i className="pull-right fa fa-times fa-lg"></i>*/}
                        {/*</li>*/}
                        {/*<li className="list-group-item list-padding list-group-item-dark">*/}
                            {/*Module 7 - Mango*/}
                            {/*<i className="pull-right fa fa-times fa-lg"></i>*/}
                        {/*</li>*/}
                        {/*<li className="list-group-item list-padding list-group-item-dark text-center">*/}
                            {/*<i className="fa fa-plus fa-lg"></i>*/}
                        {/*</li>*/}

                    {/*</ul>*/}

                {/*</div>*/}
                {/*<div className="col-8">*/}


                    {/*<ul className="nav nav-pills">*/}
                        {/*<li className="nav-item ">*/}
                            {/*<a href="#" className="badge badge-secondary">Topic 1</a>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                            {/*<a href="#" className="badge badge-dark">Topic 2</a>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                            {/*<a href="#" className="badge badge-secondary">Topic 3</a>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                            {/*<a href="#" className="badge badge-secondary">Topic 4</a>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                            {/*<a className="badge badge-secondary" href="#">*/}
                                {/*<i className="fa fa-plus"></i>*/}
                            {/*</a>*/}
                        {/*</li>*/}
                    {/*</ul>*/}

                {/*</div>*/}
            {/*</div>*/}
        {/*</div>*/}
    // </div>;

export default CourseEditor;