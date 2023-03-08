import React,{useState} from "react"
import * as XLSX from 'xlsx'
import './App.css';
// import Create_cards from "./create_cards";
import Plott from "./plot";
import MiniDrawer from "./Side_Drawer";

function App() {
  // on change states
  const [excelFile, setExcelFile]=useState(null);
  const [excelFileError, setExcelFileError]=useState(null);
 
  // submit
  const [excelData, setExcelData]=useState(null);
  
  // it will contain array of objects

  // handle File
  const fileType=['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
  const handleFile = (e)=>{
    let selectedFile = e.target.files[0];
    if(selectedFile){
      // console.log(selectedFile.type);
      if(selectedFile&&fileType.includes(selectedFile.type)){
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload=(e)=>{
          setExcelFileError(null);
          setExcelFile(e.target.result);
          console.log("One state is getting stage here that is setExcelFile");
        }
      }
      else{
        setExcelFileError('Please select only excel file types');
        setExcelFile(null);
      }
    }
    else{
      console.log('plz select your file');
    }
  }

  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: 'buffer' });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      const formattedData = data.map((row) => {
        const dateNum = row.Date_Of_Invoice;
        const dateStr = XLSX.SSF.format('dd-mm-yyyy', dateNum);
        console.log("Another stage is getting changed ExcelData");
        return { ...row, Date_Of_Invoice: dateStr };
      });
      setExcelData(formattedData);
    } else {
      setExcelData(null);
    }
  }


return (
  <>
  <div className="container">

{/* upload file section */}
<div className='form'>
<form className='form-group' autoComplete="off"
// ()=> handleSubmit()
onSubmit={handleSubmit}>
  <label><h5>Upload Excel file</h5></label>
  <br></br>
  <input type='file' className='form-control'
  // ()=> handleFile()
  onChange={handleFile} required></input>              
  {excelFileError&&<div className='text-danger'
  style={{marginTop:5+'px'}}>{excelFileError}</div>}
  <button type='submit' className='btn btn-success'
  style={{marginTop:5+'px'}}>Submit</button>
</form>
</div>

<br></br>
<hr></hr>
{excelData == null&&setExcelData([])}
{console.log("I am the excel Data",excelData)}

{/* {excelData!= null && excelData.length!== 0 && <Plott excelData={excelData}/>} */}
{excelData!= null && excelData.length!== 0 && <MiniDrawer excelData={excelData}/>}

</div>
  </>
);
}

export default App;
