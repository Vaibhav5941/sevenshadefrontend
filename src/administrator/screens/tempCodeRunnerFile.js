 const handleDeleteData=async(rowData)=>{
    Swal.fire({
      title: "Do you want to Delete Main Category?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`
       }).then(async(result) => {
      /* Read more about isConfirmed, isDenied below */
         if (result.isConfirmed) {
          var body = {id:rowData.id}
          var result = await postData('deletemaincategorydata',body)
          if(result.status)
          {
            Swal.fire("Delete!", "", "success");
          }

         } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
          }
        });