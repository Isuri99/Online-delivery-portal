import React from "react";
import Router from "../../routes/Router";
import Sidebar from "../Sidebar/Sidebar";
import TopNav from "../TopNav/TopNav"

const Layout = () => {                       //new component layout
    return  (
    <div className="layout">
        <Sidebar/>                          {/*renders the sidebar component*/}
        <div className="main__layout">
            <TopNav/>                       {/*renders the topnav component*/}
            <div className="content">
                <Router/>                   {/*renders the router component*/}
            </div>
        </div>
    </div>
    );
};

export default Layout;