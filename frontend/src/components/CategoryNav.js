import React, { Component } from "react";
import * as API from "../utils/api";
import NavItem from "../components/NavItem";
import { Link } from "react-router-dom";
import FlatButton from "material-ui/FlatButton";
import { Route } from "react-router-dom";




class CategoryNav extends Component {
  state = {
    categories: []
  }

componentDidMount() {
    API.getCategories().then(categories => {
        this.setState( categories );
     });
   }


     render() {
       return (
         <div>
           <FlatButton
             backgroundColor="#D3D3D3"
             containerElement={<Link to="/" />}
             href="/"
             label="All"
             labelPosition="before"
             primary={true}
           />

             {this.state.categories.map(category => (
               <NavItem key={category.name}
               name={category.name}
             path={category.path} />
             ))}
         </div>
       );
     }
   }

   export default CategoryNav;
