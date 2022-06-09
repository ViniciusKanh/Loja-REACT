import React, { Fragment } from "react";
import PageHeaders from "../../components/header/PageHeaders";

const Dashboard = _ => {
    return(
        <Fragment>
            <PageHeaders 
                tituloPagina="Página Principal"
                path="#"
                tituloPesquisa=""
                icon="tachometer"
                toReturn=""/>
        </Fragment>
    )
}

export default Dashboard;