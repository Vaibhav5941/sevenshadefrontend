import MaterialTable from "@material-table/core"
import { useStyles } from "./CategoryCss"
import TitleComponent from "../components/admin/TitleComponent"
import { useEffect,useState } from "react"
import { getData, serverURL,postData } from "../../services/FetchDjangoApiServices"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

import DialogTitle from '@mui/material/DialogTitle';
import { Button,Grid,TextField,Avatar } from "@mui/material"
export default function DisplayAllBrand()
{  
    var classes=useStyles()
    var navigate=useNavigate()
    const [open,setOpen]=useState(false)
    const[BrandList,setBrandList]=useState([])

/*********************************************Category Actions */
const [id, setId] = useState('')
const [BrandName, setBrandName] = useState('')
    const [icon, setIcon] = useState({ file: 'icon.png', bytes: '' })
    const [tempIcon,setTempIcon]=useState('')
    const [formError,setFormError]=useState({icon:false})
    const[btnStatus,setBtnStatus]=useState(true)

    const handleChange = (event) => {
        setIcon({ file: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })
        handleError(false,"icon")
        setBtnStatus(false)

    }
    const handleError=(errormessage,label)=>{
        setFormError((prev)=>({...prev,[label]:errormessage}))

    }

    const handleClick = async()=>{
        var err=false
        if(BrandName.length==0)
        {handleError("Pls input main category","brandname")
       err=true
    }
    if(icon.bytes.length==0)
    {handleError("Pls select some icon","icon")
   err=true
}
     if(err==false)
     {
        var formData = new FormData()
        formData.append('brandname', BrandName)
        formData.append('icon', icon.bytes)
        var result = await postData('brand_submit', formData)
        if(result.status)
        {
            Swal.fire({
                title: "The seven shades",
                text:  result.message,
                icon: "success",
                toast:true
              });
        }
        else{
            Swal.fire({
                title: "The seven shades",
                text:  result.message,
                icon: "error",
                toast:true
              });

        }
    }
}

/*********************************************** */

    useEffect(function(){
     fetchAllBrand()
    },[])

    const fetchAllBrand=async()=>{
     var result=await getData('brand_list')
     setBrandList(result.data)
    }
  const handleOpenDialog=(rowData)=>{
    setId(rowData.id)
    setBrandName(rowData.brandname)
    setIcon({file:`${serverURL}${rowData.icon}`,bytes:''})
    setTempIcon(`${serverURL}${rowData.icon}`)
    setOpen(true)
  }
  const handleClose=()=>{
    setOpen(false)
    setIcon({file:tempIcon,bytes:''})
  }

 function listAllBrand() {
  
    return (
      <MaterialTable
title={ <TitleComponent title={'List Brands'} listicon=''/>}
        columns={[
          { title: 'Id', field: 'id' },
          { title: 'Brand', field: 'brandname' },
          { title: 'icon',render:(row)=><><img src={`${serverURL}${row.icon}`} style={{width:60,height:60,borderRadius:15}}/></> }
        
        ]}
        data={BrandList}        
        actions={[
          {
            icon: 'edit',
            tooltip: 'Edit Brand',
            onClick: (event, rowData) => handleOpenDialog(rowData)
          },
          {
            icon: 'delete',
            tooltip: 'Remove Brand',
            onClick: (event, rowData) => handleDeleteData(rowData)
          },
          {
            icon: 'add',
            tooltip: 'Add New Brand',
            isFreeAction:true,
            onClick: (event, rowData) =>navigate('/admindashboard/brand')
          }
        ]}
      />
    )
  }

  const handleCancel=()=>{
    setBtnStatus(true)
    setIcon({file:tempIcon,bytes:''})

  }
  const handleEditIcon=async()=>{
    var formData = new FormData()
    formData.append('id',id)
    formData.append('icon', icon.bytes)
    var result = await postData('editbrand_icon', formData)
    if(result.status)
    {
        Swal.fire({
            title: "The seven shades",
            text:  result.message,
            icon: "success",
            toast:true
          });
    }
    else{
        Swal.fire({
            title: "The seven shades",
            text:  result.message,
            icon: "error",
            toast:true
          });

    }
    fetchAllBrand()
    setBtnStatus(true)
  }
   
  const handleEditData=async()=>{
    var body = {id:id,brandname:BrandName}
  
    var result = await postData('editbrand_data',body)
    if(result.status)
    {
        Swal.fire({
            title: "The seven shades",
            text:  result.message,
            icon: "success",
            toast:true
          });
    }
    else{
        Swal.fire({
            title: "The seven shades",
            text:  result.message,
            icon: "error",
            toast:true
          });

    }
    fetchAllBrand()
 
  }
  const handleDeleteData=async(rowData)=>{
    Swal.fire({
      title: "Do you want to Delete Brand?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`
       }).then(async(result) => {
      /* Read more about isConfirmed, isDenied below */
         if (result.isConfirmed) {
          var body = {id:rowData.id}
          var result = await postData('deletebranddata',body)
          if(result.status)
          {
            Swal.fire("Delete!", "", "success");
          }
          fetchAllBrand()

         } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
          }
        });
   
      }

  const showBrandDialog=()=>{
    return(<Dialog open={open} fullWidth={true} maxWidth={'sm'}>
      <DialogTitle>
        <TitleComponent title={'Update Category'} listicon=''/>
      </DialogTitle>
      <DialogContent>
      <div style={{margin:5}}>
      <Grid container spacing={2}>
        
               
                <Grid item xs={12}>
                    <TextField value={BrandName} error={formError.brandname} helperText={formError.brandname} onFocus={()=>handleError(false,'brandname')} onChange={(event) => setBrandName(event.target.value)} fullWidth label="Brand Name" />
                </Grid>
                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'column' }}>
                  {btnStatus?
                  <div>
                    <Button variant="contained" component='label'>
                        Upload Icon
                        <input type='file' hidden accept="images/*" onChange={handleChange} />
                    </Button>
                    {formError.icon?<div style={{fontFamily:'"Roboto","Heletica","Arial",sans-serif',marginTop:5, color:'#d32f2f',fontSize:'0.75rem', fontWeight:400,}}>{formError.icon}</div>:<></>}
                    </div>:<div><Button onClick={handleEditIcon}>Save</Button><Button onClick={handleCancel}>Cancel</Button></div>}
                </Grid>

                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar
                        alt="Icon"
                        variant='rounded'
                        src={icon.file}
                        sx={{ width: 80, height: 80 }} />

                </Grid>

               
            </Grid>
       </div>

      </DialogContent>
      <DialogActions>
        <Button onClick={handleEditData}>Edit Data</Button>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
  </Dialog>)
  }
   

    return(<div className={classes.display_root}>
        <div className={classes.display_box}>
        {listAllBrand()}
        </div>
        {showBrandDialog()}
    </div>)
  }