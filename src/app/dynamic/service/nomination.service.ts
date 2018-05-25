import { Injectable } from '@angular/core';

const datas = {
  count: 6,
  results: [
    {id:1123, product:'C3', month:'Jan,2016', allocation:'300t', nomination:'290t', actual:'280t', company:'GASCO', port:'Ruwais', status:'Loading'},
    {id:1124, product:'C3', month:'Jan,2016', allocation:'280t', nomination:'280t', actual:'285t', company:'AD GAS', port:'Shab', status:'Waiting'},
    {id:1125, product:'C4', month:'Feb,2016', allocation:'350t', nomination:'340t', actual:'330t', company:'GASCO', port:'Ruwais', status:'Finished'},
    {id:1126, product:'C5', month:'Feb,2016', allocation:'300t', nomination:'290t', actual:'280t', company:'GASCO', port:'Ruwais', status:'Waiting'},
    {id:1127, product:'L', month:'Jan,2016', allocation:'500t', nomination:'500t', actual:'--', company:'GASCO', port:'Ruwais', status:'Draft'},
    {id:1128, product:'S', month:'Jan,2016', allocation:'400t', nomination:'390t', actual:'380t', company:'GASCO', port:'Ruwais', status:'Loading'}
  ]
}

@Injectable({
  providedIn: 'root'
})
export class NominationService {

  constructor() { }

  getDatas(){
    return datas;
  }

  getData(id){
    let item = datas.results.filter(function(value, index, array) {
      return value.id === id;
    });
    return item;
  }

  updateData(data) {
    for (let i = 0; i < datas.results.length; i++) {
      if ( datas.results[i].id === data.id ) {
        datas.results[i].product = data.product;
        datas.results[i].month = data.month;
        datas.results[i].allocation = data.allocation;
        datas.results[i].nomination = data.nomination;
        datas.results[i].actual = data.actual;
        datas.results[i].company = data.company;
        datas.results[i].port = data.port;
        datas.results[i].status = data.status;
      }
    }
  }

  saveData(data) {
    datas.results.push(data);
    datas.count += 1;
  }
}
