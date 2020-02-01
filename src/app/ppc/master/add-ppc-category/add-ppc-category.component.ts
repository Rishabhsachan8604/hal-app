import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';

declare var $:any;
@Component({
  selector: 'app-add-ppc-category',
  templateUrl: './add-ppc-category.component.html',
  styleUrls: ['./add-ppc-category.component.css']
})
export class AddPpcCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#addcat').parsley();
  }

  ngAfterViewInit(){
    $(document).ready(function(){
      $('#addcat').on('submit',function(e){
        e.preventDefault();
        $.ajax({
          type: 'POST',
          url: Utils.posturl('ppc')+'insert_cat',
          data:$("#addcat").serialize(),
          headers: {
          },
          beforeSend: function () {
            $('.addcat').attr("disabled", "disabled");
            $('.addcat').html("Please Wait...");
          },
          success: function (msg) {
            console.log(msg);
            if(msg.status=="200"){
              $('.addcat').attr("disabled", false);
              $('.addcat').html("Save");
              $('#addcat').trigger('reset');
              Utils.notification('Success',"Category Added Successfully");
            }else if(msg.status=="409"){
              $('.addcat').attr("disabled", false);
              $('.addcat').html("Save");
              $('#addcat').trigger('reset');
              Utils.notification('Success',"Already Inserted");
            }
            else{
              $('.addcat').attr("disabled", false);
              $('.addcat').html("Save");
              Utils.notification('Success',"Something Wents Wrong");
            }
          },
          error: function (msg) {
            $('.addcat').attr("disabled", false);
            $('.addcat').html("Save");
            $('#addcat').trigger('reset');
            Utils.notification('Error',"Something wents wrong");
          }
        });
      });
    });
  }
}
