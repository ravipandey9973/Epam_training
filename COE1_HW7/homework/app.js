let sortFlags = {
    name: 'ascending',
    area: 'ascending',
};
let displayedItems = [];

const appRoot = document.getElementById('app-root');

let heading=document.createElement('h1');
heading.innerHTML='Contries Search';
appRoot.append(heading);

let div1=document.createElement('div');
div1.setAttribute('class','container');
appRoot.append(div1);

let div2=document.createElement('div');
div2.setAttribute('class','filters');
div1.append(div2);

let div3=document.createElement('div');
div3.setAttribute('class','filter-picker');
div2.append(div3);

let para1=document.createElement('p');
para1.innerHTML='Please choose type of search:';
para1.setAttribute('id','para1');
div3.append(para1);

let div5=document.createElement('div');
div5.setAttribute('id','div5');
div3.append(div5);

let radioInput1=document.createElement('input');
radioInput1.setAttribute('type','radio');
radioInput1.setAttribute('name','search');
radioInput1.setAttribute('value','region');
radioInput1.setAttribute('id','regionSearch');
radioInput1.setAttribute('onclick','handle(value)');
div5.append(radioInput1);

let label1=document.createElement('label');
label1.innerHTML='By Region';
label1.setAttribute('for','regionSearch');
label1.setAttribute('class','region');
div5.append(label1);

let radioInput2=document.createElement('input');
radioInput2.setAttribute('type','radio');
radioInput2.setAttribute('name','search');
radioInput2.setAttribute('id','languageSearch');
radioInput2.setAttribute('value','language');
radioInput2.setAttribute('onclick','handle(value)');
div5.append(radioInput2);

let label2=document.createElement('label');
label2.innerHTML='By Language';
label2.setAttribute('for','languageSearch');
label2.setAttribute('class','language');
div5.append(label2);

let br2=document.createElement('br');
div5.append(br2);

let div4=document.createElement('div');
div4.setAttribute('class','language-picker');
div2.append(div4);

let para2=document.createElement('p');
para2.innerHTML='Please choose search query:';
div4.append(para2);

let select=document.createElement('select');
select.setAttribute('name','');
select.setAttribute('id','searchQuery');
select.disabled=true;
select.setAttribute('onchange','renderTable(this)');
div4.append(select);

let defaultOption=document.createElement('option');
defaultOption.setAttribute('value','');
defaultOption.innerHTML='Select value';
select.append(defaultOption);

let br3=document.createElement('br');
div1.append(br3);

let MainTable=document.createElement('table');
MainTable.setAttribute('id','table');
MainTable.setAttribute('border','1');
appRoot.append(MainTable);

function clearTable(){
    while(MainTable.lastElementChild){
        MainTable.removeChild(MainTable.lastElementChild);
    }
}

let tableHeaders='';
function makeHeader(){
    tableHeaders=`<tr>
    <th><p>Country Name <span style="cursor:pointer" onClick="sortDependOnArrow(this)" id="name">${
        sortFlags.name==='ascending'?'&#8593;':'&#8595;'
    }</span></p></th>
    <th>Capital</th>
    <th>World Region</th>
    <th>Languages</th>
    <th>Area <span style="cursor:pointer" onClick="sortDependOnArrow(this)" id="area">${
        sortFlags.area==='ascending'?'&#8593;':'&#8595;'
    }</span></th>
    <th>Flag</th>
    </tr>`;
}

function handle(value){

    let noItemPara=document.createElement('p');
    clearTable();
    noItemPara.setAttribute('id','noItemPara');
    noItemPara.innerHTML='No items, please choose search query';
    div1.append(noItemPara);
    select.name=value;
    value==='region'?fillSelect(externalService.getRegionsList()):fillSelect(externalService.getLanguagesList());

    function fillSelect(arr){
        let fragment = document.createDocumentFragment();
        arr.forEach(element => {
           let option=document.createElement('option');
           option.textContent=element;
           option.setAttribute('value',element);
           fragment.appendChild(option);
        });

        while(select.lastElementChild){
            select.removeChild(select.lastElementChild);
        }

        select.appendChild(fragment);
        select.disabled=false;
    }
}

function renderTable(items){

    if(document.getElementById('noItemPara')){
        document.getElementById('noItemPara').remove(document.getElementById('noItemPara'));
    }
    
    select.name==='region'?renderItems(externalService.getCountryListByRegion(items.value))
    :renderItems(externalService.getCountryListByLanguage(items.value));
}

function renderItems(arr){
    displayedItems=arr;

    let fragment=document.createDocumentFragment();
    displayedItems.forEach(element => {
        let tRow=document.createElement('tr');

        let tRowCountry=document.createElement('td');
        tRowCountry.textContent = element.name;

        let tRowCapital=document.createElement('td');
        tRowCapital.textContent=element.capital;

        let tRowRegion=document.createElement('td');
        tRowRegion.textContent=element.region;

        let tRowLanguages=document.createElement('td');
        tRowLanguages.textContent=Object.values(element.languages).reduce((acc,currValue) => {
            return acc + ',' + currValue;
        });

        let tRowArea=document.createElement('td');
        tRowArea.textContent=element.area;

        let tRowFlag=document.createElement('td');
        let flagImage=document.createElement('img');
        tRowFlag.appendChild(flagImage);

        tRow.append(tRowCountry,tRowCapital,tRowRegion,tRowLanguages,tRowArea,tRowFlag);
        fragment.appendChild(tRow);
    });

    clearTable();
    makeHeader();
    MainTable.innerHTML=tableHeaders;
    MainTable.appendChild(fragment);
}

let minusOne=-1;

function sortDependOnArrow(el){
    sort(el.id);
    function sort(fieldName){
        if(sortFlags[el.id]==='ascending'){
            sortFlags[el.id]='descending';
            displayedItems=displayedItems.sort((a,b) => {
                if(a[fieldName]>b[fieldName]){
                    return 1;
                }else if(a[fieldName]===b[fieldName]){
                    return 0;
                }else{
                    return minusOne;
                }
            });
        }else{
            sortFlags[el.id] = 'ascending';
            displayedItems = displayedItems.sort((a, b) => {
                if (a[fieldName] > b[fieldName]) {
                    return minusOne;
                } else if (a[fieldName] === b[fieldName]) {
                    return 0;
                } else {
                    return 1;
                }
            });
        }
    }

    renderItems(displayedItems);
}