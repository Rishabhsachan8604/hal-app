import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
declare var $:any;
@Component({
  selector: 'app-add-ppc-unit',
  templateUrl: './add-ppc-unit.component.html',
  styleUrls: ['./add-ppc-unit.component.css']
})
export class AddPpcUnitComponent implements OnInit {

  constructor() {  }

  ngOnInit() {
    $('#addunit').parsley();
  }
  ngAfterViewInit(){
    $(document).ready(function(){
      $('#addunit').on('submit',function(e){
        e.preventDefault();
        $.ajax({
          type: 'POST',
          url: Utils.posturl('ppc')+'insert_unit',
          data:$("#addunit").serialize(),
          headers: {
          },
          beforeSend: function () {
            $('.addunit').attr("disabled", "disabled");
            $('.addunit').html("Please Wait...");
          },
          success: function (msg) {
            console.log(msg);
            if(msg.status=="200"){
              $('.addunit').attr("disabled", false);
              $('.addunit').html("Save");
              $('#addunit').trigger('reset');
              Utils.notification('Success',"Unit Added Successfully");
            }else if(msg.status=="409"){
              $('.addunit').attr("disabled", false);
              $('.addunit').html("Save");
              $('#addunit').trigger('reset');
              Utils.notification('Success',"Already Inserted");
            }
            else{
              $('.addunit').attr("disabled", false);
              $('.addunit').html("Save");
              Utils.notification('Success',"Something Wents Wrong");
            }
          },
          error: function (msg) {
            $('.addunit').attr("disabled", false);
            $('.addunit').html("Save");
            $('#addunit').trigger('reset');
            Utils.notification('Error',"Something wents wrong");
          }
        });
      });
    });
  }
}
