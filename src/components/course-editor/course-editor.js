import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = (props) =>
    <div className="container">
        <div className="m-3">
            <h3>
                <a href="#">
                    <i className="fa fa-arrow-left fa-lg nav-icon-margins"
                       onClick={() => props.history.goBack()}>
                        &nbsp;
                    </i>
                </a>
                Course Editor
            </h3>
        </div>

        <div className="row">
            <div className="col-4">
                <ul className="list-group">
                    <li className="list-group-item active">Module 1 - jQuery
                        <i className="fas fa-times fa-lg float-right">
                            &nbsp;
                        </i>
                    </li>
                    <li className="list-group-item">Module 2 - React
                        <i className="fas fa-times fa-lg float-right">
                            &nbsp;
                        </i>
                    </li>
                    <li className="list-group-item">Module 3 - Redux
                        <i className="fas fa-times fa-lg float-right">
                            &nbsp;
                        </i>
                    </li>
                    <li className="list-group-item">Module 4 - Native
                        <i className="fas fa-times fa-lg float-right">
                            &nbsp;
                        </i>
                    </li>
                    <li className="list-group-item">Module 5 - Angular
                        <i className="fas fa-times fa-lg float-right">
                            &nbsp;
                        </i>
                    </li>
                    <li className="list-group-item">Module 6 - Node
                        <i className="fas fa-times fa-lg float-right">
                            &nbsp;
                        </i>
                    </li>
                    <li className="list-group-item">Module 7 - Mongo
                        <i className="fas fa-times fa-lg float-right">
                            &nbsp;
                        </i>
                    </li>
                    <li className="list-group-item text-center">
                        <i className="fas fa-plus fa-lg">
                            &nbsp;
                        </i>
                    </li>
                </ul>
            </div>
            <div className="col-8"  style={{backgroundColor:"white"}}>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Build</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Pages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Theme</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Apps</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Settings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
                            <i className="fas fa-lg fa-plus"></i>
                        </a>
                    </li>
                </ul>
                <br/>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Topic 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Topic 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 3</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 4</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
                            <i className="fas fa-plus-square fa-lg"></i>
                        </a>
                    </li>
                </ul>
                <br/>
            </div>
        </div>
    </div>;


    {/*<div>*/}
        {/*<nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">*/}
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

        {/*<div className="container" style={{marginTop: "55px"}}>*/}

            {/*<div className="row">*/}
                {/*<div className="col-4">*/}

                    {/*<ul className="list-group"*/}
                        {/*style={{backgroundColor: '#2c2c2c', paddingBottom: '300px'}}>*/}
                        {/*<li className="list-group-item active list-padding-top list-group-item-dark">*/}
                            {/*Module 1 - jQuery*/}
                            {/*<i className="float-right fa fa-times fa-lg"></i>*/}
                        {/*</li>*/}
                        {/*<li className="list-group-item list-padding list-group-item-dark">*/}
                            {/*Module 2 - React*/}
                            {/*<i className="float-right fa fa-times fa-lg"></i>*/}
                        {/*</li>*/}
                        {/*<li className="list-group-item list-padding list-group-item-dark">*/}
                            {/*Module 3 - Redux*/}
                            {/*<i className="float-right fa fa-times fa-lg"></i>*/}
                        {/*</li>*/}
                        {/*<li className="list-group-item list-padding list-group-item-dark">*/}
                            {/*Module 4 - Native*/}
                            {/*<i className="float-right fa fa-times fa-lg"></i>*/}
                        {/*</li>*/}
                        {/*<li className="list-group-item list-padding list-group-item-dark">*/}
                            {/*Module 5 - Angular*/}
                            {/*<i className="float-right fa fa-times fa-lg"></i>*/}
                        {/*</li>*/}
                        {/*<li className="list-group-item list-padding list-group-item-dark">*/}
                            {/*Module 6 - Node*/}
                            {/*<i className="float-right fa fa-times fa-lg"></i>*/}
                        {/*</li>*/}
                        {/*<li className="list-group-item list-padding list-group-item-dark">*/}
                            {/*Module 7 - Mango*/}
                            {/*<i className="float-right fa fa-times fa-lg"></i>*/}
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
    {/*// </div>;*/}

export default CourseEditor;