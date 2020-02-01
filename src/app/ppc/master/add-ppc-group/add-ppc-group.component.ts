import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';

declare var $:any;

@Component({
  selector: 'app-add-ppc-group',
  templateUrl: './add-ppc-group.component.html',
  styleUrls: ['./add-ppc-group.component.css']
})
export class AddPpcGroupComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit() {
    $('#addgroup').parsley();
  }
  ngAfterViewInit(){
    $(document).ready(function(){
      $('#addgroup').on('submit',function(e){
        e.preventDefault();
        $.ajax({
          type: 'POST',
          url: Utils.posturl('ppc')+'insert_group',
          data:$("#addgroup").serialize(),
          headers: {
          },
          beforeSend: function () {
            $('.addgroup').attr("disabled", "disabled");
            $('.addgroup').html("Please Wait...");
          },
          success: function (msg) {
            console.log(msg);
            if(msg.status=="200"){
              $('.addgroup').attr("disabled", false);
              $('.addgroup').html("Save");
              $('#addgroup').trigger('reset');
              Utils.notification('Success',"Group Added Successfully");
            }else if(msg.status=="409"){
              $('.addgroup').attr("disabled", false);
              $('.addgroup').html("Save");
              $('#addgroup').trigger('reset');
              Utils.notification('Success',"Already Inserted");
            }
            else{
              $('.addgroup').attr("disabled", false);
              $('.addgroup').html("Save");
              Utils.notification('Success',"Something Wents Wrong");
            }
          },
          error: function (msg) {
            $('.addgroup').attr("disabled", false);
            $('.addgroup').html("Save");
            $('#addgroup').trigger('reset');
            Utils.notification('Error',"Something wents wrong");
          }
        });
      });
    });
  }
}
