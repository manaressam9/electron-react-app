import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react/lib/agGridReact'
export default class Layout extends Component {
  constructor(props) {
    super(props);
     this.gridApi;
    this.state = {
      gridApi:null,
      columnDefs: [
        {
          headerName: 'Make',
          field: 'make',
          sortable: true,
          filter: true,
          checkboxSelection: true
        },
        {
          headerName: 'Model',
          field: 'model',
          sortable: true,
          filter: true
        },
        {
          headerName: 'Price',
          field: 'price',
          sortable: true,
          filter: true
        }
      ],
      rowData: [] ,
  dataSource :{
    rowCount :null,
    getRows: function(params){
    
  //       setTimeout(function(){
  //         console.log(`start row: ${params.startRow} end row: ${params.endRow}`);
  //       let rowsThisPage =self.state.rowData.slice(params.startRow, params.endRow);
  // console.log("rowThisPage " + JSON.stringify(rowsThisPage))
      
  //       let lastRow = -1;
  //        if(self.state.rowData.length <= params.endRow){
  //         lastRow =self.state.rowData.length;
  //        }  
  //        params.successCallback(rowsThisPage, lastRow)
  //     },100)
    }
  },
      rowModelType: "infinite",
      rowBuffer: 0,
      cacheBlockSize: 100,
      cacheOverflowSize: 0,
      maxConcurrentDatasourceRequests: 1,
      maxBlocksInCache: 2,
      infiniteInitialRowCount: 100
    };
  }

  componentDidMount(){
    this.interval = setInterval(() => {
//      const randomNoOfDataToUpdate = Math.floor(Math.random() * this.state.rowData.length);
//      //from this number choose random data indecies to update
//      const randomIndecies =  new Set();
//      while(randomIndecies.size < randomNoOfDataToUpdate){
//       randomIndecies.add(Math.floor(Math.random() * this.state.rowData.length))
//      }
//  const updatedData = this.state.rowData.map((item,i) =>{
//   if(randomIndecies.has(i)){
//     return {...item, price: Math.floor(Math.random() * 100000)}
//   }
//   return item;
//  });
//  // this.setState({rowData : updatedData})
// this.state.gridApi.setDatasource(updatedData)
console.log("updated")
    }, 50)
  }

  onGridReady = params => {
    var self = this;

 self.setState({gridApi : params.api})
 
    // const dataSource ={
    //   rowCount :null,
    //   getRows: function(params){
    //       setTimeout(function(){
    //         console.log(`start row: ${params.startRow} end row: ${params.endRow}`);
    //       let rowsThisPage =self.state.rowData.slice(params.startRow, params.endRow);
    // console.log("rowThisPage " + JSON.stringify(rowsThisPage))
        
    //       let lastRow = -1;
    //        if(self.state.rowData.length <= params.endRow){
    //         lastRow =self.state.rowData.length;
    //        }  
    //        params.successCallback(rowsThisPage, lastRow)
    //     },100)
    //   }
    // };
   // console.log("dataSourcee " + JSON.stringify(dataSource))
    params.api.setDatasource(self.state.dataSource)
  }

  // componentDidMount() {
  //  try{ fetch('https://api.myjson.com/bins/15psn9')
  //     .then(result => result.json())
  //     .then(rowData => this.setState({ rowData }));
  //  }catch(e){}
  // }
  render() {
    return (
      <div
      className="ag-theme-balham"
      style={{
        height: '300px',
        width: '100%',
        margin:'auto'
      }}
    >
      <AgGridReact
        onGridReady={this.onGridReady}
        columnDefs={this.state.columnDefs}
        rowBuffer={this.state.rowBuffer}
            rowModelType={this.state.rowModelType}
            cacheBlockSize={this.state.cacheBlockSize}
            cacheOverflowSize={this.state.cacheOverflowSize}
            maxConcurrentDatasourceRequests={
              this.state.maxConcurrentDatasourceRequests
            }
            infiniteInitialRowCount={this.state.infiniteInitialRowCount}
            maxBlocksInCache={this.state.maxBlocksInCache}   
      ></AgGridReact>
    </div>
    )
  }
}
