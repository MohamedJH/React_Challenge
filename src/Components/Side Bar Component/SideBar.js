import React from 'react';
import myImage from '../images/profillogo.jpg'
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faAddressCard,faCogs,faUserCog,faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';



const Items = [
    {
        name:"Home",
        id:"list-home-list",
        href:"#list-home",
        icon:faHome,
        aria_controls:"home"
        

    },
    {
        name:"Profile",
        id:"list-profile-list",
        href:"#list-profile",
        icon:faAddressCard,
        aria_controls:"profile"

    },
    {
        name:"Projects",
        id:"list-projects-list",
        href:"#projects",
        icon:faUserCog,
        aria_controls:"projects"

    },
    {
        name:"Skills",
        id:"list-skills-list",
        href:"#skills",
        icon:faCogs,
        aria_controls:"skills"

    },
    {
        name:"Contact",
        id:"list-contact-list",
        href:"#list-profile",
        icon:faMapMarkedAlt,
        aria_controls:"contact"

    }
];

const headDetails={
    FirstName:"Mohamed",
    LastName:"jahha",
    PostName:"Developer Front-End JS",
    mainSkills:""
}

const CreateItem =({item:{name,id,href,icon,aria_controls}})=>{
    return(
        <a className ="list-group-item list-group-item-action" id={id} href={href} aria-controls={aria_controls} role="tab" data-toggle="list">
            <FontAwesomeIcon icon={icon}/> {name}
        </a>
    )
}

const SideBar = () => {
  return (
    <div className='side-bar'>
        <div className="side-bar-head text-center">
            <img src= {myImage} alt="" height="200" width ="200" style={{borderRadius:"50%"}}/>
            <h5 className="card-title mt-3">{headDetails.FirstName.toLocaleUpperCase()} {headDetails.LastName.toUpperCase()}</h5>
            <h6 className="card-subtitle mb-1 ">{headDetails.PostName}  </h6>
            <h6 className="card-text mb-3 ">{headDetails.mainSkills}</h6>
        </div>
        <div className="side-bar-body">
            <div className="row">
                    <div className="col-12">

                        {
                            Items.map((item,i)=>{
                                return <CreateItem key={i} item={item} />
                            })
                        }
                        
                    </div>
                </div>

        </div>
    </div>
      
  );
};

export default SideBar;
