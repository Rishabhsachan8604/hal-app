import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
declare var $:any;
@Component({
  selector: 'app-add-ppc-sub-category',
  templateUrl: './add-ppc-sub-category.component.html',
  styleUrls: ['./add-ppc-sub-category.component.css']
})
export class AddPpcSubCategoryComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    Utils.get_all_category("CAT_PARENT_ID");
    $('#addsubcat').parsley();
  }

  ngAfterViewInit(){
    $(document).ready(function(){
      $('#addsubcat').on('submit',function(e){
        e.preventDefault();
        $.ajax({
          type: 'POST',
          url: Utils.posturl('ppc')+'insert_cat',
          data:$("#addsubcat").serialize(),
          headers: {
          },
          beforeSend: function () {
            $('.addsubcat').attr("disabled", "disabled");
            $('.addsubcat').html("Please Wait...");
          },
          success: function (msg) {
            if(msg.status=="200"){
              $('.addsubcat').attr("disabled", false);
              $('.addsubcat').html("Save");
              $('#addsubcat').trigger('reset');
              Utils.notification('Success',"Sub Category Added Successfully");
              Utils.get_all_category("CAT_PARENT_ID");
            }else if(msg.status=="409"){
              $('.addsubcat').attr("disabled", false);
              $('.addsubcat').html("Save");
              $('#addsubcat').trigger('reset');
              Utils.notification('Success',"Already Inserted");
            }
            else{
              $('.addsubcat').attr("disabled", false);
              $('.addsubcat').html("Save");
              Utils.notification('Success',"Something Wents Wrong");
            }
          },
          error: function (msg) {
            $('.addsubcat').attr("disabled", false);
            $('.addsubcat').html("Save");
            $('#addsubcat').trigger('reset');
            Utils.notification('Error',"Something wents wrong");
          }
        });
      });
    });
  }
}
