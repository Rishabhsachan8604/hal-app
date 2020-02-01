import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
declare var $:any;

@Component({
  selector: 'app-add-ppc-brand',
  templateUrl: './add-ppc-brand.component.html',
  styleUrls: ['./add-ppc-brand.component.css']
})
export class AddPpcBrandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#addbrand').parsley();
  }
  ngAfterViewInit(){
    $(document).ready(function(){
      $('#addbrand').on('submit',function(e){
        e.preventDefault();
        $.ajax({
          type: 'POST',
          url: Utils.posturl('ppc')+'insert_brand',
          data:$("#addbrand").serialize(),
          headers: {
          },
          beforeSend: function () {
            $('.addbrand').attr("disabled", "disabled");
            $('.addbrand').html("Please Wait...");
          },
          success: function (msg) {
            console.log(msg);
            if(msg.status=="200"){
              $('.addbrand').attr("disabled", false);
              $('.addbrand').html("Save");
              $('#addbrand').trigger('reset');
              Utils.notification('Success',"Brand Added Successfully");
            }else if(msg.status=="409"){
              $('.addbrand').attr("disabled", false);
              $('.addbrand').html("Save");
              $('#addbrand').trigger('reset');
              Utils.notification('Success',"Already Inserted");
            }
            else{
              $('.addbrand').attr("disabled", false);
              $('.addbrand').html("Save");
              Utils.notification('Success',"Something Wents Wrong");
            }
          },
          error: function (msg) {
            $('.addbrand').attr("disabled", false);
            $('.addbrand').html("Save");
            $('#addbrand').trigger('reset');
            Utils.notification('Error',"Something wents wrong");
          }
        });
      });
    });
  }
}
