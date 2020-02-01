import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
declare var $:any;
@Component({
  selector: 'app-add-ppc-sub-group',
  templateUrl: './add-ppc-sub-group.component.html',
  styleUrls: ['./add-ppc-sub-group.component.css']
})
export class AddPpcSubGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Utils.get_all_groups("GROUP_PARENT_ID");
    $('#addsubgroup').parsley();
  }
  ngAfterViewInit(){
    $(document).ready(function(){
      $('#addsubgroup').on('submit',function(e){
        e.preventDefault();
        $.ajax({
          type: 'POST',
          url: Utils.posturl('ppc')+'insert_group',
          data:$("#addsubgroup").serialize(),
          headers: {
          },
          beforeSend: function () {
            $('.addsubgroup').attr("disabled", "disabled");
            $('.addsubgroup').html("Please Wait...");
          },
          success: function (msg) {
            if(msg.status=="200"){
              $('.addsubgroup').attr("disabled", false);
              $('.addsubgroup').html("Save");
              $('#addsubgroup').trigger('reset');
              Utils.notification('Success',"Sub Group Added Successfully");
              Utils.get_all_groups("GROUP_PARENT_ID");
            }else if(msg.status=="409"){
              $('.addsubgroup').attr("disabled", false);
              $('.addsubgroup').html("Save");
              $('#addsubgroup').trigger('reset');
              Utils.notification('Success',"Already Inserted");
              Utils.get_all_groups("GROUP_PARENT_ID");
            }
            else{
              $('.addsubgroup').attr("disabled", false);
              $('.addsubgroup').html("Save");
              Utils.notification('Success',"Something Wents Wrong");
            }
          },
          error: function (msg) {
            $('.addsubgroup').attr("disabled", false);
            $('.addsubgroup').html("Save");
            $('#addsubgroup').trigger('reset');
            Utils.notification('Error',"Something wents wrong");
          }
        });
      });
    });
  }
}
