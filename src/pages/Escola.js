import React from 'react';
import DocumentTitle from 'react-document-title';
import {FiltroGrid, FiltroGridFunction} from '../util/FiltroGrid';
import Griddle from 'griddle-react';
var EscolasJson = require('../stores/escolas.json');
import AuthStore from '../stores/AuthStore';

var Escola = React.createClass({
    render() {
        return (
            <DocumentTitle title={"Escola - Lista"}>
                <Griddle results={EscolasJson.escolas} tableClassName="table" showFilter={true} resultsPerPage={20} columns={["nomeEscola","bairro","regional","tipo"]}
                         columnMetadata={[{columnName:"nomeEscola",displayName:"Nome da Escola",order:"1"},{columnName:"bairro",displayName:"Bairro",order:"2"},{columnName:"regional",displayName:"Regional",order:"3"},{columnName:"tipo",displayName:"Tipo",order:"4"}]}
                         useCustomFilterer={true} customFilterer={FiltroGridFunction}
                         useCustomFilterComponent={true} customFilterComponent={FiltroGrid} />
            </DocumentTitle>
        );
    }
});

module.exports = Escola;