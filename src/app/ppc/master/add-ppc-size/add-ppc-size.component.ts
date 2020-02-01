import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
declare var $:any;
@Component({
  selector: 'app-add-ppc-size',
  templateUrl: './add-ppc-size.component.html',
  styleUrls: ['./add-ppc-size.component.css']
})
export class AddPpcSizeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Utils.get_all_units('UNIT_ID');
    $('#addsize').parsley();
  }
  ngAfterViewInit(){
    $(document).ready(function(){
      $('#addsize').on('submit',function(e){
        e.preventDefault();
        $.ajax({
          type: 'POST',
          url: Utils.posturl('ppc')+'insert_size',
          data:$("#addsize").serialize(),
          headers: {
          },
          beforeSend: function () {
            $('.addsize').attr("disabled", "disabled");
            $('.addsize').html("Please Wait...");
          },
          success: function (msg) {
            if(msg.status=="200"){
              $('.addsize').attr("disabled", false);
              $('.addsize').html("Save");
              $('#addsize').trigger('reset');
              Utils.notification('Success',"Size Added Successfully");
            }else if(msg.status=="409"){
              $('.addsize').attr("disabled", false);
              $('.addsize').html("Save");
              $('#addsize').trigger('reset');
              Utils.notification('Success',"Already Inserted");
            }
            else{
              $('.addsize').attr("disabled", false);
              $('.addsize').html("Save");
              Utils.notification('Success',"Something Wents Wrong");
            }
          },
          error: function (msg) {
            $('.addsize').attr("disabled", false);
            $('.addsize').html("Save");
            $('#addsize').trigger('reset');
            Utils.notification('Error',"Something wents wrong");
          }
        });
      });
    });
  }
}
